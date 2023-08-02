// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
//Use Inquirer to create questions and use data for README
const questions = [
  {
    type: "input",
    message: "What is your user name?",
    name: "username",
  },
  {
    type: "password",
    message: "What is your password?",
    name: "password",
  },
  {
    type: "password",
    message: "Re-enter password to confirm:",
    name: "confirm",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) console.log(err);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("./utils/README.MD", generateMarkdown(response));
  });
}

// Function call to initialize app
init();
