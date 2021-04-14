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

const { TestScheduler } = require('@jest/core');
const { animals, employees, prices, hours } = require('./data');
const data = require('./data');

function animalsByIds(...id) {
  if ([id].includes(undefined)) return [];

  return animals.filter((animal) => id.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const species = data.animals.find((name) => name.name === animal);

  return species.residents.every((item) => item.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  // aprendi esse 'if'no video
  // https://www.youtube.com/watch?v=VYk0TXoXWbo
  if ([employeeName].includes(undefined)) { return {}; }

  const filterName = data.employees;

  return filterName.find((name) => (
    name.firstName === employeeName || name.lastName === employeeName
  ));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };

  employees.unshift(newEmployee);

  return data.employees[0];
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push(
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
  // seu código aqui
  const objName = {};
  let count = 0;
  animals.forEach((animal) => { objName[animal.name] = animal.residents.length; });

  if (!species) return objName;

  const countAnimal = (animal) => {
    if (animal.name === species) {
      count = animal.residents.length;
    }
  };

  animals.filter(countAnimal);

  return count;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const sum = (acc, currValue) => acc + currValue;

  const sumTotal = Object.keys(entrants).map((key) =>
    entrants[key] * prices[key]).reduce(sum);

  return sumTotal;
}
// função aprendida no https://pt.stackoverflow.com/questions/367657/agrupar-registros-repetidos-em-um-array-no-javascript
function animalMap(options) {
  // seu código aqui
  if (!options) {
    return animals.reduce((acc, { name, location }) => {
      if (!acc[location]) acc[location] = [];
      acc[location].push(name);
      return acc;
    }, {});
  }
}

function schedule(dayName) {
  // na lógica desse código obtive a ajuda do Aladino Borges
  const arrHours = Object.entries(hours);
  const fullSchedule = {};

  arrHours.forEach(([key, { open, close }]) => {
    fullSchedule[key] = `Open from ${open}am until ${close - 12}pm`;

    if (key === 'Monday') {
      fullSchedule[key] = 'CLOSED';
    }
  });

  if (!dayName) return fullSchedule;

  return { [dayName]: fullSchedule[dayName] };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const getResponsible = employees.find((idEmployee) => idEmployee.id === id).responsibleFor[0];

  const getAnimal = animals.find((animal) =>
    animal.id === getResponsible)
    .residents.sort((a, b) => b.age - a.age)
    .find((item) => Math.max(item.age));

  const result = Object.values(getAnimal);

  return result;
}

function increasePrices(percentage) {
  // seu código aqui
  const increase = Object.values(prices)
    .map((item) => (item * percentage)
      .toPrecision(4) / 100);

  const { Adult, Senior, Child } = prices;
  const [adultAdd, seniorAdd, childAdd] = increase;

  prices.Adult = parseFloat((Adult + adultAdd).toPrecision(4));
  prices.Senior = parseFloat((Senior + seniorAdd).toPrecision(4));
  prices.Child = parseFloat((Child + childAdd).toPrecision(4));
}

function employeeCoverage(idOrName) {
  // na lógica desse código obtive ajuda da Valeria Andreoni
  const creatObj = (acc, { firstName, lastName, responsibleFor }) => {
    acc[`${firstName} ${lastName}`] = responsibleFor
      .map((item) => animals.find((animal) =>
        animal.id === item).name);
    return acc;
  };
  const seachEmployee = (employee) =>
    employee.id === idOrName
    || employee.firstName === idOrName
    || employee.lastName === idOrName;

  if (!idOrName) return employees.reduce(creatObj, {});

  const resultSeachEmployee = employees.filter(seachEmployee);

  return resultSeachEmployee.reduce(creatObj, {});
}

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
