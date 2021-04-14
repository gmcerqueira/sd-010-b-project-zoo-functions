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

const { animals, hours } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // tive ajuda de uma pessoa desenvolvedora
  if (ids.length === 0) return [];
  return data.animals.filter((animal) => ids.some((id) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const getAnimal = data.animals.find((ani) => ani.name === animal);
  return getAnimal.residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((employee) => {
    const {
      firstName,
      lastName,
    } = employee;
    return firstName === employeeName || lastName === employeeName;
  });
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  const result = {};
  if (species === undefined) {
    animals.forEach((animal) => {
      result[animal.name] = animal.residents.length;
    });
  } else {
    return animals.find((specie) => species === specie.name).residents.length;
  }
  return result;
}

function entryCalculator(entrants) {
  // referencia https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  if (entrants) {
    const visitor = Object.keys(entrants);
    return visitor.reduce((acumulator, currentValue) =>
      acumulator + (data.prices[currentValue] * entrants[currentValue]), 0);
  }
  return 0;
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  const hoursDays = Object.keys(hours);
  const result = {};
  hoursDays.forEach((weekDays) => {
    if (weekDays !== 'Monday') {
      result[weekDays] = `Open from ${hours[weekDays].open}am`
      + ` until ${hours[weekDays].close - 12}pm`;
    } else {
      result[weekDays] = 'CLOSED';
    }
  });
  if (!dayName) {
    return result;
  }
  return { [dayName]: result[dayName] };
}

function oldestFromFirstSpecies(id) {
  const employer = employees.find((employ) => employ.id === id).responsibleFor[0];
  const animalManager = animals.find((animal) => animal.id === employer).residents;
  const oldAge = animalManager.reduce((acc, curr) => {
    if (curr.age > acc) {
      return curr.age;
    }
    return acc;
  }, 0);
  const matchedAge = animalManager.find((resident) => resident.age === oldAge);
  const arrayAnimal = Object.values(matchedAge);
  return arrayAnimal;
}


function increasePrices(percentage) {
  const { prices } = data;
  const { Adult, Child, Senior } = prices;
  prices.Adult = Math.round(((Adult) + (Adult * (percentage / 100))) * 100) / 100;
  prices.Child = Math.round(((Child) + (Child * (percentage / 100))) * 100) / 100;
  prices.Senior = Math.round(((Senior) + (Senior * (percentage / 100))) * 100) / 100;

  return prices;
}

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
//   animalMap,
  schedule,
  animalCount,
  animalsByIds,
  animalsOlderThan,
  employeeByName,
  createEmployee,
  isManager,
  addEmployee,
  entryCalculator,
  increasePrices,
//   employeeCoverage,
//   oldestFromFirstSpecies,
};
