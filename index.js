// This homework assignment wants me to design a website where I can use node.js in order to create a professional README.

// The README should include:
  // Description
  // Table of Contents
    // Functional navigation throughout the page
  // Installation
  // Usage
  // License
    // Three licenses to choose from
    // Badge is added to the top of the README
  // Contributing
    // Github username 
    // Email Address
  // Tests
  // Questions

// TODO: Include packages needed for this application
const inquirer = require('inquirer') //module
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your Projects title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description for your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe step by step how your project will be installed'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide details as to how your project will be used'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your Github Username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: ['MIT', 
    'Apache-2.0', 
    'GPL'
    ]
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => err ? console.log(err) : console.log("File created successfully"))
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(data => {
  writeToFile('./README.md', data)
  })
}

// Function call to initialize app
init();