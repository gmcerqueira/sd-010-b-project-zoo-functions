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
// const { hours } = data;
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

  const animalOlder = animals.find(({ name }) => name === animal);
  return animalOlder.residents.every((resident) => resident.age >= age);
}
// console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) {
  // seu código aqui
  // const employee = employeeName;
  const object = {};
  if (employeeName === undefined) { return object; }

  const employeefound = employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
  // const employeefound = employees.map(({ firstName, lastName }) => ({
  //   firstName === employeeName || lastName === employeeName
  // }))
  // console.log(employeefound);

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
// addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe');

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
  if (entrants === undefined || entrants === {}) {
    return 0;
  }

  const arrEntrants = Object.keys(entrants);
  let result = 0;

  arrEntrants.forEach((entrant) => {
    result += prices[entrant] * entrants[entrant];
  });

  return result;
}
entryCalculator();

// const allAnimalsOn = () => animals.map(({name})=> name)
// console.log(allAnimalsOn())

function animalMap(options) {
  // seu código aqui
  // const result = {};
  // if (options === undefined) {
  //   const animalsMapped = animals.map(({ name, location, residents }) => {
  //    return  location
  //   })
    
  //    console.log(animalsMapped)
  // }
}
animalMap()
function schedule(dayName) {
  // seu código aqui
  // const days = hours;
  // console.log(hours)
}
schedule();

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const findEmployee = employees.find((person) =>
    person.id === id).responsibleFor[0];

  const findAnimals = animals.find((Animal) => Animal.id === findEmployee);
  const animalSorted = findAnimals.residents.sort((a, b) => b.age - a.age)[0];
  return [animalSorted.name, animalSorted.sex, animalSorted.age];
}
// oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992');

function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;

  data.prices = {
    Adult: Math.ceil(Adult * (percentage + 100)) / 100,
    Senior: Math.ceil(Senior * (percentage + 100)) / 100,
    Child: Math.ceil(Child * (percentage + 100)) / 100,
  };
  console.log(data.prices)
}
// increasePrices(30);



function employeeCoverage(idOrName) {
  // seu código aquigo
  const result = {};
  if (idOrName === undefined) {
    employees.forEach(({ firstName, lastName, responsibleFor }) => {
      result[`${firstName} ${lastName}`] = animalsByIds(...responsibleFor).map(({ name }) =>
        name);
    });
  }

  const findEmployee = employees.forEach(({ firstName, lastName, id, responsibleFor }) => {
    if (firstName === idOrName || lastName === idOrName || id === idOrName) {
      result[`${firstName} ${lastName}`] = animalsByIds(...responsibleFor).map(({ name }) => name);
    }
  });
  // console.log(findEmployee);
  // console.log(result)

  return result;
}
// employeeCoverage();

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
