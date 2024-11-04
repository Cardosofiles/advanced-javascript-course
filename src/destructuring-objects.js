/**
 * Exemplo de Desestruturação de Objetos em JavaScript
 *
 * A desestruturação permite extrair valores de objetos e arrays,
 * simplificando o código e facilitando o acesso a propriedades e valores específicos.
 * Nos exemplos abaixo, mostramos usos avançados da desestruturação de objetos.
 */

// Objeto complexo com aninhamento e propriedades padrão
const user = {
  id: 1,
  name: "João Batista",
  address: {
    street: "Rua das Flores",
    city: "São Paulo",
    zipCode: "12345-678",
  },
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  age: 30,
};

/**
 * Exemplo 1: Desestruturação Simples
 *
 * Extraindo propriedades diretamente do objeto `user`.
 */
const { name, age } = user;
console.log("Nome:", name); // João Batista
console.log("Idade:", age); // 30

/**
 * Exemplo 2: Desestruturação Aninhada
 *
 * Extraindo propriedades aninhadas dentro do objeto `user`, como `city` e `theme`.
 */
const {
  address: { city, zipCode },
  preferences: { theme },
} = user;

console.log("Cidade:", city); // São Paulo
console.log("CEP:", zipCode); // 12345-678
console.log("Tema:", theme); // dark

/**
 * Exemplo 3: Desestruturação com Renomeação
 *
 * Renomeando propriedades para variáveis locais com nomes diferentes.
 */
const {
  name: userName,
  preferences: { notifications: userNotifications },
} = user;

console.log("Nome do Usuário:", userName); // João Batista
console.log("Notificações:", userNotifications); // { email: true, sms: false }

/**
 * Exemplo 4: Valores Padrão
 *
 * Usando valores padrão para propriedades que podem estar ausentes.
 */
const { phone = "Sem número" } = user;
console.log("Telefone:", phone); // Sem número (propriedade `phone` não existe no objeto `user`)

/**
 * Exemplo 5: Função com Desestruturação de Parâmetros
 *
 * Extraindo propriedades de um objeto passado como argumento.
 * Aqui, o objeto `product` contém informações de um produto.
 */
const product = {
  id: 101,
  name: "Notebook",
  price: 1500,
  specifications: {
    processor: "Intel i7",
    ram: "16GB",
  },
};

function displayProduct({ name, price, specifications: { processor, ram } }) {
  console.log("Produto:", name); // Notebook
  console.log("Preço:", price); // 1500
  console.log("Processador:", processor); // Intel i7
  console.log("RAM:", ram); // 16GB
}

displayProduct(product);

/**
 * Exemplo 6: Desestruturação com Rest Operator
 *
 * Extraindo algumas propriedades e armazenando o restante em um novo objeto.
 */
const { id, ...rest } = product;
console.log("ID:", id); // 101
console.log("Restante:", rest); // { name: "Notebook", price: 1500, specifications: { processor: "Intel i7", ram: "16GB" } }

/**
 * Exemplo 7: Desestruturação em Arrays de Objetos
 *
 * Quando temos uma lista de objetos, podemos desestruturar diretamente ao iterar.
 */
const orders = [
  { orderId: 1, amount: 100, date: "2023-01-15" },
  { orderId: 2, amount: 200, date: "2023-01-17" },
];

for (const { orderId, amount } of orders) {
  console.log(`Pedido #${orderId} - Valor: ${amount}`);
}

/**
 * Exemplo 8: Parâmetros Opcionais com Desestruturação
 *
 * Utilizando desestruturação para definir valores padrão em funções.
 */
function configureSettings({
  theme = "light",
  notifications = { email: true },
} = {}) {
  console.log("Tema:", theme); // light se não for especificado
  console.log("Notificações:", notifications); // { email: true } se não for especificado
}

// Chamando a função sem passar um objeto
configureSettings();

// Chamando a função com um objeto parcial
configureSettings({ theme: "dark" });

/**
 * Explicação dos Exemplos de Desestruturação
 *
 * 1. Desestruturação Simples:
 *    Extrai propriedades de um objeto e as armazena em variáveis com o mesmo nome das propriedades.
 *
 * 2. Desestruturação Aninhada:
 *    Acessa propriedades dentro de objetos aninhados, facilitando o acesso direto a dados em níveis mais profundos.
 *
 * 3. Renomeação de Propriedades:
 *    Permite renomear propriedades durante a desestruturação, atribuindo-as a variáveis locais de nomes diferentes.
 *
 * 4. Valores Padrão:
 *    Define valores padrão para propriedades inexistentes, evitando o uso de `undefined` quando uma propriedade está ausente.
 *
 * 5. Desestruturação em Funções:
 *    Usa a desestruturação diretamente nos parâmetros de função para acessar propriedades específicas do objeto passado.
 *
 * 6. Rest Operator:
 *    Utiliza o operador `...rest` para agrupar o restante das propriedades em um novo objeto, útil para acessar o que sobrou da desestruturação.
 *
 * 7. Desestruturação em Arrays de Objetos:
 *    Permite a desestruturação de propriedades ao iterar sobre um array de objetos, simplificando o acesso a dados de listas.
 *
 * 8. Parâmetros Opcionais com Desestruturação:
 *    Define valores padrão para propriedades opcionais ao passar um objeto como argumento em uma função, tornando o código mais flexível.
 *
 * Esses exemplos demonstram como a desestruturação de objetos pode simplificar o código, melhorando a legibilidade e reduzindo a necessidade de acessos diretos.
 */
