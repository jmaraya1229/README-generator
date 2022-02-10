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
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](https://github.com/jmaraya1229/README-generator#installation)
  * [Usage](https://github.com/jmaraya1229/README-generator#usage)
  * [Contribution](https://github.com/jmaraya1229/README-generator#contribution)
  * [Questions](https://github.com/jmaraya1229/README-generator#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contribuition
  ${data.contribution}

  ## Questions
  Feel free to utilize this app to create a README for your project. Contact me with examples or any questions via the information below:
  * Github: [@${data.github}](https://github.com/${data.github})
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
