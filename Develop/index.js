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
            type: 'input', 
            name: 'github',
            message: 'What is your Github username?',
        },        
        {
            type: 'input', 
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'list', 
            name: 'licenses',
            message: 'Please pick one license for your project',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Boost Software License', 'GNU General Public License v2.0', 'Mozilla Public License v2.0'],
        },
    ])
};

// init function initializes app and creates readme file
const init = () => {
    questions ()
    .then((data) => fs.writeFileSync('README.md', markdown(data)))
    .then(() => console.log('Successfully created README.md'))
    .catch ((err) => console.error(err));
}

// Function call to initialize app
init();
