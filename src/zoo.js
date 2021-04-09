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
  return data.animals.filter((animal) => ids.find((id) => id === animal.id));
}

function animalsOlderThan(animal, age) {
  const animalFind = data.animals.find((animalSearch) => animalSearch.name === animal).residents;
  return animalFind.every((ageSearch) => ageSearch.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((employee) => employee.firstName === employeeName
                              || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const array = data.employees.map((a) => a.managers).join(',').split(',');
  return array.some((a) => a === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return data.animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const pricesArr = Object.entries(data.prices).map(([key, value]) => ({ key, value }));
  const entrantsArr = Object.entries(entrants).map(([key, value]) => ({ key, value }));

  const totalPrice = pricesArr.map((price) => {
    let valor = 0;
    entrantsArr.map((entrant) => {
      if (entrant.key === price.key) {
        valor = entrant.value * price.value;
      }
      return valor;
    });
    return valor;
  });
  return totalPrice.reduce((acc, cur) => acc + cur);
}

// function entryCalculator(entrants) {
//   if (!entrants || Object.keys(entrants).length === 0) return 0;
//   const entries = Object.keys(entrants);
//   return entries.reduce((acc, cur) => acc + (data.prices[cur] * entrants[cur]), 0)
//     // Efetua uma busca no objeto passado, nas chaves ex { Adult, Child, Senior }
//     // É feito um reduce, onde é somado o valor com base na key prices[curr] multiplicando pelo entrants[curr]... curr é a key
// }

function animalMap(options) {
  return options;
}

function schedule(dayName) {
  const days = Object.entries(data.hours);
  return days.reduce((acc, cur) => {
    let [key, value] = cur;
    const vlHour = value.open > 0 ? value = `Open from ${value.open}am until ${value.close - 12}pm`
      : value = 'CLOSED';
    if (!dayName) {
      acc[key] = vlHour;
    } else if (dayName === key) {
      acc[dayName] = vlHour;
    }
    key = '';
    return acc;
  }, {});
}

function oldestFromFirstSpecies(id) {
  return id;
}

function increasePrices(percentage) {
  return percentage;
}

function employeeCoverage(idOrName) {
  return idOrName;
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
