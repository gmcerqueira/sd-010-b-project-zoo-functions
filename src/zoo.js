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
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const animalSpecies = animals.find((specie) => specie.name === animal);
  return animalSpecies.residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id, firstName, lastName, managers, responsibleFor,
  };
  return employees.push(newEmployee);
}

function animalCount(species) {
  if (!species) {
    return animals.reduce(
      (accumulator, { name, residents }) =>
        Object.assign(accumulator, { [name]: residents.length }),
      {},
    );
  }
  const specie = animals.find((animal) => animal.name === species);
  return specie.residents.length;
}

function entryCalculator(entrants = {}) {
  const entrantsKey = Object.keys(entrants);
  return entrantsKey.reduce(
    (accumulator, currentValue) =>
      accumulator + prices[currentValue] * entrants[currentValue], 0,
  );
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  const obj = {};
  Object.keys(hours).forEach((day) => {
    if (day === 'Monday') obj[day] = 'CLOSED';
    if (day !== 'Monday') {
      obj[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
      return obj;
    }
  });
  if (!dayName) return obj;
  return { [dayName]: obj[dayName] };
}

function oldestFromFirstSpecies(id) {
  const findId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const findAnimal = animals.find((animal) => animal.id === findId).residents;
  const toLocateOld = findAnimal.sort((a, b) => b.age - a.age)[0];
  return [toLocateOld.name, toLocateOld.sex, toLocateOld.age];
}

function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;
  data.prices = {
    Adult: Math.ceil(Adult * (percentage + 100)) / 100,
    Senior: Math.ceil(Senior * (percentage + 100)) / 100,
    Child: Math.ceil(Child * (percentage + 100)) / 100,
  };
}
/*
function employeeCoverage(idOrName) {
  // seu código aqui
}
*/
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
