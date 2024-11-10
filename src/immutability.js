/**
 * Imutabilidade em JavaScript
 *
 * Imutabilidade significa que, uma vez que um valor é criado, ele não pode ser alterado diretamente.
 * Isso é essencial em programação funcional e em estados de aplicações para evitar efeitos colaterais.
 */

// Exemplo 1: Imutabilidade em Objetos usando Object.assign() e spread operator
const user = {
  name: "João",
  age: 28,
  address: {
    city: "Uberlândia",
    state: "MG",
  },
};

/**
 * Cria um novo objeto userUpdated que é uma cópia do objeto user, com a propriedade "age" alterada.
 * Como a imutabilidade é importante, em vez de modificar diretamente o objeto user, criamos uma nova cópia.
 */
const userUpdated = Object.assign({}, user, { age: 29 });
console.log("Original user:", user); // { name: "João", age: 28, address: { city: "Uberlândia", state: "MG" } }
console.log("Updated user:", userUpdated); // { name: "João", age: 29, address: { city: "Uberlândia", state: "MG" } }

// Usando spread operator para obter o mesmo efeito
const userUpdatedSpread = { ...user, age: 30 };
console.log("Updated with spread:", userUpdatedSpread); // { name: "João", age: 30, address: { city: "Uberlândia", state: "MG" } }

/**
 * Nota: Os métodos acima criam uma cópia superficial do objeto.
 * Se quisermos atualizar uma propriedade aninhada, precisamos de uma cópia profunda (deep clone).
 */

// Exemplo 2: Imutabilidade com objetos aninhados (Deep Copy)
const updatedAddressUser = {
  ...user,
  address: {
    ...user.address,
    city: "São Paulo", // Mudando apenas a cidade
  },
};

console.log("Original user address:", user.address); // { city: "Uberlândia", state: "MG" }
console.log("Updated address user:", updatedAddressUser.address); // { city: "São Paulo", state: "MG" }

/**
 * Neste exemplo, ao copiar o objeto address separadamente, garantimos que a mudança no campo 'city' não afeta o original.
 */

// Exemplo 3: Imutabilidade em Arrays com métodos como map, filter, e concat
const numbers = [1, 2, 3, 4, 5];

/**
 * Criação de um novo array, dobrando cada valor do array original.
 * O método map() cria um novo array sem alterar o original.
 */
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Original numbers:", numbers); // [1, 2, 3, 4, 5]
console.log("Doubled numbers:", doubledNumbers); // [2, 4, 6, 8, 10]

/**
 * Remoção de um elemento usando filter para criar um novo array.
 */
const numbersWithoutThree = numbers.filter((num) => num !== 3);
console.log("Numbers without 3:", numbersWithoutThree); // [1, 2, 4, 5]

/**
 * Adição de um novo elemento usando concat para criar um novo array.
 */
const numbersWithSix = numbers.concat(6);
console.log("Numbers with 6:", numbersWithSix); // [1, 2, 3, 4, 5, 6]

/**
 * Nota: Em vez de usar métodos mutáveis como push, pop, shift e unshift, optamos por métodos imutáveis como map, filter, e concat.
 */

// Exemplo 4: Imutabilidade em Redux-like State (Imutabilidade em estados)
const initialState = {
  todos: [
    { id: 1, task: "Estudar JavaScript", completed: false },
    { id: 2, task: "Praticar imutabilidade", completed: false },
  ],
};

/**
 * Função para atualizar o estado dos todos sem mutá-lo diretamente.
 */
function toggleTodo(state, todoId) {
  return {
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ),
  };
}

const updatedState = toggleTodo(initialState, 1);
console.log("Initial state:", initialState.todos); // [{ id: 1, task: "Estudar JavaScript", completed: false }, { id: 2, task: "Praticar imutabilidade", completed: false }]
console.log("Updated state:", updatedState.todos); // [{ id: 1, task: "Estudar JavaScript", completed: true }, { id: 2, task: "Praticar imutabilidade", completed: false }]

/**
 * Neste exemplo, a função toggleTodo cria um novo estado sem alterar o original, respeitando o princípio de imutabilidade.
 */

// Exemplo 5: Imutabilidade com Reduce
const products = [
  { name: "Produto A", price: 30 },
  { name: "Produto B", price: 20 },
  { name: "Produto C", price: 50 },
];

/**
 * - Cálculo do preço total sem alterar o array original, utilizando reduce para somar o preço dos produtos.
 * - O método reduce nos permite acumular valores sem modificar o array original,
 * seguindo o princípio de imutabilidade.
 */

const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log("Total Price:", totalPrice); // 100

/**
 * - Cópia de Objetos:
 *   - Usamos `Object.assign` para copiar os valores de um objeto para outro.
 *   - Isso não modifica o original, e pode ser usado para modificar valores de objetos aninhados.
 **/
const htmlCourse = {
  course: "HTML",
  students: [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 },
  ],
};

const javaScriptCouse = {
  ...htmlCourse,
  course: "JavaScript",
  students: [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 },
  ],
};
console.log(htmlCourse, javaScriptCouse);

javaScriptCouse.students.push({
  name: "David",
  age: 32,
});
console.log(htmlCourse, javaScriptCouse);

/**
 * Explicação do Código
 *
 * Imutabilidade em Objetos:
 * - Criamos cópias do objeto `user` usando `Object.assign` e o operador spread (`...`).
 * - Isso permite modificar valores sem alterar o objeto original.
 * - Para objetos aninhados, uma "cópia profunda" é feita, onde os objetos internos também são copiados
 *   para garantir que a mutação não afete o original.
 *
 * Imutabilidade em Arrays:
 * - Demonstramos imutabilidade com arrays usando métodos como `map`, `filter`, e `concat`,
 *   que criam novos arrays sem alterar o original.
 *
 * Redux-like State:
 * - Em aplicações como Redux, imutabilidade é essencial.
 * - A função `toggleTodo` mostra como atualizar o estado sem modificá-lo diretamente.
 *
 * Reduce:
 * - O `reduce` calcula o preço total sem alterar o array de produtos original,
 *   acumulando o valor dos preços de forma imutável.
 *
 * Esses exemplos mostram práticas comuns para manter a imutabilidade em JavaScript,
 * o que ajuda a prevenir bugs e facilita a manutenção do código.
 */
