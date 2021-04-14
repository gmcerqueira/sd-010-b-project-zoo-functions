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

const { animals, employees } = data;

const isTheAnimal = (animal, ...ids) => {
  for (let i = 0; i < ids.length; i += 1) {
    if (animal.id === ids[i]) return animal;
  }
};

const animalsByIds = (...ids) => {
  if (ids[0] === undefined) return [];
  return animals.filter((animal) => isTheAnimal(animal, ...ids));
};

const animalsBySpecie = (specieName) => {
  const selectedSpecie = animals.find((specie) => specie.name === specieName);
  return selectedSpecie.residents;
};

const animalsOlderThan = (specieName, age) => {
  // seu código aqui
  const animalsSpecie = animalsBySpecie(specieName);
  return animalsSpecie.every((animal) => animal.age >= age);
};

const selectedEmployee = (employeeName) => {
  return employees.find((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) return employee;
  });
};

const employeeByName = (employeeName) => {
  // seu código aqui
  if (employeeName === undefined) return {};
  return selectedEmployee(employeeName);
};

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

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
  // createEmployee,
};
