const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const list = document.querySelector(".gallery");

// images.forEach(image => {
//   list.insertAdjacentHTML("afterbegin",
//   `<li><img src = "${image.url}" alt="${image.alt}" width = "450"></li>`)
// });


const galleryEl = document.querySelector(".gallery");

images.forEach(element => {
  const galleryElItem = document.createElement("li");
  galleryEl.append(galleryElItem);
  galleryElItem.insertAdjacentHTML("afterbegin", `<img src="${element.url}" alt=${element.alt} width=500>`)
});