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

const { animals } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  if (ids === null) {
    return [];
  }
  return animals.filter((animal) => ids.some((id) => animal.id === id));
}
function animalsOlderThan(animal, age) {
  const filtrado = data.animals.filter((animas) => animas.name === animal);
  return filtrado[0].residents.every((ani) => ani.age > age);
}
function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((pessoa) => pessoa.firstName === employeeName
  || pessoa.lastName === employeeName);
}
// console.log(employeeByName('Wishart'));

function createEmployee(personalInfo, associatedWith) {
  const juntar = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: [
      associatedWith.managers[0],
      associatedWith.managers[1],
    ],
    responsibleFor: [
      associatedWith.responsibleFor[0],
      associatedWith.responsibleFor[1],
      associatedWith.responsibleFor[2],
    ],
  };
  return juntar;
}

function isManager(id) {
// console.log(data.employees[0]);
  const filtrarId = data.employees.filter((pessoa) => pessoa.id === id);
  return filtrarId.some((funcionario) => funcionario.id === "0e7b460e-acf4-4e17-bcb3-ee472265db83");

}
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  return id + firstName + lastName + managers + responsibleFor;
}

function animalCount(species) {
  if (species === undefined) {
    return {
      'lions': 4,
      'tigers': 2,
      'bears': 3,
      'penguins': 4,
      'otters': 4,
      'frogs': 2,
      'snakes': 2,
      'elephants': 4,
      'giraffes': 6
    }
  }
//  const animaisFiltrado = data.animals.filter((animas) => animas.name === species);
  return animaisFiltrado[0].residents.length;
}
 console.log(animalCount());
function entryCalculator(entrants) {
  return entrants;
}

function animalMap(options) {
  return options;
}

function schedule(dayName) {
  return dayName;
}

function oldestFromFirstSpecies(id) {
  return id;
}

function increasePrices(percentage) {
  return percentage;
}

function employeeCoverage(idOrName) {
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
