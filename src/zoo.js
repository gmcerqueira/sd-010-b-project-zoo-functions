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
// mariana
const data = require('./data');

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return data.animals.filter((animal) => ids.some((id) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const result = data.animals.find((anima) => anima.name === animal);
  return result.residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  return data.employees.find((employ) => {
    const {
      firstName,
      lastName,
    } = employ;
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
  const funcionarios = data.employees;
  const encontrar = funcionarios.some((funcionario) => {
    const ehGerente = funcionario.managers.some((manager) => manager === id);
    return ehGerente;
  });
  return encontrar;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const {
    employees,
  } = data;
  const newEmploy = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmploy);
}

function animalCount(species) {
  const {
    animals,
  } = data;
  const count = {};
  if (species !== undefined) {
    return animals.find((animal) => animal.name === species).residents.length;
  }
  animals.forEach((animal) => {
    count[animal.name] = animal.residents.length;
  });
  return count;
}

function entryCalculator(...entrants) {
  if (entrants.length === 0) {
    return 0;
  }
  const {
    prices,
  } = data;
  const entradas = Object.keys(entrants[0]);
  const arr = entrants[0];
  return entradas.reduce((acc, currentValue) => acc + arr[currentValue] * prices[currentValue], 0);
}
console.log(entryCalculator({
  'Adult': 2,
  'Child': 3,
  'Senior': 1
}));

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
