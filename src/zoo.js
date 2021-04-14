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

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  let output;
  animals.forEach((element) => {
    if (element.name === animal) {
      output = element.residents.every((values) => values.age >= age);
    }
  });
  return output;
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((par) => par.firstName === employeeName || par.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return data.employees.some((worker) => worker.managers.find((managerId) => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  const allAnimalsAndQuantity = {};
  if (!species) {
    animals.forEach(({ name, residents }) => {
      allAnimalsAndQuantity[name] = residents.length;
    });
    return allAnimalsAndQuantity;
  }
  return animals.find((param) => param.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) {
    return 0;
  }
  let priceSum = 0;
  const paramKeys = Object.keys(entrants);
  paramKeys.forEach((keys) => {
    priceSum += prices[keys] * entrants[keys];
  });
  return priceSum;
}
// Utilizei o conceito de Object.keys para guardar as chaves do objeto de entrada em uma variável e o site é o seguinte:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  const theObject = {};
  const allKeys = Object.keys(hours);
  allKeys.forEach((aKey) => {
    theObject[aKey] = `Open from ${hours[aKey].open}am until ${hours[aKey].close - 12}pm`;
  });
  // Abaixo o valor do horário de funcionamento de Segunda é sobrescrito para fechado;
  theObject.Monday = 'CLOSED';
  return (dayName) ? { [dayName]: theObject[dayName] } : theObject;
}
// Consultei o repositório do Lucas Martins da Silva para resolver a parte inicial do raciocinío dessa função
// Link do repositório: https://github.com/tryber/sd-010-b-project-zoo-functions/pull/88

function oldestFromFirstSpecies(id) {
  const theAnimal = employees.filter((aEmployee) => (id === aEmployee.id))[0].responsibleFor[0];
  const theAnimals = animals.find((eachAnimal) => (theAnimal === eachAnimal.id)).residents;
  const theOldest = theAnimals.sort((residentA, residentB) => residentB.age - residentA.age)[0];

  return [theOldest.name,
    theOldest.sex,
    theOldest.age];
}

function increasePrices(percentage) {
  const { Adult, Senior, Child } = prices;
  prices.Adult = Number((Math.ceil(Adult * (100 + percentage)) / 100).toFixed(2));
  prices.Senior = Number((Math.ceil(Senior * (100 + percentage)) / 100).toFixed(2));
  prices.Child = Number((Math.ceil(Child * (100 + percentage)) / 100).toFixed(2));
}
// Utilizei a Number() Function para resolução do requisito acima
// source: https://www.w3schools.com/jsref/jsref_number.asp

/* function employeeCoverage(idOrName) {
  // seu código aqui
} */

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
