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

// const lion = {id} = data.animals[0]
// // console.log( lion)
// // console.log(data.animals[0])
const { animals } = data;
const { employees } = data;
const {residents} = data.employees;
console.log(residents)

function animalsByIds(...ids) {
  // seu código aqui
  const param = ids; // const que recebe o parâmetro

  const animalsMapped = param.map((IdCode) => // map para trazer um objeto a partir do parametro

    animals.find((animal) => animal.id === IdCode)); // dentro do map apliquei um find que vai procurar no banco de dados de animais o primeiro id que possui o mesmo valor que o id do param do meu map

  return animalsMapped; // A função retorna a minha const com a outra função
}
animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'ef3778eb-2844-4c7c-b66c-f432073e1c6b');

function animalsOlderThan(animal, age) {
//   // seu código aqui
    // animals.filter(())
const animalOlder = animals.find ((unit) => unit.name === animal);
return animalOlder.residents.every((resident) => resident.age >= age);
}
console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) { // Usei a mesma lógica do primeiro exercício.
  // seu código aqui
  // const employee = employeeName;
  const object = {};
  if (employeeName === undefined) { return object; }

  const employeeMapped = employees.find((person) =>
    person.firstName === employeeName || person.lastName === employeeName);

  // console.log(employeeMapped);

  return employeeMapped;
}
employeeByName('Emery');

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
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
