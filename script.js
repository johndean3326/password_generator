// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomNumber(min, max) {
 if (!max) {
  max = min
  min = 0
 }
 var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getOption(list) {
  return list[randomNumber(list.length)]

} 

function generatePassword() {

  while  (true) {

  var input  = window.prompt("NUMBER OF CHARACTERS?")
  if (input === null) {
    return
  }

  var length = parseInt(input)

  if (isNaN(length)) {
    window.alert("NOT A NUMBER")
}    else if (length < 8 || length > 128) {
    window.alert("MUST BE BETWEEN 8-128 CHARACTERS")
}    else {
    break
    } 

  }

  var symbols = window.confirm("INCLUDE SYMBOLS?")
  var numbers = window.confirm("INCLUDE NUMBERS?")
  var uppercase = window.confirm("INCLUDE UPPERCASE?")
  var lowercase = window.confirm("INCLUDE LOWERCASE?")  

  var symbolOption = ["!, @, #, $, %, ^, &, *, +"]
  var numberOption = ["0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"]
  var lowercaseOption = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"]
  var uppercaseOption = []

  var option = []

  for (var i = 0; i < lowercaseOption.length; i++) {
    uppercaseOption[i] = lowercaseOption[i].toUpperCase()
}

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

    if (option.length === 0) {
    option.push(lowercaseOption)
    }

    console.log(option)

  var generatedPassword = ""

  for (var i =0; i < length; i++) {
    var passwordOption = getOption(option)
    var passwordChar = getOption(passwordOption)
  generatedPassword += passwordChar  
}

return generatedPassword
}  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)