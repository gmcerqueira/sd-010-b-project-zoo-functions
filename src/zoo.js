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
const { animals } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return data.animals.filter((animais) => ids.includes(animais.id));
}

function animalsOlderThan(animal, age) {
  return animals
    .find((animais) => animais.name === animal)
    .residents.every((animais) => animais.age >= age);
}

function employeeByName(employeeName) {
  return employeeName === undefined
    ? {}
    : data.employees.find(({ firstName, lastName }) => firstName === employeeName
      || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  return data.employees.some((manager) => manager.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (species === undefined) {
    const returnObj = {};
    data.animals.forEach((animal) => {
      returnObj[animal.name] = animal.residents.length;
    });
    return returnObj;
  }
  return data.animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce(
    (previousValue, currentValue) =>
      previousValue + (data.prices[currentValue] * entrants[currentValue]),
    0,
  );
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const week = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName !== undefined) {
    return { [dayName]: week[dayName] };
  }
  return week;
}

function oldestFromFirstSpecies(id) {
  const idFirsSpecies = data.employees.find((employee) => employee.id === id)
    .responsibleFor[0];
  const animalsById = data.animals.find((animal) => animal.id === idFirsSpecies)
    .residents;
  return Object.values(
    animalsById.reduce((acc, currentValue) => {
      if (currentValue.age > acc.age) return currentValue;
      return acc;
    }),
  );
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
