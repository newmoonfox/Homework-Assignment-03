// Assignment Code
var generateBtn = document.querySelector("#generate");
// -----------------------------------------------------------------------------------
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Creating a function to generate a password and then adding variables within function for passwords
function generatePassword() {
  var numberSet = '0123456789';
  var specialCharacters = '!@#$%^&*?';
  var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var characterSet = '';
  var password = '';
}
// Adding Conditional Statements + confirms
// Confirm boxes for character types used in password
var numberSet = confirm('Would you like numbers in your password?');
if (numberSet === true) {
  characterSet = numberSet + characterSet;
}
var specialCharacters = confirm('Would you like special characters in your passwork?');
if (specialCharacters === true) {
  characterSet = specialCharacters + characterSet;
}

var upperCaseCharacters = confirm('Would you like uppercase letters in your password?');
if (upperCaseCharacters === true) {
  characterSet = upperCaseCharacters + characterSet;
}

var lowerCaseCharacters = confirm('Would you like lowercase letters in your password?');
if (lowerCaseCharacters === true) {
  characterSet = lowerCaseCharacters + characterSet;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
