/*
eslint no-unused-vars: [
  "error",
  {
    "args": 'none',
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

function animalsByIds(...parametro) {
  const filtro = data.animals.filter((id, index) => id.id === parametro[index]);
  return filtro;
}

function animalsOlderThan(animal, age) {
  const especie = data.animals.find((a) => a.name === animal);
  return especie.residents.every((b) => b.age > age);
}

function employeeByName(employeeName) {
  const resultado = data.employees
    .find((a) => a.firstName === employeeName || a.lastName === employeeName);
  if (!employeeName) {
    return {};
  }
  return resultado;
}

function createEmployee(personalInfo, associatedWith) {
  const obj = { ...personalInfo, ...associatedWith };
  return obj;
}

function isManager(id) {
  return data.employees
    .some((employ) => employ.managers
      .some((a) => a === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const info = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(info);
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acumulator, current) =>
      Object.assign(acumulator, {
        [current.name]: current.residents.length,
      }), {});
  }
  const especie = data.animals
    .find((a) => a.name === species);
  const somaAnimais = especie.residents.length;
  return somaAnimais;
}

function entryCalculator(entrants = 0) {
  const parametro = Object.entries(entrants);
  const precos = Object.entries(data.prices);
  let contador = 0;
  parametro.forEach((element) => {
    precos.forEach((i) => {
      if (element[0] === i[0]) {
        contador += element[1] * i[1];
      }
    });
  });
  return contador;
}

function animalMap(options) {
  const apagar = options;
  return apagar;
}

function schedule(dayName) {
  const obj = Object.entries(data.hours).reduce((acc, [current, { open, close }]) => {
    acc[current] = (current === 'Monday') ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
    return acc;
  }, {});
  if (dayName) {
    return { [dayName]: obj[dayName] };
  }
  return obj;
}

function oldestFromFirstSpecies(id) {
  const idAnimal = data.employees.find((a) => a.id === id).responsibleFor[0];
  const animal = data.animals.find((i) => i.id === idAnimal);
  return Object.values(animal.residents.sort((a, b) => b.age - a.age)[0]);
}

function increasePrices(percentage) {
  const arrayPrices = Object.entries(data.prices);

  arrayPrices.forEach((element) => {
    data.prices[element[0]] = Math.ceil(((element[1] * (percentage / 100))
      + element[1]) * 100) / 100;
  });
  return data.prices;
}

function employeeCoverage(idOrName) {
  // const primeiroNomeFuncionario = data.employees
  // .find((a) => a.id === idOrName || a.firstName === idOrName || a.lastName === idOrName).firstName;
  // const segundoNomeFuncionario = data.employees
  // .find((a) => a.id === idOrName || a.firstName === idOrName || a.lastName === idOrName).lastName;
  // const idAnimaisFuncionario = data.employees
  // .find((a) => a.id === idOrName || a.firstName === idOrName || a.lastName === idOrName).responsibleFor;

  const todosOsAnimais = idOrName;
  return todosOsAnimais;
}
console.log(employeeCoverage());

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
