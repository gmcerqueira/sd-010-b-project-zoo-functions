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

const { employees } = require('./data');
const data = require('./data');

/*
   Essa função recebe um ou mais ids e retorna um array contendo as espécies referentes aos ids passados como parâmetro. Caso não receba parâmetro, retorna um array vazio.
  */
function animalsByIds(...ids) {
  if (ids.length) { // se há id na lista ids
    // retorna uma lista de objetos contendo apenas
    return data.animals.filter( // os animais filtrados de data
      (animal) => ids.includes(animal.id), // sendo que animal.id está listado em ids
    );
  }
  return []; // retorna um array vazio caso não receba parâmetro
}

/*
   Essa função recebe o nome de uma espécie e uma idade mínima e verifica se todos os animais daquela espécie possuem a idade mínima especificada.
  */
function animalsOlderThan(animal, age) {
  // retorna o resultado de
  return data.animals.find( // encontrar a espécie
    (specie) => specie.name === animal, // que possui o nome recebido
  ).residents.every( // e verificar se todos os animiais residentes
    (resident) => resident.age >= age, // possuem a idade >= a mínima especificada
  );
}

/*
   Essa função recebe o primeiro ou último nome das pessoas colaboradoras e retorna o objeto do funcionário. Caso não receba parâmetro, retorna um objeto vazio.
  */
function employeeByName(employeeName) {
  if (employeeName !== undefined) { // se recebeu um nome como parâmetro
    // retorna o objeto resultado de
    return employees.find( // encontrar o funcionário
      (employe) => (employe.firstName === employeeName || employe.lastName === employeeName), // que possui o primeiro ou último nome igual ao recebido por parâmetro
    );
  }
  return {}; // retorna um objeto vazio caso não receba parâmetro
}

/*
   Essa função, a partir de informações recebidas nos parâmetros, cria um objeto equivalente ao de uma pessoa colaboradora, retornando-o.
  */
function createEmployee(personalInfo, associatedWith) {
  // retorna um objeto equivalente ao de uma pessoa colaboradora que contém as informações recebidas nos parâmetros
  return { ...personalInfo, ...associatedWith };
}

/*
   Essa função verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.
  */
function isManager(id) {
  // retorna o resultado de
  return employees.some( // verificar se há algum
    ({ managers }) => managers.includes(id), // funcionário que tenha aquele 'id' como gerente
  );
}

