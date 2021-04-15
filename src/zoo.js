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

function animalsByIds(...ids) {
  if (typeof ids === 'undefined') {
    return [];
  }
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

function animalsOlderThan(animal, age) {
  return animals.find((especie) => especie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

const { employees } = data;

function employeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  return employees.find((employee) => {
    if (employee.firstName === employeeName
    || employee.lastName === employeeName) return employee;
    return null;
  });
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  const meuArray = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return meuArray;
}

function isManager(id) {
  return employees.some((employee) => employee.managers.find((emp) => emp === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const allAnimals = {};
  animals.forEach((animal) => { allAnimals[`${animal.name}`] = animal.residents.length; });
  if (typeof species === 'undefined') {
    return allAnimals;
  }
  return allAnimals[species];
}

// Descobri no site:https://medium.com/cleytonbrasil/javascript-como-saber-se-um-objeto-est%C3%A1-vazio-a6a153f4f81f, que Object.entries() converte um object em um array, possibilitando assim usarmos a propriedade '.length' para sabermos o tamanho do objeto.

const { prices } = data;

const verificaValor = (ent) => {
  let total = 0;
  const { Adult, Child, Senior } = ent;
  if (Adult > 0) total += Adult * prices.Adult;
  if (Child > 0) total += Child * prices.Child;
  if (Senior > 0) total += Senior * prices.Senior;
  return total;
};

function entryCalculator(entrants) {
  if (typeof entrants === 'undefined' || Object.entries(entrants).length === 0) return 0;
  return verificaValor(entrants);
}

// function animalMap(options) {
//   const locations = ['NE', 'NW', 'SE', 'SW']
//   const allMap = {};
//   if (typeof options === 'undefined') {
//     animals.forEach(animal => allMap[animal.location] =
//     animals.map(ani => {
//       if (ani.location === animal.location) {
//         return ani.name
//       }
//     }))
//   }
//   console.log(allMap)

// }
// animalMap()

// Para resolver o requisito 9 eu tive que buscar orientação com o meu colega Matheus bodra, pois, tive difilculdade na implementação. link:https://github.com/tryber/sd-010-b-project-zoo-functions/pull/81/commits/8418cfc7aa598d1575dcc4dee52a3a2f90e7ef56

const { hours } = data;

function schedule(dayName) {
  const dayKeys = Object.keys(hours);
  const horaCompleted = {};
  dayKeys.forEach((day) => {
    if (day !== 'Monday') {
      horaCompleted[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    } else {
      horaCompleted[day] = 'CLOSED';
    }
  });
  if (typeof dayName === 'undefined') {
    return horaCompleted;
  }
  return { [dayName]: horaCompleted[dayName] };
}

// Aqui eu dividi todas as etapas, porque quando tentei fazer tudo interligado de uma só vez não retornava nenhum valor e isso se tornou um problema, mas ai usando console.log e o Run and Debug eu notei que fazer passo a passo separado eu conseguiria um resultado satisfatório. E, claro, percebi isso na tentativa e erro.

function oldestFromFirstSpecies(id) {
  const arrEmployee = [];
  arrEmployee.push(employees.find((employee) => employee.id === id));
  const idAnimal = arrEmployee.find((arr) => arr.responsibleFor).responsibleFor[0];
  const animalResidents = animals.find((animal) => animal.id === idAnimal).residents;
  const animalMaisVelho = animalResidents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(animalMaisVelho);
}

// Tive um certa dificuldade nesse requisito por conta do arredondamento, então eu busquei orientação com o meu colega de turma, Matheus Bodra, que me explicou o caminho até a resposta satisfatória. link:https://github.com/tryber/sd-010-b-project-zoo-functions/pull/81/commits/834a0e57ab14033429fa23c49686abc5dcc5c3cf. No final, basicamente multipiclamos por 100 para que o valor ande duas casas para a esquerda, depois arredondamos, ficando com um número inteiro de 4 dígitos(ex: 49,99 * 100 = 4999), depois dividimos por 100, vírgula duas casas para a direita(4999 / 100 = 49,99), pronto.

function increasePrices(percentage) {
  const { Adult, Senior, Child } = prices;
  const porcentagem = percentage / 100;
  prices.Adult += (Adult * porcentagem);
  prices.Senior += (Senior * porcentagem);
  prices.Child += (Child * porcentagem);
  prices.Adult = Math.round(prices.Adult * 100) / 100;
  prices.Senior = Math.round(prices.Senior * 100) / 100;
  prices.Child = Math.round(prices.Child * 100) / 100;
  return prices;
}

// O código abaixo faz parte do último requisito, incluindo a função findIdAnimal().

const findIdAnimal = () => {
  const responsibleArr = {};
  employees.forEach((employee) => {
    responsibleArr[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor
      .map((id) => animals.find((ani) => ani.id === id).name);
  });
  return responsibleArr;
};

function employeeCoverage(idOrName) {
  if (typeof idOrName === 'undefined') {
    return findIdAnimal();
  }
  const newObj = {};
  employees.forEach((employee) => {
    if (employee.id === idOrName || employee.firstName === idOrName
      || employee.lastName === idOrName) {
      newObj[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor
        .map((id) => animals.find((ani) => ani.id === id).name);
    }
  });
  return newObj;
}

console.log(employeeCoverage('Ardith'));

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
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
