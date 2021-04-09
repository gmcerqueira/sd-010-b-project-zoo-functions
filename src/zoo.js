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

const {
  animals,
} = require('./data');
const {
  employees,
} = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const animalSpecies = data.animals.filter((animal) => ids.includes(animal.id)); // developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  return animalSpecies;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const filterAnimal = animals.find((currentAnimal) => currentAnimal.name === animal);
  const minAge = filterAnimal.residents.every((resident) => resident.age > age);
  return minAge;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((Emp) => employeeName === Emp.firstName || employeeName === Emp.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const managerSearch = employees.some((employee) => employee.managers.includes(id));
  return managerSearch;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employeeAdd = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(employeeAdd);
}

function animalCount(species) {
  // seu código aqui
  if (species === undefined) {
    return animals.reduce((animalAcc, animalCurr) => {
      animalAcc[animalCurr.name] = animalCurr.residents.length;
      return animalAcc;
    }, {});
  }
  const findAnimal = animals.find((animal) => animal.name === species)
  return findAnimal.residents.length;
}

// function entryCalculator(entrants) {
//   // seu código aqui
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
//   // seu código aqui
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
