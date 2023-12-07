// Assignment Code
function generatePassword(){

var lowerCaseLet = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(lowerCaseLet);

var upperCaseLet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
console.log(upperCaseLet);

var symbolsLet = '~!@#$%^&*()_+=-'.split('');
console.log(symbolsLet);

var numberLet = '1234567890'.split('');
console.log(numberLet);
}
// create a password variable that is an empty string
var password = '';
// prompt user for password length and store in a variable

var passwordLength = Number(prompt('How many characters would you like in your password?'));
    if (typeof(passwordLength != 'number')) {
        alert("You must type a number!")
        passwordLength = Number(prompt('How many characters would you like in your password?'));
    }
    // if (passwordLength < 8 && (passwordLength > 128)) {
    //     alert("Gotta be between 8 and 126")
    //     passwordLength = Number(prompt('How many characters would you like in your password?'));
    // }

var addlowerCase = (prompt('Do you want to include Lower Case letters?'));
    if (typeof(passwordLength != 'letter')) {
        alert("you must type a number!")
        addlowerCase = (prompt('Do you want to include Lower Case letters?'));
    }


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