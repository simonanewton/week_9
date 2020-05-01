function generateMarkdown(data) {
	return `
	# ${data.title}

	## Description

	${data.description}

	## Table of Contents

	* [Installation](#installation)
	* [Usage](#usage)
	* [License](#license)
	* [Contributing](#contributing)
	* [Tests](#tests)
	* [Questions](#questions)

	## Installation

	${data.installation}

	## Usage

	${data.usage}

	## License

	![badmath](https://img.shields.io/badge/license-${data.license}-blue)

	## Contributing

	${data.contributing}

	## Tests

	${data.tests}

	## User Information
	GitHub Username: @${data.username}
	`;
}

module.exports = generateMarkdown;
