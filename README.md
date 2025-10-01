# Banco API Tests

Projeto de **automação de testes de API Rest** para a aplicação [Banco API](https://github.com/juliodelimas/banco-api).  
O objetivo é validar os endpoints da API contribuindo com a confiabilidade, consistência e rastreabilidade através de relatórios automatizados.

---

## 🎯 Objetivo

Este repositório contém testes automatizados que verificam os principais fluxos da aplicação **Banco API**, simulando chamadas HTTP e validando as respostas da API.  
A automação permite executar os testes de forma rápida, repetível e gerar relatórios claros em HTML.

---

## 🛠️ Stack utilizada

- [JavaScript (Node.js)](https://nodejs.org/en/)  
- [Mocha](https://mochajs.org/) – Framework de testes  
- [Chai](https://www.chaijs.com/) – Biblioteca de asserções  
- [Supertest](https://github.com/visionmedia/supertest) – Testes de endpoints HTTP  
- [Mochawesome](https://github.com/adamgruber/mochawesome) – Geração de relatórios em HTML  

---

## 📂 Estrutura de diretórios

```bash
banco-api-tests/
├── test/                 # Cenários de teste
│   ├── clientes.test.js  # Testes relacionados a clientes
│   └── ...               # Outros testes
├── mochawesome-report/   # Relatórios em HTML (gerado após execução)
├── package.json          # Dependências e scripts
└── README.md             # Este arquivo
```

---

## ⚙️ Configuração do ambiente

Antes de executar os testes, é necessário criar um arquivo `.env` na raiz do projeto com o seguinte formato:

```env
BASE_URL=http://localhost:3000
```

- `BASE_URL`: URL base onde a API do [Banco API](https://github.com/juliodelimas/banco-api) está rodando.

---

## ▶️ Executando os testes

1. Instale as dependências:

```bash
npm install
```

2. Execute os testes:

```bash
npm test
```

3. Gerar relatório HTML:

O Mochawesome é integrado à execução. Após rodar os testes, o relatório será salvo em:

```
./mochawesome-report/mochawesome.html
```

Abra este arquivo no navegador para visualizar os resultados.

---

## 📚 Documentação das dependências

- [Mocha](https://mochajs.org/)  
- [Chai](https://www.chaijs.com/api/)  
- [Supertest](https://github.com/visionmedia/supertest)  
- [Mochawesome](https://github.com/adamgruber/mochawesome)  

---

## 🔗 Projetos relacionados

- [Banco API (API alvo dos testes)](https://github.com/juliodelimas/banco-api)  
