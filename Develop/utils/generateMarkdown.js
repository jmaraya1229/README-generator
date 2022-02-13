// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
  if (data.license !== '' && data.license == 'Apache License 2.0') {
    return `\n[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`;

  } else if (data.license !== '' && data.license == 'GNU General Public License v3.0') {
    return `\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`;

  } else if (data.license !== '' && data.license == 'MIT License') {
    return `\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`;

  } else if (data.license !== '' && data.license == 'BSD 2-Clause License') {
    return `\n[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)\n`;

  } else {
     return '';
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license !== '' && data.license == 'Apache License 2.0') {
    return `\n[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;

  } else if (data.license !== '' && data.license == 'GNU General Public License v3.0') {
    return `\n[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)`;

  } else if (data.license !== '' && data.license == 'MIT License') {
    return `\n[MIT License](https://opensource.org/licenses/MIT)`;

  } else if (data.license !== '' && data.license == 'BSD 2-Clause License') {
    return `\n[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)`;

  } else {
     return '';
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== '') {
  return `\n## License`;
  } else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let tempToC = `\n## Table of Contents`;
  if (data.installation !== '') {
    tempToC += `\n* [Installation](#installation)`
  };

  if (data.usage !== '') {
    tempToC += `\n* [Usage](#usage)`
  };

  if (data.contribution !== '') {
    tempToC += `\n* [Contribution](#contribution)`
  };

  if (data.test !== '') {
    tempToC += `\n* [Tests](#tests)`
  };

  if (data.license !== '') {
    tempToC += `\n* [License](#license)`
  };

  let tempmd = `# ${data.title}\n`

  if (data.license !== '') {
    tempmd += renderLicenseBadge(data);
  };

  if (data.description !== '') {
    tempmd += 
    `\n## Description
    \n${data.description}
    \n`
    }
  
  tempmd += tempToC;

  if (data.install !== '') {
    tempmd += 
      `\n## Installation
      \n${data.install}
      \n`
  };

  if (data.usage !== '') {
    tempmd += 
      `\n## Usage
      \n${data.usage}
      \n`
  };

  if (data.contribution !== '') {
    tempmd += 
      `\n## Contribution
      \n${data.contribution}
      \n`
  };

  if (data.test !== '') {
    tempmd += 
      `\n## Tests
      \n${data.test}
      \n`
  };

  if (data.license !== '') {
    tempmd += renderLicenseSection(data);
    tempmd += renderLicenseLink(data);
  };

  let qinfo = 
    `\n## Questions
    \nFeel free to contact me for any questions!
    \n* Github: [@${data.github}](https://github.com/${data.github})
    \n* Email: ${data.email}`;
  
  tempmd += qinfo;

  return tempmd;
};

module.exports = generateMarkdown;
