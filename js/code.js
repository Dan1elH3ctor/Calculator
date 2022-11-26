// text field takes input of buttons
let textInput = document.querySelector (".calculator-screen");
let decimal = true
function deci(numPad){
    if (decimal==true) {
        textInput.value = textInput.value + numPad;
        decimal = false;
    }
}

let toggleDecimal = ()=>{
    decimal=true;
}

// button input to text field
function calculations(numPad) {
    textInput.value = textInput.value + numPad;
    decimal = true;
}

function equalResults() {
    textInput.value = eval(textInput.value)
}

function clr() {
    textInput.value = "";
}

function backspace() {
    textInput.value = textInput.value.slice(0,-1);
}
