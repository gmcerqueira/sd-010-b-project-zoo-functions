/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data",
  }
]
*/

// Alterar a primeira constante para que seja armazenado o valor do price no ficheiro data.js:
const { animals } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const toFilter = animals.find((species) =>
    species.name === animal).residents;

  return toFilter.every((ages) => ages.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const newObject = animals.reduce((acc, curr) => {
      const { name } = curr;
      return {
        ...acc,
        [name]: curr.residents.length,
      };
    }, {});

    return newObject;
  }

  const toCount = animals.find((animal) => animal.name === species).residents.length;

  return toCount;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants) {
    const visitors = Object.keys(entrants);
    return visitors.reduce((acc, curr) =>
      acc + (data.prices[curr] * entrants[curr]), 0);
  }
  return 0;
}

function animalMap(options) {
  // seu código aqui
  // const allLocations = ['NE', 'NW', 'SE', 'SW'];
  // const animalsByInfo = animals.map((animal) => animal.residents);
  // const animalsByRegion = animals.filter((animal) => animal.location === 'NE');
  return console.log(options);
}

function schedule(dayName) {
  // seu código aqui
  const days = data.hours;
  const newObject = {};

  Object.keys(days).forEach((day) => {
    if (day === 'Monday') newObject[day] = 'CLOSED';
    else newObject[day] = `Open from ${days[day].open}am until ${days[day].close - 12}pm`;
  });

  if (dayName) return { [dayName]: newObject[dayName] };

  return newObject;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  return id;
}

function increasePrices(percentage) {
  // seu código aqui
  const { prices } = data;
  let { Adult, Child, Senior } = prices;
  Adult = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  Child = Math.ceil(prices.Child * (100 + percentage)) / 100;
  Senior = Math.ceil(prices.Senior * (100 + percentage)) / 100;

  data.prices = { Adult, Senior, Child };
}

function employeeCoverage(idOrName) {
  // seu código aqui
  return idOrName;
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
