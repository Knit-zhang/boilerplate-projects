const btn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const form = document.getElementsByTagName("form")[0];
const result = document.getElementById("result");

function isValid(element) {
  return /[a-zA-Z0-9]/g.test(element);
}

function isPalindrome(str) {
  const arrStr = str
    .trim()
    .split("")
    .filter(isValid)
    .map((ele) => ele.toLowerCase());
  const reversed = arrStr.toReversed();
  console.log(arrStr);
  console.log(reversed);
  let isTrue = true;
  reversed.every((c, i) => {
    if (c !== arrStr[i]) {
      console.log(`${str} is not a palindrome`);
      isTrue = false;
      return false;
    }
    return true;
  });
  if (isTrue) {
    console.log(`${str} is a palindrome`);
  }
  return isTrue;
}

function handleClick() {
  let text = input.value;
  if (text === "") {
    alert("Please input a value");
    return;
  }
  const resultText = `${text} is ${
    isPalindrome(text) ? "" : "not"
  } a palindrome `;
  result.innerText = resultText;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
btn.addEventListener("click", handleClick);
