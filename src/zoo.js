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
const { employees } = data;
const { prices } = data;

function animalsByIds(...ids) {
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

function animalsOlderThan(animalName, age) {
  return animals.find((animal) => animal.name === animalName)
    .residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  return employeeName
    ? employees.find((employee) =>
      employee.firstName === employeeName
      || employee.lastName === employeeName)
    : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) =>
    employee.managers.find((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  return species
    ? animals.find((animal) => animal.name === species).residents.length
    : animals.reduce((result, currentAnimal) => {
      const object = result;
      object[currentAnimal.name] = currentAnimal.residents.length;
      return object;
    }, {});
}

function entryCalculator(entrants) {
  if (!entrants) return 0;
  const keys = Object.keys(entrants);
  const values = Object.values(entrants);

  return keys.reduce((result, key, index) =>
    result + (prices[key] * values[index]),
  0);
}

console.log(entryCalculator({ Adult: 2, Child: 3, Senior: 1 }));

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
  animalsByIds,
  animalsOlderThan,
  employeeByName,
  createEmployee,
  isManager,
  addEmployee,
  animalCount,
  entryCalculator,
  // schedule,
  // animalMap,
  // employeeCoverage,
  // oldestFromFirstSpecies,
  // increasePrices,
};
