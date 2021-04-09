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

function animalsByIds(...ids) {
  const array = [];
  ids.forEach((parmItem) => animals.filter((animal) => {
    if (parmItem === animal.id) {
      array.push(animal);
    }
    return array;
  }));
  return array;
}

function animalsOlderThan(animal, age) {
  const array = animals.filter((element) => element.name === animal);
  let boo = '';
  array.forEach((element) => {
    boo = element.residents.every((obj) => obj.age > age);
  });
  return boo;
}

function employeeByName(employeeName) {
  const employ = employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  const obj = { ...employ };
  return obj;
}

function createEmployee(personalInfo, associatedWith) {
  const obj = { ...personalInfo, ...associatedWith };
  return obj;
}

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

function addEmployee(id, firstName, lastName,
  managers = [], responsibleFor = []) {
  const obj = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(obj);
}
function animalCount(species) {
  let number = 0;
  const obj = {};
  animals.forEach((element) => {
    if (element.name === species) {
      number = element.residents.length;
    } else if (species === undefined) {
      obj[element.name] = element.residents.length;
    }
  });
  if (species === undefined) {
    return obj;
  }
  return number;
} animalCount();

function entryCalculator(entrants) {
  let count = 0;
  if (entrants === undefined || Object.keys(entrants).length < 1) {
    return 0;
  }
  Object.keys(entrants).forEach((param) => {
    count += entrants[param] * prices[param];
  });
  return count;
}

// function animalMap(options) {
//   Digite seu codigo
// }

function schedule(dayName) {
  const number = 0;
  hours.forEach((element) => element.id === dayName);
  return number;
}

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
  schedule,
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
