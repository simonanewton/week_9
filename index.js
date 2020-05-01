const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
	{
		type: "input",
		message: "Enter your GitHub username:",
		name: "username",
		default: "simonanewton",
	},
	{
		type: "input",
		message: "Enter the title of your project:",
		name: "title",
		default: "Example Project Title",
	},
	{
		type: "input",
		message: "Enter a description of your project:",
		name: "description",
		default: "Example Project Description",
	}
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) console.log(error);

        console.log("Success!");
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
