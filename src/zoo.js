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

const { animals, employees, prices, hours } = require('./data');
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
  return { ...personalInfo, ...associatedWith };
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
    const resultado = ({ ...acc, [name]: residents.length });
    return resultado;
  }, {});

  const oneSpecie = animals.find((item) => item.name === species);

  if (!species) {
    return allSpecies;
  } return oneSpecie.residents.length;
}

const entryCalculator = (entrants) => {
  if (entrants) {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return ((Adult * 49.99) + (Child * 20.99) + (Senior * 24.99));
  }
  return 0;
};

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  // seu código aqui
  const diasSemana = Object.keys(hours);
  const horarios = Object.values(hours);
  const mensagem = horarios.map(({ open, close }) => `Open from ${open}am until ${close - 12}pm`);
  mensagem[6] = 'CLOSED';
  const cronograma = diasSemana.reduce((acc, weekDay, index) => {
    const resultado = ({ ...acc, [weekDay]: mensagem[index] });
    return resultado;
  }, {});
  if (!dayName) {
    return cronograma;
  }
  return ({ [dayName]: cronograma[dayName] });
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const funcionario = employees.find((item) => item.id === id);
  const primeiroAnimal = funcionario.responsibleFor[0];
  const selectedAnimal = animals.find((item) => item.id === primeiroAnimal);
  const oldestAnimal = selectedAnimal.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldestAnimal[0]);
}

function increasePrices(percentage) {
  // seu código aqui
  prices.Adult += prices.Adult * (percentage / 100);
  prices.Adult = Math.round(prices.Adult * 100) / 100;
  prices.Child += prices.Child * (percentage / 100);
  prices.Child = Math.round(prices.Child * 100) / 100;
  prices.Senior += prices.Senior * (percentage / 100);
  prices.Senior = Math.round(prices.Senior * 100) / 100;
  return prices;
}

// function employeeCoverage(id) {
//   const funcionarios = employees.reduce((acc, funcionario, index) => {
//     const name = `${funcionario.firstName} ${funcionario.lastName}`;
//     const lista = [];
//     const listResponsavel = funcionario.responsibleFor.map((item) => {
//       lista.push(item);
//       const listaConvertida = lista.filter((ids) => animals.find((animal) => animal.id === ids));
//     });
//     const resultado = ({ ...acc, [name]: lista });
//     return resultado;
//   }, {});
//   return funcionarios;
// }
// console.log(employeeCoverage());

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
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
