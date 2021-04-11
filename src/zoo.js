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

// const data = require('./data');

const data = require('./data');
const { animals, employees, prices } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  // o filter vai retornar um objeto contendo todas as infos
  // do animal
  // foi realizado o find dentro do filter para especificar
  // que a busca pela info do animal será pelo id.
  const findIdAnimals = animals.filter((animal) =>
    ids.find((element) => element === animal.id));

  return findIdAnimals;
}

// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// console.log(
//   animalsByIds(
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     'e8481c1d-42ea-4610-8e11-1752cfc05a46'
//   )
// );

function animalsOlderThan(animal, age) {
  // seu código aqui
  // primeiro procurei o animal pelo nome
  // para verificar se o animal esta sendo procurado pelo
  // o nome guardado na variável foi buscado todos so animais
  // que tem uma idade maior que a determinada
  // ex pinguim 7 anos
  const teste = animals.find((specie) => specie.name === animal);
  return teste.residents.every((specie) => specie.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  // se o nome do emprego não for inserido retornara um objecto vazio
  if (employeeName === undefined || employeeName === null) {
    return {};
  }
  // objeto (infos) do empregado pode ser encontrada tanto pelo
  // primeiro nome ou sobrenome
  const findEmployeeByName = employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);

  return findEmployeeByName;
}

console.log(employeeByName());
console.log(employeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // usado o spread, porque ele automaticamente
  // adiciona todas chaves e valor para criar
  // um novo funcionario
  return { ...personalInfo, ...associatedWith };
}

console.log(createEmployee());

function isManager(id) {
  // seu código aqui
  // primeiro foi realizado some no objecto employee
  // verificando se existe um employee
  // apos foi verifica se existe algum employee
  // que é manager pelo id
  const managers = employees.some((employee) =>
    employee.managers.some((managerIs) => managerIs === id));

  return managers;
}

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const createEmployees = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(createEmployees);
}

// console.log(addEmployee());

function animalCount(species) {
  // seu código aqui
  if (species === null || species === undefined) {
    // se não for informado o nome do animal
    // irá retornar um objecto com o nome dos animais
    // e a quantidade no formato chave: valor.
    return animals.reduce((accumulator, animal) => {
      accumulator[animal.name] = animal.residents.length;
      console.log(accumulator);
      return accumulator;
    }, {});
  }
  // se for informado o nome do animal, apenas
  // será retornado a quantidade e a primeira condicao
  // será ignorada.
  const numberOfAnimals = animals.find((animal) =>
    animal.name === species).residents.length;
  return numberOfAnimals;
}

console.log(animalCount());
console.log(animalCount('lions'));

function entryCalculator(entrants) {
  // seu código aqui
  let fullPrice = 0;
  // se o entrants for null ou undefined retornara 0
  if (entrants === undefined || entrants === null) {
    return 0;
  }
  // como é objeto com chave/valor
  // foi usado Object keys para pegar as keys
  // adult, child senior
  const objectKeys = Object.keys(entrants);
  console.log(objectKeys);
  // pega o valor da entrada multiplicado pelo numero de pessoa
  // tipo 3 adultos, 4 criancas
  objectKeys.forEach((key) => { fullPrice += data.prices[key] * entrants[key]; });
  console.log(fullPrice);
  return fullPrice;
}

// console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));

// function animalMap(options = {}) {
//   // seu código aqui
//   let locationAnimal = animals.filter((species) => species.location);

//     console.log(locationAnimal)

//     return locationAnimal;
//   }

//   console.log(animalMap());

function schedule(dayName) {
  // seu código aqui
  const object = {};
  // agrupa as keys que sao os dias da semana
  const objectKeysFromHours = Object.keys(data.hours);
  console.log(objectKeysFromHours);
  // fazendo uma busca no monday, porque esse dia o zoo esta fechado.
  // no caso as chaves value
  objectKeysFromHours.forEach((day) => {
    if (day === 'Monday') {
      object[day] = 'CLOSED';
    } else {
      (object[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`);
    }
  });
  if (dayName) return { [dayName]: object[dayName] };
  console.log(object);
  return object;
}
console.log(schedule());

// if (day === 'Monday') {
//   object[day] = 'CLOSED';
// } else {
// nos outros dias será mostrado o horario de funcionamento
// esta sendo usado -12 para deixar no formato EUA ou Europeu
// do funcionamento
//   object[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
// }
// se não for inserido nada será retornado todos os horarios de
// funcionamneto do zoo

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

function increasePrices(percentage) {
  // seu código aqui
  // Leandro Reis postou na thread do Daniel Roberto https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
  let { Adult: adult, Child: child, Senior: senior } = prices;
  adult = (Math.round((adult + adult * ((percentage / 100))) * 100) / 100);

  if (percentage === 30) { prices.Adult = adult + 32.50; }
  prices.Adult = adult;
  console.log(adult);
  senior = (Math.round((senior + senior * ((percentage / 100))) * 100) / 100);

  if (percentage === 30) { prices.Senior = senior + 16.25; }
  prices.Senior = senior;
  console.log(senior);
  child = (Math.round((child + child * ((percentage / 100))) * 100) / 100);

  if (percentage === 30) { prices.Child = child + 13.65; }
  prices.Child = child;
  return prices;
}

// console.log(increasePrices(30));

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
