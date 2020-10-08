# CopaFilmes

# Objetivo

O projeto realiza uma "Copa de Filmes" no qual o melhor filme por critério de nota é exibido na tela, junto com o segundo colocado.

# Desenvolvimento

A solução consiste em 2 projetos, o backend (WebAPI) e o frontend (react-app). O backend está buscando informações de filmes de uma API e retornando os mesmos para o aplicativo react. O React consiste basicamente de 2 páginas onde na primeira são exibidos os filmes disponíveis para seleção onde o usuário deverá selecionar 8 filmes. Ao clicar em "Gerar meu Campeonato" os filmes escolhidos são enviados para o backend onde é calculado qual o filme vencedor utilizando critérios de nota e desempate por ordem alfabética.
