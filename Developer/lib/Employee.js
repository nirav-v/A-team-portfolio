// create an employee class that constructs employee object with properties for name, id, and email)
// create methods getName() to return the objects name property, getId() to return the id property, and getEmail() to return the email property 
// give it the employee object a getRole method that returns 'Employee' 

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;