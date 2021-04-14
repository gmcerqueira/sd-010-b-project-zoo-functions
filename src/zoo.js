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
const data = require('./data');

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
  const animaisAndQuantities = {};
  if (species === null || species === undefined) {
    animals.forEach((animal) => {
      animaisAndQuantities[animal.name] = animal.residents.length;
    });
    return animaisAndQuantities;
  }
  // Com o nome de uma espécie de animal, retorna somente a quantidade.
  return animals.find((animal) => animal.name === species).residents.length;
}
// console.log(animalCount());
// const objExample = {};
// objExample.name = 'Nikolas';
// objExample.age = '31';
// console.log(objExample);

// 8. IMPLEMENTE A FUNÇÃO entryCalculator
// Retorna 0 se nenhum argumento for passado
// Retorna 0 se um objeto vazio for passado
// Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
function entryCalculator(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  return Object.keys(entrants).reduce((acc, cur) => acc + (data.prices[cur] * entrants[cur]), 0);
}
// console.log(entryCalculator({'Senior':3, 'Adult': 15}));
// 824.82

// 9. IMPLEMENTE A FUNÇÃO animalMap
// Sem parâmetros, retorna animais categorizados por localização
// Com a opção includeNames: true especificada, retorna nomes de animais
// Com a opção sorted: true especificada, retorna nomes de animais ordenados
// Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de animais macho/fêmea
// Com a opção sex: 'female' ou sex: 'male' especificada e a opção sort: true especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados
// Só retorna informações ordenadas e com sexo se a opção includeNames: true for especificada
// function animalMap(options) {
//   // seu código aqui
// }

// 10. IMPLEMENTE A FUNÇÃO schedule
// Sem parâmetros, retorna um cronograma legível para humanos
// Se um único dia for passado, retorna somente este dia em um formato legível para humanos
// function schedule(dayName) {
// const dau
//   if (dayName !== {}){
// const calendar = {};
//    data.hours.push(calendar);
// }
// }

// 11. IMPLEMENTE A FUNÇÃO oldestFromFirstSpecies
// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie
function oldestFromFirstSpecies(id) {
  const employeeName = employees.find((employ) => employ.id === id);
  const fistAnimalCare = employeeName.responsibleFor[0];
  const animalInfo = animals.filter((animal) => animal.id === fistAnimalCare)[0].residents;
  const animalsInOrder = animalInfo.sort((a, b) => (a.age < b.age ? 1 : -1));
  return Object.values(animalsInOrder[0]);
}

// 12. IMPLEMENTE A FUNÇÃO increasePrices
// Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais
function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;
  data.prices.Adult = Math.ceil(Adult * (percentage + 100)) / 100;
  data.prices.Senior = Math.ceil(Senior * (percentage + 100)) / 100;
  data.prices.Child = Math.ceil(Child * (percentage + 100)) / 100;
}

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
