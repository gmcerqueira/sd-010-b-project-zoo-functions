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

const {
  animals,
  employees,
  // hours,
  // prices
} = data;

const findAnimalById = (animalId) => animals.find((animal) => animal.id === animalId);

function animalsByIds(...ids) {
  return ids.map((animalId) => findAnimalById(animalId));
}

const findByAnimalName = (animalName) => animals.find((animal) => animal.name === animalName);

function animalsOlderThan(animal, age) {
  return findByAnimalName(animal).residents.every((isOlder) => age < isOlder.age);
}

const findEmpName = (empName) =>
  employees.find((emp) => emp.firstName === empName || emp.lastName === empName);

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return findEmpName(employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const employ = {
    ...personalInfo,
    ...associatedWith,
  };
  return employ;
}

function isManager(id) {
  return employees.some((employee) =>
    employee.managers.find((employeeId) => employeeId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id: id,
    firstName: firstName,
    lastName: lastName,
    managers: managers,
    responsibleFor: responsibleFor,
  });
}

// function animalCount(species) {
//   // seu código aqui
// }

// function entryCalculator(entrants) {
//   // seu código aqui
// }

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
  //   entryCalculator,
  //   schedule,
  //   animalCount,
  //   animalMap,
  animalsByIds,
  employeeByName,
  //   employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  //   oldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
