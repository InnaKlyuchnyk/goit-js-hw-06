let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn);

const valueEl = document.querySelector("#value");
console.log(valueEl);

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  decrementBtn.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  incrementBtn.textContent = counterValue;
});
