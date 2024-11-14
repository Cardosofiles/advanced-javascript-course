// Importa o módulo http nativo do Node.js
const http = require("http");

// Dados em memória para simular um banco de dados
let data = [
  { id: 1, name: "João Batista", age: 25 },
  { id: 2, name: "Maria Silva", age: 30 },
];

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Define o cabeçalho de resposta como JSON
  res.setHeader("Content-Type", "application/json");

  // Método GET: Retorna todos os dados
  if (method === "GET" && url === "/data") {
    res.writeHead(200);
    res.end(JSON.stringify(data));
  }

  // Método POST: Adiciona um novo item
  else if (method === "POST" && url === "/data") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const newItem = JSON.parse(body);
      newItem.id = data.length + 1;
      data.push(newItem);
      res.writeHead(201);
      res.end(JSON.stringify(newItem));
    });
  }

  // Método PUT: Substitui um item existente
  else if (method === "PUT" && url.startsWith("/data/")) {
    const id = parseInt(url.split("/")[2]);
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const updatedItem = JSON.parse(body);
      const index = data.findIndex((item) => item.id === id);

      if (index !== -1) {
        data[index] = { id, ...updatedItem };
        res.writeHead(200);
        res.end(JSON.stringify(data[index]));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Item não encontrado" }));
      }
    });
  }

  // Método PATCH: Atualiza parcialmente um item existente
  else if (method === "PATCH" && url.startsWith("/data/")) {
    const id = parseInt(url.split("/")[2]);
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const updates = JSON.parse(body);
      const index = data.findIndex((item) => item.id === id);

      if (index !== -1) {
        data[index] = { ...data[index], ...updates };
        res.writeHead(200);
        res.end(JSON.stringify(data[index]));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Item não encontrado" }));
      }
    });
  }

  // Método DELETE: Remove um item pelo ID
  else if (method === "DELETE" && url.startsWith("/data/")) {
    const id = parseInt(url.split("/")[2]);
    const index = data.findIndex((item) => item.id === id);

    if (index !== -1) {
      const deletedItem = data.splice(index, 1);
      res.writeHead(200);
      res.end(JSON.stringify(deletedItem));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: "Item não encontrado" }));
    }
  }

  // Rota não encontrada
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Rota não encontrada" }));
  }
});

// O servidor é configurado para escutar na porta 3000
server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
