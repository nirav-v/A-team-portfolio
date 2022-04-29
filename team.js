const figlet = require("figlet");
const inquirer = require("inquirer");
const fs = require("fs").promises;

const generateHTML = require("./Developer/src/generateHTML");
const Manager = require("./Developer/lib/Manager");
const Intern = require("./Developer/lib/Intern");
const Engineer = require("./Developer/lib/Engineer");


const writeHtml = (answers) => {
  const htmlContent = generateHTML(answers);
  fs.writeFile("team.html", htmlContent, (err) =>
    err ? console.log(err) : console.log("succesfully wrote to html")
  );
};

class Team {
  constructor() {
    this.employeesArray = [];
  }
  start() {
    //create a promise to allow chaining .then/.catch
    new Promise((resolve, reject) => {
      figlet("Team Profile Generator", function (err, data) {
        if (err) {
          reject(err);
          return;
        }
        console.log(data);
        resolve();
      });
    })
      .catch(() => {
        // something is wrong with figlet.
        // provide fallback welcome message
        console.log("Welcome to the Team Profile Generator");
      })
      .then(() => {
        // return promise to continue chaining
        return inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: `What is the Manager's name?`,
          },
          {
            type: "input",
            name: "id",
            message: `What is the Manager's id?`,
          },
          {
            type: "input",
            name: "email",
            message: `What is the Manager's email?`,
          },
          {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office number?",
          },
        ]);
      })
      .then(({ name, id, email, officeNumber }) => {
        const newManager = new Manager(name, id, email, officeNumber);
        this.employeesArray.push(newManager);
        console.log(this.employeesArray);
      })
      .then(() => {
        this.addTeamMemberPrompt();
      })
      .catch((err) => this.handleError(err));
  } // end start()

  handleError(err) {
    console.log(err);
    console.log("Uh oh. Something went wrong. Scroll up to see details.");
  }

  addTeamMemberPrompt() {
    return inquirer
      .prompt({
        name: "addTeamMember",
        type: "list",
        message: "which type of team member would you like to add next?",
        choices: ["Engineer", "Intern", "I am done adding team members"],
      })
      .then((answers) => {
        if (answers.addTeamMember === "Intern") {
          this.internPrompt();
        } else if (answers.addTeamMember === "Engineer") {
          this.engineerPrompt();
        } else writeHtml(this.employeesArray);
        return;
      });
  }

  internPrompt() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: `What is the Intern's name?`,
        },
        {
          type: "input",
          name: "id",
          message: `What is the Intern's id?`,
        },
        {
          type: "input",
          name: "email",
          message: `What is the Intern's email?`,
        },
        {
          type: "input",
          name: "school",
          message: "What is the Intern's school?",
        },
      ])
      .then((answers) => {
        const newIntern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        this.employeesArray.push(newIntern);
        console.log(this.employeesArray);
        this.addTeamMemberPrompt();
      });
  }

  engineerPrompt() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: `What is the Engineer's name?`,
        },
        {
          type: "input",
          name: "id",
          message: `What is the Engineer's id?`,
        },
        {
          type: "input",
          name: "email",
          message: `What is the Engineer's email?`,
        },
        {
          type: "input",
          name: "github",
          message: "What is the Engineer's Github user name?",
        },
      ])
      .then((answers) => {
        const newEngineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        this.employeesArray.push(newEngineer);
        console.log(this.employeesArray);
        this.addTeamMemberPrompt();
      });
  }

  writeHtml() {
    (employeesArray) => {
      const htmlContent = generateHTML(this.employeesArray);
      fs.writeFile("team.html", htmlContent)
        .then(() => {
          console.log("succesfully created team.html");
        })
        .catch((err) => this.handleError(err));
    };
  }
} //end class

new Team().start();

module.exports = Team;
