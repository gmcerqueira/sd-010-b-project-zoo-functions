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

function oldestFromFirstSpecies(id) {
  const { employees, animals } = data;

  // Retorna um objeto com as informações do funcionário
  const employeeObjectInfos = employees.find((value) => value.id === id).responsibleFor[0];
  // Retorna o residente com o mesmo id do que foi passado por parametro
  const findAnimal = animals.find((value) => value.id === employeeObjectInfos).residents;
  // Verifica o animal mais velho
  const oldestAnimal = findAnimal.reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr), 0);
  // Retorna somente os valores do objeto
  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  const { prices } = data;
  const { Adult, Child, Senior } = prices;

  const newPrices = {
    Adult: (Math.round(Adult * (1 + percentage / 100) * 100) / 100),
    Child: (Math.round(Child * (1 + percentage / 100) * 100) / 100),
    Senior: (Math.round(Senior * (1 + percentage / 100) * 100) / 100),
  };

  return Object.assign(prices, newPrices);
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
