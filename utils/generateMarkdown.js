function generateMarkdown(data) {
	return `
	# ${data.title}

	## Description
	${data.description}

	## User Information
	GitHub Username: @${data.username}
	`;
}

module.exports = generateMarkdown;
