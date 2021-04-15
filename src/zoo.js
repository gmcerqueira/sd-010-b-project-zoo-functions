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

function animalsByIds(...args) {
  /**
   * Função recebe parametros, que são transformados em um array
   * caso não tenha sido passado nenhum parâmetro (sem length), então a função
   * retorna um array vazio.
   */
  const { animals } = data;
  let resultado = null;
  if (args.length) {
    resultado = animals.filter((animal, index) => animal.id === args[index]);
  } else {
    resultado = [];
  }
  return resultado;
}

function animalsOlderThan(especie, idadeMinima) {
  /**
   * Função recebe especie e idadeMinima, o array de objetos animals é filtrado
   * pela especie, retornando um array de tamanho 1, e esse estão a chave residents
   * e passado um every para saber se todos os animais tem a idade mínima
   */
  const { animals } = data;
  const resultado = animals
    .filter((animal) => animal.name === especie)[0]
    .residents.every((element) => element.age >= idadeMinima);
  return resultado;
}

function employeeByName(nomeFuncionario) {
  /**
   * Função pode receber uma string ou não receber nada
   * Filtro faz um object destructing pegando as chaves lastName e FirstName
   */
  const { employees } = data;
  if (typeof nomeFuncionario !== 'undefined') {
    const filtro = employees.filter(({ lastName, firstName }) => {
      const resultado = lastName === nomeFuncionario || firstName === nomeFuncionario;
      return resultado;
    });
    return filtro[0];
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const { employees } = data;
  let resultado = false;
  employees.forEach(({ managers }) => managers.forEach((element) => {
    if (element === id) {
      resultado = true;
    }
  }));
  return resultado;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const obj = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(obj);
}

function animalCount(especie = false) {
  const { animals } = data;
  const chaves = animals.map((element) => element.name);
  const valores = animals.map((element) => element.residents.length);
  const resultado = {};
  chaves.forEach((chave, index) => {
    resultado[chave] = valores[index];
  });
  if (especie === false) {
    return resultado;
  }
  return resultado[especie];
}

function entryCalculator(entrants = 0) {
  const { prices } = data;
  const { Adult: valorAdulto, Senior: valorSenior, Child: valorChild } = prices;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const valorFinal = valorAdulto * Adult + valorChild * Child + valorSenior * Senior;
  return valorFinal;
}

// NÃO RESOLVIDO
// function animalMap(options) {
//   // seu código aqui
// }

// >---> ITEM 10
function aberturasFn(valoresObj) {
  const aux = [];
  valoresObj.forEach((element) => {
    aux.push(element.open);
  });
  return aux;
}
function fechamentosFn(valoresObj) {
  const aux = [];
  valoresObj.forEach((element) => {
    aux.push(element.close % 12);
  });
  return aux;
}

function opt1() {
  const { hours } = data;
  const chaves = Object.keys(hours);
  const valoresObj = Object.values(hours);
  const aberturas = aberturasFn(valoresObj);
  const fechamentos = fechamentosFn(valoresObj);
  const resultado = {};
  const construcaoSaida = (element, index) => {
    if (aberturas[index] === 0 && fechamentos[index] === 0) {
      resultado[element] = 'CLOSED';
    } else {
      resultado[element] = `Open from ${aberturas[index]}am until ${fechamentos[index]}pm`;
    }
  };
  chaves.forEach((element, index) => construcaoSaida(element, index));
  return resultado;
}

function schedule(dayName = 0) {
  if (dayName === 0) {
    return opt1();
  }
  const escolherDia = opt1();
  const aux = {};
  aux[dayName] = escolherDia[dayName];
  return aux;
}
// >---> ITEM 11
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
