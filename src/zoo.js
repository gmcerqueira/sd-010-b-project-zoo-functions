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

function animalsByIds(...ids) {
  return data.animals
    .filter((animal, index) => (ids[index] === animal.id ? animal : false));
}

function animalsOlderThan(animal, age) {
  const animals = data.animals.find((animal2) => (animal === animal2.name ? animal : false));

  return animals.residents.every((animal3) => animal3.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  const result = data.employees
    .find((employe) =>
      (employeeName === employe.firstName || employeeName === employe.lastName ? employe : false));

  return result;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo, ...associatedWith,
  };
}

function isManager(id) {
  return data.employees
    .some((employe) => employe.managers.some((manager) => id === manager));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employeObj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return data.employees.push(employeObj);
}

function animalCount(species) {
  if (!species) {
    return data.animals
      .reduce((acumulator, { name, residents }) =>
        Object.assign(acumulator, { [name]: residents.length }), {});
  }
  const specie = data.animals.find((specie1) => (specie1.name === species));

  return specie.residents.length;
}

function entryCalculator(entrants = 0) {
  const prices = [];
  const arrayPrices = Object.entries(data.prices);
  arrayPrices.forEach((element) => {
    const entryValue = entrants[element[0]];
    if (entryValue) {
      prices.push(entryValue * element[1]);
    }
  });

  return prices.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
