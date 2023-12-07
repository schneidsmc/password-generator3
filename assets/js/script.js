// Assignment Code
function generatePassword(){
    passwordLengthYY();
    userPrompt();
    createPassword();
}

var lowerCaseLet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCaseLet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var symbolsLet = '~!@#$%^&*()_+=-'.split('');
var numberLet = '1234567890'.split('');

// Create Global Scope
let userPrompt;
let passwordLength = true;
let passwordArray = [];

// create a password variable that is an empty string
var password = '';

// prompt user for password length and store in a variable
function passwordLengthYY() {
    if (passwordLength) {
        userinput = prompt('How long would you like your password to be?');
    }
    if (userinput < 7 || userinput === -1){
        alert('You have to choose a value between 8-128');
    }
    if (userinput > 128) {
        alert('You have to choose a value between 8-128');
    }
    if (isNaN(userinput )){
        alert('You have to choose a number between 8-128')
    }
}




// One function for variable Prompts?
    // prompt user for if they want lowercase and store in a boolean
    // prompt user for if they want uppercase and store in a boolean
    // prompt user for if they want numbers and store in a boolean
    // prompt user for it they want symbols and store in a boolean

// Add together any arrays that they wanted to include based on the true/fasle values of the boolean into its own array
    // If lowercase is true then add lowercase array to combined array
    // If uppercase is true then add uppercase array to combined array
    // If numbers is true then add number array to combined array
    // If symbols is trye then add symbol array to combined array

//randomize array and pull password length smount of elements out of it and put it into password variable









// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.log(lowerCaseLet);
// console.log(upperCaseLet);

// console.log(symbolsLet);
// console.log(numberLet);

generatePassword();