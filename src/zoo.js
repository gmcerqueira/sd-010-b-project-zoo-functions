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

function animalsByIds(...ids) {
  if (ids === []) {
    return [];
  }
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const animalSpecies = animals.find((specie) => specie.name === animal);
  return animalSpecies.residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) { /* !employeeName substitui === undefined */
    return {};
  }
  return employees.find(
    (employee) =>
      (employee.firstName === employeeName || employee.lastName === employeeName),
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const occupations = employees.map((employee) => employee.managers);
  return occupations.map((occupation) =>
    occupation.some((managerJob) => managerJob === id)).some((item) => item === true);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newCollab = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newCollab);
}

function animalCount(species) {
  if (typeof species === 'undefined') {
    const object = {};
    animals.forEach((elem) => {
      object[elem.name] = elem.residents.length;
    });
    return object;
  }
  return animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (typeof entrants === 'undefined') {
    return 0;
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
  //   schedule,
  animalCount,
  //   animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  //   oldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
