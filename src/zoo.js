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

const animais = data.animals;

const empregados = data.employees;

const precos = data.prices;

const agenda = data.hours;

function animalsByIds(...ids) {
  return ids.map((id) => animais.find((animal) => id === animal.id)); // código feito com ajuda de Alessandra Rezende
}

function animalsOlderThan(animal, age) {
  const selecionado = animais.find((el) => el.name === animal);
  const { residents } = selecionado;
  return residents.every((el) => el.age > age);
}

function employeeByName(employeeName) {
  if (!employeeByName) return {};
  const encontrado = empregados.find((empregado) =>
    ((empregado.firstName === employeeName) || (empregado.lastName === employeeName)));
  if (!encontrado) return {};
  return encontrado;
}
function createEmployee(personalInfo, associatedWith) {
  const empregado = { ...personalInfo, ...associatedWith };
  return empregado;
}

function isManager(id) {
  return empregados.some((el) => el.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  empregados.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const contaAnimais = {};
  animais.forEach(({ name, residents }) => {
    contaAnimais[name] = residents.length;
  });
  if (!species) return contaAnimais;
  return contaAnimais[species];
}

function entryCalculator(entrants = 0) {
  let valor = 0;
  if (entrants.Adult) { valor += entrants.Adult * precos.Adult; }
  if (entrants.Senior) { valor += entrants.Senior * precos.Senior; }
  if (entrants.Child) { valor += entrants.Child * precos.Child; }

  return valor;
}

const encontraNomeAnimal = (nomeAnimal, sorted, sex) => {
  let saida = animais.find((animal) => animal.name === nomeAnimal);
  saida = saida.residents;

  if (typeof sex === 'string') {
    saida = saida.filter((animal) => animal.sex === sex);
  }
  saida = saida.map((resident) => resident.name);
  if (sorted) saida.sort();
  return { [nomeAnimal]: saida };
};

function animalMap(options = {}) {
  const { includeNames = false, sorted = false, sex } = options;

  let saida = animais.reduce((acc, animal) => {
    const { name, location } = animal;
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(name);
    return acc;
  }, {});

  if (includeNames) {
    saida = Object.entries(saida).reduce((acc, [chave, nomeAnimal]) => {
      acc[chave] = nomeAnimal.map((name) => encontraNomeAnimal(name, sorted, sex));
      return acc;
    }, {});
  }
  return saida;
}

function schedule(dayName) {
  const dias = Object.keys(agenda);
  const mensagem = {};
  dias.forEach((dia) => {
    const { open, close } = agenda[dia];
    (mensagem[dia] = `Open from ${open}am until ${close - 12}pm`);
  });
  mensagem.Monday = 'CLOSED';
  if (!dayName) return mensagem;
  return { [dayName]: mensagem[dayName] };
}

function oldestFromFirstSpecies(id) {
  const empregado = empregados.find((el) => el.id === id);
  const animalGerenciado = empregado.responsibleFor[0];
  const listaAnimais = animais.find((el) => el.id === animalGerenciado);
  const animalMaisVelho = listaAnimais.residents.reduce((maior, atual) =>
    (maior.age > atual.age ? maior : atual));
  const saida = [animalMaisVelho.name, animalMaisVelho.sex, animalMaisVelho.age];
  return saida;
}

function increasePrices(percentage) {
  const aumento = (percentage / 100);
  data.prices.Adult *= (1 + aumento);
  data.prices.Child *= (1 + aumento);
  data.prices.Senior *= (1 + aumento);
  data.prices.Adult = Math.round(data.prices.Adult * 100) / 100;
  data.prices.Child = Math.round(data.prices.Child * 100) / 100;
  data.prices.Senior = Math.round(data.prices.Senior * 100) / 100;
}

function employeeCoverage(idOrName) {
  const lista = {};
  empregados.forEach(({ firstName, lastName, responsibleFor }) => {
    const chave = `${firstName} ${lastName}`;
    const listaAnimal = animalsByIds(...responsibleFor);
    lista[chave] = listaAnimal.map((ani) => ani.name); // feito com ajuda de Matheus Bodra
  });
  if (!idOrName) return lista;
  const empregado = empregados.find((emp) =>
    (emp.id === idOrName) || emp.firstName === idOrName || emp.lastName === idOrName);
  const chaveEmp = `${empregado.firstName} ${empregado.lastName}`;
  const saida = { [chaveEmp]: lista[chaveEmp] };
  return saida;
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
