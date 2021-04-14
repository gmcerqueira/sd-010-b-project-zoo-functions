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

// const data = require('./data');
// const { object } = require('prop-types');
const { animals, employees, prices } = require('./data');

// Referência: https://app.betrybe.com/course/live-lectures/sd-cohort-10-b
function animalsByIds(...ids) {
  const selectedAnimalsById = [];
  ids.forEach((id) => {
    selectedAnimalsById.push(animals.find((animal) => animal.id === id));
  });
  return selectedAnimalsById;
}

// Referẽncia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Referência: https://app.betrybe.com/course/live-lectures/sd-cohort-10-b
function animalsOlderThan(animal, age) {
  const selectedAnimal = animals.find((e) => e.name === animal);
  return selectedAnimal.residents.every((resident) => resident.age >= age);
}

// Referência: https://pt.stackoverflow.com/questions/173221/como-checar-se-uma-string-est%C3%A1-vazia-em-javascript/173226
function employeeByName(employeeName) {
  console.log(employeeName);
  if (!employeeName) {
    return {};
  }
  return employees.find((e) => ((e.firstName === employeeName) || (e.lastName === employeeName)));
}

// Referência: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-spread-operator-parametro-rest-destructuring-e-mais/822dc255-28d1-4916-bd71-5b1aa70079da/conteudos/d8f96b7c-6a06-4cfe-b4ce-01d6c93adf5d/spread-operator/823d3881-206e-48c3-b8d9-c712346a69e8?use_case=side_bar
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// Referência: https://metring.com.br/string-contem-substring-javascript#:~:text=O%20m%C3%A9todo%20includes()%20%C3%A9,m%C3%A9todo%20retorna%20true%20ou%20false%20.
function isManager(id) {
  return employees.some((employee) => (employee.managers.includes(id)));
}

// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    const animalsCount = {};
    animals.forEach((animal) => { animalsCount[animal.name] = animal.residents.length; });
    return animalsCount;
  }
  return animals.find((animal, index) => animals[index].name === species).residents.length;
}

// Referência: https://flaviocopes.com/how-to-check-object-empty/
// Referência: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-map-e-filter/eb53fd32-be11-4a70-a925-c29e1d7f8925/conteudos/845d744b-bf9b-412f-932d-43714cfb225e/arraymap/007b4ce5-eaa6-4d46-ae85-282d13a36db0?use_case=side_bar
// Referência: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-reduce/11a217d9-4e2a-4102-8d89-7c4460daa739/conteudos/af820e2d-f7c9-46ce-9ab6-82da8ca49740/arrayreduce/1bb80dd7-df43-4607-98cf-53d94ed69c02?use_case=side_bar
function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const sumItemsArray = (sum, currentValue) => sum + currentValue;

  return Object.keys(entrants).map((key) => prices[key] * entrants[key]).reduce(sumItemsArray);
}

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
