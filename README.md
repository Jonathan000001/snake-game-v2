  # 🐍 Snake Game v2.0 - Inclusão de Novas Funcionalidades.

## 🔗 Projeto Base (v1.0)
- **Repositório do Projeto Base (v1.0):** [Acessar Meu Repositório Base no GitHub](https://github.com/Jonathan000001/snake-game)

---

## 📖 Visão Geral do Projeto
Este repositório contém a **Versão 2.0** do projeto *Snake Game*. Partindo do código base desenvolvido na versão v1.0, o objetivo deste trabalho foi aplicar conceitos práticos de **Engenharia de Software**, implementando novos requisitos de forma iterativa e aprimorando a Experiência do Usuário (UX) e a arquitetura visual do jogo.

## 📋 1. Levantamento de Requisitos
Realizou-se o levantamento e a estruturação de Requisitos Funcionais (RF) e Não-Funcionais (RNF):

### Requisitos Funcionais (RF)
- **RF01 - Condição de Derrota (Colisão com as Bordas):** O sistema deve interromper a partida (Game Over) caso as coordenadas da cabeça da cobra excedam os limites do tabuleiro (`canvas`), eliminando o comportamento anterior de atravessar paredes.
- **RF02 - Sistema de Reinício Rápido (Reset):** O sistema deve fornecer um botão na interface e responder ao atalho de teclado (`Tecla Enter`) para redefinir o estado das variáveis globais e reiniciar a partida sem recarregar a página.
- **RF03 - Placar e Pontuação Dinâmica:** O sistema deve rastrear e exibir a pontuação do jogador em tempo real, incrementando-a a cada maçã consumida.
- **RF04 - Evolução Dinâmica de Padrão (Cobra Coral - Adicionado Iterativamente):** À medida que a cobra cresce, o sistema deve renderizar as cores dos segmentos do seu corpo seguindo a sequência de uma Cobra Coral (Preto, Branco, Preto, Vermelho, Vermelho), repetindo esse padrão indefinidamente.

### Requisitos Não-Funcionais (RNF)
- **RNF01 - Usabilidade e Micro-interações (UX):** A interface deve fornecer respostas visuais claras ao usuário, como efeitos de `:hover` e feedback tátil de clique (`:active` com redução de escala) no botão de reiniciar.
- **RNF02 - Layout Responsivo e Centralização:** O layout deve utilizar CSS Flexbox para manter a área de jogo perfeitamente centralizada na tela em diferentes resoluções.
- **RNF03 - Identidade Visual Retro/Arcade:** A aplicação deve adotar uma paleta de cores temática (fundo escuro e tabuleiro cinza para alto contraste) e tipografia estilo *Arcade* (fonte "Press Start 2P").

## ⚙️ 2. Decisões Arquiteturais e Lógica de Implementação

- **Mapeamento de Coordenadas (Bounding Box):** Verificação constante das posições $(X, Y)$ da cabeça da cobra em relação às dimensões totais do `canvas` ($16 \times \text{box}$).
- **Gestão de Estados e Ciclo de Vida:** Uso rigoroso de `setInterval` e `clearInterval` associado a funções de reinicialização puras, prevenindo vazamentos de memória e a execução de múltiplos loops simultâneos.
- **Algoritmo de Renderização de Padrão Recorrente (Operador Módulo):** Utilização de um vetor de cores `["black", "white", "black", "red", "red"]` combinado com o operador `%` (`i % coresCoral.length`), permitindo renderizar o padrão dinâmico com complexidade de espaço $O(1)$ por nó do corpo da cobra.

## 🤖 3. Uso de Inteligência Artificial e Desenvolvimento de Habilidades
Neste projeto, a inteligência artificial (**Google Gemini**) foi utilizada com o objetivo estrito de acelerar o aprendizado e desenvolver novas habilidades técnicas. A IA não gerou o projeto de forma autônoma, mas atuou como uma ferramenta de mentoria para aprofundar o entendimento prático do código.

**O que foi desenvolvido de forma 100% autônoma:**
- **Levantamento de Requisitos:** Toda a idealização das melhorias, a escolha de quais funcionalidades adicionar e o planejamento do projeto foram decisões exclusivas e não contaram com o auxílio da IA.
- **Estruturação do Escopo:** A definição do que seria transformado da versão 1.0 para a 2.0.

**Onde a IA foi utilizada (Foco em Estudo):**
- **Mentoria em Lógica Algorítmica:** Discussão teórica e prática sobre a aplicação matemática do operador de módulo (`%`) para criar loops de arrays infinitos (utilizado no padrão de cores da cobra).
- **Aprimoramento em CSS:** Estudo direcionado para a substituição de layouts antigos por CSS moderno (Flexbox), além da aplicação de pseudo-classes (`:hover`, `:active`) para melhorar a responsividade e UX.
- **Refatoração Guiada:** Debates sobre como integrar o novo código à base já existente sem quebrar a lógica original, focando em boas práticas.

## 🚀 4. Tecnologias Utilizadas
- **HTML5:** Estruturação semântica e suporte ao elemento `<canvas>`.
- **CSS3:** Flexbox para layout responsivo, manipulação de fontes externas e estilização interativa.
- **JavaScript (ES6):** Manipulação de DOM, tratamento de eventos assíncronos (`keydown`, `click`), estruturas de controle e algoritmos de renderização.
