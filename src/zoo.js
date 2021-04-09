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
  const { employees } = data;
  const newEmploy = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  // console.log(newEmploy);
  return employees.push(newEmploy);
}
// console.log(data.employees.length);
// addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe');
// console.log('chamada função');
// console.log(data.employees.length);
// console.log(data.employees);

// function animalCount(species) {
//   // seu código aqui
// }

// function entryCalculator(Adult = 1, Child = 1, Senior = 1, ...entrants) {
//   let saida;
//   if (entrants === undefined || Object.keys(entrants).length === 0) {
//     saida = 0;
//   }
//   const { Adult, Senior, Child } = data.prices;
//   console.log(Adult);
//   saida = ((Adult * entrants.Adult) + (Senior * entrants.Senior) + (Child * entrants.Child));
//   return saida;
// }
// console.log(entryCalculator({'Adult': 2}));

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
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
