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
  const species = data.animals.filter((element) =>
    ids.find((id) => element.id === id));

  return species;
}

function animalsOlderThan(animal, age) {
  const findAnimal = data.animals.find((element) => element.name === animal);
  const checkAge = findAnimal.residents.every((element) => element.age > age);
  return checkAge;
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const employee = data.employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  const checkid = data.employees.some((element) => element.managers.includes(id));
  return checkid;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((result, element) => {
      const newObject = result;
      newObject[element.name] = element.residents.length;
      return newObject;
    }, {});
  }

  const coutAnimal = data.animals.find((element) => element.name === species);
  return coutAnimal.residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  }
  const price = Object.values(data.prices);
  const objectEntry = entrants;
  const { Adult = 0, Senior = 0, Child = 0 } = objectEntry;
  const total = (Adult * Number(price[0]) + Senior * Number(price[1]) + Child * Number(price[2]));
  return total;
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
