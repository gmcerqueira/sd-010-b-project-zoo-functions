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

function animalsByIds(...ids) {
  return animals.filter((animal) => ids.some((id) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const findAnimal = animals.find((animalX) => animalX.name === animal);
  return findAnimal.residents.every((ageX) => ageX.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((employee) =>
    employeeName === employee.firstName || employeeName === employee.lastName);
}

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
//   return personalInfo;
// }

// function isManager(id) {
//   // seu código aqui
//   return id;
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
//   return id;
// }

// function animalCount(species) {
//   // seu código aqui
//   return species;
// }

// function entryCalculator(entrants) {
//   // seu código aqui
//   return entrants;
// }

// function animalMap(options) {
//   // seu código aqui
//   return options;
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
//   return id;
// }

// function increasePrices(percentage) {
//   // seu código aqui
//   return percentage;
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
//   return idOrName;
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
