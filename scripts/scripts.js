/* Manipulación Definitiva de Caracteres Javascript */

// Declaracion de variables;

const inputPhrase = document.getElementById("text-write");
const icoButton = document.getElementById("text-ico");
const elementCopied = document.getElementById("element-copied")
const copyButtons = document.querySelectorAll(".copy-button")
const lengthInput = document.getElementById("length");
const upsideDownInput = document.getElementById("upside-down");
const noFirstLetterInput = document.getElementById("no-first-letter");
const noLastLetterInput = document.getElementById("no-last-letter");
const noWhiteSpacesInput = document.getElementById("no-white-spaces");
const upperCaseInput = document.getElementById("uppercase");
const lowerCaseInput = document.getElementById("lowercase");
const capitalizeInput = document.getElementById("capitalize");
const separeByHyphenInput = document.getElementById("separe-by-hyphen");
const noLastFirstLetterInput = document.getElementById("no-last-first-letter");
const unicodeInput = document.getElementById("unicode");

// Funciones para manipular las cadenas de texto


// Numero de Caracterés
function returnCaracteres(cadena){
    return cadena.length;
}
// Dado Vuelta
function upsideDown(cadena){
    let numeroDeCaracteres = cadena.length;
    cadenaDadaVuelta = "";
    while (numeroDeCaracteres >= 0) {
        cadenaDadaVuelta = cadenaDadaVuelta + cadena.charAt(numeroDeCaracteres);
        numeroDeCaracteres--
    }
    return cadenaDadaVuelta;
}
// Sin la primera letra
function withouthFirstLetter(cadena) {
    return cadena.substring(1)
}
// Sin la última letra
function withouthLastLetter(cadena){
    return cadena.substring(0, (cadena.length - 1))
}
// Sin los espacios del principio y del final
function withouthWhiteSpaces(cadena){
    return cadena.trim()
}
// Mayusculas
function upperCase(cadena){
    return cadena.toUpperCase()
}
// Minúsculas
function lowerCase(cadena){
    return cadena.toLowerCase();
}
// Capitalizado
function capitalize(cadena){
    let noUpperWords = cadena.split(" ");
    let upperWords = [];
    noUpperWords.forEach(word => {
        upperWord = word.charAt(0).toUpperCase() + word.substring(1);
        upperWords.push(upperWord)
    });
    upperPhrase = upperWords.join(" ")
    return upperPhrase;
}
function separeByHyphen(cadena){
    return cadena.replace(/ /g, "-");
}
function withouthFirstandLastLetter(cadena){
    return cadena.substring(1, cadena.length - 1)
}
function unicode(cadena){
    let unicodes = [];
    for (let i = 0; i < cadena.length; i++){
        unicodes.push(cadena.charCodeAt(i));;
    }
    return unicodes.join("")
}

function updateInputs(cadena){
    lengthInput.innerHTML = returnCaracteres(cadena);
    upsideDownInput.innerHTML = upsideDown(cadena);
    noFirstLetterInput.innerHTML = withouthFirstLetter(cadena);
    noLastLetterInput.innerHTML = withouthLastLetter(cadena);
    noWhiteSpacesInput.innerHTML = withouthWhiteSpaces(cadena);
    upperCaseInput.innerHTML = upperCase(cadena);
    lowerCaseInput.innerHTML = lowerCase(cadena);
    capitalizeInput.innerHTML = capitalize(cadena);
    separeByHyphenInput.innerHTML = separeByHyphen(cadena);
    noLastFirstLetterInput.innerHTML = withouthFirstandLastLetter(cadena);
    unicodeInput.innerHTML = unicode(cadena)
}

// Flujo del programa

lengthInput.innerHTML = returnCaracteres("String de ejemplo")
upsideDownInput.innerHTML = upsideDown("String de ejemplo")
noFirstLetterInput.innerHTML = withouthFirstLetter("String de ejemplo")
noLastLetterInput.innerHTML = withouthLastLetter("String de ejemplo")
noWhiteSpacesInput.innerHTML = withouthWhiteSpaces("String de ejemplo")
upperCaseInput.innerHTML = upperCase("String de ejemplo");
lowerCaseInput.innerHTML = lowerCase("String de ejemplo")
capitalizeInput.innerHTML = capitalize("String de ejemplo")
separeByHyphenInput.innerHTML = separeByHyphen("String de ejemplo")
noLastFirstLetterInput.innerHTML = withouthFirstandLastLetter("String de Ejemplo")
unicodeInput.innerHTML = unicode("String de ejemplo")

icoButton.addEventListener("click", () =>{
    updateInputs(inputPhrase.value)
})

copyButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        copiarAlPortapapeles(e.target.previousElementSibling.id)
        elementCopied.style.bottom = "20px";
        setTimeout(() =>{
            elementCopied.style.bottom = "-200px"
        },1000)
    })
})

function copiarAlPortapapeles(id_elemento) {

    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
  
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  
    // Añade el campo a la página
    document.body.appendChild(aux);
  
    // Selecciona el contenido del campo
    aux.select();
  
    // Copia el texto seleccionado
    document.execCommand("copy");
  
    // Elimina el campo de la página
    document.body.removeChild(aux);
}