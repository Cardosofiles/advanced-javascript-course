// Importação dos pacotes
const dayjs = require("dayjs");
const _ = require("lodash");
const axios = require("axios");
const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");

// Função para criar um novo usuário
async function createUser() {
  const user = {
    name: faker.name.fullName(), // Gera um nome aleatório
    email: faker.internet.email(), // Gera um email aleatório
    password: await bcrypt.hash("password123", 10), // Criptografa a senha "password123" com bcrypt
    dateJoined: dayjs().format("YYYY-MM-DD"), // Define a data de criação formatada
  };

  console.log("Novo usuário criado:", user);
  return user;
}

// Função para simular a geração de uma lista de usuários
async function generateUsersList(numUsers = 5) {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    const user = await createUser();
    users.push(user);
  }

  // Ordena a lista de usuários por data de ingresso (exemplo com Lodash)
  const sortedUsers = _.orderBy(users, ["dateJoined"], ["asc"]);
  console.log("Lista de usuários ordenada:", sortedUsers);
  return sortedUsers;
}

// Função para simular uma solicitação de login
async function loginUser(email, password) {
  const user = await createUser();

  // Compara a senha fornecida com a senha criptografada no cadastro
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (isPasswordValid) {
    console.log("Login bem-sucedido para o email:", email);
  } else {
    console.log("Falha no login: senha inválida.");
  }
}

// Função para buscar dados de uma API pública usando Axios
async function fetchDataFromAPI() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("Dados da API recebidos:", response.data.slice(0, 5)); // Exibe os primeiros 5 resultados
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error.message);
  }
}

// Função principal para executar todos os processos
async function main() {
  console.log("Iniciando processo de criação de usuários e login...");

  // Gera uma lista de usuários falsos e exibe
  await generateUsersList(3);

  // Simula login com email e senha
  await loginUser("teste@exemplo.com", "password123");

  // Busca dados de uma API pública
  await fetchDataFromAPI();

  // Gera dados de transações fictícias para simulação financeira
  const transactions = _.times(5, () => ({
    transactionId: faker.datatype.uuid(),
    amount: faker.finance.amount(),
    date: dayjs(faker.date.recent()).format("YYYY-MM-DD HH:mm:ss"),
  }));
  console.log("Transações geradas:", transactions);
}

// Executa a função principal
main();

/*
 * Explicação do Código:
 *
 * 1. Pacote Faker:
 *    - Gera dados aleatórios como nome, email e transações fictícias.
 *    - Usado para simular criação de usuários e dados financeiros.
 *
 * 2. Pacote bcryptjs:
 *    - Criptografa a senha ao criar o usuário com createUser.
 *    - Na função loginUser, bcrypt.compare verifica se a senha fornecida corresponde à senha criptografada.
 *
 * 3. Pacote dayjs:
 *    - Manipula e formata datas, atribuindo uma data de ingresso ao usuário e às transações.
 *
 * 4. Pacote Lodash:
 *    - Facilita operações de manipulação de dados como orderBy para ordenar a lista de usuários.
 *    - O método _.times é usado para gerar transações fictícias de forma repetida.
 *
 * 5. Pacote Axios:
 *    - Usado na função fetchDataFromAPI para realizar requisições HTTP.
 *    - Busca dados da API pública e exibe os primeiros 5 resultados.
 *
 * Utilidade Geral:
 * - Este exemplo simula uma aplicação que gerencia dados de usuário, transações financeiras e realiza operações de login e chamadas de API.
 * - Demonstra técnicas de manipulação de dados seguras e otimizadas, além de boas práticas para tratamento de dados assíncronos em Node.js.
 */
