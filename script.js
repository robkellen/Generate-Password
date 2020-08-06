
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
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

function generatePassword() {
  var special = "!@#$%&?";
  var numeric = "123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();

  var options = {};

  var length = parseInt(
    prompt("How many characters would you like your password to be? (min = 8; max = 128)")
    );
    
  if (options.length < 8 || options.length > 128) {
      alert("Unavailable Password Length, please choose number between 8 and 128");
  };

  options.special = confirm("Would you like to use special characters?");
  options.numeric = confirm("Would you like to use numeric characters?");
  options.uppercase = confirm("Would you like to use uppercase characters?");
  options.lowercase = confirm("Would you like to use lowercase characters?");
}

for (var i = 0; i < options.length; i++) {
  if (options.special) {
    password += getRandomValue(a,b);
  }

  if (options.numeric) {
    password += getRandomValue(x,y);
  }

  if (options.uppercase) {
    password += getRandomValue(d,f);
  }

  if (options.lowercase) {
    password += getRandomValue(c,r);
  }

  return password.substring(0, options.length);
}

function getRandomValue(str) {
  return str[Math.floor(Math.random() * str.length)];
}

return password;
// Add event listener to generate button
