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

const { animals } = data;
const { employees } = data;
const { prices } = data;
const { hours } = data;

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter((animalsId, i) => animalsId.id === ids[i]);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalEncontrado = animals.find((myAnimal) => myAnimal.name === animal);
  return animalEncontrado.residents.every((idade) => idade.age >= age);
}

function employeeByName(employeeName) {
  const foundEmployee = employees.find((employee) => Object.values(employee)
    .includes(employeeName));
  return { ...foundEmployee };
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const managersIds = employees.reduce((acc, current) => [...acc, ...current.managers], []);
  return managersIds.includes(id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

/* function animalCount(species) {

} */

function entryCalculator(entrants = {}) {
  return Object.entries(entrants).reduce(
    (priceAccumulator, currentGroup) => {
      const price = prices[currentGroup[0]];
      const quantity = currentGroup[1];
      return priceAccumulator + (price * quantity);
      // eslint-disable-next-line comma-dangle
    }, 0,
    // eslint-disable-next-line editorconfig/editorconfig
  );
}

function animalMap(options) {
  const myOpetions = options;
  return myOpetions;
}

// schedule
function createSchedule(openClose) {
  const { open } = openClose;
  const close = (openClose.close) - 12;

  if (open === 0 && close === -12) return 'CLOSED';

  return `Open from ${open}am until ${close}pm`;
}

function schedule(dayName) {
  const keys = Object.keys(hours);
  const values = Object.values(hours);
  const result = {};

  if (dayName === undefined) {
    keys.forEach((day, index) => {
      result[day] = createSchedule(values[index]);
    });
  } else {
    result[dayName] = createSchedule(values[keys.indexOf(dayName)]);
  }

  return result;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const arrayMaxNumber = employees.find((employee) => employee.id === id).responsibleFor
    .map((animalID) => {
      const resident = animals.find((animal) => animal.id === animalID).residents;
      const maxAge = Math.max(...resident.map((animal) => animal.age));

      return resident.filter((animal) => animal.age === maxAge);
    });

  const maxIndex = Math.max(...arrayMaxNumber.map((animal) => animal[0].age));

  return Object.values((arrayMaxNumber[0].filter((ageNumber) => ageNumber.age === maxIndex))[0]);
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(prices).forEach((index) => {
    prices[index] = Math.round((prices[index]) * ((percentage / 100) + 1) * 100) / 100;
  });

  return prices;
}

function employeeCoverage(idOrName) {
  const arrayEmployee = [];
  const objEmployee = {};
  if (idOrName === undefined) {
    employees.forEach((value) => { arrayEmployee.push(value.id); });
  } else { arrayEmployee.push(idOrName); }
  arrayEmployee.forEach((value) => {
    const arrayNameAnimals = [];
    const { firstName, lastName, responsibleFor } = employees
      .find((e) => e.id === value || e.firstName === value || e.lastName === value);
    responsibleFor.forEach((id) => {
      arrayNameAnimals.push(animals.find((animal) => animal.id === id).name);
    });
    objEmployee[`${firstName} ${lastName}`] = arrayNameAnimals;
    return objEmployee;
  });
  return objEmployee;
}

// animalCount

module.exports = {
  schedule,
  entryCalculator,
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
