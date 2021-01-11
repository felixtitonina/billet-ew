# Teste Prático Back End

Através da aplicação consultar linhas digitáveis de boleto de título bancárioe pagamento de concessionárias, verificando se a mesma é válida ou não. Sendo válida epossuindo valor e/ou data de vencimento ter o retorno desses dados.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de teste.


### 📋 Pré-requisitos

- **Node.js** versão 8 ou superior;
- **Nodemon** - `npm i -g nodemon`.


### 🔧 Instalação

1. Faça o clone do repositório e no terminal navegue até a pasta;
2. Instale as dependências do projeto com `npm install`;
3. Rode o servidor de desenvolvimento com `npm run dev` ou `npm run devi` caso queira debugar.
4. O *endpoint* do serviço estará disponível em http://localhost:3333/boleto/:boleto #### Method: GET .

Utilize o Postman para testar suas chamadas. [https://www.postman.com/downloads/](https://www.postman.com/downloads/).


### Estrutura de Pasta

    ├── billet-ew
    |   ├── node_modules (não será importado, rodar npm install)
    |   ├── src
    |       ├── controllers
    |       │   └── billet.controller.js
    |       ├── hender
    |       ├── middlewares
    |       ├── routes
    |       │   └── routes.js
    |       ├── server.js
    |       └── services
    |           ├── barCode.service.js
    |           ├── calcDigitoVerificador.service.js
    |           ├── clear.services.js
    |           └── validadeBillet.service.js


## 📦 Desenvolvimento

No desenvolvimento tentei deixar o mais modular possivel criando serviços para poder reapoveitar o código.

## 🛠️ Construído com

* [expressjs](https://expressjs.com/pt-br/) - O framework usado
