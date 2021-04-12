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
// Abimael Rocha de Albuquerque
const data = require('./data');

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }

  const { animals } = data;
  const animalList = animals.filter((animal, index) => animal.id === ids[index]);

  return animalList;
}

function animalsOlderThan(animalName, age) {
  const animalObj = data.animals.find((animal) => animal.name === animalName);
  const isOlder = animalObj.residents.map((animal) => animal.age > age);
  return !!isOlder.reduce((previous, current) => previous * current, true);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const cond = ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName;
  return data.employees.find(cond);
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const { employees } = data;
  const searchResult = [];

  employees.forEach((managers) => { searchResult.push(...managers.managers); });

  const find = searchResult.find((idOf) => idOf === id);
  if (find !== undefined) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const add = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  if (managers === undefined) add.managers = [];
  if (responsibleFor === undefined) add.responsibleFor = [];
  data.employees.push(add);
}

function animalCount(species) {
  if (species === undefined) {
    const obj = {};
    data.animals.forEach((animalName) => { obj[animalName.name] = animalName.residents.length; });
    return obj;
  }
  const animals = data.animals.find((animal) => animal.name === species);
  return animals.residents.length;
}

function entryCalculator(entrants) {
  const e = entrants;
  const { prices: p } = data;
  if (entrants === undefined) return 0;
  return (e.Adult * p.Adult || 0) + (e.Senior * p.Senior || 0) + (e.Child * p.Child || 0);
}
// function animalMap(options) {
//   const out = {
//     NE: [],
//     NW: [],
//     SE: [],
//     SW: [] ;
//   }
//   if (options === undefined) {
//     data.animals.forEach((animal) => { out[animal.location].push(animal.name); });
//   }
//   const loc = out[animal.location];
//   if (options.includeNames === true) {
//      data.animals.map((animal) => loc.)
//   }
//   console.log(out);

// }

function schedule(dayName) {
  const buffer = {};
  const info = Object.entries(data.hours);
  info.forEach((Element) => {
    if (Element[1].open === 0) {
      buffer[Element[0]] = 'CLOSED';
    } else {
      buffer[Element[0]] = `Open from ${Element[1].open}am until ${Element[1].close - 12}pm`;
    }
  });
  if (dayName === undefined) return buffer;
  const out = { };
  out[`${dayName}`] = buffer[dayName];
  return out;
}

function oldestFromFirstSpecies(id) {
  const employer = data.employees.find((e) => e.id === id);
  const specie = data.animals.find((animal) => animal.id === employer.responsibleFor[0]);
  const ages = specie.residents.map((each) => each.age);
  const great = Math.max(...ages);
  const animal = (specie.residents.find((a) => a.age === great));
  return [animal.name, animal.sex, animal.age];
}

function increasePrices(percentage) {
  const { prices } = data;
  const increase = (1 + percentage / 100);
  prices.Adult = Math.round(prices.Adult * increase * 100) / 100;
  prices.Senior = Math.round(prices.Senior * increase * 100) / 100;
  prices.Child = Math.round(prices.Child * increase * 100) / 100;
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
