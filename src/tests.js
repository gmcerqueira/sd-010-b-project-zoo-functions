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

function schedule(dayName) {
  const fullSchedule = Object.entries(data.hours);
  const objSchedule = {};
  if (!dayName) {
    fullSchedule.forEach((day) => {
      if (day[1].open === 0 && day[1].close === 0) {
        objSchedule[day[0]] = 'CLOSED';
      } else {
        objSchedule[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
      }
    });
    return objSchedule;
  }
  const requestedDay = fullSchedule.find((day) => day[0] === dayName);
  if (requestedDay[1].open === 0 && requestedDay[1].close === 0) {
    objSchedule[requestedDay[0]] = 'CLOSED';
    return objSchedule;
  }
  objSchedule[requestedDay[0]] = `Open from ${requestedDay[1].open}am until ${requestedDay[1].close - 12}pm`;
  return objSchedule;
}
console.log(schedule('Tuesday'));

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
  animalMap,
  employeeCoverage,
  oldestFromFirstSpecies,
  increasePrices,
};
