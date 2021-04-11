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

const search = (arr, arg, key) => arr.find((e) => e[key] === arg);

const animalsByIds = (...ids) => ids.map((e) => search(animals, e, 'id'));

const animalsOlderThan = (animal, ageAnimal) =>
  search(animals, animal, 'name').residents.every(({ age }) => age > ageAnimal);

const employeeByName = (employeeName) =>
  employeeName
    ? employees.find((e) => e.firstName === employeeName || e.lastName === employeeName)
    : {};

const createEmployee = (arg1, arg2) => ({ ...arg1, ...arg2 });

const isManager = (id) => employees.some(({ managers }) => managers.some((e) => e === id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  employees.push({ id, firstName, lastName, managers, responsibleFor });

const animalCount = (species) => {
  const list = {};
  animals.forEach(({ name, residents }) => {
    list[name] = residents.length;
  });
  return species ? list[species] : list;
};

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) return 0;
  const { Adult, Child, Senior } = prices;
  const { Adult: a = 0, Child: b = 0, Senior: c = 0 } = entrants;
  return Adult * a + Child * b + Senior * c;
}

function animalMap(options) {
  // seu código aqui
}

const schedule = (dayName) => {
  const list = {};
  Object.entries(hours).forEach(([key, { open, close }]) => {
    list[key] = open === close ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
  });
  return dayName ? { [dayName]: list[dayName] } : list;
};

const oldestFromFirstSpecies = (idEmploye) => {
  const { responsibleFor } = search(employees, idEmploye, 'id');
  const { residents } = search(animals, responsibleFor[0], 'id');
  const { name, sex, age } = residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return [name, sex, age];
}

const increasePrices = (percentage) => {
  Object.keys(prices).forEach((key) => {
    prices[key] += (prices[key] * percentage) / 100;
    prices[key] = Math.round(prices[key] * 100) / 100;
  });
}

function employeeCoverage(idOrName) {}

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
