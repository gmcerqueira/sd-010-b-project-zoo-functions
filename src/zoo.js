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

const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  const idsAnimals = [];
  ids.forEach((id) => animals.filter((animal) => {
    if (animal.id === id) {
      idsAnimals.push(animal);
    }
    return idsAnimals;
  }));
  return idsAnimals;
}

// request 1 feito com ajuda do meu amigo André de Bem da turma 10-B com a autorização de consulta do seu código para melhor entendimaneto da questão.

function animalsOlderThan(animal, age) {
  const animalIndex = animals.find((thisAnimal) => thisAnimal.name === animal);
  const isOlder = animalIndex.residents.every((thisAnimal) => thisAnimal.age >= age);
  return isOlder;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employeeIndex = employees.find((thisEmployee) => {
    const cpr = (thisEmployee.firstName === employeeName || thisEmployee.lastName === employeeName);
    return cpr;
  });
  return employeeIndex;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const employeeManagers = employees.some((employee) =>
    employee.managers.some((managerEmployee) => managerEmployee === id));

  return employeeManagers;
}

// Exercício resolvido com a ajuda da visualização do código do meu colega Igor Machado, da turma 10-B para o entendimento do .some

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmployees = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(addEmployees);
}

function animalCount(species) {
  const number = {};
  animals.forEach((animal) => {
    const { name, residents } = animal;
    number[name] = residents.length;
  });
  if (species === undefined) {
    return number;
  }
  return number[species];
}

// Para resolver o requisito 7 consultei o repositório do meu colega Henrique Zózimo, da turma 10-B, para entender melhor a lógica por trás desse requisito.

function entryCalculator(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return ((Adult * 49.99) + (Child * 20.99) + (Senior * 24.99));
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  const days = {};
  Object.keys(hours).forEach((day) => {
    if (day === 'Monday') {
      days[day] = 'CLOSED';
    } else {
      days[day] = `Open from ${hours[day].open}am until ${(hours[day].close) - 12}pm`;
    }
  });
  if (dayName === undefined) {
    return days;
  }
  return { [dayName]: days[dayName] };
}

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

function increasePrices(percentage) {
  prices.Adult *= (1 + (percentage / 100));
  prices.Child *= (1 + (percentage / 100));
  prices.Senior *= (1 + (percentage / 100));
  prices.Adult = Math.round(prices.Adult * 100) / 100;
  prices.Child = Math.round(prices.Child * 100) / 100;
  prices.Senior = Math.round(prices.Senior * 100) / 100;
}

// Essa requisição foi entendida dando uma olhada no repositório do meu colega Henrique Zózimo, da turma 10-B, porém com algumas modificações que pensei para encurtar o código.

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
