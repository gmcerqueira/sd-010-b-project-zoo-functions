const data = require('./data');

const { animals, employees, prices } = data;

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter((animalsId, i) => animalsId.id === ids[i]);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalEncontrado = animals.find((myAnimal) => myAnimal.name === animal);
  return animalEncontrado.residents.every((idade) => idade.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const foundEmployee = employees
    .find((employee) => Object.values(employee).includes(employeeName));
  return { ...foundEmployee };
}

function createEmployee(personalInfo, associatedWith) {
// seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const managersIds = employees.reduce((acc, current) => [...acc, ...current.managers], []);
  return managersIds.includes(id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

/* function animalCount(species) {
  // seu código aqui
  let countReport = animals.reduce((accObject, current) => { accObject[current.name] = current.residents.length;
    return accObject;
  }, {});
  if (Object.keys(countReport).includes(species)) {
    countReport = countReport[species];
  }
  return countReport;
} */

function entryCalculator(entrants = {}) {
  return Object.entries(entrants).reduce(
    (priceAccumulator, currentGroup) => {
      const price = prices[currentGroup[0]];
      const quantity = currentGroup[1];
      return priceAccumulator + (price * quantity);
    }, 0,
  );
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
  animalsByIds,
  employeeByName,
  isManager,
  animalsOlderThan,
  createEmployee,
  entryCalculator,
  addEmployee,
};

// animalCount,
//  increasePrices,
//  oldestFromFirstSpecies,
//  schedule,
//  animalMap,
//  employeeCoverage,
