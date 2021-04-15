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

const { animals } = require('./data');
const data = require('./data');

const { employees } = data;
const { prices } = data;

function animalsByIds(...ids) {
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const animalSpecies = animal.find((specie) => specie.name === animal);
  return animalSpecies.residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  if (employeeByName === undefined) return {};
  return employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id, firstName, lastName, managers, responsibleFor,
  };
  return employees.push(newEmployee);
}

function animalCount(species) {
  if (!species) {
    return animals.reduce(
      (accumulator, { name, residents }) =>
        Object.assign(accumulator, { [name]: residents.length }),
      {},
    );
  }
  const specie = animals.find((animal) => animal.name === species);
  return specie.residents.length;
}

function entryCalculator(entrants = []) {
  const entrantsKey = Object.keys(entrants);
  return entrantsKey.reduce(
    (accumulator, currentValue) => accumulator + prices[currentValue] * entrants[currentValue], 0);
}
/*
function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}
*/
function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;
  data.prices = {
    Adult: Math.ceil(Adult * (percentage + 100)) / 100,
    Senior: Math.ceil(Senior * (percentage + 100)) / 100,
    Child: Math.ceil(Child * (percentage + 100)) / 100,
  };
}
/*
function employeeCoverage(idOrName) {
  // seu código aqui
}
*/
module.exports = {
  entryCalculator,
  //schedule,
  animalCount,
  //animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  //oldestFromFirstSpecies,
  increasePrices,
  //createEmployee,
};
