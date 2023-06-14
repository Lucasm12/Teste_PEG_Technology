## Estrutura do Projeto
## Instalação do Cypress

1. Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados no seu sistema. Você pode baixá-los e instalá-los a partir do site oficial: https://nodejs.org.

2. Clone o repositório do seu projeto do GitHub para o seu ambiente local.

3. Abra o terminal ou o prompt de comando e navegue até o diretório raiz do projeto.

4. Execute o seguinte comando para instalar as dependências do projeto, incluindo o Cypress:

npm install


## Executando os Testes com o Cypress

1. Com as dependências instaladas, você pode executar os testes com o Cypress. Execute o seguinte comando no terminal:

npx cypress open


Isso abrirá o Cypress Test Runner, que permite que você execute os testes interativamente.

2. No Cypress Test Runner, clique no arquivo de teste que você deseja executar.

3. O Cypress abrirá uma nova janela do navegador e executará o teste automaticamente. Você poderá ver o resultado do teste e interagir com ele.

## Configurações do Cypress

O Cypress usa o arquivo `cypress.json` para armazenar as configurações. Verifique se esse arquivo está presente no diretório raiz do projeto. Você pode personalizar as configurações conforme necessário, como a URL base do aplicativo a ser testado.
