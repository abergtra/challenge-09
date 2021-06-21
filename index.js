// TODO: Include packages needed for this application
    //Require fs variable
    const fs = require("fs");
    //Require inquire variable
    const inquirer = require("inquirer");
    //Require Markdown.js file 
    const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    //Title
    {
        type: "input",
        name: "title",
        message: "Please enter a project title.",
        validate: validateInput,
    },
    //Description
    {
        type: "input",
        name: "description",
        message: "Please describe your project.",
        validate: validateInput,
    },
    
    //Table of Contents does not need User Input
    
    //Installation
    {
        type: "input",
        name: "installation",
        message: 'Please provide installation instructions. If this section is not applicable, please write "none"',
        validate: validateInput,
    },
    //Usage
    {
        type: "input",
        name: "usage",
        message: "How should this progam or project be used?",
        validate: validateInput,
    },
    //License (these are selected from a list)
    {
        type: "list",
        name: "license",
        message: "Please pick a license from the following list:",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
        validate: validateInput,
    },
    //Contributing
    {
        type: "input",
        name: "contributing",
        message: "How should users contribute?",
        validate: validateInput,
    },
    //Tests
    {
        type: "input",
        name: "tests",
        message: 'Please provide testing instructions. If this section is not applicable, please write "none"',
        validate: validateInput,
    },
    //Questions (need multiple inputs for this section)
        //Email Address
        {
            type: "input",
            name: "emailAddress",
            message: "What is your email address?",
            validate: function(value) {
                if (condition) {
                    return true;
                } else {
                    return "This email is not valid. Please check spelling and enter a valid address."
                }
            },
        },
        //GitHub Username
        {
            type: "input",
            name: "GithubUsername",
            message: "What is your GitHub username?",
            validate: validateInput,
        },
];

//Function to evaluate if User Input valid
function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return 'Invalid input, please answer question with text. When in doubt, write "none"';
    }
}

//Function for license selection
function getLicense(value) {
    if (value === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (value === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === "GNU LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (value === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (value === "Boost Software 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (value === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
