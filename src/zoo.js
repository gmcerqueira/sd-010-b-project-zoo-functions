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

// hours
const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  // seu código aqui
  if (!ids) return [];
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  // Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada. Deve retornar um valor booleano
  // capturar os animais da mesma espécie
  const sameEspecie = animals.filter((especies) => (especies.name === animal));
  // capturar as idades de cada um
  const getAges = sameEspecie.map((especie) => especie.residents.map((resident) => resident.age));
  // verificar idade dos animais da espécie
  const [ages] = getAges;
  return ages.every((ag) => ag > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  // Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas
  // Sem parâmetros, retorna um objeto vazio
  // Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  // Quando provido o último nome do funcionário, retorna o objeto do funcionário
  if (!employeeName) return {};
  return employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // A função, a partir de informações recebidas nos parâmetros, é capaz de criar um objeto equivalente ao de uma pessoa colaboradora, retornando-o
  // - O parâmetro `personalInfo` recebe um objeto que contém o `id`, o `firstName` e o `lastName`
  // - O parâmetro `associatedWith` recebe um objeto que contém dois array: `managers` e `responsibleFor`
  // Cria um novo colaborador a partir de objetos contendo `informações pessoais` e `gerentes e animais gerenciados`.
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  // Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.
  // Deve retornar um valor booleano. Testa se o id passado é de um gerente
  // capturar o id do funcionario verificar se o cargo é gerencia(só responder a uma pessoa - 1 manager)
  const employee = employees.find((employe) => employe.id === id); // infos funcionário
  return employee.managers.length === 1;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  // A função irá adicionar uma nova pessoa colaboradora ao array `employees`, presente no arquivo `data.js`.
  // Adiciona um funcionário no fim da lista
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  // Esta função é responsável por contabilizar a quantidade de animais.
  // Sem parâmetros, retorna um objeto - animais e suas quantidades
  // Com o nome de uma espécie de animal, retorna um número -  a quantidade
  if (!species) {
    const obj = {};
    animals.forEach((animal) => {
      obj[animal.name] = animal.residents.length;
    });
    return obj;
  }
  return animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrant) {
  // seu código aqui
  // A partir da quantidade de visitantes e a faixa etária de cada um, esta função é responsável por retornar o preço total a ser cobrado
  // O parâmetro `entrants` recebe um objeto que contém as chaves `Adult`, `Child` e `Senior`, com suas respectivas quantidades de pessoas
  // Retorna 0 se nenhum argumento for passado. Retorna 0 se um objeto vazio for passado. Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
  if (!entrant || (Object.keys(entrant).length === 0 && entrant.constructor === Object)) return 0;
  let count = 0;
  const qntEntrants = Object.values(entrant); // retornando a quantidade de entrants
  Object.keys(entrant).forEach((entrantPrice, index) => {
    count += prices[entrantPrice] * qntEntrants[index];
  });
  // somar
  return count;
}

// function animalMap(options) {
//   // seu código aqui
//   // A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e gênero, por exemplo
// }

function schedule(dayName) {
  // seu código aqui
  // A função é responsável por disponibilizar as informações de horário para uma consulta, que pode querer ter acesso a todo o cronograma da semana ou apenas o cronograma de um dia específico
  // Sem parâmetros, retorna um cronograma legível para humanos.
  // Se um único dia for passado, retorna somente este dia em um formato legível para humanos
  const openingHours = {};
  Object.keys(hours).forEach((hour) => {
    openingHours[hour] = `Open from ${hours[hour].open}am until ${hours[hour].close - 12}pm`;
    if (hours[hour].open === 0 && hours[hour].close === 0) {
      openingHours[hour] = 'CLOSED';
    }
  });
  const dayHours = {};
  dayHours[dayName] = openingHours[dayName];
  if (!dayName) return openingHours;
  return dayHours;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  // A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro
  // - Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie
  const firstAnimal = employees.find((employe) => employe.id === id).responsibleFor[0]; // acessa o colaborador pelo id e retorna o primeiro animal
  const residents = animals.find((animal) => animal.id === firstAnimal); // retorna o animal pelo id encontrado no firstAnimal
  const biggestAge = residents.residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr)); // retorna o resident com maior idade em um objeto
  return Object.values(biggestAge);
}

function increasePrices(percentage) {
  // seu código aqui
  // A função é responsável por aumentar o preço das visitas, com base no valor de aumento recebido no parâmetro, em porcentagem
  // Se o parâmetro da função recebe o valor 20, o aumento é de 20%
  // Altera o objeto `prices` do arquivo `data.js`
  // Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais
  const keys = Object.keys(prices);
  keys.forEach((key) => {
    const raise = prices[key] * (percentage / 100);
    const value = (prices[key] + raise + 0.001).toFixed(2);
    prices[key] = Number(value);
  });
  return prices;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const colabResponse = {};
  employees.forEach((employee) => {
    const animalName = employee.responsibleFor.map((animalId) => animalsByIds(animalId)[0].name);
    const fullName = `${employee.firstName} ${employee.lastName}`;
    colabResponse[fullName] = animalName;
  });
  if (!idOrName) return colabResponse;
  const employeeName = employees.find((employe) => (
    employe.id === idOrName || employeeByName(idOrName) === employe
  ));
  const colabOnce = {};
  const name = `${employeeName.firstName} ${employeeName.lastName}`;
  colabOnce[name] = colabResponse[name];
  return colabOnce;
}

console.log(employeeCoverage('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

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
