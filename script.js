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
  //if user enters length of password less than 8 or greater than 128 they are prompted to restart and submit new value within parameters.
  while (length < "8" || length > "128") {
    alert("You must enter a value between 8 and 128.");
    length = parseInt(
      prompt(
        "How many characters would you like your password to be? (min = 8; max = 128)"
      )
    );
  }
//Asking user to confirm which types of characters they would like to have in their password
  special = confirm("Would you like to use special characters?");
  numeric = confirm("Would you like to use numeric characters?");
  lowercase = confirm("Would you like to use lowercase characters?");
  uppercase = confirm("Would you like to use uppercase characters?");
//declaring variables for password
  var specialChar = "!@#$%&?";
  var numericChar = "0123456789";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWRXYZ";
//to generate password with characters based on user input
  var password = "";
  for (let i = 0; i < length; i++) {
    if (special) {
      passwordCharacters += specialChar;
    }

    if (numeric) {
      passwordCharacters += numericChar;
    }

    if (lowercase) {
      passwordCharacters += lowercaseChar;
    }

    if (uppercase) {
      passwordCharacters += uppercaseChar;
    }
//if user doesn't select any character types they are alterted to select at least one.  They will need to refresh the page to start over.
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
    //Password generated
    return password;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
