  let employeeData = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  employeeData === undefined ? {} : employeeData;
}


function exemplo (abc) {
 typeof abc === undefined ? console.log(1) : console.log(2)
}

exemplo()