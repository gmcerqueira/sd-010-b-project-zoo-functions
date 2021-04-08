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
  const animalsId = [];
  if (ids.length === 0) {
    return [];
  }
  ids.forEach((id) => {
    const res = animals.filter((animal) => animal.id === id);
    animalsId.push(res[0]);
  });
  return animalsId;
}

function animalsOlderThan(animal, age) {
  let verifyAge = false;
  animals.forEach((element) => {
    const { residents, name } = element;
    if (name === animal) {
      verifyAge = residents.every((resident) => resident.age >= age);
    }
  });
  return verifyAge;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const name = employees.filter((employee) => {
    const { firstName, lastName } = employee;
    return (firstName === employeeName || lastName === employeeName);
  });
  return name[0];
}

// console.log(employeeByName('Wishart'))

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function animalCount(species) {
//   // seu código aqui
// }

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
  // animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  // isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
