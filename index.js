const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
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
	},
	{
		type: "input",
		message: "Enter your GitHub username:",
		name: "username",
		default: "simonanewton"
	}
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        console.log(error ? error : "Success!");
    })
}

async function init() {
    try {
        const userInput = await inquirer.prompt(questions);

        const markdown = generateMarkdown(userInput);

        writeToFile("example.md", markdown);
    }
    catch (error) {
        console.log(error);
    }
}

init();
