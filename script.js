// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomNumber(password_length) {
// Establishes my password length
 var rand = Math.random()
  return Math.floor(rand*password_length)
}

function getOption(list) {
console.log (randomNumber(list.length))
  return list[randomNumber(list.length)]

} 

function generatePassword() {
// generate window prompts for recieving inputs
  while  (true) {

  var input  = window.prompt("NUMBER OF CHARACTERS?")
  if (input === null) {
    return
  }

  var length = parseInt(input)
// confirmation of applicaple inputs
  if (isNaN(length)) {
    window.alert("NOT A NUMBER")
}    else if (length < 8 || length > 128) {
    window.alert("MUST BE BETWEEN 8-128 CHARACTERS")
}    else {
    break
    } 

  }
// pushing the window to confirm parameters for generating password.
  var symbols = window.confirm("INCLUDE SYMBOLS?")
  var numbers = window.confirm("INCLUDE NUMBERS?")
  var uppercase = window.confirm("INCLUDE UPPERCASE?")
  var lowercase = window.confirm("INCLUDE LOWERCASE?")  
//available charaters to select from
  var symbolOption = ["!","@","#","$","%","^","&","*","+"]
  var numberOption = ["0","1","2","3","4","5","6","7","8","9"]
  var lowercaseOption = ["a","b","c","d"]
  var uppercaseOption = []
//  Creating for loop to collect the data and push the requested characters. (during a debug session with my tutor
// he discussed the .concat option of breaking down my arrays into a single array to then have selected the characters from that array)
  var option = []

  for (var i = 0; i < lowercaseOption.length; i++) {
    uppercaseOption[i] = lowercaseOption[i].toUpperCase()
}

    if (symbols === true) {
   
    option=option.concat(symbolOption)
    }

    if (numbers === true) {
      option=option.concat(numberOption)
    }

    if (lowercase === true) {
      option=option.concat(lowercaseOption)
    }

    if (uppercase === true) {
      option=option.concat(uppercaseOption)
    }

    if (option.length === 0) {
      option=option.concat(lowercaseOption)
    }

    console.log(option)
    console.log(typeof option)

  var generatedPassword = ""
// now returning the randomly generated characters conforming to the paramaters the user has selected.
  for (var i =0; i < length; i++) {
    var passwordOption = getOption(option)
    console.log(passwordOption)
    
   generatedPassword += passwordOption
}

return generatedPassword
}  
// Unchanged code below.
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)