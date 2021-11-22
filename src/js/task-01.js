const categoriesEl = document.querySelector("#categories");
const itemsEl = categoriesEl.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.children.length}`);

itemsEl.forEach((i) => {
    console.log(`Category: ${i.firstElementChild.textContent}`);
    console.log(`Elements: ${i.lastElementChild.children.length}`);
})