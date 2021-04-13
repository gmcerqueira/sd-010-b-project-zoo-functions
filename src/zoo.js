/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  // seu código aqui
  const final = [];
  ids.forEach((id) => animals.filter((animal) => {
    if (animal.id === id) {
      final.push(animal);
    }
    return final;
    // Esse return acima é desnecessário, apenas utilizei para passar no Lint. Apenas o próximo return já resolve o requisito.
  }));
  return final;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  let result;
  animals.forEach((param) => {
    if (param.name === animal) {
      result = param.residents.every((ageInside) => ageInside.age >= age);
    }
  });
  return result;
}

function employeeByName(employeeName) {
  // seu código aqui
  let res;
  res = employees.find((emp) => (employeeName === emp.firstName || employeeName === emp.lastName));
  if (res === undefined) {
    res = {};
  }
  return res;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmploy = Object.assign(personalInfo, associatedWith);
  return newEmploy;
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmploy = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmploy);
}

function animalCount(species) {
  // seu código aqui
  let final = {};
  if (species === undefined) {
    animals.forEach((animal) => {
      const { name } = animal;
      const qtd = animal.residents.length;
      final[name] = qtd;
    });
  } else {
    animals.forEach((animal) => {
      if (animal.name === species) {
        final = animal.residents.length;
      }
    });
  }
  return final;
}

function entryCalculator(entrants) {
  // seu código aqui
  let finalPrice = 0;
  if (entrants === undefined || Object.keys(entrants).length < 1) {
    return finalPrice;
  }
  Object.keys(entrants).forEach((key) => {
    Object.keys(prices).forEach((param) => {
      if (key === param) {
        finalPrice += (prices[param] * entrants[key]);
      }
    });
  });
  return finalPrice;
}

// function animalMap(options) {
//   // seu código aqui
//   const { animals } = data;
//   if (options === undefined) {

//   }
// }

function schedule(dayName) {
  // seu código aqui
  const objFinal = {};
  if (!dayName) {
    Object.keys(hours).forEach((key) => {
      const { open, close } = hours[key];
      objFinal[key] = open ? `Open from ${open}am until ${close - 12}pm` : 'CLOSED';
    });
    return objFinal;
  }
  const { open, close } = hours[dayName];
  objFinal[dayName] = open ? `Open from ${open}am until ${close - 12}pm` : 'CLOSED';
  return objFinal;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const emp = employees.find((employee) => id === employee.id);
  const spec = emp.responsibleFor[0];
  const resid = animals.find((animal) => animal.id === spec).residents;
  const final = resid.sort((a, b) => ((a.age < b.age) ? 1 : -1));
  return Object.values(final[0]);
}

function increasePrices(percentage) {
  // seu código aqui
  const intPerc = (percentage / 100) + 1;
  const arr = Object.values(prices).map((price) => Math.round(((price * intPerc) * 100)) / 100);
  // Consegui arredondar da maneira correta depois de ler o seguinte artigo: https://stackoverflow.com/questions/21091727/javascript-tofixed-function
  Object.keys(prices).forEach((price, index) => {
    prices[price] = arr[index];
  });
}

function findAniResp(employee, final) {
  const newFinal = final;
  const { responsibleFor } = employee;
  const respAni = [];
  responsibleFor.forEach((param) => {
    animals.forEach((animal) => {
      if (param === animal.id) {
        respAni.push(animal.name);
      }
      newFinal[`${employee.firstName} ${employee.lastName}`] = respAni;
    });
  });
  return newFinal;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  let final = {};
  if (!idOrName) {
    employees.forEach((employee) => {
      final = findAniResp(employee, final);
    });
    return final;
  }
  const found = employees.find((employee) => idOrName === employee.id
  || idOrName === employee.firstName
  || idOrName === employee.lastName);
  final = findAniResp(found, final);
  return final;
}

console.log(employeeCoverage());

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
