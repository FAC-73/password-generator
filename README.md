# password-generator
An application that a user can use to generate a random password based on criteria they’ve selected. Features dynamically updated HTML and CSS using Javascript. Application is fully responsive to all small and wide views.

![Website screenshot](https://github.com/FAC-73/kay-davis-portfolio/blob/main/assets/Images/readme-images/Index-screenshot.jpg?raw=true "Kay Davis Portfolio")

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
     <li>
      <a href="https://fac-73.github.io/password-generator/">View project</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

![Portfolio screenshots](https://github.com/FAC-73/kay-davis-portfolio/blob/main/assets/Images/readme-images/Portfolio-screenshot.jpg?raw=true "Portfolio hero image")
<br><br>

**Built using Javascript, HTML and CSS. The password generator is an application where a user can generate a secure, random password - between 8 - 128 characters, and providing options to include numbers, special characters as well as upper and lowercase letters.**


### Built With

* [HTML](https://www.w3schools.com/)
* [CSS](https://www.w3schools.com/)
* [Javascript](https://www.w3schools.com/))
* [FontAwesome](https://fontawesome.com/)




<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps. You can also download the source files provided. You will need a text editor such as Visual Studio Code, Xcode or similar to edit the source code.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/FAC-73/password-generator.git
   ```

2. Pull the latest
   ```sh
   git pull
   ```


<!-- USAGE EXAMPLES -->
## Usage

![Portfolio screenshots](https://github.com/FAC-73/kay-davis-portfolio/blob/main/assets/Images/readme-images/imagegridportfolio-screenshot.jpg?raw=true "Portfolio project tiles")

#### What's included
1. HTML, CSS and Javascript files include the source code for running the password generator application
2. This project demonstrates ways in which javavscript cane be used to manipulate the DOM elements in the browser window and dynamically updating HTML.


![Responsive layout](https://github.com/FAC-73/kay-davis-portfolio/blob/main/assets/Images/readme-images/responsive-portfolio.jpg?raw=true "Responsive views")



#### Functionality
The generate button is what is used to trigger the series of prompts requiring the user to provide parameters for their password


1. Provide a value between 8 - 128 for your password string length. If the user inputs an invalid value they'll go into a loop until a valid value is input
   ```
   function generatePassword() {
  var stringLength = (prompt("How many characters would you like your password? Choose between 8 and 128"));

  // Loops the user to select a valid string length value 
  while(stringLength <= 8 || stringLength >= 128) {
      alert("Password length must be between 8 and 128 characters. Try selecting a different value");
      var stringLength = (prompt("How many characters would you like your password? Choose between 8 and 128"));
      }
   ```

2. If the user wishes to exit the dialog after invoking the action they can do so using the cancel action
   ```
   if (stringLength == null)  {
    alert("Click the Generate Password button to restart the generator");
    Return;
    }
   ```

3. Once they have provided a valid string length value, sequential confirmation dialogs include additional paramenters for generating the password. Each parameter is optional.
   ```
   var includeNumericCharacter = confirm("Would you like your password to include numbers");    
    var includeSpecialCharacter = confirm("Would you like your password to include special characters");
    var includeLowerCase = confirm("Would you like your password to include lowercase characters");
    var includeUpperCase = confirm("Would you like your password to include uppercase characters");
   ```

4. If the user does not confirm at least one parameter from the four options the user is looped and an alert is shown asking them to choose at least one parameter. 
```
  while (includeUpperCase === false && includeLowerCase === false && includeSpecialCharacter === false && includeNumericCharacter === false) {
        alert("You must choose at one of the four criteria's (Numbers, Special Characters, Lowercase or Uppercase) for your password");

        var includeSpecialCharacter = confirm("Would you like your password to include numbers");
        var includeNumericCharacter = confirm("Would you like your password to include special characters");    
        var includeLowerCase = confirm("Would you like your password to include lowercase characters");
        var includeUpperCase = confirm("Would you like your password to include uppercase characters"); 
  ```

5. Once the user chooses a parameter the selections are stored as a variable and concatenated with the array of letters, numbers and characters determined by the user
 ```
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
   ```

   5. A password is then randomly generated using a for loop using the values stored in the passwordCreate variable and the the math.random function. The stringLength variable provides the length of the password to be generated as specified by the user.
 ```
           for (var i = 0; i < stringLength; i++) {
        newPassword = newPassword + passwordCreate[Math.floor(Math.random() * passwordCreate.length)];
      }
      return newPassword;
   ```

   6. Once the password is successfully created and populated into the textarea HTML element
 ```
         function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  }
   ```


## Project deliverables

#### What's 
1. A prompt is displayed to the user after clicking the 'generate password' button asking the user to provide a value between 8 - 128 characters for the password length
2. If the user does not provide a valid value they will recieve an alert and will be taken into a loop back to the inital prompt to provide a valid value
3. The user will be displayed a series of confirmations for password parameters include: Numbers, Special Characters, Uppercase & Lowercase letters.
4. If none of the parameters are confirmed the application should validate and alert the user to select at least one to continue. 
5. Once all prompts have been responded, a randomly generated password matching the specified prompts is displayed. The new password is shown in the HTML text area element using a function. 
6. The password can be copied to clipboard using the 'copy to clipboard' action. This uses an eventListener for the button click, and and execCommand to copy the string, once copied the text changes to green using setAtrribute.

#### HTML & CSS
1. Index.html - Contains basic layout structure using a custom div element named 'card' to display main content. Semantic html is used for elements such as buttons and textarea
2. styles.css - Contains layout, styling and media-queries for html content
3. script.js - Contains Variables and variable arrays for numbers, special characters, uppercase and lowercase letters. Two event listeners, loops using while statement for invalid prompt and confirmation inputs, for loop for generating password. Function for generating and writing password to HTML. Function for copying random password to clipboard and manipulating password styles in html text area. 


#### Pushing to GitHub

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/FeatureName`)
3. Commit your Changes (`git commit -m 'Add some FeatureName`)
4. Push to the Branch (`git push origin feature/FeatureName`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. 

See [LICENSE](https://github.com/FAC-73/password-generator/blob/main/LICENSE.txt) for more information.



<!-- CONTACT -->
## Contact

Kay Davis

Project repo link: [https://fac-73.github.io/password-generator/](https://fac-73.github.io/password-generator/
<br>
Project website: [https://github.com/FAC-73/password-generator/](https://github.com/FAC-73/password-generator)