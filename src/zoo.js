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
  const { animals } = data;
  if (ids.length === 0) {
    return ids;
  }
  const animalsList = [];
  if (ids.length > 0) {
    ids.forEach((id) => {
      const result = animals.find((animal) => animal.id === id);
      animalsList.push(result);
    });
  }
  return animalsList;
}

function animalsOlderThan(animal, age) {
  const { animals } = data;
  // uso do Find para encontrar a espécie
  const { residents } = animals.find((especie) => {
    if (animal === especie.name) {
      return true;
    }
  });
  // uso do Every para verificar a idade minima passada
  const result = residents.every((resident) => resident.age >= age);

  return result;
}

function employeeByName(employeeName) {
  const { employees } = data;
  if (employeeName === undefined) {
    return {};
  }
  // uso do Find para encontrar o primeirou ou último nome recebido por parâmetro
  const findEmployee = employees.find((employee) => {
    if (employeeName === employee.firstName) {
      return true;
    } if (employeeName === employee.lastName) {
      return true;
    }
  });
  return findEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {

}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {

}

function animalCount(species) {
  const { animals } = data;
  const especieAndPopulation = {};

  if (!species) {
   animals.forEach(({name, residents}) => {
     especieAndPopulation[name] = residents.length;
   })
   return especieAndPopulation;
  }
  const teste = animals.find(({ name }) => name === species);

  return teste.residents.length;
}

function entryCalculator(entrants = {Adult, Child, Senior}) {

}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {

}

function oldestFromFirstSpecies(id) {
  const { employees } = data;
  const findEmployee = employees.find((employee) => employee.id === id).responsibleFor[0];

  const { animals } = data;
  const findAnimal = animals.find((animal) => animal.id === findEmployee).residents;

  // https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/ -> sort()
  const oldestAnimal = findAnimal.sort((a, b) => b.age - a.age);

  const { name, sex, age } = oldestAnimal[0];

  return [name, sex, age];
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
