const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./Develop-copy/dist/generateHTML")


const init = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
  ])
  // after recieving user input, pass it to the generateHTML function
  // the html template string from generateHTML is written to the team.html file
  .then((answers) => {
      const htmlContent = generateHTML(answers);
    
      fs.writeFile('team.html', htmlContent, (err)=>
          err ? console.log(err) : console.log('succesfully wrote to html')
      );    
    })
};

init();

