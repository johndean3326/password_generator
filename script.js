// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var input  = window.prompt("Number of characters?")
  var length = parseInt(input)

  if (isNaN(length)) {
    window.alert("NOT A NUMBER")
    return
  }

  if (length < 8 || length > 128) {
    window.alert("MUST BE BETWEEN 8-128 CHARACTERS")
    return
  }
  var symbols = window.confirm("INCLUDE SYMBOLS?")
  var numbers = window.confirm("INCLUDE NUMBERS?")
  var uppercase = window.confirm("INCLUDE UPPERCASE?")
  var lowercase = window.confirm("INCLUDE LOWERCASE?")  

  var symbolOption = ["!, @, #, $, %, ^, &, *, +"]
  var numberOption = ["0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"]
  var lowercaseOption = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"]
  var uppercaseOption = []

  for (var i = 0; i < lowercaseOption.length; i++)
    uppercaseOption[i] = lowercaseOption[i].toUpperCase()

    if (symbols === true) {
     option.push(symbolOption)
    }

    if (numbers === true) {
     option.push(numberOption)
    }

    if (lowercase === true) {
     option.push(lowercaseOption)
    }

    if (uppercase === true) {
      option.push(uppercaseOption)
    }


  }
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
