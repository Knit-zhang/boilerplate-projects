const submit = document.getElementById("convert-btn");
const input = document.getElementById("number");
const output = document.getElementById("output");
const form = document.getElementById("number-form");

const roman = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

function removeDisappear() {
  const disappear = output.classList.contains("disappear");
  if (disappear) {
    output.classList.remove("disappear");
  }
}

function converter(number) {
  let result = "";
  for (const [symbol, key] of roman) {
    while (number >= key) {
      result += symbol;
      number -= key;
    }
  }
  return result;
}

function changeOutput(result) {
  output.innerText = result;
  removeDisappear();
}

function handleClick() {
  const number = input.value;
  let result = converter(number);
  if (number < 0) {
    changeOutput("Please enter a number greater than or equal to 1");
    return;
  }
  if (number > 3999) {
    changeOutput("Please enter a number less than or equal to 3999");
    return;
  }
  if (!/\d/.test(Number(number)) || number === "") {
    changeOutput("Please enter a valid number");
    return;
  }
  changeOutput(result);
  removeDisappear();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submit.addEventListener("click", handleClick);
