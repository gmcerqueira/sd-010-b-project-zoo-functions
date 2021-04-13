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

const { animals, _employees, _prices, _hours  } = data;

// ~    ~     ~    ~     ~    ~     ~    ~     ~    ~     ~    ~     ~    ~     ~    ~     ~    ~     ~    ~  

const isTheAnimal = (animal, ...ids) => {
  for (let i = 0; i < ids.length; i += 1) {
    if (animal.id === ids[i]) return animal;
  }
};

const animalsByIds = (...ids) => {
  if (ids[0] === undefined) return [];
  return animals.filter((animal) => isTheAnimal(animal, ...ids));
};

console.log(animalsByIds());

// ~    ~     ~    ~     ~    ~     ~    ~     ~    ~     ~    ~     ~    ~     ~    ~     ~    ~     ~    ~  

// function animalsOlderThan(animal, age) {
//   // seu código aqui
// }

// function employeeByName(employeeName) {
//   // seu código aqui
// }

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
  // employeeByName,
  // employeeCoverage,
  // addEmployee,
  // isManager,
  // animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
