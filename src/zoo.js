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

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const arrManager = [];
  employees.forEach((employee) => {
    const { managers } = employee;
    const trueManager = managers.find((manager) => manager === id);
    arrManager.push(trueManager);
  });
  return arrManager.some((manager) => manager !== undefined);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const lastEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(lastEmployee);
}

function animalCount(species) {
  const objAnimal = {};
  let totalAnimal = 0;
  if (species === undefined) {
    animals.forEach((animal) => {
      const countAnimal = animal.residents.length;
      objAnimal[animal.name] = countAnimal;
    });
    return objAnimal;
  }
  animals.forEach((animal) => {
    if (animal.name === species) {
      totalAnimal = animal.residents.length;
    }
  });
  return totalAnimal;
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
