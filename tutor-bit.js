/* ==========================================================================
   Tutor Bit — Assistente local divertido + Amarelinha Binária (Caminho da Luz)
   100% HTML/CSS/JS puros, sem dependências externas e sem dados pessoais.
   ========================================================================== */

(function () {
  const BIT_INK = "#1b2a41";

  /* ---------- Avatar SVG do Tutor Bit com expressões animadas ---------- */
  function createBitAvatarSvg(mood = "happy", sizeClass = "") {
    let eyes = `
      <g class="bit-eyes">
        <circle cx="-8" cy="-5" r="6.2" fill="#fff" stroke="${BIT_INK}" stroke-width="1.8"/>
        <circle cx="8" cy="-5" r="6.2" fill="#fff" stroke="${BIT_INK}" stroke-width="1.8"/>
        <circle class="bit-pupil" cx="-7" cy="-4.5" r="2.6" fill="${BIT_INK}"/>
        <circle class="bit-pupil" cx="9" cy="-4.5" r="2.6" fill="${BIT_INK}"/>
        <circle cx="-8.5" cy="-6.2" r="1" fill="#fff"/>
        <circle cx="7.5" cy="-6.2" r="1" fill="#fff"/>
      </g>`;

    let mouth = `<path d="M-8 8 Q0 16 8 8" fill="none" stroke="${BIT_INK}" stroke-width="2.3" stroke-linecap="round"/>`;
    let arms = `
      <path class="bit-arm-left" d="M-22 4 Q-32 10 -31 16" fill="none" stroke="${BIT_INK}" stroke-width="2.8" stroke-linecap="round"/>
      <path class="bit-arm-right" d="M22 4 Q32 10 31 16" fill="none" stroke="${BIT_INK}" stroke-width="2.8" stroke-linecap="round"/>`;
    let legs = `
      <path class="bit-leg-left" d="M-9 23 V33" fill="none" stroke="${BIT_INK}" stroke-width="3" stroke-linecap="round"/>
      <path class="bit-leg-right" d="M9 23 V33" fill="none" stroke="${BIT_INK}" stroke-width="3" stroke-linecap="round"/>`;
    let extra = "";

    if (mood === "thinking") {
      eyes = `
        <g class="bit-eyes">
          <circle cx="-8" cy="-5" r="6.2" fill="#fff" stroke="${BIT_INK}" stroke-width="1.8"/>
          <circle cx="8" cy="-5" r="6.2" fill="#fff" stroke="${BIT_INK}" stroke-width="1.8"/>
          <circle cx="-6" cy="-7" r="2.5" fill="${BIT_INK}"/>
          <circle cx="10" cy="-7" r="2.5" fill="${BIT_INK}"/>
        </g>`;
      mouth = `<path d="M-5 11 Q0 9 6 12" fill="none" stroke="${BIT_INK}" stroke-width="2.2" stroke-linecap="round"/>`;
      extra = `<circle cx="26" cy="-24" r="3" fill="#fff" stroke="${BIT_INK}" stroke-width="1.4"/>
        <circle cx="33" cy="-31" r="4.5" fill="#fff" stroke="${BIT_INK}" stroke-width="1.4"/>`;
    } else if (mood === "excited" || mood === "party") {
      eyes = `
        <g class="bit-eyes">
          <path d="M-13 -5 Q-8 -11 -3 -5" fill="none" stroke="${BIT_INK}" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M3 -5 Q8 -11 13 -5" fill="none" stroke="${BIT_INK}" stroke-width="2.5" stroke-linecap="round"/>
        </g>`;
      mouth = `<path d="M-9 7 Q0 19 9 7 Z" fill="#eb5757" stroke="${BIT_INK}" stroke-width="2" stroke-linejoin="round"/>`;
      arms = `
        <path class="bit-arm-left" d="M-21 1 Q-32 -10 -31 -18" fill="none" stroke="${BIT_INK}" stroke-width="2.8" stroke-linecap="round"/>
        <path class="bit-arm-right" d="M21 1 Q32 -10 31 -18" fill="none" stroke="${BIT_INK}" stroke-width="2.8" stroke-linecap="round"/>`;
      if (mood === "party") {
        extra = `
          <path d="M-13 -24 L-9 -35 L-2 -27 L0 -37 L2 -27 L9 -35 L13 -24 Z" fill="#fff3b0" stroke="${BIT_INK}" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M-34 -24 l3 -6 l3 6 l-6 -4 h6 z" fill="#ffd54f"/>
          <path d="M28 -24 l3 -6 l3 6 l-6 -4 h6 z" fill="#43b581"/>`;
      }
    } else if (mood === "sneaky") {
      eyes = `
        <g class="bit-eyes">
          <rect x="-15" y="-10" width="13" height="8" rx="4" fill="${BIT_INK}"/>
          <rect x="2" y="-10" width="13" height="8" rx="4" fill="${BIT_INK}"/>
          <path d="M-2 -6 H2" stroke="${BIT_INK}" stroke-width="2"/>
          <path d="M-12 -8 H-6 M5 -8 H11" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity="0.65"/>
        </g>`;
      mouth = `<path d="M-7 10 Q2 15 9 8" fill="none" stroke="${BIT_INK}" stroke-width="2.3" stroke-linecap="round"/>`;
    } else if (mood === "split") {
      legs = `
        <path class="bit-leg-left" d="M-9 23 L-18 33" fill="none" stroke="${BIT_INK}" stroke-width="3" stroke-linecap="round"/>
        <path class="bit-leg-right" d="M9 23 L18 33" fill="none" stroke="${BIT_INK}" stroke-width="3" stroke-linecap="round"/>`;
      arms = `
        <path class="bit-arm-left" d="M-22 2 L-34 -6" fill="none" stroke="${BIT_INK}" stroke-width="2.8" stroke-linecap="round"/>
        <path class="bit-arm-right" d="M22 2 L34 -6" fill="none" stroke="${BIT_INK}" stroke-width="2.8" stroke-linecap="round"/>`;
    }

    return `<svg viewBox="-42 -46 84 88" class="bit-svg ${sizeClass}" aria-hidden="true">
      <g class="bit-body-group">
        <g class="bit-antenna">
          <path d="M0 -24 V-32" fill="none" stroke="${BIT_INK}" stroke-width="2.5" stroke-linecap="round"/>
          <circle class="bit-antenna-tip" cx="0" cy="-36" r="4.5" fill="#eb5757" stroke="${BIT_INK}" stroke-width="1.8"/>
        </g>
        ${arms}
        ${legs}
        <ellipse cx="0" cy="0" rx="23" ry="24" fill="#ffd54f" stroke="${BIT_INK}" stroke-width="2.5"/>
        <ellipse cx="-7" cy="-14" rx="7" ry="3.5" fill="#fff6cc" opacity="0.7" transform="rotate(-18 -7 -14)"/>
        ${eyes}
        <circle cx="-15" cy="5" r="3" fill="#ff9aa2" opacity="0.75"/>
        <circle cx="15" cy="5" r="3" fill="#ff9aa2" opacity="0.75"/>
        ${mouth}
        <text x="0" y="21" text-anchor="middle" font-size="7.2" font-weight="800" fill="#9a6b14" font-family="'Segoe UI', Arial, sans-serif">01</text>
        ${extra}
      </g>
    </svg>`;
  }

  /* ---------- Normalização de texto para busca tolerante a acentos ---------- */
  function normalizeText(str) {
    return String(str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  /* ---------- Base de conhecimento divertida do Tutor Bit ---------- */
  const BIT_JOKES = [
    "Existem **10 tipos de pessoas** no mundo: as que entendem binário e as que não entendem! 😄",
    "Por que a **RAM** nunca guarda rancor? Porque quando você desliga o PC, ela esquece tudo! ⚡",
    "O que a **CPU** disse para o **DMA**? *'Leva esses dados pra RAM aí, parceiro, tô ocupado calculando!'* 😎",
    "Por que o **Address Bus** nunca dá ré? Porque ele só dirige em mão única! 🚗➡️",
    "Qual a memória favorita dos apressadinhos? A **Cache** — ela já deixa o dado no jeito antes mesmo de você terminar de pedir! 🏃‍♂️💨",
    "Se um **Dual-Core** já faz duas coisas ao mesmo tempo, o **Quad-Core** é praticamente um polvo de quatro braços tomando café! ☕"
  ];

  const BIT_POKES = [
    "Ei! Faz cócegas nos meus transistores! 😆",
    "01001111 01101001! Isso significa 'Oi' em binário!",
    "Cuidado, se clicar muito eu entro em overclock! 🔥",
    "Bip-bop! Precisa de ajuda com algum conceito ou quer pular a amarelinha?",
    "Tô ligado em 1! Pergunta qualquer coisa sobre arquitetura!"
  ];

  const BIT_CONCEPTS = {
    CPU: {
      name: "CPU",
      keywords: ["cpu", "processador", "cerebro", "central", "buscar decodificar executar", "ciclo"],
      fun: "A **CPU** é a chefona da cozinha! Ela busca a receita (instrução), lê o que precisa fazer (UC) e coloca a mão na massa (ULA).",
      noSpoiler: "Pense no **cérebro eletrônico** do computador: é a sigla de 3 letras que coordena o ciclo buscar → decodificar → executar!",
      compare: "Coordena tudo e executa o ciclo de instrução."
    },
    ULA: {
      name: "ULA",
      keywords: ["ula", "alu", "aritmetica", "logica", "calculo", "calculos", "conta", "contas", "comparacao", "soma"],
      fun: "A **ULA** é a calculadora ninja dentro da CPU! Somar, subtrair, comparar se A > B ou testar E/OU? Tudo passa por ela!",
      noSpoiler: "É a parte interna da CPU especializada em **contas matemáticas** e **comparações lógicas** (3 letras!).",
      compare: "Faz cálculos aritméticos e comparações lógicas dentro da CPU."
    },
    UC: {
      name: "UC",
      keywords: ["uc", "unidade de controle", "regente", "decodifica", "decodificar", "coordena", "clock"],
      fun: "A **UC** é a regente da orquestra! Ela não faz a conta, mas lê a partitura (instrução) e diz em qual batida do clock cada peça deve tocar.",
      noSpoiler: "É a sigla de **2 letras** dentro da CPU que age como uma regente, decodificando instruções e coordenando o fluxo.",
      compare: "Decodifica instruções e sincroniza os sinais de controle."
    },
    REGISTRADORES: {
      name: "Registradores",
      keywords: ["registrador", "registradores", "bolso", "bolsos", "acumulador", "pc", "ir", "mais rapida", "topo da piramide"],
      fun: "Os **Registradores** são os bolsos da calça da CPU! Cabe pouquinha coisa, mas ela pega o dado em **1 ciclo de clock** sem levantar da cadeira.",
      noSpoiler: "Ficam no topo absoluto da pirâmide de memórias, **dentro da própria CPU**, guardando dados imediatos em velocidade máxima.",
      compare: "Memória interna à CPU, a mais rápida e menor da hierarquia."
    },
    RAM: {
      name: "RAM",
      keywords: ["ram", "memoria principal", "volatil", "mesa de trabalho", "programas abertos"],
      fun: "A **RAM** é a sua mesa de trabalho! Quanto maior a mesa, mais programas abertos cabem ao mesmo tempo. Mas cuidado: acabou a luz, *puf*, a mesa esvazia (volátil)!",
      noSpoiler: "É a memória principal de **3 letras**, rápida de leitura e escrita, mas **volátil** (perde tudo sem energia).",
      compare: "Memória principal volátil de leitura e escrita para programas ativos."
    },
    ROM: {
      name: "ROM",
      keywords: ["rom", "bios", "uefi", "fabrica", "so leitura", "inicializacao", "boot", "ligar"],
      fun: "A **ROM** é o manual gravado na pedra de fábrica! Quando você aperta o botão de ligar, ela acorda a máquina (BIOS/UEFI) e não esquece nada mesmo fora da tomada.",
      noSpoiler: "Memória não volátil de **3 letras** gravada de fábrica para guardar instruções essenciais de partida do sistema.",
      compare: "Não volátil, gravada de fábrica para inicialização (BIOS/UEFI)."
    },
    EEPROM: {
      name: "EEPROM",
      keywords: ["eeprom", "byte", "bytes", "pulso eletrico", "pulsos eletricos", "regravar byte"],
      fun: "A **EEPROM** é tipo um caderno mágico à prova de apagão: você consegue apagar e reescrever **um único byte** usando pulsos elétricos, sem zerar a página inteira!",
      noSpoiler: "É uma memória não volátil que permite apagar e regravar **bytes individualmente** usando pulsos elétricos.",
      compare: "Não volátil, regravável eletricamente byte a byte."
    },
    FLASH: {
      name: "Flash",
      keywords: ["flash", "pendrive", "pen drive", "nand", "bloco", "blocos", "cartao sd"],
      fun: "A memória **Flash** é a estrela dos pendrives e SSDs! Em vez de apagar byte por byte como a EEPROM, ela apaga e grava em **blocos inteiros** — bem mais ágil e sem peças girando.",
      noSpoiler: "Memória não volátil regravável em **blocos inteiros**, famosa em pendrives e unidades SSD (5 letras!).",
      compare: "Não volátil, regravável em blocos inteiros (pendrives e SSDs)."
    },
    CACHE: {
      name: "Cache",
      keywords: ["cache", "l1", "l2", "l3", "atalho", "hit", "miss", "intermediaria"],
      fun: "A **Cache** é a frigobar do lado da mesa da CPU! Em vez de caminhar até a RAM toda hora, a CPU pega os dados mais usados ali mesmo em nanossegundos.",
      noSpoiler: "Memória intermediária ultrarrápida (5 letras) entre a CPU e a RAM que guarda cópias dos dados frequentes.",
      compare: "Atalho ultrarrápido entre CPU e RAM para dados mais usados."
    },
    MEMORIADEMASSA: {
      name: "Memória de Massa",
      keywords: ["memoria de massa", "memoriademassa", "massa", "hd", "hdd", "ssd", "disco rigido", "secundario", "terabyte", "arquivos"],
      fun: "A **Memória de Massa** é o galpão gigante do computador! HDs e SSDs guardam seus jogos, fotos e o sistema inteiro em gigabytes ou terabytes — e nada some ao desligar.",
      noSpoiler: "Armazenamento secundário não volátil de **alta capacidade** (como HDs e SSDs) para guardar arquivos permanentemente.",
      compare: "Armazenamento secundário permanente de altíssima capacidade (HD/SSD)."
    },
    DMA: {
      name: "DMA",
      keywords: ["dma", "acesso direto", "entregador", "sem intervencao", "periferico", "perifericos"],
      fun: "O **DMA** é o entregador VIP! Ele leva blocos de dados direto do periférico para a RAM sem ficar cutucando a CPU a cada byte — aí o processador fica livre!",
      noSpoiler: "Sigla de **3 letras** para a técnica que transfere dados entre periféricos e RAM sem sobrecarregar a CPU.",
      compare: "Transfere dados entre periféricos e RAM liberando a CPU."
    },
    ADDRESSBUS: {
      name: "Address Bus",
      keywords: ["address bus", "addressbus", "barramento de endereco", "endereco", "enderecos", "unidirecional", "mao unica"],
      fun: "O **Address Bus** é o GPS de mão única! A CPU coloca ali **onde** o dado está (o endereço) e o sinal só vai da CPU pra memória, nunca volta.",
      noSpoiler: "Barramento **unidirecional** (em inglês, sem espaços no tabuleiro!) que carrega apenas a localização exata na memória.",
      compare: "Via unidirecional que transporta o endereço da memória."
    },
    DATABUS: {
      name: "Data Bus",
      keywords: ["data bus", "databus", "barramento de dados", "bidirecional", "mao dupla", "conteudo", "conteudos"],
      fun: "O **Data Bus** é a rodovia de mão dupla! Os bits dos dados e instruções vão e voltam por ali entre processador, memória e periféricos.",
      noSpoiler: "Barramento **bidirecional** (em inglês, sem espaços no tabuleiro!) que transporta os conteúdos efetivos.",
      compare: "Via bidirecional que leva e traz os dados reais."
    },
    MICROCONTROLADOR: {
      name: "Microcontrolador",
      keywords: ["microcontrolador", "arduino", "esp32", "embarcado", "embarcados", "unico chip", "soc", "microondas"],
      fun: "O **Microcontrolador** é um computador inteiro espremido em **1 único chip**: CPU + RAM + Flash + portas de E/S! Mora no Arduino, no micro-ondas e em sensores.",
      noSpoiler: "Palavra grandona (16 letras!) para o circuito integrado único com processador, memória e periféricos em sistemas embarcados.",
      compare: "Chip único completo (CPU + memória + E/S) para sistemas embarcados."
    },
    DUALCORE: {
      name: "Dual-Core",
      keywords: ["dual core", "dualcore", "dois nucleos", "2 nucleos"],
      fun: "O **Dual-Core** tem **2 núcleos físicos** trabalhando lado a lado! É como ter dois chefs cozinhando dois pratos ao mesmo tempo.",
      noSpoiler: "Arquitetura com exatamente **dois núcleos** físicos independentes (em inglês, sem hífen no tabuleiro!).",
      compare: "Processador com 2 núcleos físicos independentes."
    },
    QUADCORE: {
      name: "Quad-Core",
      keywords: ["quad core", "quadcore", "quatro nucleos", "4 nucleos"],
      fun: "O **Quad-Core** dobra a aposta: **4 núcleos físicos** em paralelo real! Ótimo para abrir várias abas, compilar código e rodar tarefas pesadas juntas.",
      noSpoiler: "Arquitetura com **quatro núcleos** físicos independentes para tarefas simultâneas (em inglês, sem hífen no tabuleiro!).",
      compare: "Processador com 4 núcleos físicos independentes."
    }
  };

  function isCrosswordTabActive() {
    const tab = document.getElementById("tab-crossword");
    return !!(tab && tab.classList.contains("is-active") && !tab.hidden);
  }

  function detectConcepts(normText) {
    const matches = [];
    for (const [key, item] of Object.entries(BIT_CONCEPTS)) {
      let bestScore = 0;
      for (const kw of item.keywords) {
        const regex = new RegExp(`\\b${kw}\\b`, "i");
        if (regex.test(normText)) {
          bestScore = Math.max(bestScore, kw.length + 10);
        } else if (kw.length >= 5 && normText.includes(kw)) {
          bestScore = Math.max(bestScore, kw.length);
        }
      }
      if (bestScore > 0) {
        matches.push({ key, score: bestScore, item });
      }
    }
    matches.sort((a, b) => b.score - a.score);
    return matches;
  }

  function formatRichText(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br>");
  }

  /* ==========================================================================
     AMARELINHA BINÁRIA (0 e 1 -> CAMINHO DA LUZ)
     ========================================================================== */
  const HOP_STEPS = [
    { x: 50, y: 92, cells: [], mood: "happy", msg: "3, 2, 1... lá vou eu pular a amarelinha binária!" },
    { x: 50, y: 81, cells: [1], mood: "happy", msg: "Casa 1 (0) — pé firme no zero! 0️⃣" },
    { x: 50, y: 69, cells: [2], mood: "excited", msg: "Casa 2 (1) — energia ligada! ⚡" },
    { x: 50, y: 57, cells: [3, 4], mood: "split", msg: "Casas 3 e 4 (0 e 1) — abre as perninhas nos dois bits!" },
    { x: 50, y: 45, cells: [5], mood: "happy", msg: "Casa 5 (1) — pulo no bit 1! Quase lá!" },
    { x: 50, y: 33, cells: [6, 7], mood: "split", msg: "Casas 6 e 7 (0 e 1) — acelerando o clock! 🚀" },
    { x: 50, y: 21, cells: [8], mood: "excited", msg: "Casa 8 (0) — último salto antes da luz..." },
    { x: 50, y: 13.5, cells: [9], mood: "party", msg: "CHEGUEI!! O binário é o caminho da luz! 💡🎉" }
  ];

  function createHopscotchCourtSvg() {
    const cellStyle = (fill) =>
      `fill="${fill}" stroke="#ffffff" stroke-width="2.6" stroke-linejoin="round"`;
    return `<svg viewBox="0 0 360 470" class="hopscotch-svg" role="img" aria-label="Amarelinha binária com quadrados 0 e 1 levando ao Caminho da Luz">
      <defs>
        <radialGradient id="bitLightGlow" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stop-color="#fff9c4"/>
          <stop offset="55%" stop-color="#ffd54f"/>
          <stop offset="100%" stop-color="#f2994a"/>
        </radialGradient>
      </defs>

      <!-- Raios de luz de fundo (aparecem na comemoração) -->
      <g class="hop-rays">
        <path d="M180 58 L180 4 M180 58 L112 12 M180 58 L248 12 M180 58 L72 44 M180 58 L288 44 M180 58 L145 6 M180 58 L215 6"
          stroke="#ffe082" stroke-width="4" stroke-linecap="round" opacity="0.9"/>
      </g>

      <!-- Semicírculo CÉU: Caminho da Luz (cell 9) -->
      <g class="hop-cell hop-sky" data-hop-cell="9">
        <path d="M98 76 A82 64 0 0 1 262 76 Z" fill="url(#bitLightGlow)" stroke="#ffffff" stroke-width="3"/>
        <text x="180" y="47" text-anchor="middle" font-size="11.5" font-weight="900" fill="#1b2a41" font-family="'Segoe UI', Arial, sans-serif">☀ CAMINHO DA LUZ ☀</text>
        <text x="180" y="65" text-anchor="middle" font-size="9.5" font-weight="800" fill="#5c3a00" font-family="'Segoe UI', Arial, sans-serif">01001100 · LUZ!</text>
      </g>

      <!-- Casa 8 (simples: 0) -->
      <g class="hop-cell" data-hop-cell="8">
        <rect x="148" y="84" width="64" height="48" rx="8" ${cellStyle("rgba(47, 128, 237, 0.34)")}/>
        <text x="180" y="116" text-anchor="middle" font-size="25" font-weight="900" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif">0</text>
      </g>

      <!-- Casas 6 e 7 (duplas: 0 | 1) -->
      <g class="hop-cell" data-hop-cell="6">
        <rect x="112" y="140" width="64" height="48" rx="8" ${cellStyle("rgba(67, 181, 129, 0.34)")}/>
        <text x="144" y="172" text-anchor="middle" font-size="25" font-weight="900" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif">0</text>
      </g>
      <g class="hop-cell" data-hop-cell="7">
        <rect x="184" y="140" width="64" height="48" rx="8" ${cellStyle("rgba(155, 107, 219, 0.34)")}/>
        <text x="216" y="172" text-anchor="middle" font-size="25" font-weight="900" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif">1</text>
      </g>

      <!-- Casa 5 (simples: 1) -->
      <g class="hop-cell" data-hop-cell="5">
        <rect x="148" y="196" width="64" height="48" rx="8" ${cellStyle("rgba(242, 153, 74, 0.36)")}/>
        <text x="180" y="228" text-anchor="middle" font-size="25" font-weight="900" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif">1</text>
      </g>

      <!-- Casas 3 e 4 (duplas: 0 | 1) -->
      <g class="hop-cell" data-hop-cell="3">
        <rect x="112" y="252" width="64" height="48" rx="8" ${cellStyle("rgba(47, 128, 237, 0.34)")}/>
        <text x="144" y="284" text-anchor="middle" font-size="25" font-weight="900" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif">0</text>
      </g>
      <g class="hop-cell" data-hop-cell="4">
        <rect x="184" y="252" width="64" height="48" rx="8" ${cellStyle("rgba(67, 181, 129, 0.34)")}/>
        <text x="216" y="284" text-anchor="middle" font-size="25" font-weight="900" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif">1</text>
      </g>

      <!-- Casa 2 (simples: 1) -->
      <g class="hop-cell" data-hop-cell="2">
        <rect x="148" y="308" width="64" height="48" rx="8" ${cellStyle("rgba(155, 107, 219, 0.34)")}/>
        <text x="180" y="340" text-anchor="middle" font-size="25" font-weight="900" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif">1</text>
      </g>

      <!-- Casa 1 (simples: 0) -->
      <g class="hop-cell" data-hop-cell="1">
        <rect x="148" y="364" width="64" height="48" rx="8" ${cellStyle("rgba(242, 153, 74, 0.36)")}/>
        <text x="180" y="396" text-anchor="middle" font-size="25" font-weight="900" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif">0</text>
      </g>

      <!-- Base INÍCIO -->
      <path d="M126 430 Q180 416 234 430" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="2.5" stroke-dasharray="6 5" stroke-linecap="round"/>
      <text x="180" y="452" text-anchor="middle" font-size="11" font-weight="800" fill="rgba(255,255,255,0.85)" letter-spacing="1.5" font-family="'Segoe UI', Arial, sans-serif">INÍCIO</text>
    </svg>`;
  }

  function setupTutorBit() {
    if (document.getElementById("bit-widget")) return;

    let jokeIndex = 0;
    let pokeIndex = 0;
    let antiSpoiler = true;
    let hopTimers = [];

    /* ---------- 1. Montar DOM do Widget Flutuante + Chat ---------- */
    const widget = document.createElement("div");
    widget.id = "bit-widget";
    widget.className = "bit-widget";
    widget.innerHTML = `
      <div id="bit-teaser" class="bit-teaser" role="status">
        <span>Oi! Dúvida? Fala comigo!</span>
        <button id="bit-teaser-close" type="button" aria-label="Fechar aviso do Tutor Bit">&times;</button>
      </div>

      <button id="bit-fab" class="bit-fab" type="button" aria-expanded="false" aria-controls="bit-chat" aria-label="Abrir chat com o Tutor Bit">
        <span class="bit-fab-avatar">${createBitAvatarSvg("happy", "bit-idle")}</span>
        <span class="bit-fab-label">Tutor Bit</span>
      </button>

      <section id="bit-chat" class="bit-chat" hidden aria-label="Conversa com o Tutor Bit">
        <header class="bit-chat-header">
          <button id="bit-header-avatar" class="bit-header-avatar" type="button" title="Clique no Bit para uma surpresa!">
            ${createBitAvatarSvg("happy", "bit-idle")}
          </button>
          <div class="bit-header-info">
            <h3>Tutor Bit</h3>
            <p id="bit-header-status">Online · 50% zero, 50% um</p>
          </div>
          <div class="bit-header-actions">
            <button id="bit-spoiler-toggle" class="bit-spoiler-btn is-on" type="button" title="Proteger respostas enquanto você joga a cruzadinha">
              🛡️ Anti-spoiler
            </button>
            <button id="bit-chat-close" class="bit-close-btn" type="button" aria-label="Fechar Tutor Bit">&times;</button>
          </div>
        </header>

        <div id="bit-messages" class="bit-messages" aria-live="polite"></div>

        <div class="bit-quick-chips" aria-label="Sugestões rápidas">
          <button type="button" class="bit-chip" data-bit-prompt="Qual a diferença entre RAM e ROM?">RAM vs ROM</button>
          <button type="button" class="bit-chip" data-bit-prompt="Por que existe Cache?">Pra que serve Cache?</button>
          <button type="button" class="bit-chip" data-bit-prompt="Address Bus vs Data Bus">Barramentos</button>
          <button type="button" class="bit-chip" data-bit-prompt="O que é DMA?">O que é DMA?</button>
          <button type="button" class="bit-chip" data-bit-prompt="Conta uma piada binária!">Piada 😄</button>
          <button type="button" class="bit-chip bit-chip-fun" data-bit-action="hopscotch">Amarelinha 💡</button>
        </div>

        <form id="bit-form" class="bit-form">
          <input id="bit-input" type="text" placeholder="Pergunte sobre CPU, RAM, Cache, DMA..." autocomplete="off" aria-label="Digite sua dúvida para o Tutor Bit">
          <button type="submit" class="bit-send-btn" aria-label="Enviar pergunta">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
          </button>
        </form>
      </section>
    `;
    document.body.appendChild(widget);

    /* ---------- 2. Montar DOM do Palco da Amarelinha Binária ---------- */
    const hopModal = document.createElement("div");
    hopModal.id = "bit-hopscotch-modal";
    hopModal.className = "hopscotch-modal";
    hopModal.hidden = true;
    hopModal.setAttribute("role", "dialog");
    hopModal.setAttribute("aria-modal", "true");
    hopModal.setAttribute("aria-label", "Amarelinha Binária do Tutor Bit — Caminho da Luz");
    hopModal.innerHTML = `
      <div class="hopscotch-card">
        <header class="hopscotch-header">
          <div>
            <h3>Amarelinha Binária 💡</h3>
            <p>Pulando de 0 em 1 até o Caminho da Luz!</p>
          </div>
          <button id="hop-close-btn" class="hop-close-btn" type="button" aria-label="Fechar amarelinha">&times;</button>
        </header>

        <div id="hop-stage" class="hopscotch-stage">
          <div id="hop-confetti" class="hop-confetti" aria-hidden="true"></div>
          ${createHopscotchCourtSvg()}
          <div id="hop-bit-runner" class="hop-bit-runner">
            <div class="hop-bit-shadow"></div>
            <div id="hop-bit-sprite" class="hop-bit-sprite">${createBitAvatarSvg("happy")}</div>
          </div>
          <div id="hop-bit-cheer" class="hop-bit-cheer" hidden>O binário é o caminho da luz! 💡✨</div>
        </div>

        <p id="hop-narration" class="hop-narration" aria-live="polite">Preparando os pulos do Tutor Bit...</p>

        <div class="hop-actions">
          <button id="hop-replay-btn" type="button" class="hop-btn hop-btn-primary">Pular de novo!</button>
          <button id="hop-chat-btn" type="button" class="hop-btn hop-btn-secondary">Conversar com o Bit</button>
          <button id="hop-done-btn" type="button" class="hop-btn">Voltar ao jogo</button>
        </div>
      </div>
    `;
    document.body.appendChild(hopModal);

    /* ---------- Referências ---------- */
    const fab = document.getElementById("bit-fab");
    const teaser = document.getElementById("bit-teaser");
    const teaserClose = document.getElementById("bit-teaser-close");
    const chat = document.getElementById("bit-chat");
    const chatClose = document.getElementById("bit-chat-close");
    const headerAvatar = document.getElementById("bit-header-avatar");
    const headerStatus = document.getElementById("bit-header-status");
    const spoilerToggle = document.getElementById("bit-spoiler-toggle");
    const messagesEl = document.getElementById("bit-messages");
    const form = document.getElementById("bit-form");
    const input = document.getElementById("bit-input");

    const hopStage = document.getElementById("hop-stage");
    const hopRunner = document.getElementById("hop-bit-runner");
    const hopSprite = document.getElementById("hop-bit-sprite");
    const hopCheer = document.getElementById("hop-bit-cheer");
    const hopNarration = document.getElementById("hop-narration");
    const hopConfetti = document.getElementById("hop-confetti");
    const hopCloseBtn = document.getElementById("hop-close-btn");
    const hopReplayBtn = document.getElementById("hop-replay-btn");
    const hopChatBtn = document.getElementById("hop-chat-btn");
    const hopDoneBtn = document.getElementById("hop-done-btn");

    /* ---------- Helpers do Chat ---------- */
    function setBitMood(mood, statusMsg) {
      if (headerAvatar) {
        headerAvatar.innerHTML = createBitAvatarSvg(mood, "bit-idle");
        headerAvatar.classList.remove("bit-pop");
        void headerAvatar.offsetWidth;
        headerAvatar.classList.add("bit-pop");
      }
      if (statusMsg && headerStatus) {
        headerStatus.textContent = statusMsg;
      }
    }

    function appendMessage(sender, htmlText, mood = "happy") {
      const row = document.createElement("div");
      row.className = `bit-msg bit-msg-${sender}`;
      if (sender === "bot") {
        row.innerHTML = `
          <span class="bit-msg-mini-avatar" aria-hidden="true">${createBitAvatarSvg(mood)}</span>
          <div class="bit-msg-bubble">${htmlText}</div>`;
      } else {
        row.innerHTML = `<div class="bit-msg-bubble">${htmlText}</div>`;
      }
      messagesEl.appendChild(row);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      return row;
    }

    function showTypingAndReply(replyObj) {
      setBitMood("thinking", "Processando em 0s e 1s...");
      const typingRow = document.createElement("div");
      typingRow.className = "bit-msg bit-msg-bot bit-msg-typing";
      typingRow.innerHTML = `
        <span class="bit-msg-mini-avatar" aria-hidden="true">${createBitAvatarSvg("thinking")}</span>
        <div class="bit-msg-bubble"><span class="bit-dots"><i></i><i></i><i></i></span></div>`;
      messagesEl.appendChild(typingRow);
      messagesEl.scrollTop = messagesEl.scrollHeight;

      window.setTimeout(() => {
        typingRow.remove();
        setBitMood(replyObj.mood || "happy", replyObj.status || "Online · 50% zero, 50% um");
        appendMessage("bot", formatRichText(replyObj.text), replyObj.mood || "happy");
        if (replyObj.runHopscotch) {
          window.setTimeout(() => openHopscotch(true), 450);
        }
      }, 360);
    }

    function buildBotReply(rawQuestion) {
      const norm = normalizeText(rawQuestion);
      const shield = antiSpoiler && isCrosswordTabActive();

      if (!norm) {
        return {
          mood: "happy",
          text: "Opa, veio vazio igual RAM depois de desligar o PC! 😄 Digita sua dúvida aí."
        };
      }

      if (/(amarelinha|caminho da luz|pular|easter egg)/.test(norm)) {
        return {
          mood: "party",
          status: "Partiu amarelinha!",
          text: "Opa!! Hora de pular a **Amarelinha Binária** de 0 em 1 até o **Caminho da Luz**! Segura aí! 💡🦘",
          runHopscotch: true
        };
      }

      if (/(piada|engracad|rir|humor|brincadeira|conta uma)/.test(norm)) {
        const joke = BIT_JOKES[jokeIndex % BIT_JOKES.length];
        jokeIndex += 1;
        return { mood: "excited", status: "Modo comediante binário", text: joke };
      }

      if (/^(oi|ola|hey|e ai|eai|salve|bom dia|boa tarde|boa noite|fala bit|tudo bem)/.test(norm)) {
        return {
          mood: "excited",
          text: "Salve, dev! ⚡ Tudo em **1** (ligado) por aqui! Pode perguntar sobre qualquer conceito — tipo *RAM vs ROM*, *Cache*, *DMA* ou *Barramentos* — ou pedir uma piada binária!"
        };
      }

      if (/(obrigad|valeu|vlw|tmj|ajudou|legal|massa|top)/.test(norm)) {
        return {
          mood: "party",
          text: "Tamo junto! 💛 Se precisar de outra força (ou quiser me ver pulando a amarelinha), é só chamar!"
        };
      }

      if (/(quem e voce|quem e vc|seu nome|o que voce faz|como funciona voce)/.test(norm)) {
        return {
          mood: "happy",
          text: "Eu sou o **Tutor Bit**! Moro dentro do seu navegador (sem internet e sem gastar bateria à toa) pra te ajudar a dominar os **16 conceitos de Arquitetura Computacional** de um jeito leve e divertido!"
        };
      }

      if (/(como jogar|como funciona o site|ajuda|regras|comandos)/.test(norm)) {
        return {
          mood: "happy",
          text: "Facinho:\n• Na **Cruzadinha**, clique numa célula ou pista e digite (setas movem, Backspace apaga, clique duas vezes no cruzamento troca Horizontal/Vertical).\n• No **Desafio**, arraste ou clique nas peças da barra fixa para montar o diagrama.\n• No **Glossário**, você escolhe entre a **Versão teórica** e os **Quadrinhos** comigo!"
        };
      }

      if (/(volatil|nao volatil|volatilidade)/.test(norm)) {
        return {
          mood: "happy",
          text: "**Volátil** = precisa de energia elétrica para manter os dados (desligou, apagou — como **RAM**, **Cache** e **Registradores**).\n**Não volátil** = guarda tudo mesmo fora da tomada (como **ROM**, **EEPROM**, **Flash** e **HD/SSD**)!"
        };
      }

      if (/(hierarquia|piramide|mais rapida|mais lenta|qual e melhor)/.test(norm)) {
        return {
          mood: "excited",
          text: "A famosa **Pirâmide das Memórias** (do topo mais rápido para a base maior):\n1. **Registradores** (dentro da CPU — 1 ciclo!)\n2. **Cache** (atalho ultrarrápido)\n3. **RAM** (mesa de trabalho volátil)\n4. **Flash / ROM / EEPROM** (não voláteis)\n5. **Memória de Massa** (HD/SSD — terabytes!)"
        };
      }

      if (/(dica|nao sei|travado|ajuda na cruzadinha)/.test(norm)) {
        return {
          mood: "sneaky",
          text: "Dica de ouro do Bit! 💡 Clique na palavra que você está em dúvida no tabuleiro e aperte o botão **Dica** lá em cima para revelar 1 letra. Se quiser entender um tema antes, pode me perguntar por exemplo *'o que é volátil?'* ou *'diferença de barramentos'*!"
        };
      }

      if (/(binario|0 e 1|bit|byte)/.test(norm)) {
        return {
          mood: "excited",
          text: "Um **bit** (como eu! 😎) só conhece dois estados: **0** (desligado) e **1** (ligado). Juntando **8 bits**, você forma **1 byte** — espaço suficiente pra guardar uma letra! E quer um segredo? Clique na lâmpada 💡 lá no topo ou em **Amarelinha**!"
        };
      }

      /* Detectar 1 ou 2+ conceitos mencionados */
      const found = detectConcepts(norm);

      if (found.length >= 2) {
        const a = found[0].item;
        const b = found[1].item;
        if (shield) {
          return {
            mood: "sneaky",
            status: "Escudo anti-spoiler ativo",
            text: `Boa comparação! 🛡️ Como você está na Cruzadinha com **Anti-spoiler ligado**, vai sem entregar as siglas:\n• **Conceito 1:** ${a.noSpoiler}\n• **Conceito 2:** ${b.noSpoiler}\n*(Se quiser os nomes completos, clique em 🛡️ Anti-spoiler ali em cima!)*`
          };
        }
        return {
          mood: "excited",
          text: `Comparando **${a.name}** vs **${b.name}**:\n• **${a.name}:** ${a.compare}\n• **${b.name}:** ${b.compare}\nResumão: cada um resolve uma parte diferente do quebra-cabeça da máquina!`
        };
      }

      if (found.length === 1) {
        const concept = found[0].item;
        const key = found[0].key;
        if (shield) {
          return {
            mood: "sneaky",
            status: "Escudo anti-spoiler ativo",
            text: `Psiu! 🛡️ Modo **anti-spoiler** ligado na Cruzadinha — toma uma pista esperta:\n${concept.noSpoiler}\n*(Quer a explicação completa com o nome? Desative o 🛡️ Anti-spoiler no topo do chat!)*`
          };
        }
        const tip = typeof MEMORY_TIPS !== "undefined" && MEMORY_TIPS[key] ? `\n💡 *Macete:* ${MEMORY_TIPS[key]}` : "";
        return {
          mood: "happy",
          text: `${concept.fun}${tip}`
        };
      }

      return {
        mood: "thinking",
        text: "Bip-bop! 🤔 Meus circuitos deram uma patinada nessa pergunta. Tenta me perguntar sobre algum tema da arquitetura — tipo **CPU**, **ULA**, **UC**, **Registradores**, **Cache**, **RAM**, **ROM**, **Flash**, **DMA**, **Barramentos** ou **Microcontrolador** — ou clica num dos atalhos aqui embaixo!"
      };
    }

    function openChat() {
      chat.hidden = false;
      fab.setAttribute("aria-expanded", "true");
      fab.classList.add("is-open");
      if (teaser) teaser.hidden = true;

      if (messagesEl.children.length === 0) {
        appendMessage(
          "bot",
          formatRichText(
            "E aí! Sou o **Tutor Bit** — 50% zero, 50% um e 100% pronto pra turbinar seus estudos de Arquitetura! ⚡\nMe faz uma pergunta ou clica num atalho aqui embaixo. *(Dica secreta: testa clicar na lâmpada 💡 lá no topo!)*"
          ),
          "excited"
        );
      }
      window.setTimeout(() => input.focus(), 60);
    }

    function closeChat() {
      chat.hidden = true;
      fab.setAttribute("aria-expanded", "false");
      fab.classList.remove("is-open");
    }

    function sendUserQuestion(text) {
      const trimmed = text.trim();
      if (!trimmed) return;
      appendMessage("user", formatRichText(trimmed));
      input.value = "";
      showTypingAndReply(buildBotReply(trimmed));
    }

    /* ---------- Lógica da Amarelinha Binária ---------- */
    function clearHopTimers() {
      hopTimers.forEach((id) => window.clearTimeout(id));
      hopTimers = [];
    }

    function resetHopscotchVisuals() {
      clearHopTimers();
      hopStage.classList.remove("is-celebrating");
      hopCheer.hidden = true;
      hopConfetti.innerHTML = "";
      hopStage.querySelectorAll(".hop-cell").forEach((cell) => {
        cell.classList.remove("is-lit", "is-active");
      });
      hopRunner.style.left = `${HOP_STEPS[0].x}%`;
      hopRunner.style.top = `${HOP_STEPS[0].y}%`;
      hopSprite.innerHTML = createBitAvatarSvg("happy");
      hopRunner.classList.remove("is-hopping", "is-party");
    }

    function launchBinaryConfetti() {
      hopConfetti.innerHTML = "";
      const symbols = ["0", "1", "0", "1", "★", "💡", "✦"];
      const colors = ["#ffd54f", "#4f8df5", "#43b581", "#f2994a", "#eb5757", "#9b6bdb", "#ffffff"];
      for (let i = 0; i < 28; i += 1) {
        const piece = document.createElement("span");
        piece.className = "hop-confetti-bit";
        piece.textContent = symbols[i % symbols.length];
        piece.style.left = `${4 + ((i * 37) % 92)}%`;
        piece.style.color = colors[i % colors.length];
        piece.style.animationDelay = `${(i % 7) * 0.12}s`;
        piece.style.animationDuration = `${1.8 + (i % 4) * 0.35}s`;
        piece.style.fontSize = `${13 + (i % 3) * 4}px`;
        hopConfetti.appendChild(piece);
      }
    }

    function runHopscotchAnimation() {
      resetHopscotchVisuals();
      hopNarration.textContent = HOP_STEPS[0].msg;

      const stepInterval = 460;
      HOP_STEPS.slice(1).forEach((step, idx) => {
        const timerId = window.setTimeout(() => {
          hopStage.querySelectorAll(".hop-cell.is-active").forEach((c) => c.classList.remove("is-active"));

          hopRunner.classList.remove("is-hopping");
          void hopRunner.offsetWidth;
          hopRunner.classList.add("is-hopping");

          hopRunner.style.left = `${step.x}%`;
          hopRunner.style.top = `${step.y}%`;
          hopSprite.innerHTML = createBitAvatarSvg(step.mood);
          hopNarration.textContent = step.msg;

          const landTimer = window.setTimeout(() => {
            step.cells.forEach((cellNum) => {
              const cellEl = hopStage.querySelector(`[data-hop-cell="${cellNum}"]`);
              if (cellEl) {
                cellEl.classList.add("is-lit", "is-active");
              }
            });

            if (idx === HOP_STEPS.length - 2) {
              hopStage.classList.add("is-celebrating");
              hopRunner.classList.remove("is-hopping");
              hopRunner.classList.add("is-party");
              hopCheer.hidden = false;
              launchBinaryConfetti();
            }
          }, 190);
          hopTimers.push(landTimer);
        }, (idx + 1) * stepInterval);

        hopTimers.push(timerId);
      });
    }

    function openHopscotch(autoPlay = true) {
      closeChat();
      if (teaser) teaser.hidden = true;
      hopModal.hidden = false;
      requestAnimationFrame(() => {
        hopModal.classList.add("is-visible");
      });
      if (autoPlay) {
        runHopscotchAnimation();
      }
    }

    function closeHopscotch() {
      clearHopTimers();
      hopModal.classList.remove("is-visible");
      window.setTimeout(() => {
        hopModal.hidden = true;
      }, 200);
    }

    /* ---------- Eventos ---------- */
    fab.addEventListener("click", () => {
      if (chat.hidden) {
        openChat();
      } else {
        closeChat();
      }
    });

    chatClose.addEventListener("click", closeChat);

    if (teaserClose && teaser) {
      teaserClose.addEventListener("click", (e) => {
        e.stopPropagation();
        teaser.hidden = true;
      });
      teaser.addEventListener("click", openChat);
    }

    headerAvatar.addEventListener("click", () => {
      const line = BIT_POKES[pokeIndex % BIT_POKES.length];
      pokeIndex += 1;
      setBitMood("excited", "Hehe! 😄");
      appendMessage("bot", formatRichText(line), "excited");
    });

    spoilerToggle.addEventListener("click", () => {
      antiSpoiler = !antiSpoiler;
      spoilerToggle.classList.toggle("is-on", antiSpoiler);
      spoilerToggle.textContent = antiSpoiler ? "🛡️ Anti-spoiler" : "🔓 Modo livre";
      setBitMood(antiSpoiler ? "sneaky" : "happy", antiSpoiler ? "Escudo anti-spoiler ligado" : "Modo livre ativado");
      appendMessage(
        "bot",
        formatRichText(
          antiSpoiler
            ? "Escudo **anti-spoiler ligado**! 🛡️ Na Cruzadinha vou dar só pistas espertas sem entregar o nome da resposta."
            : "**Modo livre ativado!** 🔓 Agora respondo qualquer conceito completo mesmo na Cruzadinha."
        ),
        antiSpoiler ? "sneaky" : "happy"
      );
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      sendUserQuestion(input.value);
    });

    widget.querySelectorAll(".bit-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        if (chip.dataset.bitAction === "hopscotch") {
          openHopscotch(true);
        } else if (chip.dataset.bitPrompt) {
          sendUserQuestion(chip.dataset.bitPrompt);
        }
      });
    });

    hopCloseBtn.addEventListener("click", closeHopscotch);
    hopDoneBtn.addEventListener("click", closeHopscotch);
    hopReplayBtn.addEventListener("click", runHopscotchAnimation);
    hopChatBtn.addEventListener("click", () => {
      closeHopscotch();
      openChat();
      appendMessage(
        "bot",
        formatRichText("Ufa, que pulo bom na amarelinha! 💡🦘 O binário é mesmo o caminho da luz! Em que posso te ajudar agora?"),
        "party"
      );
    });

    hopModal.addEventListener("click", (e) => {
      if (e.target === hopModal) {
        closeHopscotch();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!hopModal.hidden) closeHopscotch();
        else if (!chat.hidden) closeChat();
      }
    });

    /* Integração direta com o Easter Egg "Caminho da Luz" */
    document.addEventListener("app:binarylight", () => {
      openHopscotch(true);
    });
  }

  window.setupTutorBit = setupTutorBit;
})();
