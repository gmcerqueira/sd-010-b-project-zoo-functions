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

const { animals, employees, prices, hours } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return data.animals.filter((a) => ids.find((id) => a.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.find((a) => a.name === animal).residents.every((r) => r.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName) {
    return employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((e) => e.managers.find((m) => m === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
  return employees;
}

function animalCount(species) {
  if (species) {
    return animals.find((animal) => animal.name === species).residents.length;
  }
  return animals.reduce((acc, currAnimal) => {
    const animalAcc = acc;
    animalAcc[currAnimal.name] = currAnimal.residents.length;
    return acc;
  }, {});
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants) {
    const arrEntrants = Object.entries(entrants);
    return arrEntrants.reduce((a, b) => a + b[1] * prices[b[0]], 0);
  }
  return 0;
}

function animalsByLoc() {
  return animals.reduce((acc, b) => {
    acc[b.location] = animals.filter((a) => a.location === b.location).map((a) => a.name);
    return acc;
  }, {});
}

function animalsNames(sorted) {
  return animals.reduce((acc, b) => {
    const animalsByLocation = animals.filter((a) => a.location === b.location);
    // console.log(animalsByLocation);
    acc[b.location] = animalsByLocation.reduce((anmAcc, curAnm) => {
      const residents = {};
      const residentsNames = curAnm.residents.map((resident) => resident.name);
      if (sorted) {
        residentsNames.sort();
      }
      console.log(residentsNames);
      residents[curAnm.name] = residentsNames;
      anmAcc.push(residents);
      return anmAcc;
    }, []);
    return acc;
  }, {});
}

function animalsNamesSex(sex, sorted) {
  return animals.reduce((acc, b) => {
    const animalsByLocation = animals.filter((a) => a.location === b.location);
    // console.log(animalsByLocation);
    acc[b.location] = animalsByLocation.reduce((anmAcc, curAnm) => {
      const residents = {};
      const residentsNames = curAnm.residents.filter((r) => r.sex === sex).map((res) => res.name);
      if (sorted) {
        residentsNames.sort();
      }
      // console.log(residentsNames);
      residents[curAnm.name] = residentsNames;
      anmAcc.push(residents);
      return anmAcc;
    }, []);
    return acc;
  }, {});
}

function animalMap(options = {}) {
  const { includeNames, sex, sorted } = options;
  if (includeNames) {
    if (sex) {
      return animalsNamesSex(sex, sorted);
    }
    return animalsNames(sorted);
  }
  return animalsByLoc();
}

function createsSentence({ open, close }) {
  if (open === 0) {
    return 'CLOSED';
  }
  return `Open from ${open}am until ${close - 12}pm`;
}

function schedule(dayName) {
  // seu código aqui
  if (dayName) {
    const info = Object.entries(hours).find((day) => day[0] === dayName);
    const oneDay = {};
    oneDay[dayName] = createsSentence(info[1]);
    return oneDay;
  }
  return Object.entries(hours).reduce((acc, curr) => {
    acc[curr[0]] = createsSentence(curr[1]);
    return acc;
  }, {});
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const idSpecies = employees.find((e) => e.id === id).responsibleFor[0];
  const speciesResidents = animals.find((animal) => animal.id === idSpecies).residents;
  const older = speciesResidents.reduce((acc, r) => (acc > r.age ? acc : r.age), 0);
  return Object.values(speciesResidents.find((resident) => resident.age === older));
}

function increasePrices(percentage) {
  // seu código aqui (https://medium.com/swlh/how-to-round-to-a-certain-number-of-decimal-places-in-javascript-ed74c471c1b8#:~:text=For%20example%2C%20if%20you%20want,by%20100%20to%20get%200.23.)
  console.log(Object.entries(prices));
  Object.entries(prices).forEach((price) => {
    prices[price[0]] = Math.round((price[1] + (price[1] * (percentage / 100))) * 100) / 100;
    console.log(prices);
  });
}

function employeesCoverage() {
  return employees.reduce((acc, e) => {
    const fullName = `${e.firstName} ${e.lastName}`;
    const arrNames = [];
    e.responsibleFor.filter((animalId) => {
      const animalNames = animals.find((animal) => animal.id === animalId);
      arrNames.push(animalNames.name);
      return animalNames;
    }).map((a) => a.name);
    acc[fullName] = arrNames;
    return acc;
  }, {});
}

// function employeeCoverage(idOrName) {
//   // seu código aqui
//   if (idOrName) {
//     const employee = {};
//     const emp =  employees.find((e) => {
//       const find = e.id === idOrName || e.firstName === idOrName || e.lastName === idOrName;
//       return find;
//     });
//     const fullName = `${emp.firstName} ${emp.lastName}`;
//     employee[fullName] =  animals.filter((animal) => {
//       const animalNames = emp.responsibleFor.find((animalId) => animal.id === animalId);
//       console.log(animalNames);
//       return animalNames;
//     }).map((a) => a.name);
//     return employee;
//   }
//   return employeesCoverage();
// }
function employeeCoverage(idOrName) {
  // seu código aqui
  if (idOrName) {
    const employee = {};
    const emp = employees.find((e) => {
      const find = e.id === idOrName || e.firstName === idOrName || e.lastName === idOrName;
      return find;
    });
    const fullName = `${emp.firstName} ${emp.lastName}`;
    const arrNames = [];
    emp.responsibleFor.filter((animalId) => {
      const animalNames = animals.find((animal) => animal.id === animalId);
      arrNames.push(animalNames.name);
      return animalNames.name;
    });
    employee[fullName] = arrNames;
    return employee;
  }
  return employeesCoverage();
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
