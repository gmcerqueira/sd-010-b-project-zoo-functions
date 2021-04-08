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

const { animals, employees } = data;

const animalsByIds = (...ids) => animals.filter((bicho) => ids.includes(bicho.id));

const animalsOlderThan = (animal, age) => {
  const selectedAnimal = animals.find((bicho) => bicho.name === animal).residents;
  return selectedAnimal.every((bicho) => bicho.age >= age);
};

function employeeByName(employeeName) {
  function findEmployee(employee) {
    return employee.firstName === employeeName || employee.lastName === employeeName;
  }
  const expectedEmployee = employees.find((employee) => findEmployee(employee));
  return employeeName ? expectedEmployee : {};
}

// const createEmployee = (personalInfo, associatedWith) => {
//   // seu código aqui
// };

// const isManager = (id) => {
//   // seu código aqui
// };

// const addEmployee = (id, firstName, lastName, managers, responsibleFor) => {
//   // seu código aqui
// }

// const animalCount = (species) => {
//   // seu código aqui
// };

// const entryCalculator = (entrants) => {
//   // seu código aqui
// };

// const animalMap = (options) => {
//   // seu código aqui
// };

// const schedule = (dayName) => {
//   // seu código aqui
// };

// const oldestFromFirstSpecies = (id) => {
//   // seu código aqui
// };

// const increasePrices = (percentage) => {
//   // seu código aqui
// };

// const employeeCoverage = (idOrName) => {
//   // seu código aqui
// };

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
  // createEmployee,
};
