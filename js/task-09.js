function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
console.log(buttonChangeColor);

const spanColor = document.querySelector(".color");
console.log(spanColor);

const body = document.body;
console.log(body);

buttonChangeColor.addEventListener("click", onButtonClick);

function onButtonClick() {
  spanColor.textContent = getRandomHexColor();
  body.setAttribute("style", `background: ${getRandomHexColor()}`);
}
