function generateMarkdown(userInput, userInfo) {
	return `
	# ${userInput.title}

	## Description

	${userInput.description}

	## Table of Contents

	* [Installation](#installation)
	* [Usage](#usage)
	* [License](#license)
	* [Contributing](#contributing)
	* [Tests](#tests)
	* [Questions](#questions)

	## Installation

	${userInput.installation}

	## Usage

	${userInput.usage}

	## License

	![userLicense](https://img.shields.io/badge/license-${(userInput.license).replace(/ /g,"_")}-blue)

	## Contributing

	${userInput.contributing}

	## Tests

	${userInput.tests}

	## User Information

	![userImage](${userInfo.avatar_url})

	GitHub Username: [@${userInfo.login}](${userInfo.url})

	GitHub Email Address: [${userInfo.email}](mailto:${userInfo.email})
	`;
}

module.exports = generateMarkdown;
