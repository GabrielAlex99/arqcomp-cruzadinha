# Cruzadinha de Arquitetura Computacional

Jogo e plataforma educacional em **HTML, CSS e JavaScript puros** para praticar e consolidar conceitos fundamentais de Arquitetura de Computadores.

## Funcionalidades Principais

- **Cruzadinha Interativa:** 16 conceitos interligados sem conflitos com navegação fluida por teclado e clique duplo para alternar direção.
- **Barra de Pista Ativa:** Exibe em tempo real o número, direção e texto da pista da palavra em foco no topo do tabuleiro.
- **Pistas Clicáveis:** Clique em qualquer pista das listas horizontais/verticais para focar automaticamente a primeira letra daquela palavra no tabuleiro.
- **Sistema de Dicas Progressivas:** Botão para revelar a próxima letra de uma palavra ativa ou exibir dicas de memorização.
- **Revelação sob Demanda:** Permite revelar respostas individuais após a conferência para fins de estudo direcionado.
- **Cronômetro e Barra de Progresso:** Acompanhamento do tempo de resolução e porcentagem de acertos com feedback motivacional dinâmico.
- **Modo Ativo de Aprendizagem:** Painel com explicações teóricas e exemplos práticos dos conceitos após a conferência.
- **Desafio de Arquitetura:** Diagrama em blocos arrastável e clicável (Processador, Barramentos e Hierarquia de Memória) com conferência, resolução guiada e diagnóstico de erros.
- **Glossário Interativo:** Nova aba de consulta para todos os 16 conceitos, com barra de busca em tempo real e filtros por categoria (Processador, Memória, Barramentos, Arquitetura).
- **Tema Claro / Escuro:** Alternância de tema acessível com persistência no `localStorage`.
- **Exportação de Material de Estudo (PDF):** Gera guia de revisão personalizado com conceitos com dificuldade frequente usando estilização nativa para impressão.

## Como jogar

1. Abra o arquivo `index.html` em qualquer navegador web moderno.
2. Clique em uma célula ativa ou em uma pista da lista e digite as letras.
3. Use setas do teclado para navegar entre células; use Backspace para apagar e recuar.
4. Em cruzamentos de palavras, clique duas vezes na mesma célula para alternar entre horizontal e vertical.
5. Use o botão **Dica** se tiver dúvidas em alguma palavra.
6. Clique em **Conferir** para validar as 16 palavras, receber o diagnóstico e liberar o material de revisão.
7. Use o botão **Reiniciar** a qualquer momento para limpar o tabuleiro e zerar o cronômetro.

## Como usar o guia de estudo em PDF

1. Resolva a cruzadinha e clique em **Conferir** pelo menos uma vez.
2. O sistema registra os conceitos com dificuldade no `localStorage` de forma totalmente anônima.
3. Clique em **PDF**.
4. O navegador abrirá a tela de impressão com o guia personalizado formatado.
5. Selecione **Salvar como PDF**.

## Palavras e pistas

| Palavra | Pista |
|---|---|
| CPU | Cérebro eletrônico do computador responsável por buscar, decodificar e executar instruções dos programas |
| ULA | Circuito interno do processador que realiza cálculos matemáticos e comparações entre valores binários |
| UC | Setor interno do processador que coordena o fluxo de dados e instruções |
| REGISTRADORES | Memórias internas ultrarrápidas dentro do processador que guardam dados temporários durante operações imediatas |
| RAM | Memória principal volátil de leitura e escrita que armazena programas ativos durante o uso |
| ROM | Memória não volátil gravada de fábrica que guarda instruções essenciais de inicialização do sistema |
| EEPROM | Memória não volátil que permite apagar e regravar bytes individualmente usando pulsos elétricos |
| FLASH | Memória não volátil regravável em blocos inteiros, muito usada em pendrives e unidades SSD |
| CACHE | Memória intermediária de altíssima velocidade que acelera o acesso do processador aos dados frequentes |
| MEMORIADEMASSA | Armazenamento secundário não volátil de alta capacidade para guardar arquivos permanentemente, como HDs |
| DMA | Técnica que transfere dados entre periféricos e memória principal sem intervenção contínua do processador |
| ADDRESSBUS | Conjunto unidirecional de trilhas que transporta a localização exata da memória a ser acessada |
| DATABUS | Conjunto bidirecional de linhas que transporta efetivamente os conteúdos entre processador, memória e periféricos |
| MICROCONTROLADOR | Circuito integrado único com processador, memória e periféricos embutidos, usado em sistemas embarcados |
| DUALCORE | Arquitetura de processador físico equipado com exatamente dois núcleos independentes de processamento |
| QUADCORE | Arquitetura de processador físico que integra quatro núcleos independentes para executar tarefas simultâneas |

## Publicação (GitHub Pages)

https://gabrielalex99.github.io/arqcomp-cruzadinha/
