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
  // seu código aqui
  return data.animals.filter((a) => ids.find((id) => a.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals.find((a) => a.name === animal).residents.every((r) => r.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName) {
    return data.employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((e) => e.managers.find((m) => m === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return data.employees;
}

function animalCount(species) {
  if (species) {
    return data.animals.find((animal) => animal.name === species).residents.length;
  }
  return data.animals.reduce((acc, currAnimal) => {
    const animalAcc = acc;
    animalAcc[currAnimal.name] = currAnimal.residents.length;
    return acc;
  }, {});
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants) {
    const arrEntrants = Object.entries(entrants);
    return arrEntrants.reduce((a, b) => a + b[1] * data.prices[b[0]], 0);
  }
  return 0;
}

function animalsByLoc() {
  return data.animals.reduce((acc, b) => {
    acc[b.location] = data.animals.filter((a) => a.location === b.location).map((a) => a.name);
    return acc;
  }, {});
}

function animalsNames(sorted) {
  return data.animals.reduce((acc, b) => {
    const animalsByLocation = data.animals.filter((a) => a.location === b.location);
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
  return data.animals.reduce((acc, b) => {
    const animalsByLocation = data.animals.filter((a) => a.location === b.location);
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
    const info = Object.entries(data.hours).find((day) => day[0] === dayName);
    const oneDay = {};
    oneDay[dayName] = createsSentence(info[1]);
    return oneDay;
  }
  return Object.entries(data.hours).reduce((acc, curr) => {
    acc[curr[0]] = createsSentence(curr[1]);
    return acc;
  }, {});
}
console.log(schedule());

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
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
