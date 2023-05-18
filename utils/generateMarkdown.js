// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  if (response === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (response === 'Apache-2.0'){
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
  } else if (response === 'GPL'){
    return `[![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'This project is licensed under the MIT license.\nhttps://opensource.org/licenses/MIT';
  } else if (license === 'Apache-2.0') {
    return 'This project is licensed under the Apache license, version 2.0.\nhttps://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GPL') {
    return 'This project is licensed under the GPL license, version 3.0.\nhttps://opensource.org/licenses/GPL-3.0';
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(response) {
  if (response.license !== "None / NA") {
    return `## License 
  ${renderLicenseBadge(response)}, 
  ${renderLicenseLink(response)}`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(anything) { console.log(anything)
  return `# ${anything.title}

  ## Description
  What will my project's aim be?

  ${anything.description}

  ## Table of Contents

  * Installation
  * Usage
  * Questions
  * License

  ## Installation
  How will my project be installed?
  ${anything.installation}

  ## Usage
  How would someone use my project?
  ${anything.usage}

  ## Contributing
  If you have any questions or would like to contribute to this project, please contact the author at

  * Github Username: ${anything.github}
  * Email Address: ${anything.email}

${renderLicenseSection(anything.license)}
`;
}

module.exports = generateMarkdown;
