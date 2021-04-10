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

const { hours } = data;
function animalsByIds(...ids) {
  return data.animals
    .filter((animal, index) => (ids[index] === animal.id ? animal : false));
}

function animalsOlderThan(animal, age) {
  const animals = data.animals.find((animal2) => (animal === animal2.name ? animal : false));

  return animals.residents.every((animal3) => animal3.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  const result = data.employees
    .find((employe) =>
      (employeeName === employe.firstName || employeeName === employe.lastName ? employe : false));

  return result;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo, ...associatedWith,
  };
}

function isManager(id) {
  return data.employees
    .some((employe) => employe.managers.some((manager) => id === manager));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employeObj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return data.employees.push(employeObj);
}

function animalCount(species) {
  if (!species) {
    return data.animals
      .reduce((acumulator, { name, residents }) =>
        Object.assign(acumulator, { [name]: residents.length }), {});
  }
  const specie = data.animals.find((specie1) => (specie1.name === species));

  return specie.residents.length;
}

function entryCalculator(entrants = 0) {
  const prices = [];
  const arrayPrices = Object.entries(data.prices);
  arrayPrices.forEach((element) => {
    const entryValue = entrants[element[0]];
    if (entryValue) {
      prices.push(entryValue * element[1]);
    }
  });

  return prices.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
}

function animalMap(options) {
  return options;
}

function schedule(dayName = 0) {
  const scheduleObj = {};

  Object.keys(hours)
    .forEach((day) => ({
      if (day === 'Monday') {
        scheduleObj[day] = 'CLOSED';
      } else {
        scheduleObj[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
      }
    }));

  if (dayName) {
    return {
      [dayName]: scheduleObj[dayName],
    };
  }

  return scheduleObj;
}
console.log(schedule());

function oldestFromFirstSpecies(id) {
  const idAnimal = data.employees
    .find((employee) => employee.id === id).responsibleFor[0];

  const objAnimal = data.animals.find((animal) => animal.id === idAnimal);

  const oldestAnimal = objAnimal.residents.reduce((acumulator, currentValue) =>
    (acumulator.age > currentValue.age ? acumulator : currentValue));

  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  const arrayPrices = Object.entries(data.prices);

  arrayPrices.forEach((element) => {
    data.prices[element[0]] = Math.ceil(((element[1]
      * (percentage / 100)) + element[1]) * 100) / 100;
  });
  return data.prices;
}

function employeeCoverage(idOrName) {

}

console.log(employeeCoverage());

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
