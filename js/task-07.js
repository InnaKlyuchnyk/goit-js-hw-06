const inputEl = document.querySelector("#font-size-control");
console.log(inputEl);

const spanEl = document.querySelector("#text");
console.log(spanEl);

inputEl.addEventListener("input", (event) => {
  spanEl.setAttribute("style", `font-size: ${event.currentTarget.value}px`);
});
