// Strict Mode
"use strict"; // Ativa o modo estrito para toda a função ou script

// Exemplo 1: Variáveis não declaradas
function declareVariable() {
  // Tentar usar uma variável não declarada causará um erro
  undeclaredVariable = "Isso causará um erro"; // ReferenceError: undeclaredVariable is not defined
}
// declareVariable(); // Descomente para ver o erro

// Exemplo 2: Proibindo a duplicação de parâmetros
function addNumbers(a, a, b) {
  // SyntaxError: Duplicate parameter name not allowed in this context
  return a + b;
}
// addNumbers(1, 2, 3); // Descomente para ver o erro

// Exemplo 3: Modificando propriedades de objetos imutáveis
const user = Object.freeze({
  name: "Maria",
  age: 30,
});
// Tentar modificar uma propriedade em um objeto congelado causará um erro
// user.age = 31; // TypeError: Cannot assign to read only property 'age' of object '#<Object>'

// Exemplo 4: Eliminar propriedades de objetos
let car = {
  brand: "Ford",
  model: "Mustang",
};
// Deletar uma propriedade é permitido no modo estrito
delete car.model; // Remove a propriedade 'model'
// Exibir o objeto após a remoção da propriedade
console.log(car); // { brand: "Ford" }

// Exemplo 5: Uso de this em funções
function showThis() {
  console.log(this); // No modo estrito, 'this' será undefined em funções normais
}
showThis(); // undefined

// Exemplo 6: Classe com método getter e tentativa de atribuição
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }
}
let circle = new Circle(5);
console.log("Área do círculo:", circle.area); // Área do círculo: 78.53981633974483
// Tentar atribuir um valor ao getter causará um erro
// circle.area = 100; // TypeError: Cannot set property area of #<Circle> which has only a getter
