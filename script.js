// Assignment Code
var generateBtn = document.querySelector("#generate");
// -----------------------------------------------------------------------------------------------------

// Creating a function to generate a password and then adding variables within function for passwords
function generatePassword() {
  var numberSet = '0123456789';
  var specialSymbols = '!@#$%^&*?';
  var upperCaseAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseAlpha = 'abcdefghijklmnopqrstuvwxyz';
  var characterSet = '';
  var password = '';
  // ----------------------------------------------------------------------------------------------------------
  // Creating Password lengths
  var choices = prompt("How many characters would you like in your password? :D");
  parseInt(choices, 10)
  if (choices < 8 || choices > 128) {
    alert("Password length should be 8-128 characters. Please try again. :(");
    prompt("How many characters do you want in your password?");
  }

  // ----------------------------------------------------------------------------------------------------------
  // Adding Conditional Statements + confirms
  // Confirm boxes for character types used in password
  var numbers = confirm('Would you like numbers in your password?');
  if (numbers === true) {
    characterSet = numberSet + characterSet;
  }
  var special = confirm('Would you like special characters in your password?');
  if (special === true) {
    characterSet = specialSymbols + characterSet;
  }

  var upperCase = confirm('Would you like uppercase letters in your password?');
  if (upperCase === true) {
    characterSet = upperCaseAlpha + characterSet;
  }

  var lowerCase = confirm('Would you like lowercase letters in your password?');
  if (lowerCase === true) {
    characterSet = lowerCaseAlpha + characterSet;
  }
  // ---------------------------------------------------------------------------------------------------------
  // Using a forloop and math.floor to create random passwords
  for (var i = 0; i < choices; i++) {
    var password = password + characterSet[Math.floor(Math.random() * characterSet.length)];
  }
  return password;
}

// ------------------------------------------------------------------------------------------------------------
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

