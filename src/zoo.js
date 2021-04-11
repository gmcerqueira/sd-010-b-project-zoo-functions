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

const {
  animals,
  employees,
} = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  const animalsData = ids.map((id) => animals.find((animal) => (animal.id === id)));
  return animalsData;
}

// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

function animalsOlderThan(animal, age) {
  const findAnimal = animals.find((element) => element.name === animal).residents;
  const verifyAge = findAnimal.every((value) => value.age >= age);
  return verifyAge;
}

function employeeByName(employeeName) {
  let employeeData = employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  if (employeeName === undefined) {
    employeeData = {};
  }
  return employeeData;
}

// console.log(employeeByName('Orloff'));

function createEmployee(personalInfo, associatedWith) {
  const newEmployeeData = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployeeData;
}
// console.log(createEmployee({
//   id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
//   firstName: 'John',
//   lastName: 'Doe',
// }, {
//   managers: [
//     'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     '9e7d4524-363c-416a-8759-8aa7e50c0992'
//   ],
//   responsibleFor: [
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//     'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
//   ]
// }));

function isManager(id) {
  const burl = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const ola = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const stephanie = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const managerList = [burl, ola, stephanie];
  const findEmployee = employees.find((employee) => employee.id === id);
  return managerList.some((manager) => findEmployee.id === manager);
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployeeData = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployeeData);
}


// function animalCount(species) {
//   const object = {};
//   const animalList = animals.reduce((acc, curr) => acc['nome'] = curr.name, {});
//   if (species === undefined) {
//     return animalList;
//   } else {
//     return animals.find((animal) => animal.name === species).residents.length;
//   }
// }

// console.log(animalCount());

// function entryCalculator(entrants) {
//   // seu código aqui
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
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
