// The Password generator will provide a password with 8 up to 128 characters. The generator can also provide a password with special characters, numbers, uppercase and lowercase letters

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// global variable arrays for uppercase & lowercase letters, numbers and special characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// store user string length selection in this variable
var stringLength = "";

// store password critera selection in these variables
var includeSpecialCharacter;
var includeNumericCharacter;
var includeUpperCase;
var includeLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var stringLength = (prompt("How many characters would you like your password? Choose between 8 and 128"));

  // Cancels the action and returns to the main page
  if (stringLength == null)  {
    alert("Click the Generate Password button to restart the generator");
    Return;
    }

  // Loops the user to select a valid string length value 
  while(stringLength <= 8 || stringLength >= 128) {
      alert("Password length must be between 8 and 128 characters. Try selecting a different value");
      var stringLength = (prompt("How many characters would you like your password? Choose between 8 and 128"));
      }

    // Confirm users password criteria
    var includeNumericCharacter = confirm("Would you like your password to include numbers");    
    var includeSpecialCharacter = confirm("Would you like your password to include special characters");
    var includeLowerCase = confirm("Would you like your password to include lowercase characters");
    var includeUpperCase = confirm("Would you like your password to include uppercase characters");

      // Loop password critera if none are confirmed
      while (includeUpperCase === false && includeLowerCase === false && includeSpecialCharacter === false && includeNumericCharacter === false) {
        alert("You must choose at one of the four criteria's (Numbers, Special Characters, Lowercase or Uppercase) for your password");

        var includeSpecialCharacter = confirm("Would you like your password to include numbers");
        var includeNumericCharacter = confirm("Would you like your password to include special characters");    
        var includeLowerCase = confirm("Would you like your password to include lowercase characters");
        var includeUpperCase = confirm("Would you like your password to include uppercase characters");   
    } 

      // Stores the variable declarations for the password criteria variables
      var passwordCreate = []
      
      // if user specifies including special characters concatinate specialCaracter variable with passwordCreate
    if (includeSpecialCharacter) {
      passwordCreate = passwordCreate.concat(specialCharacter)
    }

    // if user specifies including numbers concatinate numeriCharacter variable with passwordCreate
    if (includeNumericCharacter) {
      passwordCreate = passwordCreate.concat(number)
    }
    
    // if user specifies including numbers concatinate lowerCase variable with passwordCreate
    if (includeLowerCase) {
      passwordCreate = passwordCreate.concat(lowerCase)
    }

    // if user specifies including numbers concatinate upperCase variable with passwordCreate
    if (includeUpperCase) {
      passwordCreate = passwordCreate.concat(upperCase)
    }

    console.log(passwordCreate)

      // newPassword string to be filled based on a for loop to selection of random characters from the specified arrays
      var newPassword = ""
      
      // for loop increment characters by 1 up to a max of the variable stringLength specifed by the user. Randomly generate password based on users selection stored in passwordCreate
      for (var i = 0; i < stringLength; i++) {
        newPassword = newPassword + passwordCreate[Math.floor(Math.random() * passwordCreate.length)];
      }
      return newPassword;
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  }

// Creates a variable to target the button for triggering the copy function
  var copy = document.querySelector("#copy");
  copy.addEventListener("click", function () {
      copyPassword();
  });

  // Copy the password to the clipboard
  function copyPassword() {
      document.getElementById("password").setAttribute("style", "color: green;");
      document.getElementById("password").select();
      document.getElementById("password").focus();
      document.execCommand("Copy");
      alert("Your password has been copied to the clipboard");
  }

console.log(copyPassword)

//   var passwordText = document.querySelector("#password");
//     passwordText.addEventListener("focusout", function() {
//       changeColor();
//     });

//     function changeColor() {
//       // event.preventDefault();
//       event.stopPropagation();
//       document.getElementById("password").setAttribute("style", "color: yellow;");
// }
