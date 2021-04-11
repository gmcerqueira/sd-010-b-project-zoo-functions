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

function animalsByIds(...ids) {
  // seu código aqui
  // o map percorre os ids passados e busca, dentro do array animals, os animais que tenham o id igual aos parâmetros. Se não for passado nenhum parâmetro, retorna array vazio. O spread operator foi usado no parâmatro porque podem ser passados um ou mais ids.
  return ids.map((param) => data.animals.find((animal) => param === animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  // busca o primeiro animal cujo nome corresponde ao animal passado como parâmetro, usando o destructuring - { name } (busca o nome que seja igual ao animal parâmetro).
  const findAnimal = data.animals.find(({
    name,
  }) => name === animal);
  // após, verifica se todos os animais recebidos em findAnimal tem a idade mínima passada como parâmetro.
  return findAnimal.residents.every((elemento) => elemento.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  // caso não seja passado nenhum parâmetro, retorna objeto vazio
  if (employeeName === undefined) return {};
  // busca os colaboradores verificando se o primeiro ou o último nomes correspondem ao parâmetro passado
  return data.employees.find((param) =>
    param.firstName === employeeName || param.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // retorna objeto com as informações passadas do novo colaborador.
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  // verifica se algum (some) colaborador possui, na chave managers (data.employees.managers) o id passado como parâmetro
  return data.employees.some((param) => param.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  // cria objeto referente ao novo colaborador, com os parâmetros passados
  const novoFunc = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  // dá push no array de employees, inserindo o novo objeto.
  data.employees.push(novoFunc);
}

function animalCount(species) {
  // seu código aqui
  const objeto = {};
  // percorre o array animals, buscando o nome da espécie e a chave residents. Depois, atribui, ao objeto criado (objeto), a chave nome e, como valor, o tamanho da chave residents. Considerando que o array residents póssui um objeto para cada animal, a quantidade de animais daquela espécie corresponde à quantidade de objetos do array residents. Usando destructuring, as chaves name e residents são as mesas do objeto original.
  data.animals.forEach(({
    name,
    residents,
  }) => {
    objeto[name] = residents.length;
  });
  // se não for passado nenhum parâmetro retorna todo o objeto, com todos os nomes das espécies e a quantidade de animais de cada espécie.
  if (!species) return objeto;
  // se for passado algum parâmetro, traz as informações apenas da espécie passada.
  return objeto[species];
}

function entryCalculator(entrants = 0) {
  // seu código aqui
  // o método Object.entries() retorna uma array dos próprios pares [key, value] enumeráveis de um dado objeto, na mesma ordem dos objetos providos através do loop for...in. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries. O parâmetro será passado na forma de chave: valor.
  // o parâmetro é retornado em forma de array, e o reduce faz o cálculo do tipo * quantidade a partir da primeira posição (0), somando ao acumulador e retornando o valor total a ser cobrado.
  return Object.entries(entrants).reduce((acc, [tipo, quantidade]) =>
    acc + (data.prices[tipo] * quantidade), 0);
}

function animalMap(options) {
  // seu código aqui
  return options;
}

function schedule(dayName) {
  // seu código aqui
  const objeto = {};
  // busca as chaves do objeto data.hours, e percorre, em cada dia, as opções. Se o dia passado como parâmetro for segunda-feira, retorna informação de FECHADO. Se não, traz as informações de abertura e fechamento correspondentes ao dia passado, de forma formatada. Como o formato do objeto é de 24h, e a informação deve ser passada como am/pm, o horário de fechamento foi subtraíde de 12 (tb poderia ser o módulo de 12).
  Object.keys(data.hours).forEach((day) => {
    if (day === 'Monday') {
      objeto[day] = 'CLOSED';
    } else {
      objeto[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
    }
  });
  // se for passado parâmetro, retorna apenas o nome do dia e o horário correspondente àquele dia.
  if (dayName) {
    return {
      [dayName]: objeto[dayName],
    };
  }
  // retorna o objeto, ao final. Se não for passado nenhum parâmetro, retorna todos os dias.
  return objeto;
}

// função criada para auxiliar na resolução da oldestFromFirstSpecies, retornando o primeiro animal [0] de responsabilidade do funcionário cujo id ou primeiro nome ou último nome correspondam ao parâmetro passado. Foi utilizado o destructuring {id, firstName, lastName}
function buscaFunc(param) {
  return data.employees.find(({ id, firstName, lastName }) =>
    id === param || firstName === param || lastName === param).responsibleFor[0];
}

// Exercício resolvido com auxílio do Henrique Clementino
function oldestFromFirstSpecies(idfunc) {
  // seu código aqui
  // a constante funcionário recebe o retorno da função buscaFunc, recebendo como parâmetro a informação passada, que pode ser o id, ou primeiro nome, ou último nome do funcionário. O retorno é a primeira espécie por quem o funcuionário é responsável.
  const funcionario = buscaFunc(idfunc);
  // destructuring para buscar os animais da primeira espécie cuidada pelo funcionário, através da chamada da função animalsById, passando como parâmetro o id da primeira espécie pela qual é o responsável.
  const {
    residents,
  } = animalsByIds(funcionario)[0];
  // busca, dentre os animais da espécie, o mais velho. O reduce percorre todos os objetos do array e vai comparando as idades, retornando a maior.
  const animalMaisVelho = residents.reduce((acc, elemento) => {
    if (acc.age > elemento.age) return acc;
    return elemento;
  });
  // destructuring na constante animalMaisVelho para trazer apenas o nome, o sexo e a idade do animal mais velho
  const { name, sex, age } = animalMaisVelho;
  // retorna array com as informações solicitadas.
  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  // busca as chaves do objeto prices, e, para cada chave calcula o valor acrescido da porcentagem passada como parâmetro.
  Object.keys(data.prices).forEach((tipo) => {
    data.prices[tipo] += (data.prices[tipo] * percentage) / 100;
    // após calcular o novo valor, arredonda para 2 casas decimais - https://metring.com.br/arredondar-numero-em-javascript
    data.prices[tipo] = Math.round(data.prices[tipo] * 100) / 100;
  });
}

// Exercício resolvido com auxílio do Henrique Clementino
function employeeCoverage(idOrName) {
  // seu código aqui;
  const objeto = {};
  // a função criada buscaFunc também seria usada aqui, mas não precisou.
  // para cada funcionário, usando o destructuring, busca o id, firstName, lastName e o responsibleFor.
  data.employees.forEach(({ id, firstName, lastName, responsibleFor }) => {
    // se o parâmetro passado na função for igual ao id ou ao firstName, ou ao lastName, ou se não for passado nenhum parâmetro (!idOrName), cria string literal com o primeiro e último nome do funcionário, e chama a função animalsById passando como parâmetro o responsibleFor, buscado acima. Após, percorre o objeto trazendo o nome das espécies, tb através de destructuring { name }.
    if (id === idOrName || firstName === idOrName || lastName === idOrName || !idOrName) {
      objeto[`${firstName} ${lastName}`] = animalsByIds(...responsibleFor).map(({
        name,
      }) => name);
    }
  });
  // retorna o objeto criado. Sem parâmetro, todos os funcionários e as espécies pelas quais são responsáveis. Com parâmetro, somente as espécies do funcionário indicado.
  return objeto;
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
