## Password Generator

These are the directions given:
- AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

As a result the password generator will have the follwing attributes:
- WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
- WHEN prompted for password criteria
THEN I select which criteria to include in the password
- WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
- WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
- WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
- WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Starter Code 

- Starter code included HTML and CSS files that, once linked, created the style and content of the generator. It also included a general JavaScript outline.
- The CSS and JavaScript files had to be linked to the HTML with the new location for this repository.
- Initial pseudocode was written in the JavaScript file to map out the functions necessary to complete this challenge. See Below. 

<img src="./assets/Images/starter-js.png" alt="Psuedocoding for js" width="300" height="auto">

## JavaScript 

- JavaScript functions were written to complete this task. An overall function of generatePassword had functions built into it to ensure the userinput had the correct qualifications. This made sure number entered was within the parameter if 8-128. Then the user was prompted if they would like lowercase letters, uppercase letters, symbols and/or numbers. 
- These prompted characters were stored in variables outside of the function to give it complete global scope. 
- Once confrimed with the user, the corresponding characters were pushed to an empty array. 
- This array, passwaordArray, was then randomized with a if loop within the userinput number for length. 
- This created a bug because the pushed characters were then stored in 4 separate arrays within passwordArray. With some research, the function flat was used to make the entire array flat and without separation. 
- Once this was complete, the last function of writePassword was able to be carried out to return a random password through a document query within the passwordText.value. 


## Installation

- Clone this repository
* $ git clone git@github.com:schneidsmc/password-generator3.git

## Usage

-Deployed URL
* https://schneidsmc.github.io/password-generator3/

## Author

* [schneidsmc](https://github.com/schneidsmc)