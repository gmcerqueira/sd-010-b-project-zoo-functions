/* eslint-disable no-extra-semi */
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

const { animals } = data;
const { employees } = data;
const { prices } = data;
const { hours } = data;

function animalsByIds(...ids) {/* caso a função receba um parâmetro como spread, ele já retorna um array vazio Colaboração do Rernato G Souza*/
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const animalSpecies = animals.find((specie) => specie.name === animal);
  return animalSpecies.residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) { /* !employeeName substitui === undefined */
    return {};
  }
  return employees.find(
    (employee) =>
      (employee.firstName === employeeName || employee.lastName === employeeName),
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const occupations = employees.map((employee) => employee.managers);
  return occupations.map((occupation) =>
    occupation.some((managerJob) => managerJob === id)).some((item) => item === true);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newCollab = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newCollab);
}

function animalCount(species) {
  if (typeof species === 'undefined') {
    const object = {};
    animals.forEach((elem) => {
      object[elem.name] = elem.residents.length;
    });
    return object;
  }
  return animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (typeof entrants === 'undefined') {
    return 0;
  }
  const { Adult, Child, Senior } = entrants;
  let fullPrice = 0;
  if (typeof Adult === 'number') {
    fullPrice += Adult * prices.Adult;
  }
  if (typeof Child === 'number') {
    fullPrice += Child * prices.Child;
  }
  if (typeof Senior === 'number') {
    fullPrice += Senior * prices.Senior;
  }
  return fullPrice;/* com colaboração de Henrique Zózimo */
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {/* realizado com a colaboração de Arlen Freitas */
  const objSchedule = {};
  const keys = Object.keys(hours);
  const values = Object.values(hours);
  keys.forEach((key, index) => {
    objSchedule[key] = `Open from ${values[index].open}am until ${values[index].close - 12}pm`;
    if (key === 'Monday') {
      objSchedule[key] = 'CLOSED';
    }
  });
  if (dayName) {
    const weekDay = objSchedule[dayName];
    return {
      [dayName]: weekDay,
    };
  }
  return objSchedule;
};

// function oldestFromFirstSpecies(id) {
//   const employee = employees.find((person) => person.id === id);
//   const firstSpeciesId = employee.responsibleFor[0];
//   const animal = animals.find((species) => species.id === firstSpeciesId);
//   let olderAnimal = { age: -1 };
//   animal.residents.forEach((resident) => {
//     if (resident.age > olderAnimal.age) {
//       olderAnimal = resident;
//     }
//   });
// };

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  //   animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
