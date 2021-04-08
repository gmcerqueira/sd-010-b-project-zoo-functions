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

const animalsByIds = (...ids) => animals.filter((animal) => ids.includes(animal.id));

const animalsOlderThan = (animal, age) => {
  const selectedAnimal = animals.find((thisAnimal) => thisAnimal.name === animal).residents;
  return selectedAnimal.every((thisAnimal) => thisAnimal.age >= age);
};

function employeeByName(employeeName) {
  function findEmployee(employee) {
    return employee.firstName === employeeName || employee.lastName === employeeName;
  }
  const expectedEmployee = employees.find((employee) => findEmployee(employee));
  return employeeName ? expectedEmployee : {};
}

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = (id) => {
  const selectedEmployee = employees.find((employee) => employee.id === id).id;
  return employees.some((thisEmployee) => thisEmployee.managers.includes(selectedEmployee));
};

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

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
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
