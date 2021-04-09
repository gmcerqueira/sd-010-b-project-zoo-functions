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

function animalsByIds(...ids) {
  // seu código aqui
  const param = ids; // const que recebe o parâmetro
  const object = [];
  if (param === undefined) { return object; }

  const animalsMapped = param.map((IdCode) => // map para trazer um array a partir do parametro

    animals.find((animal) => animal.id === IdCode)); // dentro do map apliquei um find que vai procurar no banco de dados de animais o primeiro id que possui o mesmo valor que o id do param do meu map

  return animalsMapped; // A função retorna a minha const com a outra função
}
animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'ef3778eb-2844-4c7c-b66c-f432073e1c6b');

function animalsOlderThan(animal, age) {
//   // seu código aqui

  const animalOlder = animals.find((unit) => unit.name === animal);
  return animalOlder.residents.every((resident) => resident.age >= age);
}
// console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) {
  // seu código aqui
  // const employee = employeeName;
  const object = { };
  if (employeeName === undefined) { return object; }

  const employeefound = employees.find((person) =>
    person.firstName === employeeName || person.lastName === employeeName);

  // console.log(employeeMapped);

  return employeefound;
}
employeeByName('Emery');

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  const managersFinder = employees.some((person) =>
    person.managers.some((manager) => manager === id));
  // console.log(managersFinder);
  return managersFinder;
}

isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83');

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}
addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe');

function animalCount(species) {
  // // seu código aqui
  const allAnimals = {};

  if (species === undefined) {
    animals.forEach(({ name, residents }) => {
      allAnimals[name] = residents.length;
    });
    return allAnimals;
  }
  const animalVerify = animals.find((animal) => animal.name === species);

  return animalVerify.residents.length;
}
animalCount();

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
