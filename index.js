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
            message: "Enter the type of employee you want to add:",
            name: "addEmployeePrompt",
            choices: ["Intern","Engineer","Manager","Back"]
        }]).then(function (userInput) {
            switch(userInput.addEmployeePrompt) {
              case "Manager":
                addManager();
                break;
              case "Engineer":
                addEngineer();
                break;
              case "Intern":
                addIntern();
                break;
      
              default:
                htmlBuilder();
            }
          })
    }

    // Add Intern constructor
    function addIntern() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "internName",
            message: "Enter the name of the employee:"
          },
    
          {
            type: "input",
            name: "internId",
            message: "Enter employee's ID Number:" 
          },
    
          {
            type: "input",
            name: "internEmail",
            message: "Enter employee's Email address:"
          },
    
          {
            type: "input",
            name: "internSchool",
            message: "Enter emplotee's school:"
          }
    
        ]).then(answers => {
          const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
          teamArray.push(intern);
          createTeam();
        });
    
      }




}


