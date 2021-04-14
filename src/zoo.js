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
  if (ids.length === 0) return [];
  return data.animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const filterAnimal = data.animals.find((objAnimal) => objAnimal.name === animal).residents;
  return filterAnimal.every((resident) => resident.age > age);
  // return  filterAge// tem que ser booleano
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const { employees } = data;
  const returnFind = employees.find((employee) => {
    const emploReturn = employee.firstName === employeeName || employee.lastName === employeeName;
    return emploReturn;
  });
  return returnFind;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const { employees } = data;
  return employees.some((employee) => employee.managers.includes(id));
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
  const objReturn = {};
  if (!species) {
    animals.forEach(({ name, residents }) => {
      objReturn[name] = (residents.length);
    });
    return objReturn;
  }
  return animals.find((animal) => animal.name === species).residents.length;
}

// function entryCalculator(entrants) {
//   // seu código aqui
//   return entrants;
// }

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui (random()*100/100)
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  // entryCalculator,
  // schedule,
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
