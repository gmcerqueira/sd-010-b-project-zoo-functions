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

const {animals} = data;




function animalsByIds(...ids) {
  const {animals} = data; 
  if (ids.length === 0) {
    return ids
  }
  let animalsList = [];
  if (ids.length > 0) {
    ids.forEach((id) => {
      const result = animals.find((animal) => animal.id === id)
      animalsList.push(result)
    })
  }
  return animalsList
}

function animalsOlderThan(animal, age) {
  const {animals} = data;
// uso do Findo para encontrar a espécie
  const {residents} = animals.find(especie => {
    if (animal === especie.name) {
      return true
    }
  })
// uso do Every para verificar a idade minima passada
  const result = residents.every(resident => resident.age >= age)
  
  return result
}


function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

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
