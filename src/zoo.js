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

// animalsByIds
const findById = (idAni) => animals.find((animal) => animal.id === idAni);
const animalsByIds = (...ids) => ids.map((idAnimal) => findById(idAnimal));

// animalsOlderThan
const fiByName = (nameAni) => animals.find((animal) => animal.name === nameAni);
const animalsOlderThan = (animal, age) => fiByName(animal).residents.every((ani) => age < ani.age);

// employeeByName
const fiEmpByName = (name) => employees.find((employee) =>
  employee.firstName === name || employee.lastName === name);

const employeeByName = (employeeName) => (!employeeName ? {} : fiEmpByName(employeeName));

// createEmployee
const createEmployee = (personalInfo, associatedWith) =>
  Object.assign(personalInfo, associatedWith);

// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

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
  // entryCalculator,
  // schedule,
  // animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  // isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
