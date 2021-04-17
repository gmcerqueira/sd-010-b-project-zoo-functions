let voltei = [
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    firstName: 'Nigel',
    lastName: 'Nelson',
    managers: [],
    responsibleFor: [],
  },
  2,
  'fala',
  2,
]

let result = []; 

voltei.forEach((param) => result.push(param));

let a = voltei.map((objeto) => objeto);

let b = voltei.filter((valor) => valor === 2);
// find me retorna sempre o primeiro valor ele simplesmente para de varrer um array/ lembrando eles so funcionam em array
// ele não pode retornar mais de um valor, find me retorna apenas O PRIMEIRO VALOR que bater com o requisito pedido na função.
// Filter me retorna TODOS OS VALORES. e não apenas o primeiro.
// FIlter ainda me retorna dentro de um array, retorna todos os objetos com o valor pedido porém em um novo array.(apesar de eu falar novo array ele não cria um como o map)
//o filter esta dando indefinido na função 
function oldestFromFirstSpecies(id) {
  return employees.map((object) => object).filter((object) => object.id === id);
 
 }
 console.log(oldestFromFirstSpecies('olaId'));
 //qual sera o erro?
// se eu colocar filter dentro de uma variavel ela vai me retornar tudo dentro de um array.
// se eu apenas der return ela vai me retornar apenas o objeto.
//porme o find retorna a mesma coisa independente de estar em um variavel ou não.
// o filter me retorna apenas com o return tudo dentro de um array.



console.log(b);