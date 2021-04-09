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

function animalsByIds(...ids) {
  // seu código aqui
  const { animals } = data;
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
  const { animals } = data;
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
  const { employees } = data;
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
  const { employees } = data;
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const { employees } = data;
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
  const { animals } = data;
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
  const { prices } = data;
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
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
