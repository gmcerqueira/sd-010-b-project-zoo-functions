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

const { animals, employees, prices, hours } = data;

const animalsByIds = (...ids) => ids.map((animalId) => animals.find(({ id }) => id === animalId));

function animalsOlderThan(animal, ageMin) {
  return animals.find(({ name }) => name === animal).residents.every(({ age }) => age > ageMin);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(
    (person) => person.firstName === employeeName || person.lastName === employeeName,
  );
}

const createEmployee = (arg1, arg2) => ({
  ...arg1,
  ...arg2,
});

const isManager = (id) => employees.some(({ managers }) => managers.some((e) => e === id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });

const listAnimalCount = () =>
  animals.reduce((acc, curr) => {
    const { name, residents } = curr;
    acc[name] = residents.length;
    return acc;
  }, {});

function animalCount(species) {
  if (!species) return listAnimalCount();
  return Object.entries(listAnimalCount()).find(([key]) => key === species)[1];
}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) return 0;
  const { Adult, Child, Senior } = prices;
  const { Adult: a = 0, Child: b = 0, Senior: c = 0 } = entrants;
  return Adult * a + Child * b + Senior * c;
}

const listModel = (callback) => {
  const list = { NE: '', NW: '', SE: '', SW: '' };
  return () => {
    Object.keys(list).forEach((key) => {
      const animal = animals.filter(({ location }) => key === location)
      list[key] = callback(animal);
    });
    return list;
  };
};

const func = (animal) => {
  return animal.map(({name}) => name)
}

const test = listModel(func)()

console.log(test);

function animalMap(options) {}

const schedule = (hour) => {
  const list = Object.entries(hours).reduce((acc, [key, value]) => {
    const { open, close } = value;
    if (key === 'Monday') acc[key] = 'CLOSED';
    if (key !== 'Monday') acc[key] = `Open from ${open}am until ${close - 12}pm`;
    return acc;
  }, {});
  return hour
    ? {
        [hour]: list[hour],
      }
    : list;
};

function oldestFromFirstSpecies(idEmploye) {
  const { responsibleFor } = employees.find(({ id }) => id === idEmploye);
  const { residents } = animals.find(({ id }) => id === responsibleFor[0]);
  const { name, sex, age } = residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return [name, sex, age];
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) => {
    prices[key] += (prices[key] * percentage) / 100;
    prices[key] = Math.round(prices[key] * 100) / 100;
  });
}

const listEmployees = () =>
  employees.reduce((acc, { firstName, lastName, responsibleFor }) => {
    acc[`${firstName} ${lastName}`] = animalsByIds(...responsibleFor).map(({ name }) => name);
    return acc;
  }, {});

const searchNameOrId = (iN) => {
  const emp = employees.find(
    ({ id, firstName, lastName }) => iN === id || iN === firstName || iN === lastName,
  );
  return `${emp.firstName} ${emp.lastName}`;
};

function employeeCoverage(idOrName) {
  const list = listEmployees();
  if (!idOrName) return list;
  return {
    [searchNameOrId(idOrName)]: list[searchNameOrId(idOrName)],
  };
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
