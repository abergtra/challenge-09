// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3") {
      return "![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)";
  } else if (license === "GNU GPLv3") {
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "GNU LGPLv3") {
      return "![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)";
  } else if (license === "Apache 2.0") {
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "Boost Software 1.0") {
      return "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
  } else if (license === "MIT") {
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else {
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3") {
      return "[License: AGPL v3](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU GPLv3") {
      return "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU LGPLv3") {
      return "[License: LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "Apache 2.0") {
      return "[License](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost Software 1.0") {
      return "[License](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "MIT") {
      return "[License: MIT](https://opensource.org/licenses/MIT)";
  } else {
      return "[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicense = renderLicenseLink(license);
  if (license != "") {
    return `${renderLicense} 
    * As this list provided is not comprehensive, if you need another license, contact the author for additional options. 
    `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  licenseSection = renderLicenseSection(data.license);
  licenseBadge = renderLicenseBadge(data.license);
  return `
  # Project Title
  ${data.title} 
  ${licenseBadge}
  
  # Description
  ${data.description}
  
  # Table of Contents 
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [License](#-Installation)
  * [Contributing](#-Contributing)
  * [Tests](#-Tests)
  * [Contact Information](#-Contact-Information)
      
  # Installation
  ${data.installation}
  
  # Usage
  ${data.usage}
  
  # License 
  ${licenseSection}
  
  # Contributing 
  ${data.contributing}
  
  # Tests
  ${data.tests}
  
  # Contact Information 
  * GitHub Username: ${data.GithubUsername}
  * Contact Email: ${data.emailAddress}
  
`;
}

module.exports = generateMarkdown;
