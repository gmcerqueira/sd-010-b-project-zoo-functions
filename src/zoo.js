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
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const name = animals.find((animalName) => animalName.name === animal);
  return name.residents.every((animalAges) => animalAges.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

// R7 realizado com ajuda dos colegas
function animalCount(species) {
  if (species) {
    const specie = animals.find((animalSpeccie) => animalSpeccie.name === species);
    return specie.residents.length;
  }
  return animals.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
}

function entryCalculator(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const people = Object.keys(entrants);
  const value = Object.values(entrants);
  return people.reduce((acc, curr, currIdx) => acc + (prices[curr] * value[currIdx]), 0);
}

// function animalMap(options) {
//   // seu código aqui
// }

// 10 realizado com ajuda dos colegas
function schedule(dayName) {
  const objDay = {};
  Object.keys(hours).forEach((day) => {
    if (day === 'Monday') {
      objDay[day] = 'CLOSED';
    } else {
      objDay[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    }
  });
  if (dayName) {
    return { [dayName]: objDay[dayName] };
  }
  return objDay;
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
  //   animalMap,
  animalsByIds,
  employeeByName,
  //   employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  //   oldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
