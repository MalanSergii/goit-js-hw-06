const textInput = document.querySelector("#validation-input");

textInput.addEventListener('blur', inputLength);

function inputLength() {
    if (textInput.dataset.length == textInput.value.length) {
        textInput.classList.add("valid")
        textInput.classList.remove("invalid")
    } else {
        textInput.classList.add("invalid")
    }
}