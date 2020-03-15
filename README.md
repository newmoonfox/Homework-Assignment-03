# Homework-Assignment-03
JavaScript Password Generator Assignment.
Launching assignment: 
 Copying JS, CSS, and HTML files from homework folder (via student facing repository to my homework repository on github)

Executing assignment:
1. I first figured out which variables that were needed to create permeations of passwords which included: numbers, lower and upper case characters, and special characters. Then listed the variables accordingly within the function (generatePassword). The variables were needed in order to figure out which questions should be prompted when the user clicks the “generate password” button.

2. The assignment requires that the user must enter a password between 8-128 characters long. 
		* So the first question that was prompted was, “How many characters would you like in your password?” When the password is not between 8-128 characters, the user is then alerted with “Password length should be between 8-128 characters! Please try again. :(“  
		* I used a parseInt function and supplied the radix with a baseline of 10. Code line #16 —>  parseInt(Choices, 10).
 
3. For the user to have more choices for their generated password, I repeated the (if) statements and (confirms) for the rest of the variables: lowerCaseAlpha, upperCaseAlpha, specialSymbols, and numberSet.

4. I used a for loop (to avoid running the same code over again) and math.floor to create the permeations of passwords which depended on the variables of the password
