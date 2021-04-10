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

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) { return 0; }
  const entries = Object.entries(entrants);
  return entries.reduce(((acc, entry) => acc + (data.prices[entry[0]] * entry[1])), 0);
}

function animalMap(options) {
  // seu código aqui
}

function auxiliarScheduleFunction(importedDayName) {
  const fullSchedule = Object.entries(data.hours);
  const objSchedule = {};
  const reqDay = fullSchedule.find((day) => day[0] === importedDayName);
  if (reqDay[1].open === 0 && reqDay[1].close === 0) {
    objSchedule[reqDay[0]] = 'CLOSED';
    return objSchedule;
  }
  objSchedule[reqDay[0]] = `Open from ${reqDay[1].open}am until ${reqDay[1].close - 12}pm`;
  return objSchedule;
}

function schedule(dayName) {
  const fullSchedule = Object.entries(data.hours);
  const objSchedule = {};
  if (!dayName) {
    fullSchedule.forEach((day) => {
      const { open, close } = day[1];
      if (day[0] === 'Monday') {
        objSchedule[day[0]] = 'CLOSED';
      } else {
        objSchedule[day[0]] = `Open from ${open}am until ${close - 12}pm`;
      }
    });
    return objSchedule;
  }
  return auxiliarScheduleFunction(dayName);
}

function oldestFromFirstSpecies(id) {
  const getAnimalId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  return Object.values(data.animals.find((animal) =>
    animal.id === getAnimalId).residents.reduce((oldest, specificAnimal) =>
    (specificAnimal.age > oldest.age ? specificAnimal : oldest)));
}

function increasePrices(percentage) {
  const arrayPrices = Object.entries(data.prices);
  const { prices } = data;
  arrayPrices.map((ageRange) => {
    const [range, price] = ageRange;
    prices[range] = (Math.round((price + ((price * (percentage / 100)))) * 100) / 100).toFixed(2);
    return prices;
  });
  return prices;
}

// employee Coverage employee Coverage employee Coverage
// employee Coverage employee Coverage employee Coverage

function findAnimalsId(arrayOfAnimals) {
  return arrayOfAnimals.map((array) => data.animals.find((animal) => array === animal.id).name);
}

function employeeCoverage(idOrName) {
  const objEmployees = {};
  data.employees.forEach((employee) => {
    objEmployees[`${employee.firstName} ${employee.lastName}`] = (findAnimalsId(employee.responsibleFor));
  });
  console.log(objEmployees);
}
console.log(employeeCoverage());

// employee Coverage employee Coverage employee Coverage
// employee Coverage employee Coverage employee Coverage

module.exports = {
  entryCalculator,
  schedule,
  animalMap,
  employeeCoverage,
  oldestFromFirstSpecies,
  increasePrices,
};
