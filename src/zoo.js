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

const { animals, employees, prices, hours } = require('./data');

function animalsByIds(...ids) {
  return animals.filter((beast) => ids.includes(beast.id));
}

function animalsOlderThan(animal, age) {
  return animals.find((animale) => (animale.name === animal)).residents
    .every((everyOne) => (everyOne.age >= age));
}

function employeeByName(employeeName) {
  return employees.find(({ firstName, lastName }) =>
    (firstName === employeeName || lastName === employeeName)) || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((a) => (a.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((acc, b) => {
      acc[b.name] = b.residents.length;
      return acc;
    }, {});
  }
  return animals.find((a) => (a.name === species)).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) return 0;
  return Object.keys(entrants).reduce((x, y) => x + (entrants[y] * prices[y]), 0);
}

function animalMap(options) {
  // seu código aqui
  console.log(options);
}

function schedule(dayName) {
  const ret = {};
  Object.keys(hours)
    .forEach((k) => {
      const { open, close } = hours[k];
      if (k === 'Monday') ret[k] = 'CLOSED';
      else ret[k] = `Open from ${open}am until ${close - 12}pm`;
    });
  if (dayName) return { [dayName]: ret[dayName] };
  return ret;
}

function oldestFromFirstSpecies(id) {
  const a = employees.find((b) => (b.id === id)).responsibleFor[0];
  const ret = animals.find((c) => c.id === a).residents.sort((d, e) => d.age - e.age);
  return Object.values(ret[ret.length - 1]);
}

function increasePrices(percentage) {
  Object.entries(prices).forEach(([a, b]) => {
    const updateValue = b * (1 + (percentage / 100));
    prices[a] = Math.round(updateValue * 100) / 100;
  });
}

function employeeCoverage(idOrName) {
  // seu código aqui
  console.log(idOrName);
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
