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

const { animals, employees } = require('./data');
// const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const result = animals.filter((item) => (ids.includes(item.id)));
  return result;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const species = animals.find((item) => item.name === animal);

  const animalsOlder = species.residents.every((item) => item.age > age);
  return animalsOlder;
}

function employeeByName(employeeName) {
  function findEmployee(item) {
    return item.lastName === employeeName || item.firstName === employeeName;
  }
  const empregado = employees.find((item) => findEmployee(item));
  return employeeName ? empregado : {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const funcionarioEscolhido = employees.find((item) => item.id === id).id;
  return employees.some((item) => item.managers.includes(funcionarioEscolhido));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  // this: https://dev.to/_bigblind/quick-tip-transform-an-array-into-an-object-using-reduce-2gh6 helped me A LOT!
  const allSpecies = animals.reduce((acc, { name, residents }) => {
    return { ...acc, [name]: residents.length };
  }, {});

  const oneSpecie = animals.find((item) => {
    if (item.name === species) {
      return item;
    }
  });

  if (!species) {
    return allSpecies;
  } return oneSpecie.residents.length;
}
console.log(animalCount());
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
