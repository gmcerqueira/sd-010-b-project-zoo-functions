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
  if (ids.length) {
    const { animals } = data;
    const arr = animals.filter((animal, index) => animal.id === ids[index]);
    return arr;
  }
  return [];
}

function animalsOlderThan(animal, age) {
  const { animals } = data;
  const especie = animals.filter((e) => e.name === animal);
  const bool = especie[0].residents.every((e) => e.age >= age);
  return bool;
}

function employeeByName(employeeName) {
  if (employeeName) {
    const { employees } = data;
    const employee = employees.filter((e) => {
      const bool = (e.firstName === employeeName) || (e.lastName === employeeName);
      return bool;
    });
    return employee[0];
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const { employees } = data;
  const bool = employees.some((el) => el.managers.includes(id));
  return bool;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
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
  const { animals } = data;
  if (species) {
    const thisAnimal = animals.filter((e) => e.name === species);
    return thisAnimal[0].residents.length;
  }
  return animals.reduce((acc, cur) => {
    const { name } = cur;
    return {
      ...acc,
      [name]: cur.residents.length,
    };
  }, {});
}

function entryCalculator(entrants) {
  if (entrants) {
    const { prices } = data;
    const entrantKeys = Object.keys(entrants);
    const total = entrantKeys.reduce((acc, cur) => acc + ((prices[cur] || 0) * entrants[cur]), 0);
    return total;
  }

  return 0;
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
