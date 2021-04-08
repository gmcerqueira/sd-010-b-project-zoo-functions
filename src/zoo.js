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

// isManager
const takeManagers = () => {
  const allManags = employees.map((emp) => emp.managers).reduce((a, b) => `${a},${b}`).split(',');
  const singleManags = [...new Set(allManags)];
  return singleManags.filter((emp) => emp);
};
// trocar para includes
const fiEmpById = (id) => employees.find((employee) => employee.id === id);
const reallyIsManager = (employee) => takeManagers().some((manager) => manager === employee.id);
const isManager = (id) => reallyIsManager(fiEmpById(id));

// addEmployee
const buildEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => ({
  id,
  firstName,
  lastName,
  managers,
  responsibleFor,
});

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  employees.push(buildEmployee(id, firstName, lastName, managers, responsibleFor));
}

// animalCount
const countAll = () => {
  const aniObj = {};
  animals.forEach(({ name, residents }) => {
    aniObj[name] = residents.length;
  });
  return aniObj;
};
const countOne = (theAnimal) => theAnimal.residents.length;
const animalCount = (species) => (!species ? countAll() : countOne(fiByName(species)));

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
