// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

function generatePassword() {

  var special = "!@#$%&?";
  var numeric = "123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercse = lowercase.toUpperCase();

  var options = {};

  options.length = parseInt(
    prompt("How many characters would you like your password to be?")
  );

  if(options.length < 8 || options.length > 128){
    alert("Unavailable Password Length, please choose number between 8 and 128");
    return "Invalid Paramaters - Please   Start Over";
  }

  options.special = confirm("Would you like to use special characters?");
  options.numeric = confirm("Would you like to use numeric characters?");
  options.uppercase = confirm("Would you like to use uppercase letters?");
  options.lowercase = confirm("Would you like to use lowercase letters?");
}

for(var i = 0; i < options.length; i++) {
  if (options.special) {

  }

  if (options.numeric) {

  }

  if (options.uppercase) {

  }

  if (options.lowercase) {

  }
}

function getRandomValue(str) {
  return str[Math.floor(Math.random() * str.length)];
}

// to randomize generated password further
function shuffle() {

}

return password;  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
