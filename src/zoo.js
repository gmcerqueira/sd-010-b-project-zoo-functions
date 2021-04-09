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

const {
  animals,
  employees,
} = require('./data');
const data = require('./data');
// let idade = data.animals;
// console.log(idade)

function animalsByIds(ids, ids2) {
  if (ids2 !== undefined) {
    const animal1 = data.animals.filter((animal) => (animal.id === ids));
    const animal2 = data.animals.filter((animal) => (animal.id === ids2));
    return animal1.concat(animal2);
  }
  return data.animals.filter((animal) => (animal.id === ids));
}

function animalsOlderThan(animal, age) {
  const searchBixo = animals.find((bixo) => bixo.name === animal).residents;
  return searchBixo.every((anim) => anim.age >= age);
}

// Feito com auxilio de Rafael Gumieri

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((emp) => (emp.firstName === employeeName || emp.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  const bodega = {
    ...personalInfo,
    ...associatedWith,
  };
  return bodega;
}

function isManager(id) {
  let sadBoy = 0;
  employees.filter((gerente) => gerente.managers.forEach((item) => {
    if (item === id) {
      sadBoy += 1;
    }
  }));
  if (sadBoy > 0) {
    return true;
  }
  return false;
}
// Pedro Henrique e eu fizemos juntos

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
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
