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
// daqui pra baixo as funções são da questão 1
const validateAnimals = (element, ids) => {
  for (let index = 0; index < ids.length; index += 1) {
    if (element.id === ids[index]) {
      return element;
    }
  }
};
const validateAnimal = (element, ids) => {
  if (element.id === ids[0]) {
    return element;
  }
};
const moreThanOneId = (ids) => animals.filter((element) => validateAnimals(element, ids));
const onlyOneId = (ids) => animals.filter((element) => validateAnimal(element, ids));
// fim das funções da questão 1

// funções da questão 2
const filterAnimalNames = (element, animal) => {
  if (element.name === animal) {
    return element;
  }
};
// fim das funções da questão 2
// inicio funçoes 7
const undefinedAnimals = (animals) => {
  const newObj = {};
  animals.forEach((element) => {
    newObj[element.name] = element.residents.length;
  })
  return newObj;
}
function animalsByIds(...ids) {
  // seu código aqui
  if (ids[0] === undefined) return [];
  if (ids.length === 1) onlyOneId(ids);
  return moreThanOneId(ids);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalNames = animals.filter((element) => filterAnimalNames(element, animal));
  return animalNames[0].residents.every((element) => element.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((el) => el.firstName === employeeName || el.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  employees.personalInfo = personalInfo;
  return Object.assign(employees.personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  const arrayOfManagers = employees.map((el) => el.managers);
  const managersFlattenArray = [].concat(...arrayOfManagers);
  return managersFlattenArray.some((element) => element === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species = animals) {
  // seu código aqui
  if (species === animals) return undefinedAnimals(animals);
  for (let x = 0; x < animals.length; x += 1){
    if (animals[x].name === species) return animals[x].residents.length;
  }
}
/*

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
 */
module.exports = {
/*
  entryCalculator,
  schedule,
  animalMap,
  employeeCoverage,
  oldestFromFirstSpecies,
  increasePrices,
  */
  animalCount,
  isManager,
  animalsByIds,
  createEmployee,
  animalsOlderThan,
  employeeByName,
  addEmployee,
};
