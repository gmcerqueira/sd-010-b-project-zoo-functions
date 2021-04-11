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

const { animals, employees } = data;

function animalsByIds(...ids) {
  return animals.filter((animal) => {
    return ids.find((id) => {
      return animal.id === id
    });
  })
}

function animalsOlderThan(animal, age) {
  const animalsFilteredSpecie = animals.find(({name}) => {
    return name === animal;
  });

  const animalsFilteredAge = animalsFilteredSpecie.residents.every((element) => {
    return element.age >= age;
  });
  
  return animalsFilteredAge;
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  } else {
    const employeeByName = employees.find(({ firstName, lastName }) => {
      return firstName === employeeName || lastName === employeeName;
    });

    return employeeByName;
  }
}

function createEmployee(personalInfo, associatedWith) {
  const createEmployee = { 
    ...personalInfo, 
    ...associatedWith 
  };

  return createEmployee;
}

function isManager(id) {
  const isManager = employees.some((manager) => {
    return manager.managers.includes(id);
  });

  return isManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmployee = employees.push({id, firstName, lastName, managers, responsibleFor});

  return addEmployee;
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
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
