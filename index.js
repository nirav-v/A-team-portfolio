const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./Develop-copy/src/generateHTML");
// askPrompts function can get user input of name, id, and email, for any employee type
askPrompts = (position) => {
  inquirer.prompt([
      {
      type: "input",
      name: "name",
      message: `What is the ${position }'s name?`,
    },
      {
      type: "input",
      name: "id",
      message: `What is the ${position }'s id?`,
    },
      {
      type: "input",
      name: "email",
      message: `What is the ${position }'s email?`,
    }
  ])  
  .then((answers) => {
      const htmlContent = generateHTML(answers);

      fs.writeFile('team.html', htmlContent, (err)=>
          err ? console.log(err) : console.log('succesfully wrote to html')
      );    
    })
}

askPrompts("Intern");

  // after recieving user input, pass it to the generateHTML function
  // the html template string from generateHTML is written to the team.html file
  
  // .then((answers) => {
  //     const htmlContent = generateHTML(answers);

  //     fs.writeFile('team.html', htmlContent, (err)=>
  //         err ? console.log(err) : console.log('succesfully wrote to html')
  //     );    
  //   })

/*
  inquirer.prompt([
    {
      type: "input",
      name: "manager",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email?",
    },
    {
      type: "input",
      name: "office",
      message: "What is the manager's office number?",
    },


  ])
*/







// class Team {
//     // set this objects team to start as an empty array that we will add manager and employees to
//     constructor (){
//         this.team = []
//     }


    


// }