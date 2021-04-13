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

function animalsByIds(...ids) {
  return animals.filter((getId) => ids.some((animalId) => (animalId === getId.id)));
}

function animalsOlderThan(animal, age) {
  const filteredAnimal = animals.find((animalName) => animalName.name === animal);
  return (filteredAnimal.residents.every((animalAge) => animalAge.age >= age));
}

function employeeByName(employeeName) {
  let result;
  const fname = (name) => name.firstName === employeeName;
  const lname = (name) => name.lastName === employeeName;
  if (employeeName) {
    result = employees.find((name) => (fname(name) || lname(name)));
  } else {
    result = {};
  }
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const listManagers = [];
  employees.forEach((managers) => listManagers.push(...managers.managers));
  return listManagers.some((ids) => ids === id);
}
isManager();
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}
const myObj = {};
function animalCount(species) {
  if (typeof species === 'undefined') {
    animals.forEach((obj, index) => {
      myObj[obj.name] = animals[index].residents.length;
    });
  } else {
    const animal = animals.find((specie) => species === specie.name);
    return animal.residents.length;
  }
  return myObj;
}
console.log(animalCount('lions'));
// function entryCalculator(entrants) {
//   // seu código aqui
// }

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

function oldestFromFirstSpecies(id) {
  const animalId = employees.find((employeeId) => (employeeId.id === id)).responsibleFor[0];
  const animalArray = animals.find((getId) => (getId.id === animalId)).residents;
  const oldestAnimal = animalArray.sort((yearA, yearB) => yearB.age - yearA.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

function increasePrices(percentage) {
  const values = Object.values(prices);
  const keys = Object.keys(prices);
  const increase = (price, index) => {
    prices[keys[index]] = +(Math.ceil((percentage + 100) * price) * 0.01).toFixed(2);
  };
  values.forEach(increase);
}

// function employeeCoverage(idOrName) {
//   let result;
//   const fname = (employee) => employee.firstName === idOrName;
//   const lname = (employee) => employee.lastName === idOrName;
//   const id = (employee) => employee.id === idOrName;
//   if (idOrName) {
//     result = employees.find((employee) => (fname(employee) || lname(employee) || id(employee)));
//   } else {
//     result = {};
//   }
//   return result;
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
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
