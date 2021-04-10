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

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter((animal) => ids.some((id) => animal.id === id)); // filtro todos animais e encontro o com a mesma id
}
// --------------------------------------------------------------------------------------------------------------
function animalsOlderThan(animal, age) {
  // seu código aqui
  const result = animals.find((raça) => raça.name === animal); // encontro o animal igual ao do parametro
  return result.residents.every((idade) => idade.age > age); // vejo se todos tem a idade menor que a do parametro
}
// --------------------------------------------------------------------------------------------------------------
function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {}; // sem param retorno o objeto
  return employees.find((name) => // encontro o empregado com o nome ou sobrenome igual ao parametro
    name.firstName === employeeName || name.lastName === employeeName);
}
// --------------------------------------------------------------------------------------------------------------
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith }; // espalho as informaçoes em um dicionario
}
// --------------------------------------------------------------------------------------------------------------
function isManager(id) {
  // seu código aqui
  return employees.some((gerente) => gerente.managers.includes(id)); // algum empregado que a chave manager inclui o id pasado (Ideia do Arlen Freitas no grupo de estudos)
}
// --------------------------------------------------------------------------------------------------------------
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor }); // adiciona um novo obj ao array employees
}
// --------------------------------------------------------------------------------------------------------------
function animalCount(species) {
  // seu código aqui
  const allSpecies = {};
  animals.forEach(({ name, residents }) => { // adiciono ao meu dicionario vazio chave nome e valor o tamanho da lista de residentes
    allSpecies[name] = residents.length;
  });
  if (species === undefined) return allSpecies; // sem parametros retorna todos os animais e quantidade
  return allSpecies[species]; // com parametro retorna o animal na chave igual ao parametro
}
// --------------------------------------------------------------------------------------------------------------
function entryCalculator(entrants = 0) {
  // seu código aqui
  const array = [];
  Object.entries(entrants).forEach(([key, value]) => { // transformo em um array
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty
    if (prices.hasOwnProperty.call(entrants, key)) { // vejo se preços tem a mesma propriedade de entradas na chave
      array.push(prices[key] * value); // adiciono ao meu array os valores de cada chave price no valor de key * o valor de entradas
    }
  });
  return array.reduce((acc, curr) => acc + curr, 0); // soma todos os valores retornando o total
}
//-------------------------------------------------------------------------------------------
// const getAnimalsLocation = () => {
//   const animais = {};
//   animals.forEach(({ location }) => {
//     animais[location] = [];
//   });
//   return animais;
// };

// const getAnimalsNames = () => {
//   const object = getAnimalsLocation();
//   animals.map((animal) => object[animal.location].push(animal.name));
//   return object;
// };

// const getAnimalsOptions = () => {
//   const object = getAnimalsLocation();
//   animals.forEach(({ name, location, residents }) => { // desestruturando meu parâtro de entrada
//     // passo as chaves por parametro e pego com o spread o objeto que já foi adicionado (...object[location]) e adiciono um novo.(Murillo Wolf)
//     object[location] = [...object[location], { [name]: residents.map((names) =>
//       names.name) }];
//   });
//   return object;
// };

// const getAnimalsOptionsSorted = () => {
//   const object = getAnimalsLocation();
//   animals.forEach(({ name, location, residents }) => {
//     object[location] = [...object[location], { [name]: residents.map((names) =>
//       names.name).sort() }];
//   });
//   return object;
// };

// function animalMap(options) {
//   // seu código aqui
//   if (options === undefined) return getAnimalsNames();
//   const { includeNames, sorted } = options;
//   if (includeNames && sorted) {
//     return getAnimalsOptionsSorted();
//   }
//   if (includeNames) {
//     return getAnimalsOptions();
//   }
// }
// const options = { includeNames: true };
// console.log(animalMap());
// //------------------------------------------------------------------------------------------------------------
function schedule(dayName) {
  // seu código aqui
  const object = {};
  const keys = Object.keys(hours); // pego as chaves de hours(dias da semana)
  keys.forEach((day) => {
    if (day === 'Monday') { // se o dia for segunda
      object[day] = 'CLOSED';
    } else { // se nao, adiciona ao obj a chave dia e o valor com as propriedades de hours na chave dia
      object[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`; // Dica do grupo no Discord
    }
  });
  if (dayName) { // Feito com ajuda do pessoal no grupo de estudos;
    return { // Com parâmetro retorno um objeto com a chave parametro e o valor pego do meu objeto que possui a mesma chave.
      [dayName]: object[dayName],
    };
  }
  return object;
}
// ----------------------------------------------------------------------------------------------

function oldestFromFirstSpecies(id) {
  const employeeId = employees.find((employee) => employee.id === id); // Acho o empregado que tem o mesmo id
  const firstAnimalResponsible = employeeId.responsibleFor[0]; // pego o animal na primeira posiç~ao.
  const firstName = animals.find((animal) => animal.id === firstAnimalResponsible); // encontro o animal com a mesma id do que eu achei
  const oldestAnimal = firstName.residents.reduce((older, current) =>
    ((older.age > current.age) ? older : current)); // pego o animal com a maior idade;
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age]; // retorno um array apenas com os valores das chaves;
}

// --------------------------------------------------------------------------------------------------------------
function increasePrices(percentage) {
  // Leandro Reis postou na thread do Daniel Roberto https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
  prices.Adult = Math.round((prices.Adult + prices.Adult * (percentage / 100)) * 100) / 100;
  prices.Senior = Math.round((prices.Senior + prices.Senior * (percentage / 100)) * 100) / 100;
  prices.Child = Math.round((prices.Child + prices.Child * (percentage / 100)) * 100) / 100;
  return prices;
}

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
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
