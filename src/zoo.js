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

// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function animalCount(species) {
//   // seu código aqui
// }

// function entryCalculator(entrants) {
//   // seu código aqui
// }

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
  // addEmployee,
  // isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
