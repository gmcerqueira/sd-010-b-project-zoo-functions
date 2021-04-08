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
  const identifications = ids;
  if (identifications.length === 0) { return identifications; }
  // const animals = [];
  // identifications.forEach((element) => {
  //   const animal = data.animals.filter((element2) => element2.id === element);
  //   animals.push(animal[0]);
  // });
  // Constante abaixo modificada a partir do código do Vinicius Bodra, postado no Slack na thread: https://trybecourse.slack.com/archives/C01LCSLCZ8D/p1617911347298100
  const animals = data.animals.filter((item, index) => (item.id === identifications[index]));
  return animals;
}

function animalsOlderThan(animal, age) {
  const animals = data.animals.filter((entry) => entry.name === animal);
  const residents = animals.map((entry) => entry.residents);
  const ages = residents[0].map((entry) => entry.age);
  let response = true;
  ages.forEach((element) => {
    if (element < age) { response = false; }
  });
  return response;
}

function employeeByName(employeeName) {
  if (!employeeName) { return {}; }
  const firstNameObject = data.employees.filter((entry) => entry.firstName === employeeName);
  const lastNameObject = data.employees.filter((entry) => entry.lastName === employeeName);
  if (firstNameObject[0]) { return firstNameObject[0]; }
  return lastNameObject[0];
}

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

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
  // createEmployee,
};
