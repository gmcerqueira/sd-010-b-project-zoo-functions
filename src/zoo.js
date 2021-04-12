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

const zoo = data.animals;
const funcionarios = data.employees;
const precos = data.prices;
const hrs = data.hours;

function animalsByIds(...ids) {
  return zoo.filter((animal) => ids.some((animalId) => animal.id === animalId));
}

function animalsOlderThan(animal, age) {
  const procurando = zoo.find((bicho) => bicho.name === animal);
  return procurando.residents.every((residentes) => residentes.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const nome = (emp) => emp.firstName === employeeName || emp.lastName === employeeName;
  return funcionarios.find(nome);
}

function createEmployee(personalInfo, associatedWith) {
  const novoFuncionario = { ...personalInfo, ...associatedWith };
  return novoFuncionario;
}

function isManager(id) {
  return funcionarios.some((emp) => emp.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return funcionarios.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (species === undefined) {
    const numAnimal = {};
    zoo.forEach((animal) => { numAnimal[animal.name] = animal.residents.length; });
    return numAnimal;
  }
  return zoo.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  return Object.keys(entrants).reduce((acc, tipo) => acc + entrants[tipo] * precos[tipo], 0);
}

/* function animalMap(options) {
  // seu código aqui
} */

function schedule(dayName) {
  const hrDias = {};
  const keys = Object.keys(hrs);
  keys.forEach((dia) => {
    if (dia !== 'Monday') {
      hrDias[dia] = `Open from ${hrs[dia].open}am until ${(hrs[dia].close) - 12}pm`;
    } else {
      hrDias[dia] = 'CLOSED';
    }
  });
  if (dayName) {
    return {
      [dayName]: hrDias[dayName],
    };
  }
  return hrDias;
}

/* function oldestFromFirstSpecies(id) {
  // seu código aqui
} */

/* function increasePrices(percentage) {
  // seu código aqui
} */

/* function employeeCoverage(idOrName) {
  // seu código aqui
} */

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
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
