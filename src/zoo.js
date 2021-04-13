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
  const animalsId = [];

  if (ids !== undefined) {
    ids.forEach((idF) => {
      animalsId.push(data.animals.find((curr) => curr.id === idF));
    });
  }
  return animalsId;
}

function animalsOlderThan(animal, age) {
  const setAnimal = data.animals.find((curr) => curr.name === animal);
  const minimalAge = setAnimal.residents.every((curr) => curr.age > age);
  return minimalAge;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const searchFName = data.employees.find((curr) => curr.firstName === employeeName);

  if (searchFName) return searchFName;

  const searchLName = data.employees.find((curr) => curr.lastName === employeeName);
  return searchLName;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  const result = data.employees.some((curr) => (
    curr.managers.some((curr2) => curr2 === id)));
  return result;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(employee);
}

function animalCount(species) {
  if (species) {
    return data.animals.find((curr) => curr.name === species).residents.length;
  }
  const animalV = {};
  data.animals.forEach(({ name, residents }) => {
    animalV[name] = residents.length;
  });
  return animalV;
}

console.log(animalCount());

function entryCalculator(entrants) {
  // seu código aqui
  return entrants;
}

function animalMap(options) {
  // seu código aqui
  return options;
}

function schedule(dayName) {
  // seu código aqui
  return dayName;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  return id;
}

function increasePrices(percentage) {
  // seu código aqui
  return percentage;
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
