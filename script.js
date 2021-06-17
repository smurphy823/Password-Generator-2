var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var getRandomUpper = [];

  for (var i = 0; i < 26; i++) {
    var x = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

    getRandomUpper.push(x);
  }

  var getRandomLower = [];

  for (var i = 0; i < 26; i++) {
    var x = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

    getRandomLower.push(x);
  }

  var getRandomNumber = [];

  for (var i = 0; i < 10; i++) {
    var x = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

    getRandomNumber.push(x);
  }

  var specialChar = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "-",
    "=",
    "{",
    "}",
    "|",
    "[",
    "]",
    ";",
    "<",
    ">",
    "?",
    "/",
  ];

  var getRandomSpecialChar = [];

  for (var i = 0; i < 25; i++) {
    var x = specialChar[Math.floor(Math.random() * specialChar.length)];

    getRandomSpecialChar.push(x);
  }

  var validUserInput = [];

  var userInput = prompt("Choose your password length");

  var isCancellation =
    [null, undefined].filter(function (x) {
      return userInput == x;
    }).length > 0;

  if (isCancellation) {
    return;
  }

  var isPromptingAgain = userInput.length == 0;

  if (isPromptingAgain) {
    alert("Please enter valid length range between 8 and 128");

    generatePassword();

    return;
  }

  if (Number.isNaN(parsed) || userInput < 8 || userInput > 128) {
    alert("Please enter valid length range between 8 and 128");

    return (myPassword = "");
  }

  var parsed = parseInt(userInput);

  var upper = confirm("Does your password includes upppercase letters ?");

  var lower = confirm("Does your password includes lowecase letters ?");

  var numbers = confirm("Does your password includes numbers letters ?");

  var special = confirm("Does your password includes special characters ?");

  var typecount = lower + upper + numbers + special;

  var arr = [{ upper }, { lower }, { numbers }, { special }].filter(
    (item) => Object.values(item)[0]
  );

  console.log(typecount);

  console.log(arr);

  var myPassword = "";

  for (var i = 0; i < userInput; i++) {
    var index = Math.floor(Math.random() * validUserInput.length);

    myPassword += validUserInput[index] + "";
  }

  return myPassword;
}

function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
