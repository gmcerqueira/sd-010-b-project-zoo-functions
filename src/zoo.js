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

const { animals } = require('./data');
const { employees } = require('./data');
const { prices } = require('./data');
const { hours } = require('./data');
// const data = require('./data');

// 1. IMPLEMENTE A FUNÇÃO animalsByIds
// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies
// referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

function animalsByIds(...ids) {
  return ids.map((ID) => animals.find(({ id }) => id.includes(ID)));
}
// console.log(animalsByIds());

// 2. IMPLEMENTE A FUNÇÃO animalsOlderThan
// Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela
// espécie possuem a idade mínima especificada

function animalsOlderThan(animal, age) {
  return animals.find(({ name }) => name.includes(animal)).residents
    .every((resident) => resident.age >= age);
}
// console.log(animalsOlderThan('otters', 7));

// 3. IMPLEMENTE A FUNÇÃO employeeByName
// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

function employeeByName(employeeName) {
  const empty = {};

  if (employeeName) {
    return employees.find(({ firstName, lastName }) =>
      (firstName.includes(employeeName) || lastName.includes(employeeName)));
  }
  return empty;
}
// console.log(employeeByName('Emery'));

// 4. IMPLEMENTE A FUNÇÃO createEmployee
// A função, a partir de informações recebidas nos parâmetros, é capaz de criar um objeto equivalente
// ao de uma pessoa colaboradora, retornando-o

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// 5. IMPLEMENTE A FUNÇÃO isManager
// Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// 6. IMPLEMENTE A FUNÇÃO addEmployee
// A função irá adicionar uma nova pessoa colaboradora ao array employees, presente no arquivo data.js

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}
// console.log(addEmployee('122', 'Ad', 'Jr', ['1234', '444'], ['1255', '455']));

// 7. IMPLEMENTE A FUNÇÃO animalCount
// Esta função é responsável por contabilizar a quantidade de animais.

function animalCount(species) {
  if (species) {
    return (animals.find(({ name }) =>
      name.includes(species)).residents.length);
  }
  return animals.reduce((acc, currAnimal) => {
    acc[currAnimal.name] = currAnimal.residents.length;
    return acc;
  }, {});
}
// console.log(animalCount('penguins'));
// console.log(animalCount());

// 8. IMPLEMENTE A FUNÇÃO entryCalculator
// A partir da quantidade de visitantes e a faixa etária de cada um, esta função é responsável
// por retornar o preço total a ser cobrado

function entryCalculator(entrants) {
  return (!entrants) ? 0 : Object.keys(entrants)
    .reduce((acc, currVal) => acc + (entrants[currVal] * prices[currVal]), 0);
}
// console.log(entryCalculator({ Adult: 1, Senior: 2 }));

function animalLocations() {
  return animals.reduce((acc, animal) => {
    const local = acc;
    if (!local[animal.location]) local[animal.location] = [];
    return local;
  }, {});
}
// console.log(animalLocations());

function animalsLocationDefault() {
  const animalsLocation = {};
  const local = ['NE', 'NW', 'SE', 'SW'];
  local.forEach((location) => {
    const foundAnimals = animals.filter((animal) =>
      animal.location.includes(location)).map((animal) => animal.name);
    animalsLocation[location] = foundAnimals;
  });
  return animalsLocation;
}
// console.log(animalsLocationDefault(local));

function nameOfAnimals(animal, info) {
  let names = animals.find((creature) => creature.name.includes(animal))
    .residents.map((resident) => resident.name);
  if (info.sex) {
    names = animals.find((creature) => creature.name.includes(animal))
      .residents.filter((resident) => resident.sex.includes(info.sex))
      .map((resident) => resident.name);
  }
  if (info.sorted) names.sort();

  return names;
}

// console.log(nameOfAnimals('lions'));

function animalsWithInfos(info) {
  const locations = animalLocations();
  // const obj = {};
  animals.map((animal) =>
    locations[animal.location].push({ [animal.name]: nameOfAnimals(animal.name, info) }));
  return locations;
}
// console.log(listOfRegions());

function animalMap(options = '') {
  if (options.includeNames) return animalsWithInfos(options);
  return animalsLocationDefault();
}
// const options = { includeNames: true, sex: 'female', sorted: true };
// console.log(animalMap(options));

// 10. IMPLEMENTE A FUNÇÃO schedule
// A função é responsável por disponibilizar as informações de horário para uma consulta,
// que pode querer ter acesso a todo o cronograma da semana ou apenas o cronograma de um dia específico

function schedule(dayName) {
  const objDay = {};
  Object.keys(hours).forEach((day) => {
    if (day !== 'Monday') {
      objDay[day] = `Open from ${hours[day].open}am until ${(hours[day].close) - 12}pm`;
    } else {
      objDay[day] = 'CLOSED';
    }
  });
  if (dayName) {
    return { [dayName]: objDay[dayName] };
  }
  return objDay;
}
// console.log(schedule('Saturday'));

// 11. IMPLEMENTE A FUNÇÃO oldestFromFirstSpecies
// A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa
// colaboradora do parâmetro

function oldestFromFirstSpecies(id) {
  const helper = employees.find((person) => person.id.includes(id)).responsibleFor[0];
  const infoAnimal = animals.find((animal) => animal.id.includes(helper)).residents
    .sort((animal1, animal2) => animal2.age - animal1.age)[0];
  return [infoAnimal.name, infoAnimal.sex, infoAnimal.age];
}
// console.log(oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// 12. IMPLEMENTE A FUNÇÃO increasePrices
// A função é responsável por aumentar o preço das visitas, com base no valor de aumento recebido
// no parâmetro, em porcentagem

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) => {
    const newPrice = Math.round((prices[key] * (1 + (percentage / 100))) * 100) / 100;
    prices[key] = newPrice;
  });
  return prices;
}
// console.log(increasePrices(50));

// 13. IMPLEMENTE A FUNÇÃO employeeCoverage
// A função é responsável por consultar as espécies pela qual a pessoa colaborada, recebida no
// parâmetro através de seu id, firstName ou lastName, é responsável

// Encontrar animal de responsabilidade do funcionário
function findAnimals(employee) {
  const responsible = employee.responsibleFor.map((id) =>
    animals.find((creature) => creature.id.includes(id)).name);
  return responsible;
}

// Tratamento do lado IF da condição (if/else)
function IFelse(idOrName) {
  let result = {};
  const analysis = (employee) =>
    employee.id.includes(idOrName)
    || employee.firstName.includes(idOrName)
    || employee.lastName.includes(idOrName);
  employees.filter((analysis)).forEach((employee1) => {
    const responsible = findAnimals(employee1);
    result = { [`${employee1.firstName} ${employee1.lastName}`]: responsible };
  });
  return result;
}

// Tratamento do lado ELSE da condição (if/else)
function ifELSE() {
  const initial = {};
  let obj = {};
  let result = {};
  employees.forEach((employee) => {
    obj = { [`${employee.firstName} ${employee.lastName}`]: findAnimals(employee) };
    result = Object.assign(initial, obj);
  });
  return result;
}
// console.log(ifELSE());

function employeeCoverage(idOrName) {
  let result = {};
  if (idOrName) {
    result = IFelse(idOrName);
  } else {
    result = ifELSE();
  }
  return result;
}
// console.log(employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
// console.log(employeeCoverage('Stephanie'));
// console.log(employeeCoverage());

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
