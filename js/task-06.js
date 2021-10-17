const inputEl = document.querySelector("#validation-input");

const onValidSimbols = (event) => {
  if (event.currentTarget.value.length === 6) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.replace("invalid", "valid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.replace("valid", "invalid");
  }
};

inputEl.addEventListener("blur", onValidSimbols);