/*
   Essa função adiciona uma nova pessoa colaboradora ao final do array employees, presente no arquivo data.js.
  */
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // adiciona ao final do array employees (presente no arquivo data)
  employees.push({ // um novo objeto funcionário que possui as informações recebidas nos parâmetros
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

/*
   Essa função recebe o nome de uma espécie e contabiliza a quantidade de animais dela. Caso não receba parâmetro, retorna um objeto que contém o nome dos animais e suas quantidades.

   Material consultado sobre reduce
   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

   Créditos pela sugestão de usar reduce
   @Denis Rossati Ramos- Turma 10 - Tribo B
  */
function animalCount(species) {
  if (species !== undefined) { // se recebeu um nome de espécie como parâmetro
    // retorna após
    return data.animals.find( // encontrar a espécie
      (animal) => animal.name === species, // que possui nome igual ao recebido por parâmetro
    )
      .residents.length; // sua a quantidade de animais residentes
  }

  // const { animals: [{ name: residents }] } = data;

  // retorna um objeto resultado de reduce que
  return data.animals.reduce(
    (acc, obj) => {
      acc[obj.name] = obj.residents.length; // contém o nome dos animais e suas quantidades
      return acc; // retorna o objeto acumulado após inserir nova entrada
    }, {}, // valor inicial é um objeto vazio
  );
}

/*
  Essa função verifica se o argumento recebido é um objeto.

  Material consultado sobre como diferenciar object dos demais tipos
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */
const isObject = (element) => toString.call(element) === '[object Object]';

/*
  Essa função verifica se o elemento está na lista
 */
const hasElement = (element, list) => list.includes(element);

/*
   Essa função recebe um objeto que contém a quantidade de visitantes e a faixa etária de cada um e retorna o preço total a ser cobrado.
  */
function entryCalculator(entrants) {
  if (isObject(entrants) // se entrants é um objeto
  && Object.keys(entrants).length // não está vazio
  && Object.keys(entrants).every( // e cada faixa etária sua
    (key) => hasElement(key, Object.keys(data.prices)), // é chave em data.prices
  )) {
    // retorna o resultado da
    return Object.keys(entrants).reduce( // redução da lista de chaves (faixa etaria) em entrants
      (acc, curr) => acc + data.prices[curr] * entrants[curr], 0, // acumulando o preço a ser cobrado por cada faixa etária
    );
  }
  return 0; // retorna 0 caso não receba um parâmetro ou seja um objeto vazio
}

/* function animalMap(options) {
  // seu código aqui
} */

/*
   Essa função recebe um horário no formato 24h e retorna uma string com este horário no formato AM/PM.
  */
function formatterHourAmPm(hour) {
  if (hour < 12) { // se horario menor que 12
    return `${hour}am`; // formata como am
  }
  if (hour > 12) { // se horario maior que 12
    return `${hour - 12}pm`; // subtrai 12 horas e formata como pm
  }
  return '12pm'; // retorna 12pm caso contrario
}

/*
   Essa função disponibiliza as informações de horário para uma consulta na forma de um cronograma legível para humanos. Sem parâmetros, retorna todo o cronograma da semana. Se um único dia for passado, retorna apenas o cronograma deste dia específico.

   Créditos openHour e reuso de código
   @Alan Tanaka - Turma 10 B
  */
function schedule(dayName) {
  const scheduleObj = Object.keys(data.hours) // obtem uma lista de dias da semana
    .reduce( // e constroi um objeto schedule usando reduce onde
      (acc, day) => {
        if (data.hours[day].open === data.hours[day].close) { // se o horario de abertura é igual ao de fechamento
          acc[day] = 'CLOSED'; // acrescenta a chave do dia com valor 'CLOSED'
        } else { // caso contrario
          const openHour = formatterHourAmPm(data.hours[day].open); // formata o horario de abertura para am/pm
          const closeHour = formatterHourAmPm(data.hours[day].close); // formata o horario de fechamento para am/pm
          acc[day] = `Open from ${openHour} until ${closeHour}`; // acrescenta a chave do dia com valor `Open from ${openHour} until ${closeHour}`
        }
        return acc; // retorna o objeto construído para o acumulador
      }, {}, // valor inicial é um objeto vazio
    );

  if (dayName) { // se um dia foi passado por parâmetro
    return { [dayName]: scheduleObj[dayName] }; // retorna um objeto contendo o dia como chave e o seu valor a partir do objeto scheduleObj
  }
  return scheduleObj; // retorna scheduleObj caso não receba um parâmetro
}

/*
   Essa função recebe o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie

   Material consultado sobre como usar reduce para encontrar o objeto com o maior valor de uma propriedade dentro de um array de objetos
   https://stackoverflow.com/a/34087850

   Créditos pela sugestão de usar animalsByIds para buscar o animal que possui id firstSpeciesId
   @Arlen Freitas - Turma 10 - Tribo B

   Código v1.0 usando sort
   const oldestResident = [...data.animals.find((animal) => animal.id === firstSpeciesId).residents].sort((animal1, animal2) => animal2.age - animal1.age);

   Código v2.0 usando reduce
   const oldestResident = [...data.animals.find( // buscar o animal
      (animal) => animal.id === firstSpeciesId, // que possui id igual ao firstSpeciesId
    ).residents] // criar uma cópia da lista de animais residentes desta espécie
      .reduce( // e reduzir esta lista
        (acc, resident) => ((acc.age >= resident.age) ? acc : resident), // mantendo em acc o animal que possui maior idade
      );
  */
function oldestFromFirstSpecies(id) {
  const firstSpeciesId = employees.find( // buscar o funcionário
    (employee) => employee.id === id, // que possui id igual ao recebido por parâmetro
  ).responsibleFor[0]; // e retornar o id da primeira espécie de animal que ele gerencia

  /*
    Código v2.1 usando reduce e a function animalsByIds

    Busca o animal que possui id firstSpeciesId, obtém a lista de animais residentes desta espécie e desestrutura esse array de objeto mantendo a chave residents
  */
  const [{ residents }] = animalsByIds(firstSpeciesId);

  const oldestResident = residents.reduce( // Reduz esta lista
    (acc, resident) => ((acc.age >= resident.age) ? acc : resident), // mantendo em acc o animal que possui maior idade
  );

  return [oldestResident.name, oldestResident.sex, oldestResident.age]; // retorna um array com nome, sexo e idade do animal mais velho dessa espécie
}

/*
   Essa função recebe uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais

   Material consultado sobre o método ceil
   https://www.w3schools.com/jsref/jsref_ceil.asp
  */
function increasePrices(percentage) {
  Object.keys(data.prices) // cria uma lista de chaves de prices
    .forEach( // para cada chave
      (key) => {
        data.prices[key] = ( // o preço que possui a chave é atualizado com
          Math.ceil( // o resultado da divisão do menor inteiro mais próximo ao
            data.prices[key] * (100 + percentage), // incrementar o preço deslocando suas as casas decimais para esquerda
          ) / 100 // por cem
        );
      },
    );
}

/* function employeeCoverage(idOrName) {
  // seu código aqui
}
 */
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
