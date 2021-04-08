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
  // seu código aqui
  const foundAnimals = ids.map((actualId) => {
    const foundAnimal = data.animais.find((animal) => actualId === animal.id);
    return foundAnimal;
  });
  return foundAnimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalObj = data.animals.find(({ name }) => name === animal);
  return animalObj.residents.every((elementAge) => elementAge.age >= age);
}

function employeeByName(employeeName) {
  let result = {};
  employees.forEach((eachEmployee) => {
    if (employeeName === eachEmployee.firstName || employeeName === eachEmployee.lastName) {
      result = eachEmployee;
    }
  });
  return result;

  function createEmployee(personalInfo, associatedWith) {
    const newObject = { ...personalInfo, ...associatedWith };
    return newObject;

    function isManager(id) {
      return employees.some(eachEmployee => eachEmployee.managers.includes(id));
    }
  }
  function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
    const newObject = { id, firstName, lastName, managers, responsibleFor };
    employees.push(newObject);
  }

  function animalCount(species) {
    let result = {};
    if (species !== undefined) {
      result = animals.find(eachSpecies => eachSpecies.name === species).residents.length;
    } else {
      animals.forEach((eachSpecies) => {
        result[eachSpecies.name] = eachSpecies.residents.length;
      });
    }
    return result;
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