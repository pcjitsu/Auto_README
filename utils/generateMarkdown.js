// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    Apache: "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",
    GNU: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]",
    BSD: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]",
  };
  return licenseBadges[license] || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: "(https://opensource.org/licenses/MIT)",
    Apache: "(https://opensource.org/licenses/Apache-2.0)",
    GNU: "(https://www.gnu.org/licenses/gpl-3.0)",
    BSD: "(https://opensource.org/licenses/BSD-3-Clause)",
  };
  return licenseLinks[license] || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `
## License

This project is licensed under the ${license} License.  
For more information, please visit ${renderLicenseLink(license)}.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
- [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributions}

## Tests
${data.tests}


${renderLicenseSection(data.license)}

## Questions
For Questions go to my Repo at [https://github.com/${data.repo}/]


## Contact
For any questions or inquiries, feel free to reach out to me at ${data.email}.

`;
}
//^Build out content of readme on line 16
module.exports = generateMarkdown;

// choices: ["APACHE", "MIT", "BSD", "GNU", ""],
