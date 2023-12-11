// Assignment Code

function generatePassword(){
    passwordLengthYY();
}
// Global Scope Variables

var lowerCaseLet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCaseLet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var symbolsLet = '~!@#$%^&*()_+=-'.split('');
var numberLet = '1234567890'.split('');
var userinput;
var passwordArray = [];
var flatPassword = []; 

// prompt user for password length and store in a variable
function passwordLengthYY() {
        userinput = prompt('How long would you like your password to be?');
        if (userinput < 7 || userinput === -1 || userinput > 128 || isNaN(userinput) ){
            alert('You have to choose a value between 8-128');
            // return;
    } else {
        userPrompt();
    }
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

    flatPassword = passwordArray.flat();
    createPassword();
    console.log('userPrompt '+flatPassword)
    return flatPassword
}

function createPassword() {
    console.log('createPassword '+flatPassword)
    let password = '';
    if (flatPassword.length > 0){
        for (let i = 0; i < userinput; i++) {
            let randomIndex = Math.floor(Math.random() * flatPassword.length);
            console.log('randomIndex '+randomIndex)
            let randomChar = flatPassword[randomIndex];
            password += randomChar;
        } 
    }console.log('createPassword password '+ password);
    return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (createPassword() === undefined || createPassword() === '') {
      passwordText.value = ''; 
    } else { 
      passwordText.value = createPassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


