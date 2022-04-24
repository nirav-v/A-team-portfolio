
// write a template string html that fills in the user input for just one card
    const generateHTML = ({name, id, email}) =>  
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
      <div class="col-sm-4">
        <div class="card" style="width: 20rem">
          <div class="card-header">Person Name</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 20rem">
          <div class="card-header bg-primary text-light p-3">
            <h2>${name}</h2>
            <h3>Title</h3>
          </div>
          <ul class="list-group list-group-flush bg-">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">email: ${email} </li>
            <li class="list-group-item">Office number: </li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</html`

module.exports = generateHTML;

