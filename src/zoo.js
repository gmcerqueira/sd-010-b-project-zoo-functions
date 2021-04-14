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

const { animals, employees } = require('./data');
// const data = require('./data');

// 1. IMPLEMENTE A FUNÇÃO animalsByIds
// Caso receba nenhum parâmetro, necessário retornar um array vazio
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id
// Ao receber mais de um id, retorna um array com as espécies referentes aos ids
function animalsByIds(...ids) {
  if (ids !== null && ids !== undefined) {
    return animals.filter((animal) => ids.includes(animal.id));
  }
  return [];
}
// console.log (animalsByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274' , 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'))

// 2. IMPLEMENTE A FUNÇÃO animalsOlderThan
// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada
function animalsOlderThan(animal, age) {
  return animals.find((especieName) => especieName.name === animal)
    .residents.every((animalAge) => animalAge.age >= age);
}

// Other way to do:
// function animalsOlderThan(animal, age) {
//   return animals.find((older) => older.residents[0].age === animal)
//     .residents.every((animalAge) => animalAge.age >= age);
// }

// Another way to do:
// function animalsOlderThan(animal, age) {
//   const especieName = (bicho) => bicho.name === animal;
//   console.log (animals.find(especieName));
//   return animals.find(especieName).residents.every((idadeAnimal) => idadeAnimal.age >= age);
// }
// animalsOlderThan('abelha', 10)

// 3. IMPLEMENTE A FUNÇÃO employeeByName
// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário
function employeeByName(employeeName) {
  if (employeeName !== null && employeeName !== undefined) {
    return employees.find((name) =>
      name.firstName === employeeName || name.lastName === employeeName);
  }
  return {};
}

// 4. IMPLEMENTE A FUNÇÃO createEmployee
// Cria um novo colaborador a partir de objetos contendo informações pessoais e gerentes e animais gerenciados.
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}
// Como os parâmetros da função irão receber objetos com diferentes informações, o operador Spread "..." será utilizado para "espalhar" estes dados dentro do novo objeto retornado.

// 5. IMPLEMENTE A FUNÇÃO isManager
// Testa se o id passado é de um gerente
function isManager(id) {
  return employees.some((managerCheck) => managerCheck.managers.includes(id));
}

// 6. IMPLEMENTE A FUNÇÃO addEmployee
// Adiciona um funcionário no fim da lista
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEmployee);
}

// 7. IMPLEMENTE A FUNÇÃO animalCount
// Sem parâmetros, retorna animais e suas quantidades
// Com o nome de uma espécie de animal, retorna somente a quantidade
function animalCount(species) {
  // Sem parâmetros, retorna animais e suas quantidades
  if (species === null || species === undefined) {
    const animaisAndQuantities = {};
    animals.forEach((bicho) => {
      animaisAndQuantities[bicho.name] = bicho.residents.length;
    });
    return animaisAndQuantities;
  }
  // Com o nome de uma espécie de animal, retorna somente a quantidade.
  return animals.find((bicho) => bicho.name === species).residents.length;
}

// function entryCalculator(entrants) {
//   // seu código aqui
// }

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
  // entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
