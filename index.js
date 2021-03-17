// Write your solution in this file!


const employee = {
    name: "Tim",
    streetAddress: "8 Broadway"
};





    employee.name = 'Sam';




// add 4 function.

// ------------- OK ---------------------------------
function updateEmployeeWithKeyAndValue(employee, name, streetAddress){

const upEmployee = { ...employee };
upEmployee.name = 'Sam';
upEmployee.streetAddress = '11 Broadway';
    return (upEmployee);
    
}

// ---------not working last------------------------------
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress){

    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return (employee);

}

// ---------- OK ------------------------------------
function deleteFromEmployeeByKey(){

    const delEmployee = { ...employee };
    delete delEmployee.name;
    return (delEmployee);
}

// ----------- OK -----------------------------------
function destructivelyDeleteFromEmployeeByKey(){

delete employee.name;
    return (employee);
}