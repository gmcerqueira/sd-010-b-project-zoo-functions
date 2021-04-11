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
// este exercício foi resolvido até aqui a partir dos plantões onde colegas tiraram dúvidas.

// function animalsOlderThan(animal, age1) {
//   const chosenName = data.animals.filter((name1) => name1.name === animal);
//   const ages = chosenName.every((chosen) => chosen.residents.age > age1);
//   return ages;
// }
// console.log(animalsOlderThan('otters', 2));

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const first = employees.filter((nameOf) => nameOf.firstName === employeeName);
  const first1 = first.firstName;
  if (employeeName === first1) {
    return employees.find((foundFirstName) => foundFirstName.firstName === first1);
  }
  const last = employees.filter((lastNameFound) => lastNameFound.lastName === employeeName);
  const last1 = last.lastName;
  if (employeeName === last1) {
    return employees.find((lastNameOf) => lastNameOf.lastName === last1);
  }
}
console.log(employeeByName('Emery'));

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(managerId) {
//   const checker = employees.fi((employee) => employee.managers === [managerId]);
//   const checked = employees.find((employee) => employee.managers === managerId);
//   console.log(checked);
//   return checked;
// }
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

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
  console.log(checkId);
  const checkAnimal = checkId.responsibleFor[0];
  const findAnimal = animals.find((animal) => animal.id === checkAnimal).residents;
  console.log(findAnimal);
  let age = 0;
  findAnimal.forEach((animal) => {
    if (animal.age > age) {
      age = animal.age;
      console.log(age);
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
  //  isManager,
  //  animalsOlderThan,
  oldestFromFirstSpecies,
//   increasePrices,
//   createEmployee,
};
