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
const data = require('./data');

function animalsByIds(...ids) {
  if (ids === null) {
    return [];
  }
  return animals.filter((animal) => ids.some((id) => animal.id === id));
}
function animalsOlderThan(animal, age) {
  const filtrado = data.animals.filter((animas) => animas.name === animal);
  return filtrado[0].residents.every((ani) => ani.age > age);
}
function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((pessoa) => pessoa.firstName === employeeName
  || pessoa.lastName === employeeName);
}
// console.log(employeeByName('Wishart'));

function createEmployee(personalInfo, associatedWith) {
  const juntar = {
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
  return juntar;
}

function isManager(id) {
// console.log(data.employees[0]);
  const filtrarId = data.employees.filter((pessoa) => pessoa.id === id);
  return filtrarId.some((funcionario) => funcionario.id === '0e7b460e-acf4-4e17-bcb3-ee472265db83');
}
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const novoFuncionario = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(novoFuncionario);
}

function animalCount(species) {
  if (species === undefined) {
    return animals.reduce((acumolador, cont) => {
      const { name } = cont;
      return {
        ...acumolador,
        [name]: cont.residents.length,
      };
    }, {});
  }
  const animaisFiltrado = data.animals.filter((animas) => animas.name === species);
  return animaisFiltrado[0].residents.length;
}
// console.log(animalCount());

function entryCalculator(entrants) {
  let resultado = 0;
  if (entrants === undefined) {
    return 0;
  }
  if (entrants.Adult !== undefined) {
    resultado += entrants.Adult * 49.99;
  }
  if (entrants.Child !== undefined) {
    resultado += entrants.Child * 20.99;
  }
  if (entrants.Senior !== undefined) {
    resultado += entrants.Senior * 24.99;
  }
  return resultado;
}
// let entrants = { 'Adult': 2, 'Child': 2, 'Senior': 1 };
// console.log(entryCalculator(entrants));
function animalMap(options) {
  return options;
}

function schedule(dayName) {
  const listaDias = {};
  const listHours = Object.keys(data.hours);
  listHours.forEach((dia) => {
    if (dia !== 'Monday') {
      listaDias[dia] = `Open from ${data.hours[dia].open}am until ${data.hours[dia].close - 12}pm`;
    } else {
      listaDias[dia] = 'CLOSED';
    }
  });
  if (dayName) {
    return {
      [dayName]: listaDias[dayName],
    };
  }
  return listaDias;
}
// console.log(schedule())

function oldestFromFirstSpecies(id) {
  const filtrarId = data.employees.filter((pessoa) => pessoa.id === id);
  const primeiroAnimal = filtrarId[0].responsibleFor[0];
  const filtrarAnimal = data.animals.filter((animal) => animal.id === primeiroAnimal);
  let idade = 0;
  let nome = '';
  let sexo = '';
  for (let index = 0; index < filtrarAnimal[0].residents.length; index += 1) {
    if (idade < filtrarAnimal[0].residents[index].age) {
      nome = filtrarAnimal[0].residents[index].name;
      sexo = filtrarAnimal[0].residents[index].sex;
      idade = filtrarAnimal[0].residents[index].age;
    }
  }
  return [nome, sexo, idade];
}
// console.log(oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
function increasePrices(percentage) {
  const aumento = (1 + percentage / 100);
  data.prices = {
    Adult: Math.round(data.prices.Adult * aumento * 100) / 100,
    Senior: Math.round(data.prices.Senior * aumento * 100) / 100,
    Child: Math.round(data.prices.Child * aumento * 100) / 100,
  };
  return data.prices;
}
//  console.log(increasePrices(30))

function employeeCoverage(idOrName) {
  return idOrName;
}

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
