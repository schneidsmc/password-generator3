// Assignment Code

function generatePassword(){
    passwordLengthYY();
    checkLength();
    userPrompt();
    // checkPrompt();
    createPassword();
}

var lowerCaseLet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCaseLet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var symbolsLet = '~!@#$%^&*()_+=-'.split('');
var numberLet = '1234567890'.split('');

// Create Global Scope
let userinput;
let passwordLength = false;
let passwordArray = [];

// create a password variable that is an empty string
var password = '';

// prompt user for password length and store in a variable
function passwordLengthYY() {
    
    if (!passwordLength) {
        userinput = prompt('How long would you like your password to be?');
    }
    if (userinput < 7 || userinput === -1 || userinput > 128 || isNaN(userinput) ){
        alert('You have to choose a value between 8-128');
    }
    console.log(userinput)
    return userinput
}

function checkLength(){
    if ((!userinput)) { 
        alert('You have to choose a number between 8-128!');
        window.location.reload(false);
    }
    console.log(!userinput)

}


// One function for variable Prompts?
    // prompt user for if they want lowercase, uppercase, numbers and symbols and store in an empty array
function userPrompt() {
    let lowerCase = confirm('Do you want your password to have lowercase letters?')
    if (lowerCase) {passwordArray.push(lowerCaseLet);
    }
    let upperCase = confirm('Do you want your password to have uppercase letters?')
    if (upperCase) {passwordArray.push(upperCaseLet);
    }
    let numbers = confirm('Do you want your password to have numbers?')
    if (numbers) {passwordArray.push(numberLet);
    }
    let Symbols = confirm('Do you want your password to have symbols?')
    if (Symbols) {passwordArray.push(symbolsLet);
    }
    console.log(passwordArray)
    return passwordArray;

}

function createPassword() {
    let password = '';
    for (let i = 0; i === userinput; i++) {
        let randomIndex = Math.floor(Math.random() * passwordArray.length);
        let randomChar = passwordArray[randomIndex];
     password += randomChar;
}
console.log(password)
return password
}

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


