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

function animalsByIds(...ids) {
  if (typeof ids === 'undefined') {
    return [];
  }
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  return animals.find((especie) => especie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

const { employees } = data;

function employeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  return employees.find((employee) => {
    if (employee.firstName === employeeName
    || employee.lastName === employeeName) return employee;
    return null;
  });
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  const meuArray = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return meuArray;
}

function isManager(id) {
  return employees.some((employee) => employee.managers.find((emp) => emp === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const allAnimals = {};
  animals.forEach((animal) => { allAnimals[`${animal.name}`] = animal.residents.length; });
  if (typeof species === 'undefined') {
    return allAnimals;
  }
  return allAnimals[species];
}

// Descobri no site:https://medium.com/cleytonbrasil/javascript-como-saber-se-um-objeto-est%C3%A1-vazio-a6a153f4f81f, que Object.entries() converte um object em um array, possibilitando assim usarmos a propriedade '.length' para sabermos o tamanho do objeto.

const { prices } = data;

const verificaValor = (ent) => {
  let total = 0;
  const { Adult, Child, Senior } = ent;
  if (Adult > 0) total += Adult * prices.Adult;
  if (Child > 0) total += Child * prices.Child;
  if (Senior > 0) total += Senior * prices.Senior;
  return total;
};

function entryCalculator(entrants) {
  if (typeof entrants === 'undefined' || Object.entries(entrants).length === 0) return 0;
  return verificaValor(entrants);
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
