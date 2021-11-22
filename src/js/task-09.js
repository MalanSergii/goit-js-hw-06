const buttonEl = document.querySelector(".change-color");
const colorDescription = document.querySelector(".color");
const body = document.querySelector("body");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 
}

function onBodyBGChange() {
  body.style.background = getRandomHexColor();
  colorDescription.textContent = body.style.background;
}


buttonEl.addEventListener("click", onBodyBGChange);
