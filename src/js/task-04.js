let counterValue = 0;

const value = document.querySelector("#value")

const decrementValue = counter.querySelector("button[data-action = 'decrement']");
const incrementValue = counter.querySelector("button[data-action = 'increment']");


function decrement() {
    counterValue -= 1
    value.textContent = counterValue
}
function increment() {
    counterValue += 1
    value.textContent = counterValue
}

decrementValue.addEventListener('click', decrement);
incrementValue.addEventListener('click', increment);
    


