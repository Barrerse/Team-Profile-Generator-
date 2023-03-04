const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js") 
const Intern = require("./lib/Intern.js")
const inquirer = require('inquirer');
const path = require ("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/main.js")


teamArray = [];

// Main Function 
function runApp () {
    
    //Create Team constructor 
    function createTeam () {
        inquirer.prompt([{
            type: "list",
            message: "Enter the type of employee you want to add:",
            name: "addEmployeePrompt",
            choices: ["Intern","Engineer","Manager","Next"]
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
            message: "Enter employee's school:"
          }
    
        ]).then(answers => {
          const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
          teamArray.push(intern);
          createTeam();
        });
    
      }
// Add Engineer 
function addEngineer() {
  inquirer.prompt([
    
    {
      type: "input",
      name: "engineerName",
      message: "Enter the name of the employee:"
    },

    {
      type: "input",
      name: "engineerId",
      message: "Enter employee's ID Number:" 
    },

    {
      type: "input",
      name: "engineerEmail",
      message: "Enter employee's Email address:"
    },

    {
      type: "input",
      name: "engineerGithub",
      message: "Enter employee's GitHub user:"
    }

  ]).then(answers => {
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    teamArray.push(engineer);
    createTeam();
  });

}

// Add Manager
function addManager() {
  inquirer.prompt([
    
    {
      type: "input",
      name: "managerName",
      message: "Enter the name of the employee:"
    },

    {
      type: "input",
      name: "managerId",
      message: "Enter employee's ID Number:" 
    },

    {
      type: "input",
      name: "managerEmail",
      message: "Enter employee's Email address:"
    },

    {
      type: "input",
      name: "managerSchool",
      message: "Enter managers Office Number:"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });

}


  }

  //HTML Builder 
  function htmlBuilder () {
    console.log("Team created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTeam();


}

runApp();
