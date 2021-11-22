function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createDivs() {
  for (let i = 0; i < userInput.value; i += 1) {
    const box = document.createElement('div');  
    box.style.width = `${startSize+i*10}px`
    box.style.height = `${startSize+i*10}px`
    box.style.background = getRandomHexColor();
    mainBox.append(box);
  }
}


const userInput = document.querySelector("input");
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const mainBox = document.getElementById("boxes");
const startSize = 30;


btnCreate.addEventListener("click", createDivs);

btnDestroy.addEventListener("click", () => {
  mainBox.innerHTML = "";
  userInput.value = "";
});













