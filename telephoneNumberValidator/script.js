const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const input = document.getElementById("user-input");
const output = document.getElementById("results-div");
const form = document.getElementById("phone-form");

function appendResult(text) {
  const result = document.createElement("p");
  result.innerText = text;
  output.appendChild(result);
}

function isValid(tel) {
  const telReg = /^1?\s?(?:\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;
  return telReg.test(tel);
}

const handleClick = () => {
  if (input.value === "") {
    alert("Please provide a phone number");
  }
  if (!isValid(input.value)) {
    appendResult("Invalid US number: " + input.value);
    return;
  }
  appendResult("Valid US number: " + input.value);
};

form.addEventListener("submit", (e) => e.preventDefault());
check.addEventListener("click", handleClick);
clear.addEventListener("click", () => {
  output.innerHTML = "";
  input.value = "";
});
