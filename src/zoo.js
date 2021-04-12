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
  const [id1, id2] = ids;
  return animals.filter((value) => value.id === id1 || value.id === id2);
}

function animalsOlderThan(animal, age) {
  const { animals } = data;
  const animalName = animals.find((value) => value.name === animal);
  return animalName.residents.every((value) => value.age >= age);
}

function employeeByName(employeeName) {
  const { employees } = data;
  const searchByName = employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);

  const conditionToSearch = employeeName === undefined ? {} : searchByName;
  return conditionToSearch;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  return ({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function isManager(id) {
  const { employees } = data;
  return employees.some(({ managers }) => managers.find((value) => value === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;

  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return employees.push(employee);
}

function animalCount(species) {
  const { animals } = data;

  if (species) {
    return animals.map(({ name, residents }) => (species === name ? residents.length : false))
      .find((value) => value);
  }

  if (!species) {
    return animals.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
}

// Fonte: https://stackoverflow.com/questions/6736476/how-to-turn-nan-from-parseint-into-0-for-an-empty-string
function entryCalculator(entrants = {}) {
  const { prices } = data;
  const adult = prices.Adult * entrants.Adult;
  const children = prices.Child * entrants.Child;
  const senior = prices.Senior * entrants.Senior;

  return (adult || 0) + (children || 0) + (senior || 0);
}

// function animalMap(options) {

// }

function schedule(dayName) {
  const { hours } = data;
  const consultHours = Object.entries(hours);

  const daysOfWeek = consultHours.reduce((acc, [day, { open, close }]) => {
    acc[day] = (open, close > 0) ? `Open from ${open}am until ${close % 12}pm` : 'CLOSED';
    return acc;
  }, {});

  return (!dayName) ? daysOfWeek : { [dayName]: daysOfWeek[dayName] };
}
// function oldestFromFirstSpecies(id) {

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
