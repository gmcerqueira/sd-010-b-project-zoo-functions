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
  return ids.map((currentId) => data.animals.find(((animal) => animal.id === currentId)));
}

function animalsOlderThan(animal, age) {
  const classAnimal = data.animals.find((actualAnimal) => actualAnimal.name === animal);
  return classAnimal.residents.every((namedAnimal) => namedAnimal.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) { return {}; }
  return data.employees.find(
    (employee) => employee.firstName === employeeName || employee.lastName === employeeName,
  );
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  return data.employees.some((employee) =>
    employee.managers.some((managersId) => managersId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function animalCount(species) {
  if (species === undefined) {
    const objAnimals = {};
    data.animals.map((animalName) => {
      objAnimals[animalName.name] = animalName.residents.length;
      return objAnimals;
    });
    return objAnimals;
  }
  return data.animals.find((animalClass) => animalClass.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) { return 0; }
  const entries = Object.entries(entrants);
  return entries.reduce(((acc, entry) => acc + (data.prices[entry[0]] * entry[1])), 0);
}

// function animalMap(options) {
//   // seu código aqui
// }

// função schedule criada com a ajuda do colega Lucas Martins
function schedule(dayName) {
  const keysHours = Object.keys(data.hours);
  const objSchedule = {};
  keysHours.forEach((day) => {
    const { open, close } = data.hours[day];
    if (day === 'Monday') {
      objSchedule[day] = 'CLOSED';
    } else {
      objSchedule[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (dayName) return { [dayName]: objSchedule[dayName] };
  return objSchedule;
}

function oldestFromFirstSpecies(id) {
  const getAnimalId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  return Object.values(data.animals.find((animal) =>
    animal.id === getAnimalId).residents.reduce((oldest, specificAnimal) =>
    (specificAnimal.age > oldest.age ? specificAnimal : oldest)));
}

function increasePrices(percentage) {
  const arrayPrices = Object.entries(data.prices);
  const { prices } = data;
  arrayPrices.forEach((ageRange) => {
    const [range, price] = ageRange;
    prices[range] = Math.round((price + ((price * (percentage / 100)))) * 100) / 100;
  });
  return prices;
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
