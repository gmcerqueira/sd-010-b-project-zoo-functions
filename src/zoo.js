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

function animalsByIds(...ids) { // zozimo
  if (ids === undefined) {
    return [];
  }
  return ids.map((id) => animals.find((animal) => animal.id === id));
}
function animalsOlderThan(animal, age) {
  const tipoAnimal = animals.find((tipo) => tipo.name === animal);
  return tipoAnimal.residents.every((criatura) => criatura.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((empregado) => empregado.firstName === employeeName || empregado
    .lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) { // Lucas martins
  return employees.some((empregado) => empregado.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push(
    {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    },
  );
}

function animalCount(species) {
  if (species !== undefined) {
    return animals.find((criatura) => criatura.name === species).residents.length;
  }
  const contagemDeAnimais = {}; // Dangelo
  animals.forEach((criatura) => { contagemDeAnimais[criatura.name] = criatura.residents.length; });
  return contagemDeAnimais;
}

function entryCalculator(entrants = 0) {
  if (Object.keys(entrants).length !== 0) {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return (Adult * prices.Adult) + (Child * prices.Child
    ) + (Senior * prices.Senior);
  }
  return 0;
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  const agenda = {};
  Object.entries(hours).forEach((dia) => {
    if (dia[1].open === dia[1].close) {
      agenda[dia[0]] = 'CLOSED';
    } else {
      agenda[dia[0]] = `Open from ${dia[1].open}am until ${dia[1].close - 12}pm`; }});
  if (dayName) {
    const day = {};
    day[dayName] = agenda[dayName];
    return day;
  }
  return agenda;
}

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
