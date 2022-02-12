// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let tempToC = `\n## Table of Contents`;
  if (data.installation !== '') {
    tempToC += `
    \n* [Installation](#installaion)`
  };

  if (data.usage !== '') {
    tempToC += `
    \n* [Usage](#usage)`
  };

  if (data.contribution !== '') {
    tempToC += `
    \n* [Contribution](#contribution)`
  };

  if (data.test !== '') {
    tempToC += `
    \n* [Tests](#tests)`
  };


  let tempmd = 
  `# ${data.title}
  \n## Description
  \n${data.description}
  `
  
  tempmd += tempToC;

  // tempmd += ` *[License](#license)`;

  if (data.install !== '') {
    tempmd += `
    \n## Installation
    \n${data.install}
    `
  };

  if (data.usage !== '') {
    tempmd += `
    \n## Usage
    \n${data.usage}
    `
  };

  if (data.contribution !== '') {
    tempmd += `
    \n## Contribution
    \n${data.contribution}
    `
  };

  if (data.test !== '') {
    tempmd += `
    \n## Tests
    \n${data.test}
    `
  };

  let qinfo = `
  \n## Questions
  Feel free to contact me for any questions!
  * Github: [@${data.github}](https://github.com/${data.github})
  `;

  let emailmd = `* Email: ${data.email}`;
  if (data.email !== null) {
    qinfo += emailmd
  }

  
  
  tempmd += qinfo;

  return tempmd;
};

module.exports = generateMarkdown;
