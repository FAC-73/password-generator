# password-generator
An application that a user can use to generate a random password based on criteria they’ve selected. Features dynamically updated HTML and CSS using Javascript. Application is fully responsive to small and wide views.

![Website screenshot](https://github.com/FAC-73/password-generator/blob/main/Assets/Images/copy3.png?raw=true "Password Generator App")

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

![Password Generator Screenshot](https://github.com/FAC-73/password-generator/blob/main/Assets/Images/Start.png?raw=true "Password Generator Screenshot")
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

![Password generator](https://github.com/FAC-73/password-generator/blob/main/Assets/Images/Start.png?raw=true "Password Generator")

#### What's included
1. HTML, CSS and Javascript files include the source code for running the password generator application
2. This project demonstrates ways in which javavscript cane be used to manipulate the DOM elements in the browser window and dynamically updating HTML.


![Responsive layout](https://github.com/FAC-73/password-generator/blob/main/Assets/Images/responsive.PNG?raw=true "Responsive views")


## Project deliverables

#### Included functionality
The generate button is used to trigger the series of prompts requiring the user to provide parameters for their password as follows:

1. Provide a value between 8 - 128 for your password string length. If the user inputs an invalid value they'll go into a loop until a valid value is input.

![Password Generator prompt](https://github.com/FAC-73/password-generator/blob/main/Assets/Images/promptValue.png?raw=true "Password Generator prompt")
<br>

![Password Generator prompt invalid](https://github.com/FAC-73/password-generator/blob/main/Assets/Images/invalidLength.png?raw=true "Password Generator prompt invalid")
<br>

2. If the user wishes to exit the dialog after invoking the action they can do so using the cancel action and returned back to the main view.

![Cancel action](https://github.com/FAC-73/password-generator/blob/main/Assets/Images/cancelNull.png?raw=true "Cancel action")
<br>

3. Once they have provided a valid string length value, sequential confirmation dialogs include additional paramenters for generating the password. Each parameter is optional. Parameters include options for numbers, special characters, upper and lowercase letters. 

![Password Generator confirm password parameters](https://github.com/FAC-73/password-generator/blob/main/Assets/Images/IncludeParamenters.png?raw=true "confirm password parameters")
<br>

4. If the user does not confirm at least one parameter from the four options the user is looped and an alert is shown asking them to choose at least one parameter.

![Include at least one parameter](https://github.com/FAC-73/password-generator/blob/main/Assets/Images/invalidCriteria.png?raw=true "Include at least one parameter")
<br>

5. Once the user chooses a parameter the selections are stored as a variable and concatenated with the array of letters, numbers and characters determined by the user in the confirm dialogs.

6. A password is then randomly generated using a for loop using the values stored in the passwordCreate variable and the the math.random function. The stringLength variable provides the length of the password to be generated as specified by the user.

7. Once the password is successfully created and populated into the textarea HTML element using a function.

![Generate password](https://github.com/FAC-73/password-generator/blob/main/Assets/Images/generatePassword.png?raw=true "generate password")
<br>

8. The password can be copied to clipboard using the 'copy to clipboard' action. This uses an eventListener for the button click, and and execCommand to copy the string, once copied the text changes to green using setAtrribute.

![Copy password](https://github.com/FAC-73/password-generator/blob/main/Assets/Images/copy.png?raw=true "copy password")
<br>

![Copy password confirm](https://github.com/FAC-73/password-generator/blob/main/Assets/Images/copy3.png?raw=true "copy password confirm")
<br>


#### HTML, CSS and Javascript
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