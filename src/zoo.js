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
  const manager = employees.some((employee) => employee.managers.includes(id));
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id, firstName, lastName, managers, responsibleFor,
  });
}

function animalCount(species) {
  if (species === undefined) {
    return animals.reduce((acc, curr) => {
      const { name } = curr;
      return {
        ...acc, [name]: curr.residents.length,
      };
    }, {});
  }
  const spec = animals.find((animal) => animal.name === species);
  return spec.residents.length;
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
  const obj = {};
  Object.keys(hours).forEach((day) => {
    if (day === 'segunda-feira') {
      obj[day] = 'FECHADO';
    } else {
      obj[day] = `Aberto de ${hours[day].open} da manhã até ${hours[day].close - 12} pm`;
    }
  });
  if (dayName) return { [dayName]: obj[dayName] };
  return obj;
}
console.log(schedule())
function oldestFromFirstSpecies(id) {
  const checkId = employees.find((employee) => employee.id === id);
  const checkAnimal = checkId.responsibleFor[0];
  const findAnimal = animals.find((animal) => animal.id === checkAnimal).residents;
  let age = 0;
  findAnimal.forEach((animal) => {
    if (animal.age > age) {
      age = animal.age;
    }
  });
  const result = findAnimal.find((maxAge) => maxAge.age === age);
  return Object.values(result);
}
function increasePrices(percentage) {
  prices.Adult = (Math.round((prices.Adult * (percentage / 100) + prices.Adult) * 100) / 100);
  prices.Senior = (Math.round((prices.Senior * (percentage / 100) + prices.Senior) * 100) / 100);
  prices.Child = (Math.round((prices.Child * (percentage / 100) + prices.Child) * 100) / 100);
}
// function employeeCoverage(idOrName) {
//   const employee = employees.filter((em) => {
//     if (idOrName === em.firstName || idOrName === em.lastName || idOrName === em.id) {
//       return true;
//     }
//     const employeeResponsible = employee.reduce((ac, { firstName, lastName, responsibleFor }) => {
//       const fName = ` ${firstName} ${lastName} `;
//       ac[fName] = responsibleFor.map((anId) => animals.find((animal) => animal.id === anId).name);
//       return ac;
//     });
//     return employeeResponsible;
//   });
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
