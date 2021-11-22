const form = document.querySelector(".login-form");
const mailEl = form.querySelector('[name="email"]');
const passwordEl = form.querySelector('[name="password"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (mailEl.value == "" || passwordEl.value == "") {
    alert("все поля должны быть заполнены")
    return;
  }

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  const data = { email, password };
  console.log(data);

  // const data = new FormData(event.target);
  // data.forEach((name, value) => {
  //   console.log(value, name);
  // })

  // const {
  //   elements: { email, password }
  // } = event.target;

  // console.log(`email: ${email.value}, password: ${password.value}`);
  
  form.reset();
})

