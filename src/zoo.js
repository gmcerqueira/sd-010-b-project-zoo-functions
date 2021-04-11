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
  return data.animals.filter((value, index) => value.id === ids[index]);// verificar o metodo includes
}

function animalsOlderThan(animal, age) {
  return data.animals.find((value) => value.name === animal)
    .residents.every((idade) => idade.age > age);
}

function employeeByName(employeeName) {
  const pessoa = data.employees.find((value) =>
    (value.firstName === employeeName || value.lastName === employeeName ? value : false)) || {};
  return pessoa;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return data.employees.some((value) => value.managers.some((someValue) =>
    (someValue === id)));// verificar o metodo includes.
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  const resul = data.animals.find((value) => value.name === species);
  const retorno = {};
  if (!resul) {
    data.animals.forEach(({ name, residents }) => {
      retorno[name] = residents.length;
    });
    return retorno;
  }
  return resul.residents.length;
}

function entryCalculator(entrants = 0) {
  const valores = [];
  const precos = Object.entries(data.prices);
  precos.forEach((value) => {
    const quantidadeEntrada = entrants[value[0]];
    if (quantidadeEntrada) {
      valores.push(quantidadeEntrada * value[1]);
    }
  });
  return valores.reduce((acc, curr) => acc + curr, 0);
}

//-------------------------------------------------------------------------------------
function dontOption() {
  return data.animals.reduce((acc, { location, name }) => {
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(name);
    return acc;
  }, {});
}
function pegar(animal, sorted, sex) {
  let { residents } = data.animals.filter((nomeAnimal) => nomeAnimal.name === animal)[0];
  if (sex) {
    residents = residents.filter((resident) => resident.sex === sex);
  }
  const result = residents.map((resident) => resident.name);
  if (sorted) result.sort();

  return { [animal]: result };
}

function includeNamesAndSortAndSex(animals, sorted, sex) {
  const resul = Object.entries(animals).reduce((acc, [key, arrName]) => {
    acc[key] = arrName.map((animal) => pegar(animal, sorted, sex));
    return acc;
  }, {});
  return resul;
}

function animalMap(options = {}) {
  const { includeNames, sorted, sex } = options;

  const animals = dontOption();

  if (includeNames) {
    return includeNamesAndSortAndSex(animals, sorted, sex);
  }
  return animals;
}

//------------------------------------------------------------------------------------------
function schedule(dayName) {
  // seu código aqui
  const { hours } = data;
  const horario = Object.entries(hours);
  const dias = horario.reduce((acc, [dia, { open, close }]) => {
    acc[dia] = dia === 'Monday' ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
    return acc;
  }, {});
  if (dayName) {
    return { [dayName]: dias[dayName] };
  }
  return dias;
}

function oldestFromFirstSpecies(id) {
  const animalEspecie = data.employees.find((value) => value.id === id).responsibleFor[0];
  const animal = data.animals.find((value) => value.id === animalEspecie).residents;
  return Object.values(animal.sort((a, b) => b.age - a.age)[0]);
}

function increasePrices(percentage) {
  const precos = Object.entries(data.prices);
  precos.forEach((value) => {
    const valorRedondo = +(Math.ceil((percentage + 100) * value[1] * 0.01 * 100) / 100);
    data.prices[value[0]] = valorRedondo;
  });
  return data.prices;
}

function employeeCoverage(idOrName) {
  const pessoaAnimal = data.employees.reduce((acc, { id, firstName, lastName, responsibleFor }) => {
    acc[`${firstName} ${lastName}`] = responsibleFor.map((idAnimal) => data.animals
      .find((idFind) => idFind.id === idAnimal).name);
    return acc;
  }, {});
  if (!idOrName) return pessoaAnimal;
  const pessoas = data.employees.find(({ id, firstName, lastName }) =>
    id === idOrName || firstName === idOrName || lastName === idOrName);
  const value = pessoaAnimal[`${pessoas.firstName} ${pessoas.lastName}`];
  const key = `${pessoas.firstName} ${pessoas.lastName}`;
  return { [key]: value };
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
