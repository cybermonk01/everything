const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

let pwd = "";

const getRandomCharFromString = (s) =>
  s.charAt(Math.floor(Math.random() * s.length));

// copy password
clipboardEl.addEventListener("click", () => {
  var copyTextArea = document.querySelector("#result");
  copyTextArea.focus();
  copyTextArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Copying text command was " + msg);
  } catch (err) {
    console.log("Oops, unable to copy");
  }
});

// to generate password
generateEl.addEventListener("click", generatePassword);

function generatePassword(lower, upper, number, symbol, length) {
  for (let i = pwd.length; i < length; i++) {
    pwd += lower() + upper() + number() + symbol();
  }
  console.log(pwd);
  return pwd;
}

function getRandomLower() {
  let Lower = "qwertyuiopasdfghjklzxcvbnm";
  let randLo = getRandomCharFromString(Lower);
  console.log(randLo);
}

function getRandomUpper() {
  let Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randUp = getRandomCharFromString(Upper);

  console.log(randUp);
}

function getRandomNumber() {
  let Number = "1234567890";
  let randNum = getRandomCharFromString(Number);
  console.log(randNum);
}

function getRandomSymbol() {
  let Symbol = "!@#$%^&*";
  let randSym = getRandomCharFromString(Symbol);
  console.log(randSym);
}

getRandomUpper();
getRandomLower();
getRandomNumber();
getRandomSymbol();
