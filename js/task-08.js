const formEl = document.querySelector(".login-form");
console.log(formEl);

formEl.addEventListener("submit", onSubmitBntPush);

function onSubmitBntPush(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === "" || password === "") {
    alert("Все поля должны быть заполнены");
  }

  const formInfomation = {
    mail,
    password,
  };
  console.log(formInfomation);

  formEl.reset();
}
