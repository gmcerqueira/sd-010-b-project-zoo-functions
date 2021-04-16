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

const { animals, employees, prices, hours } = require('./data');

function animalsByIds(...animalId) {
  return animalId.map((objectMap) => animals.find((objectFind) => objectMap === objectFind.id));
}

function animalsOlderThan(animal, age) {
  let find = animals.find((object) => object.name === animal);
  return find.residents.every((object) => object.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((object) => object.firstName === employeeName || object.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
 return Object.assign({}, personalInfo, associatedWith);
}

function isManager(id) {
  return employees.some((object) => id === object.managers.find((objFind) => id === objFind));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const add = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(add);
}

function animalCount(species) {
  let result = {};
  if (species === undefined) {
    animals.forEach((val) => result[val.name] = val.residents.length);
    return result;
  }
 return animals.find((object) => object.name === species).residents.length;
}

function calculator(param1) {
  let soma = 0;
  Object.entries(param1).forEach((obj) => {
    if (obj[0] === 'Adult') soma += (obj[1] * 49.99);
    if (obj[0] === 'Senior') soma += (obj[1] * 24.99);
    if (obj[0] === 'Child') soma +=  (obj[1] * 20.99);
  });
  return soma;
}

function entryCalculator(entrants) {
  if (entrants === undefined) return 0;
  let result = calculator(entrants);
  return result;
}

function animalMap(options) {

  
}


function schedule(dayName) {
  return Object.entries(hours)
  dayName.filter(())

}
console.log(schedule());


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
