const inputEl = document.querySelector("#name-input");
console.log(inputEl);

const sayHi = document.querySelector("#name-output");
console.log(sayHi);

inputEl.addEventListener("input", (event) => {
  sayHi.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    sayHi.textContent = "Anonymous";
  }
  console.log(sayHi.textContent);
});
