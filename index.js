const inquirer = require("inquirer");

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
        default: "Example Project Title"
    }
];

function writeToFile(fileName, data) {
}

async function init() {
    try {
        const userInput = await inquirer.prompt(questions);
        console.log(userInput);
    }
    catch (error) {
        console.log(error);
    }
}

init();
