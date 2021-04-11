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

// const [name, sex, age] = residents;

function animalsByIds(...ids) {
  if (!ids.length) {
    return [];
  }
  const identification = [];
  if (ids.length > 0) {
    ids.forEach((id) => {
      const search = (animals.find((animal) => animal.id === id));
      identification.push(search);
    });
    return identification;
  }
}
// este exercício foi resolvido com a ajuda de colegas Diegho, Carlos e Alan, além dos plantões onde colegas tiraram dúvidas.

function animalsOlderThan(animal, age1) {
  const chosenName = animals.find((name1) => name1.name === animal);
  const ages = chosenName.residents.every((chosen) => chosen.age > age1);
  return ages;
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const nameFound = employees.find((nameOf) => nameOf.firstName === employeeName || nameOf
    .lastName === employeeName);
  return nameFound;
}
// Diegho me auxiliou com parte da resposta deste exerício.

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: [
      associatedWith.managers[0],
      associatedWith.managers[1],
    ],
    responsibleFor: [
      associatedWith.responsibleFor[0],
      associatedWith.responsibleFor[1],
      associatedWith.responsibleFor[2],
    ],
  };
}

function isManager(manager) {
  const checker = employees.find((employee) => employee.managers.includes(manager));
  if (checker === undefined) {
    return false;
  }
  const secondCheck = Object.values(checker.managers);
  const thirdCheck = secondCheck.includes(manager);
  return thirdCheck;
}

// colega Diegho me sugeriu utilizar a usar a função includes neste exerício.

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

function animalCount(species) {
  if (!species) {
    const quantities = animals.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
    return quantities;
  }
  const quantity = animals.find((animal) => animal.name === species);
  return quantity.residents.length;
}
// este exercício foi resolvido com a ajuda de colegas Diegho, Carlos e Alan.

// function entryCalculator(entrants) {
//   // seu código aqui
// }

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {

// }

function oldestFromFirstSpecies(id) {
  const checkId = employees.find((employee) => employee.id === id);
  const checkAnimal = checkId.responsibleFor[0];
  const findAnimal = animals.find((animal) => animal.id === checkAnimal).residents;
  let age = 0;
  findAnimal.forEach((animal) => {
    if (animal.age > age) {
      age = animal.age;
    }
  });
  const result = findAnimal.find((maxAge) => maxAge.age === age);
  return Object.values(result);
}
// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
//   entryCalculator,
//  schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  //   employeeCoverage,
  //   addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
