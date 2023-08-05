// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
//Use Inquirer to create questions and use data for README
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "list",
    message: "What is the necessary license type?\n Bottom If None",
    name: "license",
    choices: ["Apache", "MIT", "BSD", "GNU", ""],
  },
  {
    type: "input",
    message: "Add a Description to your Project:",
    name: "description",
  },
  {
    type: "input",
    message: "Describe how to use this App",
    name: "usage",
  },
  {
    type: "input",
    message: "Provide installation steps for this application",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide contribution information here",
    name: "contributions",
  },
  {
    type: "input",
    message: "explain how to test this app",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your Repo Username?",
    name: "repo",
  },
  {
    type: "input",
    message: "What is your email",
    name: "email",
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

// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
