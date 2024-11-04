// rest-params.js

/**
 * Função para calcular o preço total de um carrinho de compras, aplicando descontos variados
 * e levando em conta impostos e outras taxas adicionais.
 *
 * A função utiliza o parâmetro REST para permitir que o usuário adicione uma lista flexível
 * de preços ao carrinho e aplica diferentes tipos de descontos e taxas de acordo com
 * a categoria de cada item.
 *
 * @param {number} tax - A taxa de imposto aplicada ao total (ex: 0.1 representa 10%)
 * @param {number} discount - O desconto aplicado a cada item no carrinho (ex: 0.05 para 5%)
 * @param {...number} prices - Uma lista de preços de produtos para calcular o total
 * @returns {number} - O valor final calculado após aplicar o imposto e o desconto
 */
function calculateTotalPrice(tax, discount, ...prices) {
  // Calcula o subtotal de todos os preços recebidos
  const subtotal = prices.reduce((total, price) => total + price, 0);

  // Aplica o desconto a cada preço individualmente e re-calcula o subtotal
  const discountedSubtotal = prices.reduce((total, price) => {
    const discountedPrice = price * (1 - discount);
    return total + discountedPrice;
  }, 0);

  // Aplica a taxa de imposto sobre o subtotal com desconto
  const totalWithTax = discountedSubtotal * (1 + tax);

  console.log("Subtotal:", subtotal.toFixed(2));
  console.log("Subtotal com desconto:", discountedSubtotal.toFixed(2));
  console.log("Total com imposto:", totalWithTax.toFixed(2));

  return totalWithTax;
}

// Exemplo de uso da função:
// Abaixo temos três produtos com preços variados e aplicamos um imposto de 10% (0.1) e um desconto de 5% (0.05).
const finalPrice = calculateTotalPrice(0.1, 0.05, 200, 150, 300);

console.log("Preço final do carrinho:", finalPrice.toFixed(2));

/**
 * Função para registrar informações de várias pessoas em um evento.
 * Utiliza REST params para aceitar uma lista variável de pessoas e
 * seus detalhes como argumentos.
 *
 * @param {string} eventName - O nome do evento
 * @param {...Object} attendees - Uma lista de objetos representando os participantes
 */
function registerAttendees(eventName, ...attendees) {
  console.log(`Registrando os participantes para o evento: ${eventName}`);

  attendees.forEach((attendee, index) => {
    console.log(`\nParticipante #${index + 1}:`);
    console.log(`Nome: ${attendee.name}`);
    console.log(`Idade: ${attendee.age}`);
    console.log(`Email: ${attendee.email}`);
  });
}

// Exemplo de uso da função registerAttendees
registerAttendees(
  "Conferência de JavaScript",
  { name: "João", age: 25, email: "joao@example.com" },
  { name: "Maria", age: 30, email: "maria@example.com" },
  { name: "Pedro", age: 22, email: "pedro@example.com" }
);

/**
 * Explicação do Código:
 *
 * Função calculateTotalPrice():
 *
 * - Essa função utiliza o parâmetro REST (...prices) para aceitar uma quantidade variável de preços de produtos.
 * - Os argumentos `tax` e `discount` são usados para definir a taxa de imposto e o desconto a serem aplicados ao total.
 * - A função aplica o desconto individualmente a cada preço no array `prices`, soma esses preços para calcular o subtotal com desconto
 *   e, em seguida, aplica o imposto ao valor resultante.
 * - Exemplo de uso: `calculateTotalPrice(0.1, 0.05, 200, 150, 300);`
 *
 * Função registerAttendees():
 *
 * - Essa função utiliza o parâmetro REST (...attendees) para aceitar uma lista variável de objetos que representam os participantes do evento.
 * - Para cada participante, a função exibe suas informações (nome, idade e email).
 * - Exemplo de uso: `registerAttendees("Conferência de JavaScript", { name: "João", age: 25, email: "joao@example.com" }, { name: "Maria", age: 30, email: "maria@example.com" });`
 *
 * Detalhes do Parâmetro REST:
 *
 * - O parâmetro REST permite que funções recebam uma quantidade indefinida de argumentos como um array, facilitando o trabalho com listas flexíveis de entradas.
 * - Nos exemplos, `...prices` e `...attendees` capturam valores variáveis que são processados conforme necessário.
 * - O REST é especialmente útil quando o número de argumentos não é conhecido antecipadamente.
 */
