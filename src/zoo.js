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

const animais = data.animals;
const empregados = data.employees;
const precos = data.prices;

function animalsByIds(...ids) {
  return animais.filter((id) => ids.some((checaId) => id.id === checaId));
}

function animalsOlderThan(animal, age) {
  return animais
    .find((animals) => animals.name === animal)
    .residents.every((idadeAnimal) => idadeAnimal.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return empregados.find(
    (empregado) =>
      empregado.firstName === employeeName
      || empregado.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return empregados.some((ids) => ids.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return empregados.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // Henrique Zózimo ajudou
  const count = {};
  animais.forEach(({ name, residents }) => {
    count[name] = residents.length;
  });
  if (!species) return count;
  return count[species];
}
function entryCalculator(entrants = 0) {
  let total = 0;
  if (entrants.Adult) total += entrants.Adult * precos.Adult;
  if (entrants.Senior) total += entrants.Senior * precos.Senior;
  if (entrants.Child) total += entrants.Child * precos.Child;
  return total;
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
