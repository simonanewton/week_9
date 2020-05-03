const fs = require("fs");
const inquirer = require("inquirer");

const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
	{
		type: "input",
		message: "Enter your GitHub username:",
		name: "username",
		validate: (response) => response.length === 0 ? console.log("Please enter your GitHub username.") : true
	},
	{
		type: "input",
		message: "Enter the title of your project:",
		name: "title",
		default: "Example Project Title"
	},
	{
		type: "input",
		message: "Enter a description of your project:",
		name: "description",
		default: "Example Project Description"
	},
	{
		type: "input",
		message: "Enter a description of the steps required to install your project:",
		name: "installation",
		default: "Example Project Installation"
	},
	{
		type: "input",
		message: "Enter a description of how your project is intended to be used:",
		name: "usage",
		default: "Example Project Usage"
	},
	{
		type: "list",
		message: "Select a license to utilise for your project:",
		choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"],
		name: "license"
	},
	{
		type: "input",
		message: "Enter a description of how other developers can contribute to your project:",
		name: "contributing",
		default: "Example Project Contributing"
	},
	{
		type: "input",
		message: "Enter any tests that you have made for your project and describe how to utilise them:",
		name: "tests",
		default: "Example Project Tests"
	}
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
		if (error) throw error;

		console.log("Success!");
    })
}

async function init() {
    try {
		const userInput = await inquirer.prompt(questions);
		const userInfo = await api.getUser(userInput.username);

        const markdown = generateMarkdown(userInput, userInfo.data);

        writeToFile("Example.md", markdown);
    }
    catch (error) {
        console.log(error);
    }
}

init();
