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

const { prices, animals } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  if (ids.length === 0) return [];
  return data.animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const filterAnimal = data.animals.find((objAnimal) => objAnimal.name === animal).residents;
  return filterAnimal.every((resident) => resident.age > age);
  // return  filterAge// tem que ser booleano
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const { employees } = data;
  const returnFind = employees.find((employee) => {
    const emploReturn = employee.firstName === employeeName || employee.lastName === employeeName;
    return emploReturn;
  });
  return returnFind;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const { employees } = data;
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
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
  const objReturn = {};
  if (!species) {
    animals.forEach(({ name, residents }) => {
      objReturn[name] = (residents.length);
    });
    return objReturn;
  }
  return animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants) {
    const peoples = Object.keys(entrants);
    return peoples.reduce((acc, curr) => acc + (prices[curr] * entrants[curr]), 0);
  }
  return 0;
}

// function animalMap(options) {
//   // seu código aqui
// }

// Consultei o repositório do Thiago Marchini para resolver essa parte, Pois estava com dificuldades de usar o forEach neste caso
// https://github.com/tryber/sd-010-b-project-zoo-functions/blob/487bfb2d0dc0effbb7ea6ddec52c091b4518e0bf/src/zoo.js
function schedule(dayName) {
  // const { hours } = data;
  const resultObject = {};
  const hours = Object.entries(data.hours);
  hours.forEach(([day, { open, close }]) => {
    resultObject[day] = `Open from ${open}am until ${close - 12}pm`;
    resultObject.Monday = 'CLOSED';
  });
  if (!dayName) { return resultObject; }
  if (dayName) {
    const object = {};
    object[dayName] = resultObject[dayName];
    return object;
  }
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  // função que analisa a maior idade
  const maxAge = (array) => Math.max(...array);
  const { employees } = data;
  // busca o a primeira responsabilidade fo empregado
  const firstResp = employees.find((employee) => employee.id.includes(id)).responsibleFor[0];
  // busca a especie de animal que foi achada anteriormente
  const species = animals.find((animal) => animal.id.includes(firstResp)).residents;
  //  cria um array com todas as idades dos animais da especie
  const agesAnimals = species.reduce((acc, curr) => [...acc, curr.age], []);
  // encontra o animal mais velho
  const olderAnimal = species.filter((animal) => animal.age === maxAge(agesAnimals))[0];
  return [olderAnimal.name, olderAnimal.sex, olderAnimal.age];
  // Codigo necessita de refatoração
}

// function increasePrices(percentage) {
//   // seu código aqui (random()*100/100)
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
  oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
