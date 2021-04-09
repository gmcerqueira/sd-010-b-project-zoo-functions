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
  if (ids.length === 0) return [];
  return data.animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const filterAnimal = data.animals.find((objAnimal) => objAnimal.name === animal).residents;
  return filterAnimal.every((resident) => resident.age > age);
  // return  filterAge// tem que ser booleano
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const { employees } = data;
  const returnFind = employees.find((employee) => {
    const emploReturn = employee.firstName === employeeName || employee.lastName === employeeName;
    return emploReturn;
  });
  return returnFind;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// function isManager(id) {
//   const employees = data.employees;
//    const a = employees.every((employee) => employee);

//   employees.forEach((employee) => console.log(employee))

//   //retorna boolean
// }



// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function animalCount(species) {
//   // seu código aqui
//   return species;
// }

// function entryCalculator(entrants) {
//   // seu código aqui
//   return entrants;
// }

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  // entryCalculator,
  // schedule,
  // animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  // isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
