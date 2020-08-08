// Assignment Code
var generateBtn = document.querySelector("#generate");

// When the button is clicked
generateBtn.addEventListener("click", writePassword);

// declaring variables
var special = "!@#$%&?";
var numeric = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWRXYZ";

// to generate password
function generatePassword() {
  var passwordCharacters = "";
  var password = "";
  var length = "";
//Prompting user to enter desired password length
  length = parseInt(
    prompt(
      "How many characters would you like your password to be? (min = 8; max = 128)"
    )
  );
 debugger
  while (length < "8" || length > "128") {
    alert("You must enter a value between 8 and 128.");
    length = parseInt(
      prompt(
        "How many characters would you like your password to be? (min = 8; max = 128)"
      )
    );
  }

  special = confirm("Would you like to use special characters?");
  numeric = confirm("Would you like to use numeric characters?");
  lowercase = confirm("Would you like to use lowercase characters?");
  uppercase = confirm("Would you like to use uppercase characters?");

  var special = "!@#$%&?";
  var numeric = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWRXYZ";

  var password = "";
  for (let i = 0; i < length; i++) {
    if (special, true) {
      passwordCharacters += special;
    }

    if (numeric, true) {
      passwordCharacters += numeric;
    }

    if (lowercase, true) {
      passwordCharacters += lowercase;
    }

    if (uppercase, true) {
      passwordCharacters += uppercase;
    }

    if (
      special === false &&
      numeric === false &&
      uppercase === false &&
      lowercase === false
    ) {
      alert(
        "You must choose at least one parameter.  Please refresh and try again."
      );
    } else {
      for (let i = 0; i < length; i++) {
        password +=
          passwordCharacters[
            Math.floor(Math.random() * passwordCharacters.length)
          ];
      }
    }

    return password;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}