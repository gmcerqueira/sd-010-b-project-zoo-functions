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

function animalsByIds(...ids) {
  let array = [];
  ids.forEach((parmItem) => animals.filter((element) => {
    if (parmItem === element.id) {
      array.push(element);
    }
  }));
  return array;
}

function animalsOlderThan(animal, age) {
  const array = animals.filter((element) => element.name == animal);
  let boo = '';
  array.forEach((element) => {
    boo = element.residents.every((element) => element.age > age);
  })
  return boo;
}

function employeeByName(employeeName) {
  let employ = employees.find((element) => element.firstName == employeeName|| element.lastName == employeeName);
  let obj = {...employ};
  return obj;
}

function createEmployee(personalInfo, associatedWith) {
  let obj = {...personalInfo, ...associatedWith};
  return obj;
}

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  let obj = {id: id, firstName: firstName, lastName: lastName, managers: managers, responsibleFor: responsibleFor};
  return employees.push(obj);
} 
function animalCount(species) {
  let number = 0;
  let obj = {};
  animals.forEach((element) => {
    if (element.name == species) {
      return number = element.residents.length;
    } else if (species === undefined) {
      return obj[element.name] = element.residents.length;
    }
  })
  if (species == undefined) {
    return obj;
  } else {
  return number;
  }
} animalCount();

function entryCalculator(entrants) {
  let count = 0;
  if (entrants == undefined || Object.keys(entrants).length < 1) {
    return 0;
  } else {
    for (let param in entrants) {
      for (let keys in prices) {
        if (param == keys) {
          count += entrants[param] * prices[keys];
        }
      }
    }
  }
  return count;
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
