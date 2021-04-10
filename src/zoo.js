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

function animalsByIds(...ids) {
  // seu código aqui
  // 1° buscar as especies de animais por ID, Retornar um array contendo as especies referentes aos IDS, fazer com que receba mais de 1 ID
  // const teste = (...ids) => ids.animals.filter(((animal) => (animal.id === ids)));
  // return teste;
  // return animals.filter((animal) => (animal.id === ids)),{}
  const {
    animals,
  } = data;
  if (ids[1] !== undefined) {
    const idAnimal1 = animals.filter((animal) => (animal.id === ids[0]));
    const idAnimal2 = animals.filter((animal) => (animal.id === ids[1]));
    return idAnimal1.concat(idAnimal2);
  }
  return animals.filter((animal) => (animal.id === ids[0]));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  // 1º buscar o nome de todas as especie,2° puxar de uma especie separada, 3° criar parametro de idade minima para ser puxado, 4°
  const procuraAnimal = data.animals.find((furry) => (furry.name === animal));
  const procuraIdade = procuraAnimal.residents.map((idade) => ((idade.age >= age)));
  return procuraIdade.every((idades) => (idades === true));
  // return teste;
}

function employeeByName(employeeName) {
  // seu código aqui
  // Agradecimentos ao Rafael Guimieri
  const {
    employees,
  } = data;
  if (employeeName !== undefined) {
    return employees.find((nm) => (nm.firstName === employeeName || nm.lastName === employeeName));
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  // 1° verificar 1 pessoa dado o parametro
  // 2°verificar o seu cargo de gerencia
  // let resultado = data.employees.filter((element) => element.managers.forEach((item) => (item === id) ? true : false));
  // return resultado;
  let cont = 0;
  data.employees.filter((manager) => manager.managers.forEach((item) => {
    if (item === id) {
      cont += 1;
    }
  }));
  if (cont > 0) {
    return true;
  }
  return false;
}
// Concluido com a Colaboração de Daniel ROberto
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // agradecimentos ao Daniel Roberto
  const {
    employees
  } = data;
  const teste1 = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  }
  if (managers === undefined) {
    teste1.managers = []
  }
  if (responsibleFor === undefined) {
    teste1.responsibleFor = []
  }
  return employees.push(teste1);
}

function animalCount(species) {
  // agradecimentos, dainel roberto
  const {
    animals
  } = data;
  if (species !== undefined) {
    return animals.find((animal) => animal.name === species).residents.length;
  }
  if (species === undefined) {
    return animals.reduce((call, qtd) => {
      call[qtd.name] = qtd.residents.length;
      return call;
    }, {})
  };
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined) {
    return 0;
  }
  const teste3 = Object.keys(entrants);
  let total = 0;
  teste3.forEach((key) => {
    const result = data.prices[key] * entrants[key];
    total += result;
  });
  return total;
}
// 1° Sem parametros, retorna animais categorizados por lozalização.
function semParametro() {

  return data.animals.reduce((acc, state) => {
    if (!acc[state.location]) {
      acc[state.location] = [];
    }
    acc[state.location].push(state.name);
    return acc;
  }, {});
}
// 2° Com a opção 'includes: true' especificada, retorna nomes de animais.
function includesParametro() {

  return data.animals.reduce((acc, state) => {
    if (!acc[state.location]) {
      acc[state.location] = [];
    }
    return acc;
  })
}
console.log(includesParametro());
function animalMap(options) {
  // seu código aqui

  if (!options) {
    return semParametro();
  }
  if (Object.values(options)[0] === true) {}
  // if(Object.values(options)[1] === true){
  //   return `o cara é sortudo sim`;
  // }
  // return final;
}
// console.log(animalMap());

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

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
