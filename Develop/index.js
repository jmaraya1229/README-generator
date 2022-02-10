// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input', 
            name: 'description',
            message: 'Please describe your project:',
        },        
        {
            type: 'input', 
            name: 'install',
            message: 'How do you install your project?',
        },
        {
            type: 'input', 
            name: 'usage',
            message: 'How do you use your project?',
        },
        {
            type: 'input', 
            name: 'contribution',
            message: 'Please state who worked on this project:',
        },
        {
            type: 'input', 
            name: 'test',
            message: 'Test instructions:',
        },
        {
            type: 'list', 
            name: 'licenses',
            message: 'Please pick one license for your project',
            choices: ['MIT', 'GNU General Public License 3.0', 'Apache License 2.0'],
        },
        {
            type: 'input', 
            name: 'github',
            message: 'What is your Github username?',
        },        
        {
            type: 'input', 
            name: 'email',
            message: 'What is your email?',
        },
    ])
};

const init = () => {
    questions ()
    .then((data) => fs.writeFileSync('README.md', markdown(data)))
    .then(() => console.log('Successfully created README.md'))
    .catch ((err) => console.error(err));
}


// TODO: Create a function to write README file
    // function writeToFile('README.md', generateMarkdown(data)) {}
    // fs included in promise in init ()

// TODO: Create a function to initialize app
    // Created init () with promise

// Function call to initialize app
init();
