const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
	{
		type: "input",
		message: "Enter your GitHub username:",
		name: "username",
		default: "simonanewton",
		validate: (response) => response.length === 0 ? console.log("Please enter a GitHub username.") : true
	},
	{
		type: "input",
		message: "Enter the title of your project:",
		name: "title",
		default: "Example Project Title",
		validate: (response) => response.length === 0 ? console.log("Please enter a project title.") : true
	},
	{
		type: "input",
		message: "Enter a description of your project:",
		name: "description",
		default: "Example Project Description",
		validate: (response) => response.length === 0 ? console.log("Please enter a project description.") : true
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
        
        writeToFile("example.md", userInput);
    }
    catch (error) {
        console.log(error);
    }
}

init();
