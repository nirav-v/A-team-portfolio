const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer")

const 
// below are the three functions for creating an html card for each employee type
const makeManagerCard = (employeesArray) => {
  
  return employeesArray.map(
    (Manager) =>
      (`<div class="col-sm-4">
        <div class="card" style="width: 20rem">
          <div class="card-header bg-primary text-light p-3">
            <h2>${Manager.name}</h2>
            <h3>Manager</h3>
          </div>
          <ul class="list-group list-group-flush bg-">
            <li class="list-group-item">ID: ${Manager.id}</li>
            <li class="list-group-item">email: ${Manager.email} </li>
            <li class="list-group-item">Office number: ${Manager.officeNumber}</li>
          </ul>
        </div>
      </div>`)
  );
}
const makeInternCard = (employeesArray) => {
  
  return employeesArray.map(
    (Intern) =>
     ( `<div class="col-sm-4">
        <div class="card" style="width: 20rem">
          <div class="card-header bg-primary text-light p-3">
            <h2>${Intern.name}</h2>
            <h3>Intern</h3>
          </div>
          <ul class="list-group list-group-flush bg-">
            <li class="list-group-item">ID: ${Intern.id}</li>
            <li class="list-group-item">email: ${Intern.email} </li>
            <li class="list-group-item">school: ${Intern.school}</li>
          </ul>
        </div>
      </div>`)
  );
}
const makeEngineerCard = (employeesArray) => {
 
  return employeesArray.map(
    (Engineer) =>
     ( `<div class="col-sm-4">
        <div class="card" style="width: 20rem">
          <div class="card-header bg-primary text-light p-3">
            <h2>${Engineer.name}</h2>
            <h3>Engineer</h3>
          </div>
          <ul class="list-group list-group-flush bg-">
            <li class="list-group-item">ID: ${Engineer.id}</li>
            <li class="list-group-item">email: ${Engineer.email} </li>
            <li class="list-group-item">github: ${Engineer.github}</li>
          </ul>
        </div>
      </div>`)
  );
}

// calls 
const generateHTML = (employeesArray) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <header>
      <h1 class="text-center bg-danger text-light p-5">My Team</h1>
    </header>
      <div class="row">
     ${makeManagerCard(employeesArray)} 
     ${makeEngineerCard(employeesArray)}
     ${makeInternCard(employeesArray)}
     
     </div>
  </body>
</html`;

module.exports = generateHTML;
