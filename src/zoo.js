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

const { animals, employees, prices } = require('./data');
// const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const result = animals.filter((item) => (ids.includes(item.id)));
  return result;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const species = animals.find((item) => item.name === animal);

  const animalsOlder = species.residents.every((item) => item.age > age);
  return animalsOlder;
}

function employeeByName(employeeName) {
  function findEmployee(item) {
    return item.lastName === employeeName || item.firstName === employeeName;
  }
  const empregado = employees.find((item) => findEmployee(item));
  return employeeName ? empregado : {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const funcionarioEscolhido = employees.find((item) => item.id === id).id;
  return employees.some((item) => item.managers.includes(funcionarioEscolhido));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  // this: https://dev.to/_bigblind/quick-tip-transform-an-array-into-an-object-using-reduce-2gh6 helped me A LOT!
  const allSpecies = animals.reduce((acc, { name, residents }) => {
    const resultado = ({ ...acc, [name]: residents.length });
    return resultado;
  }, {});

  const oneSpecie = animals.find((item) => item.name === species);

  if (!species) {
    return allSpecies;
  } return oneSpecie.residents.length;
}

const entryCalculator = (entrants) => {
  if (entrants && entrants !== {}) {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return ((Adult * 49.99) + (Child * 20.99) + (Senior * 24.99));
  }
  return 0;
};

// function animalMap(options) {
//   // seu código aqui
// }

// eslint-disable-next-line max-lines-per-function
// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

function increasePrices(percentage) {
  // seu código aqui
  prices.Adult += prices.Adult * (percentage / 100);
  prices.Adult = Math.round(prices.Adult * 100) / 100;
  prices.Child += prices.Child * (percentage / 100);
  prices.Child = Math.round(prices.Child * 100) / 100;
  prices.Senior += prices.Senior * (percentage / 100);
  prices.Senior = Math.round(prices.Senior * 100) / 100;
  return prices;
}

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
  increasePrices,
  createEmployee,
};
