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
  const objArray = [];
  objArray.push(data.animals.filter((animal) => ids.some((id) => animal.id === id)));
  return objArray[0];
}

function animalsOlderThan(animal, age) {
  const animais = data.animals.find((array) => array.name === animal);
  const idades = animais.residents.every((resident) => resident.age >= age);
  return idades;
}

function employeeByName(employeeName) {
  const funcionarios = data.employees;
  let fun = {};
  fun = funcionarios.find((obj) => obj.firstName === employeeName || obj.lastName === employeeName);
  if (fun === undefined) {
    return {};
  }
  return fun;
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
  const managers = data.employees.some((employee) => {
    const man = employee.managers.some((manager) => manager === id);
    return man;
  });
  return managers;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const index = data.employees.length;
  data.employees[index] = {
    id, firstName, lastName, managers, responsibleFor,
  };
}

function animalCount(species) {
  const objAnimals = data.animals.reduce((acc1, animal) => {
    const obj = acc1;
    obj[animal.name] = animal.residents.length;
    // acc1 = obj;
    return obj;
  }, {});
  const animal = data.animals.find((animal2) => animal2.name === species);
  if (species !== undefined) {
    return animal.residents.length;
  }
  return objAnimals;
}
console.log(animalCount());

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
