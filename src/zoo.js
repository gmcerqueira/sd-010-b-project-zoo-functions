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

// function animalsByIds(...ids) {
//   if (ids.length === 0) {
//     return ids;
//   }
//   const identification = [];
//   if (ids.length > 0) {
//     ids.forEach((id) => {
//       const search = (animals.find((animal) => animal.id === id));
//       identification.push(search);
//     });
//   }
// }
// este exercício foi resolvido até aqui a partir dos plantões onde colegas tiraram dúvidas.

// function animalsOlderThan(animal, age1) {
//   const chosenName = data.animals.filter((name1) => name1.name === animal);
//   const ages = chosenName.every((chosen) => chosen.residents.age > age1);
//   return ages;
// }
// console.log(animalsOlderThan('otters', 2));

// function employeeByName(employeeName) {
//   if (employeeName.length === 0) {
//     return employeeName;
//   }
//   const first = employees.filter((nameOf) => nameOf.firstName === employeeName);
//   const first1 = first.firstName;
//   if (employeeName === first1) {
//     const result1 = employees.find((foundFirstName) => foundFirstName.firstName === first);
//     return result1;
//   }
//   const last = employees.filter((lastNameFound) => lastNameFound.lastName === employeeName);
//   const last1 = last.lastName;
//   if (employeeName === last1) {
//     const result2 = employees.find((lastNameOf) => lastNameOf.lastName === last1);
//     return result2;
//   }
// }
// console.log(employeeByName());

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(managerId) {
//   const checker = employees.some((employee) => employee.managers === [managerId]);
//   return checker;
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function animalCount(species) {
//   if (species.length === 0) {
//     animals.reduce((accumulator, currentValue) => {
//       accumulator[currentValue.animals.name] = currentValue.animals.popularity;
//       return accumulator;
//     }, {});
//   }
//   if (species > 0) {
//     species.forEach((specie) => {
//       const quantity = animals.find((animal) => animal.specie === specie);
//       return quantity.popularity;
//     });
//   }
// }

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
//   // entryCalculator,
//  schedule,
//  animalCount,
//   animalMap,
//  animalsByIds,
//   employeeByName,
//   employeeCoverage,
//   addEmployee,
//  isManager,
//  animalsOlderThan,
  oldestFromFirstSpecies,
//   increasePrices,
//   createEmployee,
};
