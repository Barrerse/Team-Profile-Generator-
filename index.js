const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js") 
const Intern = require("./lib/Intern.js")
const inquirer = require("inquirer");
const path = require ("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(_dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")

teamArray = [];

// Main Function 
function runApp () {
    
    //Create Team constructor 
    function createTeam () {
        inquirer.prompt([{
            type: "list",
            message: "Enter the type of employee you want to add:"
            name: "addEmployeePrompt"
            choices: ["Intern","Engineer","Manager","Back"]
        }])
    }
}