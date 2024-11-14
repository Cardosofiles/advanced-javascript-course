// Este módulo fornece três funções matemáticas básicas: sum, multiply e divide.
// As funções são exportadas usando a exportação nomeada, o que permite que cada função
// seja importada individualmente por seu nome.

// Função para somar dois números
export function sum(a, b) {
  return a + b;
}

// Função para multiplicar dois números
export function multiply(a, b) {
  return a * b;
}

// Função para dividir dois números
export function divide(a, b) {
  return a / b;
}

/*
 * Tipos de Exportação:
 *
 * 1. Exportação Nomeada:
 *    - Aqui, cada função é exportada individualmente usando a sintaxe `export`.
 *    - As exportações nomeadas permitem que várias funções ou variáveis sejam exportadas
 *      do mesmo módulo com nomes específicos.
 *    - Ao importar, você pode escolher quais exportações nomeadas quer usar, e deve referir-se a elas
 *      pelo mesmo nome (a menos que sejam renomeadas durante a importação).
 *
 *    Exemplo de importação nomeada:
 *
 *    ```javascript
 *    import { sum, multiply } from './module-example-calc.js';
 *    console.log(sum(3, 7));      // 10
 *    console.log(multiply(3, 7)); // 21
 *    ```
 *
 * 2. Exportação Padrão:
 *    - A exportação padrão permite exportar uma única entidade do módulo, que pode ser
 *      uma função, classe ou objeto.
 *    - O módulo só pode ter uma exportação padrão.
 *    - Ao importar uma exportação padrão, você pode dar a ela qualquer nome.
 *
 *    Exemplo de exportação padrão:
 *
 *    ```javascript
 *    export default function add(a, b) {
 *      return a + b;
 *    }
 *    ```
 *
 *    Exemplo de importação padrão:
 *
 *    ```javascript
 *    import add from './module-example-calc.js';
 *    console.log(add(3, 7)); // 10
 *    ```
 *
 * Nota: Este código utiliza exportações nomeadas, então as funções devem ser importadas com
 * o mesmo nome que foram exportadas.
 */
