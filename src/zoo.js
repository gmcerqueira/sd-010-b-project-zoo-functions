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
  return animals.filter((animal) => ids.some((elementId) => animal.id === elementId));
}
// Tive auxilio do Diegho Moraes para realizar o animalsOlderThan
function animalsOlderThan(animal, age) {
  const animalInfo = animals.find((species) => species.name === animal);
  return animalInfo.residents.every((species) => species.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employ) => (employ.firstName === employeeName
|| employ.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const managerId = employees.map(((employ) => employ.managers));
  const identification = [];
  managerId.forEach((manager) => manager.filter((mngID) => {
    if (mngID === id) identification.push(mngID);
    return identification;
  }));
  return identification.length > 0;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function animalCount(species) { // recebi o auxilio de Diegho Moraes e Jonathan Souza na resolução do AnimalCount
  const animalList = {};
  if (!species) {
    animals.forEach((animal) => { animalList[animal.name] = animal.residents.length; });
    return animalList;
  }
  return animals.find((animal) => animal.name === species).residents.length;
}
function confereCalculator(entrada, preco) {
  let adult = 0;
  let child = 0;
  let senior = 0;
  if (entrada.Adult !== undefined) adult = preco.Adult * entrada.Adult;
  if (entrada.Child !== undefined) child = preco.Child * entrada.Child;
  if (entrada.Senior !== undefined) senior = preco.Senior * entrada.Senior;
  return adult + child + senior;
}
function entryCalculator(entrants) {
  if (!entrants) return 0;
  return confereCalculator(entrants, prices);
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) { //  Tive o auxilio dos colegas Fernanda Porto e Lucas Martins para a resolução da questão
  const workDay = Object.entries(hours).reduce((week, day) => {
    const result = week;
    if (day[0] === 'Monday') {
      result[day[0]] = 'CLOSED';
    } else {
      result[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    }
    return result;
  }, {});
  if (!dayName) return workDay;
  return { [dayName]: workDay[dayName] };
}

function oldestFromFirstSpecies(id) {
  const employResponse = employees.find((employ) => employ.id === id).responsibleFor[0];
  const animalId = animals.find((animal) => animal.id === employResponse).residents;
  const oldOne = animalId.reduce((sum, item) => (item.age >= sum.age ? item : sum));
  return Object.values(oldOne);
}
function increasePrices(percentage) {
  const { Adult, Senior, Child } = prices;
  prices.Adult = Number((Adult + (Adult * (percentage / 100)) + 0.005).toFixed(2));
  prices.Senior = Number((Senior + (Senior * (percentage / 100)) + 0.005).toFixed(2));
  prices.Child = Number((Child + (Child * (percentage / 100)) + 0.005).toFixed(2));
}
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
  increasePrices,
  createEmployee,
};
