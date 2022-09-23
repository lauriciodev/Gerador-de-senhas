
//selelção de elementos
const gerador = document.getElementById("btn__gerador");
const senha = document.getElementById("pass");
const senhaCont = document.querySelector(".pass__generated")
const btnCopy = document.getElementById("btn__copy");


//funções
//letras,numeros e símbolos

const getLettersLowCase  = () =>{
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
const getLettersUperCase  = () =>{
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


const getNumber = () =>{
  return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () =>{
  const symbol = "(){}[]=<>/.,!@#$%&*-+"
return symbol[Math.floor(Math.random() * symbol.length )];
}


const showPassword = (letras,letrasAlt,numeros,simbolos)=> {
let pass = "";

const passWord = 10;

const generator = [
  letras,
  letrasAlt,
  numeros,
  simbolos
]

for (i = 0; i < passWord; i = i + 4){
  generator.forEach(() =>{
    const valueRandom = 
    generator[Math.floor(Math.random() * generator.length)]();

    pass += valueRandom;
  })
}

pass = pass.slice(0, passWord)

senhaCont.style.display = "block"
senha.value = pass;
}

btnCopy.addEventListener("click", () => {
senha.select();
senha.setSelectionRange(0,99999);
document.execCommand("copy");
btnCopy.style.backgroundColor = "green";
btnCopy.innerHTML = "Senha Copiada!"
})



//eventos 


gerador.addEventListener("click", () => {
  showPassword(getLettersLowCase,
    getLettersUperCase,
    getNumber,
    getSymbol)

});