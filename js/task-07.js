const scrollRange = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

scrollRange.addEventListener("input", fontSizeRate);

function fontSizeRate(event) {
    text.style.fontSize = `${event.target.value}px`;
}
















