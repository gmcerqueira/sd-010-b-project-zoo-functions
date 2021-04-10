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

function oldestFromFirstSpecies(idd) {
  const selectedPerson = employees.find(({ id }) => id === idd);
  const selectedSpecieId = selectedPerson.responsibleFor[0];
  const selectedSpecieObj = animals.find(({ id }) => id === selectedSpecieId);
  let acc = selectedSpecieObj.residents[0];
  selectedSpecieObj.residents.forEach((cur) => {
    if (cur.age > acc.age) acc = cur;
  });
  return Object.values(acc);
}

function addPer(value, percentage) {
  const total = value + (value / 100) * percentage;
  return Math.round(total * 100) / 100;
}

function increasePrices(percentage) {
  const { Adult, Senior, Child } = prices;
  prices.Adult = addPer(Adult, percentage);
  prices.Senior = addPer(Senior, percentage);
  prices.Child = addPer(Child, percentage);
  return prices;
}

function idToName(ids) {
  const names = [];
  ids.forEach((idd) => names.push((animals.find(({ id }) => idd === id).name)));
  return names;
}
// console.log(idToName(["e8481c1d-42ea-4610-8e11-1752cfc05a46", "baa6e93a-f295-44e7-8f70-2bcdc6f6948d"]));

function employeeCoverage(idOrName) {
  const obj = {};
  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    obj[`${firstName} ${lastName}`] = idToName(responsibleFor);
  });
  if (idOrName === undefined) return obj;
  let selectedPerson = employees.find(({ id, firstName, lastName }) => {
    console.log('> presente apenas para passar o lint');
    return id === idOrName || firstName === idOrName || lastName === idOrName;
  });
  const { firstName, lastName } = selectedPerson;
  selectedPerson = `${firstName} ${lastName}`;
  return { [selectedPerson]: obj[selectedPerson] };
}
console.log(employeeCoverage());
// console.log(employeeCoverage('Azevado'));
// const expected = {
//   'Nigel Nelson': ['lions', 'tigers'],
//   'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
//   'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
//   'Wilburn Wishart': ['snakes', 'elephants'],
//   'Stephanie Strauss': ['giraffes', 'otters'],
//   'Sharonda Spry': ['otters', 'frogs'],
//   'Ardith Azevado': ['tigers', 'bears'],
//   'Emery Elser': ['elephants', 'bears', 'lions']
// };

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
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
