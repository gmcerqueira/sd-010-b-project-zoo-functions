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

const { employees } = data;
const { animals } = data;

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return ids;
  }
  const animalsList = [];
  if (ids.length > 0) {
    ids.forEach((id) => {
      const result = animals.find((animal) => animal.id === id);
      animalsList.push(result);
    });
  }
  return animalsList;
}

function animalsOlderThan(animal, age) {
  // uso do Find para encontrar a espécie
  const { residents } = animals.find((especie) => (animal === especie.name));
  // uso do Every para verificar a idade minima passada
  const result = residents.every((resident) => resident.age >= age);

  return result;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  // uso do Find para encontrar o primeirou ou último nome recebido por parâmetro
  const findEmployee = employees.find((employee) =>
    (employeeName === employee.firstName || employeeName === employee.lastName));
  return findEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  // Recebi ajuda dos colegas Diegho Moraes e João Vitor Findaza
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  //  Recebi ajuda do colega Lucas Martins
  return employees.some((employee) => employee.managers.includes(id));
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   const { employees } = data;
//   const keys = Object.keys(employees[0])
//   const lastEmployee = {}

//   console.log(employees)
// }

// addEmployee();

function animalCount(species) {
  const especieAndPopulation = {};

  if (!species) {
    animals.forEach(({ name, residents }) => {
      especieAndPopulation[name] = residents.length;
    });
    return especieAndPopulation;
  }
  const animalPopulation = animals.find(({ name }) => name === species);

  return animalPopulation.residents.length;
}

function entryCalculator(entrants) {
  const { prices } = data;
  let total = 0;

  if (!entrants) return total;

  const entrantsKeys = Object.keys(entrants);

  entrantsKeys.forEach((key) => {
    total += (prices[key] * entrants[key]);
  });

  return total;
}

// function animalMap(options) {

// }

function schedule(dayName) {
  const { hours } = data;

  const publicSchedule = {};

  const scheduleDays = Object.keys(hours);

  scheduleDays.forEach((day) => {
    publicSchedule[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  });
  publicSchedule.Monday = 'CLOSED';

  if (!dayName) return publicSchedule;
  // Recebi ajuda do colega Lucas Martins para entender como acessar objeto de forma dinâmica.
  return { [dayName]: publicSchedule[dayName] };
}

function oldestFromFirstSpecies(id) {
  const findEmployee = employees.find((employee) => employee.id === id).responsibleFor[0];
  const findAnimal = animals.find((animal) => animal.id === findEmployee).residents;

  // https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/ -> sort()
  const oldestAnimal = findAnimal.sort((a, b) => b.age - a.age);

  const { name, sex, age } = oldestAnimal[0];

  return [name, sex, age];
}

function increasePrices(percentage) {
  const { prices } = data;

  const ticketsType = Object.keys(prices);

  ticketsType.forEach((type) => {
    prices[type] = Math.ceil(prices[type] * (percentage + 100)) / 100;
  });
  return prices;
}

function specieName(param) {
  const reduceAnimals = param.reduce((acc, initialValue) => {
    const animalNames = animals.find((animal) => animal.id === initialValue).name;
    acc.push(animalNames);
    return acc;
  }, []);
  return reduceAnimals;
}

// Recebi ajuda dos colegas Lucas Martins e João Vanelli
function employeeCoverage(idOrName) {
  if (!idOrName) {
    return employees.reduce((acc, employee) => {
      const employeeNames = specieName(employee.responsibleFor);
      acc[`${employee.firstName} ${employee.lastName}`] = employeeNames;
      return acc;
    }, {});
  }
  const searchEmployee = employees.find(({ firstName, lastName, id }) =>
    id === idOrName || lastName === idOrName || firstName === idOrName);

  const idAnimals = searchEmployee.responsibleFor;

  const specieOfAnimals = specieName(idAnimals);
  return { [`${searchEmployee.firstName} ${searchEmployee.lastName}`]: specieOfAnimals };
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  // addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
