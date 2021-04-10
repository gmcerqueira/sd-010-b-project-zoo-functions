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
  let newsIds = [];
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    newsIds.push(animals.find((animal) => animal.id === ids[0]));
    return newsIds;
  }
  const requisito1 = animals.filter((animal, item) => animal.id === ids[item]);
  newsIds = [...newsIds, ...requisito1];
  console.log(newsIds);
  return newsIds;
}

function animalsOlderThan(animal, age) {
  let olderThan = false;
  olderThan = animals.find((item) => item.name === animal)
    .residents.every((residents) => residents.age >= age);
  return olderThan;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employerName = employees.find((employer) => (
    employer.firstName === employeeName) || (employer.lastName === employeeName));
  return employerName;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmploy = {
    ...personalInfo, ...associatedWith,
  };
  return newEmploy;
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newPerson = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newPerson);
}

function animalCount(species) {
  const numberAnimals = {};
  if (species !== undefined) {
    return animals.find((specie) => species === specie.name).residents.length;
  }
  animals.forEach((animal) => {
    numberAnimals[animal.name] = animal.residents.length;
  });

  return numberAnimals;
}

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
