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

const { animals, employees, hours, prices } = require('./data');

function animalsByIds(...animalId) {
  return animalId.map((objectMap) => animals.find((objectFind) => objectMap === objectFind.id));
}

function animalsOlderThan(animal, age) {
  const find = animals.find((object) => object.name === animal);
  return find.residents.every((object) => object.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((obj) => obj.firstName === employeeName || obj.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((object) => id === object.managers.find((objFind) => id === objFind));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const add = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(add);
}

function animalCount(species) {
  const result = {};
  if (species === undefined) {
    animals.forEach((val) => { result[val.name] = val.residents.length; });
    return result;
  }
  return animals.find((object) => object.name === species).residents.length;
}

function calculator(param1) {
  let soma = 0;
  Object.entries(param1).forEach((obj) => {
    if (obj[0] === 'Adult') soma += (obj[1] * 49.99);
    if (obj[0] === 'Senior') soma += (obj[1] * 24.99);
    if (obj[0] === 'Child') soma += (obj[1] * 20.99);
  });
  return soma;
}

function entryCalculator(entrants) {
  if (entrants === undefined) return 0;
  const result = calculator(entrants);
  return result;
}

// function animalMap(options) {
// }

function schedule(dayName) {
  const result = {};
  if (dayName === undefined) {
    Object.keys(hours).forEach((day) => {
      result[day] = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    });
    result.Monday = 'CLOSED';
  } else if (dayName !== 'Monday') {
    result[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close}pm`;
  } else {
    result[dayName] = 'CLOSED';
  }
  return result;
}

function oldestFromFirstSpecies(id) {
  let armazem;
  const result = employees.find((object) => object.id === id).responsibleFor[0];
  const b = animals.find((obj) => obj.id === result).residents;
  armazem = b[0].age;
  b.forEach((obj) => {
    if (obj.age >= armazem) {
      armazem = obj.age;
    }
  });
  return Object.values(b.find((obj) => obj.age === armazem));
}
// pontos são usados para objetos {}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(prices).forEach((propriedade) => {
    prices[propriedade] = (Math.round(((prices[propriedade] * ((percentage / 100) + 1)).toFixed(3)) * 100) / 100);
  })
}

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  schedule,
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
