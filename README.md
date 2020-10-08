# CopaFilmes

# Objetivo

O projeto realiza uma "Copa de Filmes" no qual o melhor filme por critério de nota é exibido na tela, junto com o segundo colocado.

# Desenvolvimento

A solução consiste em 2 projetos, o backend (WebAPI) e o frontend (react-app). O backend está buscando informações de filmes de uma API e retornando os mesmos para o aplicativo react. O React consiste basicamente de 2 páginas onde na primeira são exibidos os filmes disponíveis para seleção onde o usuário deverá selecionar 8 filmes. Ao clicar em "Gerar meu Campeonato" os filmes escolhidos são enviados para o backend onde é calculado qual o filme vencedor utilizando critérios de nota e desempate por ordem alfabética.

# Execução

Para que o projeto execute corretamente é necessário que o projeto WebAPI esteja sendo executado na porta 44365 em localhost. Caso isso não seja possível, o endereço pode ser alterado no arquivo "ServerSettings.ts" dentro de "react-app/src" para o acesso ao backend. O arquivo "WebAPI.sln" pode ser aberto via Visual Studio para facilitar na execução do back end pois o mesmo ja possui informações sobre o ambiente e estado do projeto. Para executar o frontend é necessário abrir o diretório "react-app" no cmd e executar o comando "npm install" ou "yarn" para realizar os downloads das dependências. Após isso utilizar o "npm start" ou "yarn start". Lembrando que é necessário que tanto o frontend e o backend estejam sendo executados para que o projeto funcione corretamente.
