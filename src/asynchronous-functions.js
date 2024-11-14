// Este código demonstra o uso de funções assíncronas complexas em JavaScript, incluindo setTimeout, setInterval e Promises.
// As funções ilustram cenários reais onde processos assíncronos são necessários para simular tarefas como
// buscar dados em uma API, realizar operações periódicas e aguardar uma promessa ser resolvida.

// Função assíncrona para simular uma chamada de API com setTimeout e Promise
function fetchData(url) {
  return new Promise((resolve, reject) => {
    console.log(`Iniciando busca de dados em ${url}...`);
    // Simula o tempo de espera para uma resposta da API usando setTimeout
    setTimeout(() => {
      const data = { message: "Dados recebidos com sucesso!" };
      console.log(`Dados de ${url} foram recebidos.`);
      resolve(data);
    }, 2000); // Espera 2 segundos antes de resolver a promessa
  });
}

// Função assíncrona para simular várias chamadas de API com await
async function multipleAPICalls() {
  try {
    console.log("Iniciando chamadas de API...");
    const data1 = await fetchData("https://api.example.com/data1");
    const data2 = await fetchData("https://api.example.com/data2");
    const data3 = await fetchData("https://api.example.com/data3");
    console.log("Todas as chamadas de API concluídas:", data1, data2, data3);
  } catch (error) {
    console.error("Erro nas chamadas de API:", error);
  }
}

// Chamando a função de múltiplas chamadas de API
multipleAPICalls();

// Função usando setInterval para executar uma tarefa a cada 3 segundos
function monitorServer() {
  let attempts = 0;
  const intervalId = setInterval(() => {
    attempts += 1;
    console.log(`Tentativa ${attempts}: Checando o status do servidor...`);

    // Simula um erro na tentativa 5 para demonstrar clearInterval
    if (attempts === 5) {
      console.log("Servidor não está respondendo. Parando o monitoramento.");
      clearInterval(intervalId); // Interrompe o setInterval
    }
  }, 3000); // Executa a cada 3 segundos
}

// Inicia o monitoramento do servidor
monitorServer();

// Função complexa que usa Promise.all para gerenciar várias promessas
async function processOrders() {
  const order1 = fetchData("https://api.orders.com/order1");
  const order2 = fetchData("https://api.orders.com/order2");
  const order3 = fetchData("https://api.orders.com/order3");

  try {
    console.log("Processando pedidos...");
    const results = await Promise.all([order1, order2, order3]);
    console.log("Todos os pedidos foram processados:", results);
  } catch (error) {
    console.error("Erro ao processar os pedidos:", error);
  }
}

// Inicia o processamento de pedidos
processOrders();

/*
 * Explicação dos Exemplos:
 *
 * 1. setTimeout:
 *    - Usado para simular um atraso na resposta de uma chamada de API, configurando um temporizador de 2 segundos.
 *    - A função fetchData simula a espera por dados e resolve a promessa após o atraso.
 *
 * 2. setInterval:
 *    - A função monitorServer demonstra o uso de setInterval para executar uma tarefa repetidamente.
 *    - Este exemplo checa o status de um servidor a cada 3 segundos e para após 5 tentativas com clearInterval.
 *
 * 3. Promises e Promise.all:
 *    - O exemplo processOrders usa Promise.all para gerenciar várias promessas simultâneas.
 *    - Permite esperar que todas as chamadas de API sejam concluídas antes de continuar a execução.
 *
 * Benefícios de Funções Assíncronas:
 *
 * - Melhoram a performance, evitando o bloqueio de operações no loop principal.
 * - Facilitam o trabalho com código assíncrono complexo, tornando-o mais legível.
 * - Promise.all é útil quando múltiplas promessas devem ser resolvidas antes de continuar.
 *
 * Aviso:
 * - Em casos de operações frequentes ou sensíveis ao tempo, monitore o uso de setInterval para evitar sobrecarga.
 */
