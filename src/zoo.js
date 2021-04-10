const data = require('./data');

const { animals, employees: e } = data;

function animalsByIds(...ids) {
  return ids.map((id) => animals.find((animal) => animal.id === id));
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  const animalName = animals.find((nome) => nome.name === animal);
  return animalName.residents.every((idade) => idade.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined || employeeName === null) {
    return {};
  }
  const getName = e
    .find((name) => name.firstName === employeeName || name.lastName === employeeName);
  return getName;
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  const newobj = { ...personalInfo, ...associatedWith };
  return newobj;
  // seu código aqui
}

function isManager(id) {
  return e.some((pessoa) => (pessoa.managers.includes(id)));
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

function animalCount(species) {
  const empty = {};
  const getAnimal = animals.find((specie) => specie.name === species);
  animals.forEach((value) => {
    empty[value.name] = value.residents.length
  });
  if (species === undefined || species === null) return empty;
  return getAnimal.residents.length;
}
console.log(animalCount())

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
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
