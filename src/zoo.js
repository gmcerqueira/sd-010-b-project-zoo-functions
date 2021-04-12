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

const { animals } = require('./data');
const data = require('./data');

// function animalsByIds(ids) {
//   // seu código aqui
// }
const animais = data.animals;
const animalsByIds = (...ids) => {
  let resultado;
  if (!ids) {
    resultado = ids;
  } else {
    resultado = animais.filter((animal) => ids.includes(animal.id));
  }
  return resultado;
};

const animalsOlderThan = (animal, age) => {
  // busca na lista o animal passado no parametro
  const buscaAnimal = animais.find((ani) => ani.name === animal);
  const { residents } = buscaAnimal;
  return residents.every((criature) => criature.age > age);
};

const colaboradores = data.employees;
const employeeByName = (employeeName) => {
  if (employeeName === undefined) return {};
  return colaboradores.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
};

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = (id) => {
  const colab = colaboradores.some((trab) => trab.managers.includes(id));
  return colab;
};

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const dados = { id, firstName, lastName };
  const response = { managers, responsibleFor };
  const employ = { ...dados, ...response };
  return colaboradores.push(employ);
};

const animalCount = (species) => {
  if (species) {
    return animais.find((ani) => ani.name === species).residents.length;
  }
  return animals.reduce((accumulator, current) => {
    accumulator[current.name] = current.residents.length;
    return accumulator;
  }, {});
};

const price = data.prices;
const entryCalculator = (entrants) => {
  let resultado;
  if (!entrants) {
    resultado = 0;
  } else {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    resultado = Adult * price.Adult + Child * price.Child + Senior * price.Senior;
  }
  return resultado;
};

// function animalMap(options) {
//   // seu código aqui
// }
const convert = (hora) => {
  if (hora <= 12) {
    return hora;
  }
  return hora - 12;
};

const hora = data.hours;
const schedule = (dayName) => {
  const dias = Object.keys(hora);
  const scheduleObject = {};
  // console.log(dias);
  dias.forEach((dia) => {
    if (dia !== 'Monday') {
      scheduleObject[dia] = `Open from ${hora[dia].open}am until ${convert(hora[dia].close)}pm`;
    } else {
      scheduleObject[dia] = 'CLOSED';
    }
  });

  if (!dayName) {
    return scheduleObject;
  }
  return { [dayName]: scheduleObject[dayName] };
};

// referencia : https://github.com/tryber/sd-010-b-project-zoo-functions/pull/16/files

// return animals.reduce((accumulator, current) => {
//   accumulator[current.name] = current.residents.length;
//   return accumulator;
// }, {});
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
