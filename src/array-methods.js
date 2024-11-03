// array-methods.js

// 1. Método map()
// O método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array original.

const numbers = [1, 2, 3, 4, 5];

// Exemplo: Dobrar cada número
const doubled = numbers.map((num) => num * 2);
console.log("Dobrados:", doubled); // [2, 4, 6, 8, 10]

// 2. Método filter()
// O método filter() cria um novo array com todos os elementos que passam no teste da função fornecida.

const ages = [18, 21, 16, 24, 30];

// Exemplo: Filtrar maiores de idade
const adults = ages.filter((age) => age >= 18);
console.log("Adultos:", adults); // [18, 21, 24, 30]

// 3. Método findIndex()
// O método findIndex() retorna o índice do primeiro elemento que satisfaz a função de teste fornecida. Caso nenhum elemento seja encontrado, -1 é retornado.

const users = [
  { id: 1, name: "João", age: 25 },
  { id: 2, name: "Maria", age: 30 },
  { id: 3, name: "Pedro", age: 22 },
];

// Exemplo: Encontrar o índice do usuário com idade 30
const index = users.findIndex((user) => user.age === 30);
console.log("Índice do usuário com idade 30:", index); // 1

// 4. Método find()
// O método find() retorna o valor do primeiro elemento que satisfaz a função de teste fornecida. Caso nenhum elemento seja encontrado, undefined é retornado.

const foundUser = users.find((user) => user.id === 2);
console.log("Usuário encontrado:", foundUser); // { id: 2, name: "Maria", age: 30 }

// 5. Método every()
// O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Retorna um valor booleano.

const numbers2 = [2, 4, 6, 8];

// Exemplo: Verificar se todos os números são pares
const allEven = numbers2.every((num) => num % 2 === 0);
console.log("Todos os números são pares:", allEven); // true

// 6. Método some()
// O método some() testa se ao menos um dos elementos do array passa pelo teste implementado pela função fornecida. Retorna um valor booleano.

const numbers3 = [1, 3, 5, 7];

// Exemplo: Verificar se algum número é par
const hasEven = numbers3.some((num) => num % 2 === 0);
console.log("Algum número é par:", hasEven); // false

// 7. Método reduce()
// O método reduce() executa uma função reducer (fornecida) para cada elemento do array, resultando em um único valor. O primeiro argumento da função reducer é o acumulador e o segundo argumento é o valor atual.

const numbers4 = [1, 2, 3, 4, 5];

// Exemplo: Somar todos os números
const sum = numbers4.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Soma total:", sum); // 15

// Exemplo: Criar um objeto a partir de um array
const inventory = [
  { product: "Apple", quantity: 10 },
  { product: "Banana", quantity: 5 },
  { product: "Orange", quantity: 7 },
];

const totalQuantity = inventory.reduce((acc, item) => acc + item.quantity, 0);
console.log("Quantidade total em estoque:", totalQuantity); // 22

// Exemplo: Agrupar produtos por quantidade
const groupedInventory = inventory.reduce((acc, item) => {
  acc[item.product] = item.quantity;
  return acc;
}, {});
console.log("Estoque agrupado:", groupedInventory); // { Apple: 10, Banana: 5, Orange: 7 }

// Explicações dos Métodos:
// map(): Transforma os elementos do array original em um novo array. Neste exemplo, dobramos cada número.

// filter(): Filtra os elementos com base em um teste, retornando apenas aqueles que satisfazem a condição. Aqui, filtramos os adultos.

// findIndex(): Retorna o índice do primeiro elemento que atende à condição. No exemplo, encontramos o índice do usuário de idade 30.

// find(): Retorna o primeiro elemento que atende à condição. Aqui, buscamos um usuário pelo ID.

// every(): Verifica se todos os elementos do array atendem a uma condição. No exemplo, verificamos se todos os números são pares.

// some(): Verifica se pelo menos um elemento do array atende a uma condição. Neste caso, checamos se algum número é par.

// reduce(): Reduz um array a um único valor através de uma função acumuladora. Aqui, somamos os números e também agrupamos produtos em um objeto.

// Esse arquivo pode servir como uma referência prática para entender e aplicar esses métodos de array em JavaScript!
