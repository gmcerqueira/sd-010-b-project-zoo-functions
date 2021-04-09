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

// Importando informações sobre o Zoológico
const data = require('./data');

const {
  animals,
  employees,
  prices,
  hours,
} = data;

const {
  Adult: adultPrice,
  Child: childPrice,
  Senior: seriorPrice,
} = prices;

// Retorna um animal pelo seu id. Pode ser passado mais de um id.
function animalsByIds(...ids) {
  // Filtrar o obj 'animals' pelo 'id' recebido.
  // Verificar se o 'id' do parametro é igual ao 'id' do animal.
  // Utilizar 'some' em vez de 'find', pois some retorna bool e find retorna o objeto.
  return animals.filter((animal) =>
    ids.some((id) => animal.id === id));
}

// Verifica se todos os animais com dado nome são mais velhos que a idade passada.
function animalsOlderThan(animalName, age) {
  // Procura se há um animal com o nome passado.
  const animalObj = animals.find((animal) => animal.name === animalName);
  // Verifica se o animal existe e verifica se todos os animais têm idade maior que 'age'.
  if (animalObj) return animalObj.residents.every((animal) => animal.age >= age);

  return undefined;
}

// Verifica se há um empregado pelo seu nome.
function employeeByName(employeeName) {
  if (!employeeName) return {};

  // Procura o empregado pelo primeiro ou último nome.
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

// Cria empregado através de dois objetos.
function createEmployee(personalInfo, associatedWith) {
  // Retorna um único objeto com todas as informações.
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

// Verifica se o 'id' é um gerente
function isManager(id) {
  // Verifica se tem algum empregado que tem algum gerente com o id dado.
  return employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(newEmployee);
}

// Retorna a quantidade de animais. Todos os animais com nenhum parâmetro e o animal específico, caso passado.
function animalCount(species) {
  if (!species) {
    const countObj = {};
    // Passa por cada animal, criando uma chave com seu nome e o tamanho do array dos residentes.
    animals.forEach((animal) => {
      countObj[animal.name] = animal.residents.length;
    });

    return countObj;
  }

  // Procura o animal e retorna o tamanho do array dos residentes.
  return animals.find((animal) => animal.name === species).residents.length;
}

const undefinedToZero = (value) => {
  if (value === undefined) return 0;
  return value;
};

// Verifica a quantidade de pagantes e retorna o valor total.
function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  // Descontruindo o parametro.
  let {
    Adult: adultQty,
    Child: childQty,
    Senior: seniorQty,
  } = entrants;

  // Verifica se o valor da chave é undefined. Se for, converte para zero.
  adultQty = undefinedToZero(adultQty);
  childQty = undefinedToZero(childQty);
  seniorQty = undefinedToZero(seniorQty);

  // Retorna a soma dos preços vezes a quantidade de pagantes.
  return (adultQty * adultPrice) + (childQty * childPrice) + (seniorQty * seriorPrice);
}

// Mapeia os residentes de um animal, podendo ser pelo sexo e/ou ordenados.
const mapResidents = (animalsResidents, sorted, sex) => {
  let residents = animalsResidents;
  // Filtra os animais por sexo e verifica se o tipo do parametro é uma string.
  if (typeof sex === 'string') residents = residents.filter((resident) => resident.sex === sex);
  // Mapeia os residentes.
  let residentsArray = residents.map((resident) => resident.name);

  if (sorted) residentsArray = residentsArray.sort();
  return residentsArray;
};

// Adiciona o animal ao objeto. Caso houver 'includeNames', cria um objeto para adicionar os residentes.
const setAnimal = (animal, options) => {
  const { name, residents } = animal;
  const { includeNames = false, sorted = false, sex } = options;

  if (includeNames) return ({ [name]: mapResidents(residents, sorted, sex) });

  return name;
};

/*
  Mapeia os animais do zoológico.
  Parametros:
    - Nenhum: Retorna um objeto dos animais por região
    - Objeto:
      - includeNames:  Retorna com seus respectivos nomes.
      - sorted: Retorna com seus nomes ordenados.
      - sex: Retorna apenas do sexo definido.
*/
// 'options = {}' Dica do Arlen Freitas.
function animalMap(options = {}) {
  // Objeto ja definido com as chaves, pois caso não houver nenhum animal de uma determinada região, sua chave será um array vazio.
  const mappedAnimals = { NE: [], NW: [], SE: [], SW: [] };

  Object.keys(mappedAnimals).forEach((region) => {
    // Filtra os animais por região.
    const animalByRegion = animals.filter((animal) => animal.location === region);
    // Mapeia os animais por região e os adiciona à chave correspondente da região.
    mappedAnimals[region] = animalByRegion.map((animal) => setAnimal(animal, options));
  });

  return mappedAnimals;
}

function schedule(dayName) {
  const dayObj = {};
  Object.keys(hours).forEach((day) => {
    const starts = hours[day].open;
    const ends = hours[day].close;
    dayObj[day] = `Open from ${starts}am until ${ends - 12}pm`;
  });
  dayObj.Monday = 'CLOSED';

  if (dayName) return ({ [dayName]: dayObj[dayName] });

  return dayObj;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  return id;
}

function increasePrices(percentage) {
  // seu código aqui
  return percentage;
}

function employeeCoverage(idOrName) {
  // seu código aqui
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
