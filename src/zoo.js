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

const { employees, animals, prices } = data;

function animalsByIds(...ids) {
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const findAnimal = animals.find((animalname) => animalname.name === animal);
  return findAnimal.residents.every((ageAnimals) => ageAnimals.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const includeManager = employees.some((mngr) => mngr.managers.includes(id));
  return includeManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmployeer = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(addEmployeer);
}

function animalCount(species) {
  const countAnim = {};
  if (!species) {
    animals.forEach(({ name, residents }) => {
      countAnim[name] = residents.length;
    });
    return countAnim;
  }
  return animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(ent) {
  if (ent === undefined) {
    return 0;
  }
  return Object.keys(ent).reduce((acum, c, i) => acum + (prices[c] * Object.values(ent)[i]), 0);
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
