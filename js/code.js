// text field takes input of buttons
let textInput = document.querySelector (".calculator-screen");

// button input to text field
function calculations(numPad) {
    textInput.value = textInput.value + numPad;
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