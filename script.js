// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// WHEN prompted for the length of the password
var options = {
  special: "!@#$%&?",
  numeric: "0123456789",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "abcdefghijklmnopqrstuvwxyz".toUpperCase(),
};

function generatePassword() {
  debugger
  var passwordCharacters = {},

    length = parseInt(
      prompt(
        "How many characters would you like your password to be? (min = 8; max = 128)"
      )
    );
  console.log(length);
  while (length < "8" || length > "128") {
    alert("You must enter a value between 8 and 128.");
    length = parseInt(
      prompt(
        "How many characters would you like your password to be? (min = 8; max = 128)"
      )
    );
  }

  special = confirm("Would you like to use special characters?");
  if (special) {
    passwordCharacters += special;
  }

  numeric = confirm("Would you like to use numeric characters?");
  if (numeric) {
    passwordCharacters += numeric;
  }

  lowercase = confirm("Would you like to use lowercase characters?");
  if (lowercase) {
    passwordCharacters += lowercase;
  }

  uppercase = confirm("Would you like to use uppercase characters?");
  if (uppercase) {
    passwordCharacters += uppercase;
  }
debugger
  var password = {};
  for (let i = 0; i < length; i++) {
    password +=
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  while (
    options.special === false &&
    options.numeric === false &&
    options.uppercase === false &&
    options.lowercase === false
  ) {
    alert("You must choose at least one parameter");
    options.special = confirm("Would you like to use special characters?");
    options.numeric = confirm("Would you like to use numeric characters?");
    options.uppercase = confirm("Would you like to use uppercase characters?");
    options.lowercase = confirm("Would you like to use lowercase characters?");
  }


  for (let i = 0; i < length; i++) {
    password +=
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }

  return password;
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
