<div align="center">

<h1 align="center">🚀 Curso Avançado de JavaScript</h1>

### Informações

![Instituição](https://img.shields.io/badge/Instituição-OneBitCode-0078D4?style=for-the-badge&logo=azuredevops)
![Curso](https://img.shields.io/badge/Curso-JavaScript-4B8BBE?style=for-the-badge&logo=github)
![Professor](https://img.shields.io/badge/Professor-Isaac%20Pontes-FFCA28?style=for-the-badge&logo=linkedin)

**Instituição:** [OneBitCode](https://onebitcode.com/)  
**Curso:** Funções e recursos avançados de JavaScript  
**Professor:** [Isaac Pontes](https://www.linkedin.com/in/isaac-pontes/)

Repositório contendo o código-fonte e exemplos práticos do curso avançado de JavaScript. O projeto explora conceitos modernos da linguagem, manipulação de APIs, construção de aplicações backend com foco em práticas profissionais e uso de frameworks minimalistas como o tinyhttp.

</div>

---

## Principais Funcionalidades

- Servidor HTTP em Node.js utilizando tinyhttp
- Exemplos de manipulação de rotas, middlewares e respostas HTTP
- Integração e leitura de dados via JSON
- Estrutura modular para expansão e manutenção
- Demonstração de boas práticas com JavaScript avançado

### Casos de Uso

- Estudos de arquitetura backend moderna com JavaScript
- Laboratório para testes e experimentos com APIs REST
- Base para desenvolvimento de aplicações web minimalistas
- Referência para bootcamps, cursos e treinamentos avançados

---

## Stack e Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript server-side
- **JavaScript (ES6+)**: Linguagem principal do projeto
- **tinyhttp**: Framework web minimalista (substituto leve para Express)
- **npm**: Gerenciamento de dependências
- **JSON**: Leitura e manipulação de dados

---

## Estrutura de Pastas

```
advanced-javascript-course/
├── index.html           # Página de exemplo/teste (caso haja front-end)
├── node_modules/        # Dependências do projeto (gerenciadas pelo npm)
├── package.json         # Metadados e dependências do projeto
├── package-lock.json    # Lockfile de dependências
├── server.js            # Código principal do servidor HTTP
├── server.json          # Dados de exemplo em JSON
└── src/                 # Scripts e módulos utilizados no curso
```

### Explicação das Principais Partes

- **index.html**: Página para testes locais ou interface simples (quando aplicável)
- **server.js**: Implementação do servidor e rotas HTTP utilizando tinyhttp
- **server.json**: Base de dados em formato JSON para simulação de persistência
- **src/**: Diretório para scripts auxiliares, módulos ou exemplos de código avançado
- **package.json / package-lock.json**: Controle de dependências e scripts do projeto

---

## Instalação e Execução Local

### Pré-requisitos

- Node.js (versão 14+ recomendada)
- npm (geralmente instalado junto com Node)

### Passo a Passo

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Cardosofiles/advanced-javascript-course.git
   cd advanced-javascript-course
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure variáveis de ambiente**

   - Não são necessárias variáveis extras para rodar o projeto padrão.
   - Caso o curso acrescente configurações, siga as instruções dos módulos correspondentes.

4. **Execute o servidor**
   ```bash
   node server.js
   ```
   O servidor estará disponível em `http://localhost:3000` ou porta definida no código.

---

## Como Executar Testes

- Se houver scripts de teste, utilize:
  ```bash
  npm test
  ```
- Caso não haja testes automatizados, utilize ferramentas como Postman, Insomnia ou seu navegador para testar os endpoints do servidor.

---

## Exemplos de Uso dos Endpoints

### Listar dados (GET)

```http
GET /api/data
```

### Obter item específico (GET)

```http
GET /api/data/:id
```

### Criar novo item (POST)

```http
POST /api/data
Content-Type: application/json

{
  "name": "Novo item",
  "value": 123
}
```

### Atualizar item (PUT)

```http
PUT /api/data/:id
Content-Type: application/json

{
  "name": "Nome atualizado"
}
```

### Remover item (DELETE)

```http
DELETE /api/data/:id
```

> Os exemplos acima são ilustrativos. Consulte o código das rotas em `server.js` ou na pasta `src/` para detalhes e rotas implementadas.

---

## Boas Práticas e Recomendações

- Organize o código em módulos reutilizáveis dentro de `src/`.
- Documente funções e rotas com comentários claros.
- Utilize `.env` para segredos/configurações sensíveis em ambientes de produção.
- Mantenha as dependências atualizadas com `npm update`.
- Prefira PRs para alterações e siga convenções de commits semânticos.
- Escreva testes automatizados sempre que possível.
- Utilize linters e formatadores para padronizar o código.

---

Contribuições são bem-vindas! Para sugestões, dúvidas ou melhorias, abra uma issue ou pull request.

## 📫 Contato

<div align="center">

<a href="mailto:cardosofiles@outlook.com">
  <img src="https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoftoutlook&logoColor=white" alt="Email"/>
</a>
<a href="https://www.linkedin.com/in/joaobatista-dev/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
</a>
<a href="https://github.com/Cardosofiles" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>
<a href="https://cardosofiles.dev/" target="_blank">
  <img src="https://img.shields.io/badge/Portfólio-222222?style=for-the-badge&logo=about.me&logoColor=white" alt="Portfólio"/>
</a>

</div>

---

<div align="right">

[⬆️ Voltar ao topo](#informações)

</div>
