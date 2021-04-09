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
  return animals.filter((animal) => ids.some((id) => animal.id === id));
}

function animalsOlderThan(animalName, age) {
  const selected = animals.find(({ name }) => name === animalName);
  return selected.residents.every((res) => res.age >= age);
}

function employeeByName(name) {
  let select = employees.find(({ firstName, lastName }) => firstName === name || lastName === name);
  if (select === undefined) { select = {}; }
  return select;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(idd) {
  const selected = employees.find(({ id }) => id === idd);
  return employees.some(({ managers }) => managers.includes(selected.id));
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function animalCount(species = 'all') {
  const obj = {};
  animals.map(({ name, residents }) => {
    obj[name] = residents.length;
    return '';
  });
  if (species === 'all') {
    return obj;
  }
  return obj[species];
}

function toMoney(type, unity) {
  const total = prices[type] * unity;
  return total;
}

function entryCalculator(entrants) {
  if (entrants === undefined) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  let total = toMoney('Adult', Adult);
  total += toMoney('Child', Child);
  total += toMoney('Senior', Senior);
  return total;
}

// function animalMap(options) {
//   // seu código aqui
// }

function toPm(hour) {
  return hour - 12;
}

function schedule(dayName) {
  const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = hours;
  const list = {
    Tuesday: `Open from ${Tuesday.open}am until ${toPm(Tuesday.close)}pm`,
    Wednesday: `Open from ${Wednesday.open}am until ${toPm(Wednesday.close)}pm`,
    Thursday: `Open from ${Thursday.open}am until ${toPm(Thursday.close)}pm`,
    Friday: `Open from ${Friday.open}am until ${toPm(Friday.close)}pm`,
    Saturday: `Open from ${Saturday.open}am until ${toPm(Saturday.close)}pm`,
    Sunday: `Open from ${Sunday.open}am until ${toPm(Sunday.close)}pm`,
    Monday: 'CLOSED',
  };
  if (dayName === undefined) {
    return list;
  }
  return { [dayName]: list[dayName] };
}
console.log(schedule('Tuesday'));
//       'Tuesday': 'Open from 8am until 6pm',
//       'Wednesday': 'Open from 8am until 6pm',
//       'Thursday': 'Open from 10am until 8pm',
//       'Friday': 'Open from 10am until 8pm',
//       'Saturday': 'Open from 8am until 10pm',
//       'Sunday': 'Open from 8am until 8pm',
//       'Monday': 'CLOSED'

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
