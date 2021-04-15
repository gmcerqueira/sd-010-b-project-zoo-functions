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

const { animals, employees, prices } = data;

function animalsByIds(...ids) {
  return animals.filter((idAnimals, aux) => idAnimals.id === ids[aux]);
}

function animalsOlderThan(animal, age) {
  const species = animals.find((specie) => specie.name === animal);
  return species.residents.every((ageMin) => ageMin.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const n = employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
  return n;
}
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return id;
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   return id, firstName, lastName, managers, responsibleFor;
// }

function animalCount(species) {
  return species;
}

function entryCalculator(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  return Object.keys(entrants).reduce((acc, aux) => acc + entrants[aux] * prices[aux], 0);
}

// function animalMap(options) {
//   const mapAnimals = animals.map((animal) => {
//     if (options === undefined) {
//       animal.location
      
//     }
//   })
//   return options;
// }

function schedule(dayName) {
  return dayName;
}

function oldestFromFirstSpecies(id) {
  return id;
}

function increasePrices(percentage) {
  return percentage;
}

function employeeCoverage(idOrName) {
  const employee = employees.filter((em) => {
    if (idOrName === em.firstName || idOrName === em.lastName || idOrName === em.id) {
      return true;
    }
    const employeeResponsible = employee.reduce((ac, {firstName, lastName, responsibleFor}) => {
      const fullName = `${firstName} ${lastName}`;
      ac[fullName] = responsibleFor.map((anId) => animals.find((animal) => animal.id === anId).name,);
      return ac;
    })
    {}
    return employeeResponsible;
  })  
}
module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  // addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
