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

const { animals } = data;

function animalsByIds(...ids) {
  return data.animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals
    .find((animalBuscado) => animalBuscado.name === animal)
    .residents.every((habitante) => habitante.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return data.employees.find((employee) => {
    const result = employee.firstName === employeeName || employee.lastName === employeeName;
    return result;
  });
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const employee = Object.assign(personalInfo, associatedWith);
  return employee;
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.include(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // seu código aqui
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// function animalCount(species) {
// seu código aqui
// }

// function entryCalculator(entrants) {
// seu código aqui
// }

// function animalMap(options) {
// seu código aqui
// }

// function schedule(dayName) {
// seu código aqui
// }

// function oldestFromFirstSpecies(id) {
// seu código aqui
// }

// function increasePrices(percentage) {
// seu código aqui
// }

// function employeeCoverage(idOrName) {
// seu código aqui
// }

module.exports = {
  // entryCalculator,
  // schedule,
  // animalCount,
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
