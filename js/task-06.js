const inputEl = document.querySelector("#validation-input");
console.log("inputEl");

const validNumber = parseInt(inputEl.dataset.length);
console.log(validNumber);

const onValidSimbols = (event) => {
  if (event.currentTarget.value.length === validNumber) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.replace("invalid", "valid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.replace("valid", "invalid");
  }
};

inputEl.addEventListener("blur", onValidSimbols);
