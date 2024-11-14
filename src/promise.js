// Função que simula uma requisição para carregar dados, retornando uma Promise
function loadData(dataType) {
  return new Promise((resolve, reject) => {
    console.log(`Iniciando o carregamento de ${dataType}...`);

    // Simula um tempo de espera para carregar os dados (2 segundos)
    setTimeout(() => {
      // Usa uma condição para simular o sucesso e a falha no carregamento
      if (dataType === "usuários") {
        // Sucesso na obtenção dos dados
        resolve({
          status: 200,
          message: `Dados de ${dataType} carregados com sucesso!`,
          data: [
            { id: 1, name: "João" },
            { id: 2, name: "Maria" },
          ],
        });
      } else {
        // Falha na obtenção dos dados
        reject({
          status: 404,
          message: `Erro: ${dataType} não encontrado.`,
        });
      }
    }, 2000); // Tempo de espera de 2 segundos para simulação
  });
}

// Função que utiliza a Promise e lida com os resultados
function fetchData(dataType) {
  loadData(dataType)
    .then((response) => {
      // Manipula o sucesso da Promise
      console.log("Sucesso:", response.message);
      console.log("Dados Recebidos:", response.data);
    })
    .catch((error) => {
      // Manipula o erro da Promise
      console.log("Erro:", error.message);
    });
}

// Exemplo de uso da função fetchData para carregar dados de usuários
fetchData("usuários"); // Irá resolver a Promise com sucesso
fetchData("produtos"); // Irá rejeitar a Promise, simulando um erro

/*
 * Explicação do Código:
 *
 * 1. loadData(dataType): Função que simula o carregamento de dados e retorna uma Promise.
 *    - A função cria uma nova Promise e, dentro dela, usa `setTimeout` para simular o tempo de resposta de uma requisição assíncrona.
 *    - Se `dataType` for "usuários", resolve a Promise com um objeto contendo o status 200, uma mensagem de sucesso, e os dados de usuários simulados.
 *    - Caso contrário, a Promise é rejeitada com uma mensagem de erro e o status 404, simulando um erro de requisição.
 *
 * 2. fetchData(dataType): Função que usa a Promise retornada por loadData para obter ou manipular o resultado do carregamento.
 *    - .then((response) => { ... }): Manipula o sucesso da Promise, exibindo a mensagem e os dados retornados.
 *    - .catch((error) => { ... }): Manipula a falha da Promise, exibindo a mensagem de erro caso o carregamento falhe.
 *
 * Utilização:
 * - fetchData("usuários") chama loadData com "usuários" e exibe os dados ao resolver a Promise com sucesso.
 * - fetchData("produtos") chama loadData com "produtos" e simula um erro, exibindo a mensagem de erro com reject.
 *
 * Vantagens:
 * - Este código exemplifica como `Promise` pode ser usada para controlar fluxos assíncronos de dados em JavaScript.
 * - Permite gerenciar sucesso e erro de forma organizada, tornando o código mais legível e fácil de manter.
 */
