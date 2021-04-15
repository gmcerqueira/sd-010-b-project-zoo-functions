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

// Requisito 1
function animalsByIds(idone, idtwo) {
  const response = [];

  if (idone === undefined && idtwo === undefined) { return response; }

  data.animals.forEach((animals) => {
    if (animals.id === idone || animals.id === idtwo) {
      console.log(animals);
      response.push(animals);
    }
  });

  return response;
}

// Requisito 2
function animalsOlderThan(animal, age) {
  let animalsresidents = []; let response = true;

  data.animals.forEach((animals) => {
    if (animals.name === animal) { animalsresidents = animals.residents; }
  });

  animalsresidents.forEach((residents) => {
    if (residents.age <= age) {
      response = false;
    }
  });

  return response;
}

// Requisito 3
function employeeByName(employeeName) {
  let response = {};

  if (employeeName === undefined) { return response; }

  data.employees.forEach((employees) => {
    if (employees.firstName === employeeName || employees.lastName === employeeName) {
      response = employees;
    }
  });

  return response;
}

// Requisito 4
function createEmployee(personalInfo, associatedWith) {
  // Cria um objeto com as propriedades passadas por parâmetro
  const response = {
    ...personalInfo,
    ...associatedWith,
  };

  return response;
}

// Requisito 5
function isManager(id) {
  // Verifica se ao menos um funcionário possui o id informado na chave managers
  const response = data.employees.some((employee) => employee.managers.includes(id));

  return response;
}

// Requisito 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // Utiliza os parâmetros passados para criar um funcionário
  data.employees.push({
    id, firstName, lastName, managers, responsibleFor,
  });
}

// Requisito 7
function animalCount(species) {
  let response;

  if (!species) {
    const obj = data.animals.reduce((acc, cur) => {
      const { name } = cur;
      response = { ...acc, [name]: cur.residents.length };
      return response;
    }, {});

    return obj;
  }

  const amount = data.animals.find((animal) => animal.name === species).residents.length;
  return amount;
}

// Requisito 8
function entryCalculator(entrants) {
  if (entrants) {
    const peoples = Object.keys(entrants);

    return peoples.reduce((acc, cur) => acc + (data.prices[cur] * entrants[cur]), 0);
  }
  return 0;
}

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
  entryCalculator,
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
