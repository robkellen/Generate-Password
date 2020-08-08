# Generate-Password

This application is designed to produce a more secure, randomly generated password for the user.  The desired password can be between 8 - 128 characters, and can include symbols, numbers, lowercase letters, and uppercase letters based on the user's preferences.   

## Getting Started

This code can be run through your computers terminal.  It consists of a HTML file, a CSS file, and a JS file.  Once you have accessed the HTML file simply load it into your default browser and the application will be ready to run. 

## Running the Application

The application is started by clicking on the "Generate Password" button.  The first prompt asks the user to input a value for the length of the password they want.  After the user enters their desired password length they are prompted to select the characters they desire:

  - Numbers
  - Special characters
  - Lowercase letters
  - Uppercase letters

After selecting the desired characters a password is generated to the text box on the webpage. 

## Running the Tests

If the user begins by entering a desired password length that is less than 8 or more than 128 they will be alerted that they must input a value > 8 or < 128.  They will then be prompted again to input a desired password length.  

If the user then presses 'Cancel' instead of 'Enter' for each option for numeric, special, lowercase, or uppercase characters they are alerted that at least one type of character must be chosen.  They are then informed they need to refresh the page and start from the beginning.

## Authors

Rob Kellen

## Acknowledgments

A tip of the hat to Tucker Beauchamp for late night heroics and invaluable assistance.