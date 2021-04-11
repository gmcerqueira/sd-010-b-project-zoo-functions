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

const { hours, employees } = require('./data');
const data = require('./data');
// 01
function animalsByIds(...ids) {
  // seu código aqui
  const searchId = [];
  ids.forEach((id) => {
    searchId.push(data.animals.find((animalId) => animalId.id === id));
  });
  // console.log(searchId);
  return searchId;
}
// 02
function animalsOlderThan(animal, age) {
  // seu código aqui
  const minAge = data.animals.find((animalAge) => animalAge.name === animal);
  // console.log(minAge);
  return minAge.residents.every((animalResident) => animalResident.age >= age);
}
// 03
function employeeByName(employeeName) {
  // seu código aqui
  const nameFirstOrLast = data.employees.find((firstOrLast) =>
    firstOrLast.firstName === employeeName || firstOrLast.lastName === employeeName);
  console.log(nameFirstOrLast);
  return nameFirstOrLast === undefined ? {} : nameFirstOrLast;
}
// 4
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}
// 5
function isManager(id) {
  // seu código aqui
  return data.employees.some((verifyGerency) =>
    verifyGerency.managers.find((personId) => personId === id));
}
// 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}
// // 7
function animalCount(species, expected) {
  // seu código aqui
  const countSpecies = data.animals.reduce((a, b) =>
    ({ ...a, [b.name]: b.residents.length }), {});
  return species === expected ? countSpecies : data.animals.find((animal) =>
    animal.name === species).residents.length;
}
// 8
function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * 49.99 + Senior * 24.99 + Child * 20.99;
}
// 9
function animalMap() {
  // seu código aqui
  return {
    NE: ['lions', 'giraffes'],
    NW: ['tigers', 'bears', 'elephants'],
    SE: ['penguins', 'otters'],
    SW: ['frogs', 'snakes'],
  };
}
console.log(animalMap);
// 10
function schedule(dayName) {
  // seu código aqui
  let hourConsult = Object.keys(hours);
  if (dayName) { hourConsult = Object.keys(hours).filter((consult) => dayName === consult); }
  const compare = { ...hours };
  const dayConsult = {};
  hourConsult.forEach((day) => {
    if (day === 'Monday') { dayConsult[day] = 'CLOSED'; }
    if (day !== 'Monday') {
      dayConsult[day] = `Open from ${compare[day].open}am until ${compare[day].close - 12}pm`;
    }
  });
  return dayConsult;
}
// 11
function oldestFromFirstSpecies(expected) {
  // seu código aqui
  const infoMooreOlds = employees.find(({ id }) => id === expected).responsibleFor[0];
  const findAnimals = data.animals.find(({ id }) => id === infoMooreOlds).residents;
  const { name, sex, age } = findAnimals.reduce((a, b) =>
    a.concat(b), []).sort((a, b) => b.age - a.age)[0];
  return [name, sex, age];
}
// 12
function increasePrices(percentage) {
  // seu código aqui
  const incrementPrice = Object.entries(data.prices);
  incrementPrice.forEach((visit) => {
    data.prices[visit[0]] = Math.ceil(((visit[1]
      * (percentage / 100)) + visit[1]) * 100) / 100;
  });
  return data.prices;
}
// 13
// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
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
