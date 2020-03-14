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
var numbers = confirm('Would you like numbers in your password?');
if (numbers === true) {
  characterSet = numberSet + characterSet;
}
var upperCase = confirm('Would you like uppercase letters in your password?');
if (upperCase === true) {
  characterSet = upperCaseCharacters + characterSet;
}

var lowerCase = confirm('Would you like lowercase letters in your password?');
if (lowerCase === true) {
  characterSet = lowerCaseCharacters + characterSet;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
