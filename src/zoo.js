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

/*
  Consultei o repositório de Henrique Zózimo para resolver a próxima função.
  Link: https://github.com/tryber/sd-010-b-project-zoo-functions/blob/henrique-zozimo-zoo-functions-project/src/zoo.js
*/

const animalCount = (species) => {
  const quantityOfEachAnimal = {};
  animals.forEach((animal) => {
    const { name, residents } = animal;
    quantityOfEachAnimal[name] = residents.length;
  });
  if (species) {
    return quantityOfEachAnimal[species];
  }
  return quantityOfEachAnimal;
};

const entryCalculator = (entrants) => {
  if (entrants && entrants !== {}) {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return ((Adult * 49.99) + (Child * 20.99) + (Senior * 24.99));
  }
  return 0;
};

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
  entryCalculator,
  // schedule,
  animalCount,
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
