const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener('input', event => {
    if (textInput.value != 0) {
        textOutput.textContent = event.target.value;
    } else {
        textOutput.textContent = "Anonymous";
    }
    
});

