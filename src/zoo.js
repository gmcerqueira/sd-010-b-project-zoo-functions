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
const {
  hours,
} = require('./data');
const {
  prices,
} = require('./data');
const {
  animals,
} = require('./data');
const {
  employees,
} = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const animalSpecies = data.animals.filter((animal) => ids.includes(animal.id)); // developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  return animalSpecies;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const filterAnimal = animals.find((currentAnimal) => currentAnimal.name === animal);
  const minAge = filterAnimal.residents.every((resident) => resident.age > age);
  return minAge;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((Emp) => employeeName === Emp.firstName || employeeName === Emp.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const managerSearch = employees.some((employee) => employee.managers.includes(id));
  return managerSearch;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employeeAdd = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(employeeAdd);
}

function animalCount(species) {
  // seu código aqui
  if (species === undefined) {
    return animals.reduce((animalAcc, animalCurr) => {
      const {
        name,
      } = animalCurr;
      return {
        ...animalAcc,
        [name]: animalCurr.residents.length,
      };
    }, {});
  }
  const findAnimal = animals.find((animal) => animal.name === species);
  return findAnimal.residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  } // stackoverflow.com/questions/2647867/how-can-i-determine-if-a-variable-is-undefined-or-null
  const keysPrices = Object.keys(entrants);
  const totalEntry = keysPrices.reduce((pAcc, pCurr) => pAcc + entrants[pCurr] * prices[pCurr], 0);
  return totalEntry;
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  // seu código aqui
  const week = {};
  Object.entries(hours).forEach(([dayWeek, { open, close }]) => {
    week[dayWeek] = open === close ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
  });
  return dayName ? { [dayName]: week[dayName] } : week;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const animalFind = employees.find((employee) => employee.id === id);
  const responsible = animalFind.responsibleFor[0];
  const firstSpecie = animals.find((animal) => animal.id === responsible);
  console.log(firstSpecie);
  let maxAge = 0;
  firstSpecie.residents.forEach((resident) => {
    if (resident.age > maxAge) {
      maxAge = resident.age;
    }
  });
  const olderAnimal = firstSpecie.residents.find((resident) => resident.age === maxAge);
  return [olderAnimal.name, olderAnimal.sex, olderAnimal.age];
}

function increasePrices(percentage) {
  // seu código aqui
  prices.Adult = Math.round((prices.Adult * (percentage / 100) + prices.Adult) * 100) / 100;
  prices.Child = Math.round((prices.Child * (percentage / 100) + prices.Child) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * (percentage / 100) + prices.Senior) * 100) / 100;
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
