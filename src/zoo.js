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

const { animals, employees, prices } = require('./data');
const data = require('./data');

function animalsByIds(...id) {
  if ([id].includes(undefined)) return [];

  return animals.filter((animal) => id.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const species = data.animals.find((name) => name.name === animal);

  return species.residents.every((item) => item.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  // aprendi esse 'if'no video
  // https://www.youtube.com/watch?v=VYk0TXoXWbo
  if ([employeeName].includes(undefined)) { return {}; }

  const filterName = data.employees;

  return filterName.find((name) => (
    name.firstName === employeeName || name.lastName === employeeName
  ));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };

  employees.unshift(newEmployee);

  return data.employees[0];
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push(
    {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    },
  );
}

function animalCount(species) {
  // seu código aqui
  const objName = {};
  let count = 0;
  animals.forEach((animal) => { objName[animal.name] = animal.residents.length; });

  if (!species) return objName;

  const countAnimal = (animal) => {
    if (animal.name === species) {
      count = animal.residents.length;
    }
  };

  animals.filter(countAnimal);

  return count;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const sum = (acc, currValue) => acc + currValue;

  const sumTotal = Object.keys(entrants).map((key) =>
    entrants[key] * prices[key]).reduce(sum);

  return sumTotal;
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  // seu código aqui
}

// console.log(schedule());

// {
//   'Tuesday': 'Open from 8am until 6pm',
//   'Wednesday': 'Open from 8am until 6pm',
//   'Thursday': 'Open from 10am until 8pm',
//   'Friday': 'Open from 10am until 8pm',
//   'Saturday': 'Open from 8am until 10pm',
//   'Sunday': 'Open from 8am until 8pm',
//   'Monday': 'CLOSED'
// }

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const getResponsible = employees.find((idEmployee) => idEmployee.id === id).responsibleFor[0];

  const getAnimal = animals.find((animal) =>
    animal.id === getResponsible)
    .residents.sort((a, b) => b.age - a.age)
    .find((item) => Math.max(item.age));

  const result = Object.values(getAnimal);

  return result;
}

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
  oldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
