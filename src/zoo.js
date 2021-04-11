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

const { prices, hours } = require('./data');
const data = require('./data');

const { animals, employees } = data;

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return ids;
  }
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  return animals.find((animal2) => animal2.name === animal).residents
    .every((resident) => resident.age >= age);
}

function employeeByName(firstOrLastName) {
  if (firstOrLastName === undefined) {
    return {};
  }
  return employees.find((employe) => employe.firstName === firstOrLastName
  || employe.lastName === firstOrLastName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employe) => employe.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor });
}

function animalCount(species) {
  if (species === undefined) {
    return animals.reduce((acc, currentPerson) => {
      acc[currentPerson.name] = currentPerson.residents.length;
      return acc;
    }, {});
  }
  return animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length < 1) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
}

// function animalMap(options) {
//   return animals.reduce((acc, currentPerson) => {
//     if (acc[currentPerson.location] !== currentPerson.location) {
//       acc[currentPerson.location].push(currentPerson.name);
//     }
//     acc[currentPerson.location] = currentPerson.name;
//     return acc;
//   });
// }
// console.log(animalMap());

function schedule(dayName) {
  const result = Object.entries(hours).reduce((acc, [key, value]) => {
    if (value.open === 0 && value.close === 0) {
      acc[key] = 'CLOSED';
      return acc;
    }
    acc[key] = `Open from ${value.open}am until ${value.close - 12}pm`;
    return acc;
  }, {});
  if (dayName === undefined) {
    return result;
  }
  return { [dayName]: result[dayName] };
}

function oldestFromFirstSpecies(id) {
  const animalId = employees.find((employe) => employe.id === id).responsibleFor[0];
  const animalResident = animals.find((animal) => animal.id === animalId).residents;
  const maxAge = animalResident.map((age) => age.age);
  const result = animalResident.find((age) => age.age === Math.max(...maxAge));
  return Object.values(result);
}

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
  //   employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
