const WORDS = [
  {
    word: "MICROCONTROLADOR",
    clue: "Circuito integrado único com processador, memória e periféricos embutidos, usado em sistemas embarcados.",
    row: 3,
    col: 3,
    dir: "H"
  },
  {
    word: "MEMORIADEMASSA",
    clue: "Armazenamento secundário não volátil de alta capacidade para guardar arquivos permanentemente, como HDs.",
    row: 3,
    col: 3,
    dir: "V"
  },
  {
    word: "REGISTRADORES",
    clue: "Memórias internas ultrarrápidas dentro do processador que guardam dados temporários durante operações imediatas.",
    row: 4,
    col: 2,
    dir: "H"
  },
  {
    word: "ADDRESSBUS",
    clue: "Conjunto unidirecional de trilhas que transporta a localização exata da memória a ser acessada.",
    row: 1,
    col: 2,
    dir: "V"
  },
  {
    word: "DATABUS",
    clue: "Conjunto bidirecional de linhas que transporta efetivamente os conteúdos entre processador, memória e periféricos.",
    row: 2,
    col: 2,
    dir: "H"
  },
  {
    word: "DUALCORE",
    clue: "Arquitetura de processador físico equipado com exatamente dois núcleos independentes de processamento.",
    row: 1,
    col: 0,
    dir: "H"
  },
  {
    word: "QUADCORE",
    clue: "Arquitetura de processador físico que integra quatro núcleos independentes para executar tarefas simultâneas.",
    row: 0,
    col: 1,
    dir: "V"
  },
  {
    word: "EEPROM",
    clue: "Memória não volátil que permite apagar e regravar bytes individualmente usando pulsos elétricos.",
    row: 1,
    col: 7,
    dir: "H"
  },
  {
    word: "FLASH",
    clue: "Memória não volátil regravável em blocos inteiros, muito usada em pendrives e unidades SSD.",
    row: 13,
    col: 1,
    dir: "H"
  },
  {
    word: "CACHE",
    clue: "Memória intermediária de altíssima velocidade que acelera o acesso do processador aos dados frequentes.",
    row: 10,
    col: 5,
    dir: "V"
  },
  {
    word: "CPU",
    clue: "Cérebro eletrônico do computador responsável por buscar, decodificar e executar instruções dos programas.",
    row: 9,
    col: 0,
    dir: "H"
  },
  {
    word: "ULA",
    clue: "Circuito interno do processador que realiza cálculos matemáticos e comparações entre valores binários.",
    row: 0,
    col: 3,
    dir: "V"
  },
  {
    word: "UC",
    clue: "Setor interno do processador que coordena o fluxo de dados e instruções.",
    row: 0,
    col: 3,
    dir: "H"
  },
  {
    word: "RAM",
    clue: "Memória principal volátil de leitura e escrita para dados e instruções durante a execução.",
    row: 7,
    col: 3,
    dir: "H"
  },
  {
    word: "ROM",
    clue: "Memória não volátil gravada de fábrica que guarda instruções essenciais de inicialização do sistema.",
    row: 5,
    col: 5,
    dir: "V"
  },
  {
    word: "DMA",
    clue: "Técnica que transfere dados entre periféricos e memória principal sem intervenção contínua do processador.",
    row: 5,
    col: 4,
    dir: "V"
  }
];

const CATEGORIES = {
  CPU: "processador",
  ULA: "processador",
  UC: "processador",
  REGISTRADORES: "processador",
  DUALCORE: "processador",
  QUADCORE: "processador",
  MICROCONTROLADOR: "arquitetura",
  DMA: "arquitetura",
  ADDRESSBUS: "barramento",
  DATABUS: "barramento",
  CACHE: "memoria",
  RAM: "memoria",
  ROM: "memoria",
  EEPROM: "memoria",
  FLASH: "memoria",
  MEMORIADEMASSA: "memoria"
};

const CATEGORY_LABELS = {
  processador: "Processador",
  memoria: "Memória",
  barramento: "Barramentos",
  arquitetura: "Arquitetura"
};

const CONCEPT_DIAGRAMS = {
  CPU: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado da CPU">
    <rect x="15" y="8" width="210" height="84" rx="8" fill="rgba(47,128,237,0.06)" stroke="#2f80ed" stroke-width="2"/>
    <rect x="25" y="18" width="55" height="42" rx="4" fill="rgba(47,128,237,0.15)" stroke="#2f80ed" stroke-width="1.5"/>
    <text x="52" y="38" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">UC</text>
    <text x="52" y="50" text-anchor="middle" font-size="7.5" fill="currentColor" opacity="0.8">Controle</text>
    <rect x="92" y="18" width="55" height="42" rx="4" fill="rgba(42,159,99,0.15)" stroke="#2a9f63" stroke-width="1.5"/>
    <text x="119" y="38" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">ULA</text>
    <text x="119" y="50" text-anchor="middle" font-size="7.5" fill="currentColor" opacity="0.8">Cálculos</text>
    <rect x="160" y="18" width="55" height="42" rx="4" fill="rgba(235,87,87,0.15)" stroke="#eb5757" stroke-width="1.5"/>
    <text x="187" y="36" text-anchor="middle" font-size="9.5" font-weight="bold" fill="currentColor">REGS</text>
    <text x="187" y="48" text-anchor="middle" font-size="7" fill="currentColor" opacity="0.8">R0, R1, PC</text>
    <path d="M52 60v12h135v-12M119 60v12" stroke="#2f80ed" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="120" y="82" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor">Barramento Interno e Ciclo de Instrução</text>
  </svg>`,

  ULA: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado da ULA">
    <path d="M40 16h56l19 22 19-22h56v22l-40 38H80L40 38z" fill="rgba(42,159,99,0.1)" stroke="#2a9f63" stroke-width="2" stroke-linejoin="round"/>
    <path d="M68 6v10M162 6v10" stroke="#2f80ed" stroke-width="2" stroke-linecap="round"/>
    <text x="42" y="12" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">Entrada A</text>
    <text x="188" y="12" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">Entrada B</text>
    <text x="115" y="52" text-anchor="middle" font-size="11" font-weight="900" fill="#2a9f63">+  −  ×  ÷</text>
    <text x="115" y="66" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#2a9f63">E / OU / &lt; / =</text>
    <path d="M115 76v10M111 82l4 4 4-4" stroke="#2a9f63" stroke-width="2" stroke-linecap="round"/>
    <text x="115" y="96" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">Resultado + Flags (Zero, Carry, Sinal)</text>
  </svg>`,

  UC: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado da Unidade de Controle">
    <rect x="20" y="14" width="70" height="66" rx="6" fill="rgba(47,128,237,0.12)" stroke="#2f80ed" stroke-width="2"/>
    <text x="55" y="34" text-anchor="middle" font-size="9" font-weight="bold" fill="currentColor">Instrução</text>
    <text x="55" y="48" text-anchor="middle" font-size="8" fill="#2f80ed">"ADD R1, R2"</text>
    <text x="55" y="66" text-anchor="middle" font-size="7.5" fill="currentColor" opacity="0.8">Decodificador</text>
    <path d="M90 35h50M135 30l5 5-5 5" stroke="#2f80ed" stroke-width="2"/>
    <path d="M90 60h50M135 55l5 5-5 5" stroke="#2f80ed" stroke-width="2"/>
    <rect x="145" y="12" width="78" height="72" rx="6" fill="rgba(242,153,74,0.12)" stroke="#f2994a" stroke-width="2"/>
    <text x="184" y="28" text-anchor="middle" font-size="8" font-weight="bold" fill="#f2994a">Sinais de Controle:</text>
    <text x="184" y="44" text-anchor="middle" font-size="7.5" fill="currentColor">⏱ Pulso Clock</text>
    <text x="184" y="58" text-anchor="middle" font-size="7.5" fill="currentColor">📥 Sinal Read</text>
    <text x="184" y="72" text-anchor="middle" font-size="7.5" fill="currentColor">📤 Sinal Write</text>
  </svg>`,

  REGISTRADORES: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado de Registradores">
    <rect x="15" y="10" width="210" height="80" rx="8" fill="rgba(235,87,87,0.06)" stroke="#eb5757" stroke-width="2"/>
    <text x="120" y="24" text-anchor="middle" font-size="8" font-weight="bold" fill="#eb5757">Dentro do Processador (Acesso em 1 ciclo de clock)</text>
    <g transform="translate(23, 30)">
      <rect x="0" y="0" width="42" height="34" rx="4" fill="rgba(235,87,87,0.15)" stroke="#eb5757" stroke-width="1.5"/>
      <text x="21" y="16" text-anchor="middle" font-size="8.5" font-weight="bold" fill="currentColor">PC</text>
      <text x="21" y="27" text-anchor="middle" font-size="6.5" fill="currentColor" opacity="0.8">Contador</text>
      <rect x="49" y="0" width="42" height="34" rx="4" fill="rgba(235,87,87,0.15)" stroke="#eb5757" stroke-width="1.5"/>
      <text x="70" y="16" text-anchor="middle" font-size="8.5" font-weight="bold" fill="currentColor">IR</text>
      <text x="70" y="27" text-anchor="middle" font-size="6.5" fill="currentColor" opacity="0.8">Instrução</text>
      <rect x="98" y="0" width="42" height="34" rx="4" fill="rgba(235,87,87,0.15)" stroke="#eb5757" stroke-width="1.5"/>
      <text x="119" y="16" text-anchor="middle" font-size="8.5" font-weight="bold" fill="currentColor">ACC</text>
      <text x="119" y="27" text-anchor="middle" font-size="6.5" fill="currentColor" opacity="0.8">Acumulador</text>
      <rect x="147" y="0" width="46" height="34" rx="4" fill="rgba(235,87,87,0.15)" stroke="#eb5757" stroke-width="1.5"/>
      <text x="170" y="16" text-anchor="middle" font-size="8.5" font-weight="bold" fill="currentColor">R0..R7</text>
      <text x="170" y="27" text-anchor="middle" font-size="6.5" fill="currentColor" opacity="0.8">Gerais</text>
    </g>
    <text x="120" y="80" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">⚡ Latência Mínima (alimenta a ULA diretamente)</text>
  </svg>`,

  RAM: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado da Memória RAM">
    <rect x="15" y="14" width="210" height="48" rx="6" fill="rgba(42,159,99,0.12)" stroke="#2a9f63" stroke-width="2"/>
    <rect x="28" y="24" width="28" height="24" rx="2" fill="rgba(42,159,99,0.3)" stroke="#2a9f63"/>
    <rect x="64" y="24" width="28" height="24" rx="2" fill="rgba(42,159,99,0.3)" stroke="#2a9f63"/>
    <rect x="100" y="24" width="28" height="24" rx="2" fill="rgba(42,159,99,0.3)" stroke="#2a9f63"/>
    <rect x="136" y="24" width="28" height="24" rx="2" fill="rgba(42,159,99,0.3)" stroke="#2a9f63"/>
    <rect x="172" y="24" width="28" height="24" rx="2" fill="rgba(42,159,99,0.3)" stroke="#2a9f63"/>
    <path d="M25 62v8M45 62v8M65 62v8M85 62v8M105 62v8M125 62v8M145 62v8M165 62v8M185 62v8M205 62v8" stroke="#f2c94c" stroke-width="2.5"/>
    <text x="120" y="83" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor">⚡ Memória Principal Volátil (Leitura &amp; Escrita Dinâmica)</text>
    <text x="120" y="94" text-anchor="middle" font-size="7" fill="#eb5757">Perde os dados quando o computador é desligado</text>
  </svg>`,

  ROM: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado da Memória ROM">
    <rect x="25" y="14" width="190" height="66" rx="6" fill="rgba(155,81,224,0.1)" stroke="#9b51e0" stroke-width="2"/>
    <path d="M15 35h10M15 55h10M215 35h10M215 55h10" stroke="#9b51e0" stroke-width="2"/>
    <circle cx="58" cy="47" r="18" fill="rgba(155,81,224,0.2)" stroke="#9b51e0" stroke-width="1.5"/>
    <rect x="52" y="44" width="12" height="10" rx="2" fill="#9b51e0"/>
    <path d="M54 44v-4a4 4 0 0 1 8 0v4" fill="none" stroke="#9b51e0" stroke-width="2"/>
    <text x="140" y="38" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">BIOS / UEFI (Firmware)</text>
    <text x="140" y="52" text-anchor="middle" font-size="8" fill="#9b51e0">🔒 Não Volátil (Apenas Leitura)</text>
    <text x="140" y="66" text-anchor="middle" font-size="7" fill="currentColor" opacity="0.8">Instruções de partida gravadas de fábrica</text>
  </svg>`,

  EEPROM: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado da EEPROM">
    <rect x="20" y="14" width="200" height="68" rx="6" fill="rgba(47,128,237,0.08)" stroke="#2f80ed" stroke-width="2"/>
    <text x="120" y="28" text-anchor="middle" font-size="8.5" font-weight="bold" fill="currentColor">Regravação Elétrica Byte a Byte</text>
    <g transform="translate(34, 36)">
      <rect x="0" y="0" width="36" height="24" rx="3" fill="rgba(47,128,237,0.2)" stroke="#2f80ed"/>
      <text x="18" y="15" text-anchor="middle" font-size="8" font-family="monospace" fill="currentColor">0x01</text>
      <rect x="46" y="0" width="36" height="24" rx="3" fill="rgba(242,201,76,0.3)" stroke="#f2c94c" stroke-width="1.5"/>
      <text x="64" y="15" text-anchor="middle" font-size="8" font-family="monospace" fill="currentColor">0xFF</text>
      <text x="64" y="-3" text-anchor="middle" font-size="6.5" font-weight="bold" fill="#f2994a">⚡ pulso</text>
      <rect x="92" y="0" width="36" height="24" rx="3" fill="rgba(47,128,237,0.2)" stroke="#2f80ed"/>
      <text x="110" y="15" text-anchor="middle" font-size="8" font-family="monospace" fill="currentColor">0xA4</text>
      <rect x="138" y="0" width="36" height="24" rx="3" fill="rgba(47,128,237,0.2)" stroke="#2f80ed"/>
      <text x="156" y="15" text-anchor="middle" font-size="8" font-family="monospace" fill="currentColor">0x00</text>
    </g>
    <text x="120" y="74" text-anchor="middle" font-size="7" fill="currentColor" opacity="0.8">Modifica células individuais sem apagar o chip inteiro</text>
  </svg>`,

  FLASH: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado da Memória Flash">
    <rect x="20" y="12" width="200" height="72" rx="6" fill="rgba(242,153,74,0.08)" stroke="#f2994a" stroke-width="2"/>
    <text x="120" y="26" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#f2994a">Memória Flash (NAND) - Base de SSDs e Pendrives</text>
    <g transform="translate(30, 32)">
      <rect x="0" y="0" width="85" height="36" rx="4" fill="rgba(242,153,74,0.18)" stroke="#f2994a"/>
      <text x="42" y="16" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">Bloco 1 (512 KB)</text>
      <text x="42" y="28" text-anchor="middle" font-size="6.5" fill="currentColor" opacity="0.8">Apagamento em Bloco</text>
      <rect x="95" y="0" width="85" height="36" rx="4" fill="rgba(242,153,74,0.18)" stroke="#f2994a"/>
      <text x="137" y="16" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">Bloco 2 (512 KB)</text>
      <text x="137" y="28" text-anchor="middle" font-size="6.5" fill="currentColor" opacity="0.8">Páginas de 4 KB</text>
    </g>
    <text x="120" y="79" text-anchor="middle" font-size="7" fill="currentColor">Não volátil, sem partes móveis mecânicas e com alta densidade</text>
  </svg>`,

  CACHE: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado da Memória Cache">
    <rect x="10" y="24" width="46" height="48" rx="4" fill="rgba(235,87,87,0.15)" stroke="#eb5757" stroke-width="1.5"/>
    <text x="33" y="46" text-anchor="middle" font-size="8.5" font-weight="bold" fill="currentColor">CPU</text>
    <text x="33" y="58" text-anchor="middle" font-size="6.5" fill="currentColor" opacity="0.8">0.5 ns</text>
    <path d="M56 44h18M68 40l6 4-6 4M74 54H56M62 50l-6 4 6 4" stroke="#2f80ed" stroke-width="1.5"/>
    <rect x="76" y="16" width="82" height="64" rx="6" fill="rgba(47,128,237,0.18)" stroke="#2f80ed" stroke-width="2"/>
    <text x="117" y="34" text-anchor="middle" font-size="9" font-weight="bold" fill="#2f80ed">CACHE (L1/L2)</text>
    <text x="117" y="48" text-anchor="middle" font-size="7.5" fill="currentColor">Atalho Ultrarrápido</text>
    <text x="117" y="62" text-anchor="middle" font-size="6.5" fill="#2a9f63" font-weight="bold">95% de acertos (Hit)</text>
    <path d="M158 44h18M170 40l6 4-6 4M176 54h-18M164 50l-6 4 6 4" stroke="#2a9f63" stroke-width="1.5"/>
    <rect x="178" y="24" width="50" height="48" rx="4" fill="rgba(42,159,99,0.15)" stroke="#2a9f63" stroke-width="1.5"/>
    <text x="203" y="46" text-anchor="middle" font-size="8.5" font-weight="bold" fill="currentColor">RAM</text>
    <text x="203" y="58" text-anchor="middle" font-size="6.5" fill="currentColor" opacity="0.8">50 ns</text>
    <text x="120" y="92" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">Reduz drasticamente o gargalo de velocidade com a RAM</text>
  </svg>`,

  MEMORIADEMASSA: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado da Memória de Massa">
    <rect x="25" y="14" width="85" height="66" rx="6" fill="rgba(47,128,237,0.1)" stroke="#2f80ed" stroke-width="1.5"/>
    <circle cx="67" cy="42" r="18" fill="none" stroke="#2f80ed" stroke-width="1.5"/>
    <circle cx="67" cy="42" r="5" fill="#2f80ed"/>
    <path d="M67 42l16 12" stroke="#eb5757" stroke-width="2"/>
    <text x="67" y="72" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">HD (Magnético)</text>
    <rect x="125" y="14" width="85" height="66" rx="6" fill="rgba(42,159,99,0.1)" stroke="#2a9f63" stroke-width="1.5"/>
    <rect x="135" y="26" width="28" height="20" rx="2" fill="rgba(42,159,99,0.25)" stroke="#2a9f63"/>
    <rect x="170" y="26" width="28" height="20" rx="2" fill="rgba(42,159,99,0.25)" stroke="#2a9f63"/>
    <text x="167" y="58" text-anchor="middle" font-size="7" fill="currentColor">Chips Flash</text>
    <text x="167" y="72" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">SSD (Estado Sólido)</text>
    <text x="120" y="92" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">Armazenamento permanente de Terabytes para arquivos e SO</text>
  </svg>`,

  DMA: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado do DMA">
    <rect x="15" y="12" width="60" height="34" rx="4" fill="rgba(235,87,87,0.12)" stroke="#eb5757" stroke-width="1.5"/>
    <text x="45" y="28" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor">CPU Livre</text>
    <text x="45" y="38" text-anchor="middle" font-size="6.5" fill="#2a9f63">Executando Apps ⚡</text>
    <rect x="90" y="44" width="60" height="34" rx="4" fill="rgba(47,128,237,0.2)" stroke="#2f80ed" stroke-width="2"/>
    <text x="120" y="60" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor">DMA Controller</text>
    <text x="120" y="70" text-anchor="middle" font-size="6.5" fill="#2f80ed">Ponte Direta</text>
    <rect x="165" y="12" width="60" height="34" rx="4" fill="rgba(42,159,99,0.12)" stroke="#2a9f63" stroke-width="1.5"/>
    <text x="195" y="28" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor">RAM</text>
    <text x="195" y="38" text-anchor="middle" font-size="6.5" fill="currentColor" opacity="0.8">Recepção de Dados</text>
    <path d="M45 46v24h45M150 70h45V46" fill="none" stroke="#2f80ed" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="120" y="90" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">Transfere blocos periférico ➔ RAM sem interromper a CPU</text>
  </svg>`,

  ADDRESSBUS: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado do Address Bus">
    <rect x="15" y="24" width="50" height="48" rx="5" fill="rgba(47,128,237,0.15)" stroke="#2f80ed" stroke-width="1.5"/>
    <text x="40" y="46" text-anchor="middle" font-size="9" font-weight="bold" fill="currentColor">CPU</text>
    <text x="40" y="58" text-anchor="middle" font-size="6.5" fill="currentColor" opacity="0.8">Origem</text>
    <path d="M65 40h105M165 35l10 5-10 5M65 56h105M165 51l10 5-10 5" stroke="#2f80ed" stroke-width="2.2"/>
    <text x="120" y="34" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#2f80ed">Endereço "0x2A4F" ➔</text>
    <text x="120" y="70" text-anchor="middle" font-size="7" fill="currentColor" opacity="0.9">Sentido ÚNICO (Unidirecional)</text>
    <rect x="175" y="24" width="50" height="48" rx="5" fill="rgba(42,159,99,0.15)" stroke="#2a9f63" stroke-width="1.5"/>
    <text x="200" y="46" text-anchor="middle" font-size="9" font-weight="bold" fill="currentColor">RAM</text>
    <text x="200" y="58" text-anchor="middle" font-size="6.5" fill="currentColor" opacity="0.8">Destino</text>
    <text x="120" y="88" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">Informa ONDE está a informação na memória</text>
  </svg>`,

  DATABUS: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado do Data Bus">
    <rect x="15" y="24" width="50" height="48" rx="5" fill="rgba(47,128,237,0.15)" stroke="#2f80ed" stroke-width="1.5"/>
    <text x="40" y="50" text-anchor="middle" font-size="9" font-weight="bold" fill="currentColor">CPU</text>
    <path d="M75 40h90M80 35l-8 5 8 5M160 35l8 5-8 5M75 56h90M80 51l-8 5 8 5M160 51l8 5-8 5" stroke="#f2994a" stroke-width="2.2"/>
    <text x="120" y="34" text-anchor="middle" font-size="8" font-weight="bold" fill="#f2994a">⇄ Tráfego de Dados ⇄</text>
    <text x="120" y="70" text-anchor="middle" font-size="7" fill="currentColor" opacity="0.9">Duas Vias (Bidirecional)</text>
    <rect x="175" y="24" width="50" height="48" rx="5" fill="rgba(42,159,99,0.15)" stroke="#2a9f63" stroke-width="1.5"/>
    <text x="200" y="50" text-anchor="middle" font-size="9" font-weight="bold" fill="currentColor">RAM</text>
    <text x="120" y="88" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">Transporta O CONTEÚDO real (instruções e valores)</text>
  </svg>`,

  MICROCONTROLADOR: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado do Microcontrolador">
    <rect x="20" y="10" width="200" height="76" rx="8" fill="rgba(47,128,237,0.06)" stroke="#2f80ed" stroke-width="2"/>
    <path d="M12 25h8M12 45h8M12 65h8M220 25h8M220 45h8M220 65h8M60 6v4M120 6v4M180 6v4M60 86v4M120 86v4M180 86v4" stroke="#2f80ed" stroke-width="2"/>
    <rect x="32" y="20" width="38" height="30" rx="3" fill="rgba(47,128,237,0.2)" stroke="#2f80ed"/>
    <text x="51" y="37" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor">CPU</text>
    <rect x="76" y="20" width="38" height="30" rx="3" fill="rgba(42,159,99,0.2)" stroke="#2a9f63"/>
    <text x="95" y="37" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor">RAM</text>
    <rect x="120" y="20" width="40" height="30" rx="3" fill="rgba(242,153,74,0.2)" stroke="#f2994a"/>
    <text x="140" y="37" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">FLASH</text>
    <rect x="166" y="20" width="42" height="30" rx="3" fill="rgba(155,81,224,0.2)" stroke="#9b51e0"/>
    <text x="187" y="37" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">I/O Ports</text>
    <text x="120" y="68" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">Computador Completo em 1 Único Chip (SoC)</text>
    <text x="120" y="79" text-anchor="middle" font-size="6.5" fill="currentColor" opacity="0.8">Arduino, Micro-ondas, Sensores e Sistemas Embarcados</text>
  </svg>`,

  DUALCORE: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado Dual-Core">
    <rect x="25" y="10" width="190" height="78" rx="8" fill="rgba(47,128,237,0.06)" stroke="#2f80ed" stroke-width="2"/>
    <rect x="35" y="18" width="78" height="42" rx="4" fill="rgba(47,128,237,0.18)" stroke="#2f80ed" stroke-width="1.5"/>
    <text x="74" y="36" text-anchor="middle" font-size="9" font-weight="bold" fill="currentColor">Núcleo 1</text>
    <text x="74" y="48" text-anchor="middle" font-size="7" fill="#2a9f63">Execução A ➔</text>
    <rect x="127" y="18" width="78" height="42" rx="4" fill="rgba(47,128,237,0.18)" stroke="#2f80ed" stroke-width="1.5"/>
    <text x="166" y="36" text-anchor="middle" font-size="9" font-weight="bold" fill="currentColor">Núcleo 2</text>
    <text x="166" y="48" text-anchor="middle" font-size="7" fill="#2a9f63">Execução B ➔</text>
    <rect x="35" y="64" width="170" height="18" rx="3" fill="rgba(242,153,74,0.15)" stroke="#f2994a" stroke-width="1"/>
    <text x="120" y="76" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">Cache L2/L3 Compartilhado</text>
  </svg>`,

  QUADCORE: `<svg viewBox="0 0 240 100" class="concept-diagram-svg" aria-label="Diagrama ilustrado Quad-Core">
    <rect x="25" y="8" width="190" height="82" rx="8" fill="rgba(42,159,99,0.06)" stroke="#2a9f63" stroke-width="2"/>
    <g transform="translate(35, 16)">
      <rect x="0" y="0" width="78" height="26" rx="3" fill="rgba(42,159,99,0.18)" stroke="#2a9f63"/>
      <text x="39" y="16" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor">Núcleo 1</text>
      <rect x="92" y="0" width="78" height="26" rx="3" fill="rgba(42,159,99,0.18)" stroke="#2a9f63"/>
      <text x="131" y="16" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor">Núcleo 2</text>
      <rect x="0" y="32" width="78" height="26" rx="3" fill="rgba(42,159,99,0.18)" stroke="#2a9f63"/>
      <text x="39" y="48" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor">Núcleo 3</text>
      <rect x="92" y="32" width="78" height="26" rx="3" fill="rgba(42,159,99,0.18)" stroke="#2a9f63"/>
      <text x="131" y="48" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor">Núcleo 4</text>
    </g>
    <text x="120" y="84" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor">4 Processadores Físicos em Paralelo Real</text>
  </svg>`
};

const LEARNING_DATA = {
  CPU: {
    explanation: "Unidade central que orquestra o ciclo buscar-decodificar-executar das instruções.",
    example: "Ao iniciar qualquer programa, a CPU coordena tarefas e instrui os outros componentes."
  },
  ULA: {
    explanation: "Núcleo de cálculo responsável por operações aritméticas (+, −) e lógicas (E, OU, comparações).",
    example: "Calcular médias, pontuações em jogos ou verificar se senha digitada é igual à salva."
  },
  UC: {
    explanation: "Setor maestro que decodifica instruções e envia sinais de sincronismo a todo o sistema.",
    example: "Garante que dados da RAM cheguem aos registradores no momento exato do clock."
  },
  REGISTRADORES: {
    explanation: "Memórias de latência quase zero posicionadas dentro do processador para uso imediato.",
    example: "Guardam a instrução atual e os valores das variáveis temporárias em cálculo ativo."
  },
  RAM: {
    explanation: "Memória principal de leitura e escrita veloz, volátil (apaga sem energia elétrica).",
    example: "Mantém janelas abertas do navegador e arquivos do aplicativo enquanto estão em uso."
  },
  ROM: {
    explanation: "Memória permanente de fábrica (não volátil) para firmware de inicialização inicial.",
    example: "Contém as rotinas de boot (BIOS/UEFI) para ligar e testar o hardware do computador."
  },
  EEPROM: {
    explanation: "Memória não volátil reprogramável byte a byte usando pulsos elétricos sem luz UV.",
    example: "Armazena configurações permanentes de placas-mãe e dispositivos embarcados."
  },
  FLASH: {
    explanation: "Evolução da EEPROM que apaga e regrava em blocos inteiros, com altíssima densidade.",
    example: "Tecnologia base de pendrives, cartões de memória e unidades de estado sólido (SSD)."
  },
  CACHE: {
    explanation: "Memória ultrarrápida intermediária (L1/L2/L3) que mitiga a lentidão de acesso à RAM.",
    example: "Armazena trechos repetidos de código (loops) para a CPU não precisar ir à RAM."
  },
  MEMORIADEMASSA: {
    explanation: "Armazenamento secundário permanente de grande porte e custo por byte acessível.",
    example: "Discos rígidos (HD) e SSDs onde ficam salvos o sistema operacional e arquivos."
  },
  DMA: {
    explanation: "Canal direto que transfere blocos entre periféricos e RAM liberando a CPU de intermediar.",
    example: "Permite que a placa de som ou disco envie dados à memória sem sobrecarregar a CPU."
  },
  ADDRESSBUS: {
    explanation: "Barramento unidirecional que sinaliza exatamente qual posição de memória será lida ou gravada.",
    example: "A CPU envia o endereço '0x1A0F' pelo barramento para localizar a instrução desejada."
  },
  DATABUS: {
    explanation: "Barramento bidirecional que transporta os dados reais trafegando entre CPU e memória.",
    example: "Após a CPU enviar o endereço, o conteúdo efetivo retorna através do barramento de dados."
  },
  MICROCONTROLADOR: {
    explanation: "Computador completo em chip único: agrega processador, RAM, ROM e portas I/O integradas.",
    example: "Utilizado em sistemas dedicados: micro-ondas, módulos automotivos e placas Arduino."
  },
  DUALCORE: {
    explanation: "Processador físico equipado com dois núcleos independentes de processamento paralelo.",
    example: "Permite executar duas tarefas pesadas concorrentes sem engasgar o sistema operacional."
  },
  QUADCORE: {
    explanation: "Processador com quatro núcleos físicos para multitarefa paralela de alta performance.",
    example: "Ideal para renderização de vídeos, jogos modernos e compilação simultânea de código."
  }
};

const MEMORY_TIPS = {
  CPU: "Lembre de CPU como o 'chefe' que coordena tudo.",
  ULA: "Associe ULA a operações de conta e comparação.",
  UC: "Pense na UC como regente que sincroniza o processador.",
  REGISTRADORES: "Visualize registradores como bolsos rápidos da CPU.",
  RAM: "RAM: memória de trabalho temporária.",
  ROM: "ROM: instruções permanentes de partida do sistema.",
  EEPROM: "EEPROM: versão regravável em partes pequenas.",
  FLASH: "FLASH: regrava por blocos, comum em SSD e pendrive.",
  CACHE: "CACHE: atalho veloz entre CPU e RAM.",
  MEMORIADEMASSA: "Memória de massa: grande capacidade e persistência.",
  DMA: "DMA: transferência direta sem CPU a todo momento.",
  ADDRESSBUS: "ADDRESSBUS aponta 'onde' está o dado.",
  DATABUS: "DATABUS carrega 'qual' dado está sendo transferido.",
  MICROCONTROLADOR: "Microcontrolador: computador completo em um único chip.",
  DUALCORE: "DUALCORE: dois núcleos físicos para paralelismo.",
  QUADCORE: "QUADCORE: quatro núcleos para multitarefa."
};

const CONCEPT_STEPS = {
  CPU: [
    "Busca a próxima instrução na memória (Cache ou RAM) usando o endereço apontado pelo PC.",
    "A Unidade de Controle (UC) decodifica a instrução em sinais elétricos de comando.",
    "A ULA executa a operação e grava o resultado imediato nos Registradores internos."
  ],
  ULA: [
    "Recebe dois valores binários (Entrada A e Entrada B) vindos dos Registradores.",
    "Realiza cálculos aritméticos (+, −, ×, ÷) ou comparações lógicas (E, OU, <, =).",
    "Devolve o resultado e atualiza as flags de estado (Zero, Carry e Sinal)."
  ],
  UC: [
    "Lê a instrução carregada no Registrador de Instrução (IR).",
    "Decodifica o código da operação (opcode) seguindo o ritmo dos pulsos de clock.",
    "Emite sinais de leitura, escrita e seleção para sincronizar ULA, memória e barramentos."
  ],
  REGISTRADORES: [
    "Recebem dados e endereços imediatos diretamente pelo barramento interno da CPU.",
    "Mantêm operandos (R0..R7), instrução atual (IR) e próximo endereço (PC) em 1 ciclo.",
    "Alimentam a ULA instantaneamente sem esperar o tempo de acesso da RAM."
  ],
  RAM: [
    "Carrega do SSD/HD o sistema operacional e os programas abertos no momento.",
    "Permite leitura e escrita direta em qualquer endereço físico (acesso aleatório).",
    "Mantém os dados ativos enquanto houver energia elétrica (memória volátil)."
  ],
  ROM: [
    "Armazena permanentemente de fábrica o firmware inicial (BIOS ou UEFI).",
    "Ao ligar a máquina, executa os testes de hardware iniciais (POST).",
    "Localiza e carrega o sistema operacional sem perder dados ao desligar."
  ],
  EEPROM: [
    "Conserva configurações críticas e dados de calibração mesmo sem energia.",
    "Recebe pulsos elétricos direcionados para apagar e regravar bytes específicos.",
    "Atualiza parâmetros pontuais sem precisar apagar todo o conteúdo do chip."
  ],
  FLASH: [
    "Organiza as informações em páginas e blocos de células eletrônicas NAND.",
    "Para regravar dados, apaga blocos inteiros eletricamente e grava as novas páginas.",
    "Preserva arquivos em SSDs e pendrives sem partes móveis mecânicas."
  ],
  CACHE: [
    "Intercepta o pedido da CPU antes que ela precise consultar a RAM mais lenta.",
    "Se encontrar o dado (Cache Hit), entrega em nanossegundos ao processador.",
    "Se faltar (Cache Miss), busca na RAM e guarda uma cópia para acessos futuros."
  ],
  MEMORIADEMASSA: [
    "Recebe arquivos, sistemas e programas enviados pela memória principal para gravação.",
    "Armazena grandes volumes (GB/TB) em discos magnéticos (HD) ou módulos SSD.",
    "Preserva tudo permanentemente após desligar, recarregando na RAM quando aberto."
  ],
  DMA: [
    "A CPU informa ao controlador DMA a origem, o destino e o tamanho do bloco.",
    "O DMA assume o barramento e transfere os dados direto entre periférico e RAM.",
    "Ao concluir, envia um aviso (interrupção) à CPU, que ficou livre durante a cópia."
  ],
  ADDRESSBUS: [
    "A CPU coloca nas trilhas do barramento o endereço binário desejado.",
    "O sinal trafega em sentido único (unidirecional) até a RAM ou periféricos.",
    "A posição exata de memória é selecionada para leitura ou escrita pelo Data Bus."
  ],
  DATABUS: [
    "Com o endereço já selecionado, abre-se o canal de mão dupla (bidirecional).",
    "Na leitura, conduz instruções e valores da memória ou periféricos até a CPU.",
    "Na escrita, leva os resultados processados pela CPU de volta para a memória."
  ],
  MICROCONTROLADOR: [
    "Reúne CPU, RAM, memória Flash/EEPROM e portas de E/S (GPIO) em um único chip.",
    "Lê sinais de sensores externos continuamente pelas portas de entrada.",
    "Executa o código embarcado e aciona motores, displays ou relés automaticamente."
  ],
  DUALCORE: [
    "Divide as tarefas do sistema operacional entre dois núcleos físicos independentes.",
    "Cada núcleo executa seu próprio ciclo buscar-decodificar-executar ao mesmo tempo.",
    "Compartilha o cache L2/L3 e a RAM para coordenar programas sem travamentos."
  ],
  QUADCORE: [
    "Distribui até quatro fluxos de trabalho entre quatro núcleos físicos dedicados.",
    "Processa aplicativos pesados, jogos e tarefas em segundo plano em paralelo real.",
    "Sincroniza dados entre os núcleos usando o cache compartilhado e o barramento."
  ]
};

const DIAGNOSTIC_STORAGE_KEY = "cruzadinha_arqcomp_dificuldades_v1";
const ARCH_DIAGNOSTIC_STORAGE_KEY = "desafio_arqcomp_dificuldades_v1";
const THEME_STORAGE_KEY = "cruzadinha_arqcomp_theme_v1";

const ARCH_COMPONENTS = [
  { id: "ULA", label: "ULA" },
  { id: "UC", label: "UC" },
  { id: "REGISTRADORES", label: "REGISTRADORES" },
  { id: "ADDRESSBUS", label: "ADDRESSBUS" },
  { id: "DATABUS", label: "DATABUS" },
  { id: "CACHE", label: "CACHE" },
  { id: "RAM", label: "RAM" },
  { id: "ROM", label: "ROM" },
  { id: "MEMORIADEMASSA", label: "MEMORIA DE MASSA" }
];

function showAppNotice(message, type = "warning", dedupeKey = message) {
  const id = "app-notice-stack";
  let stack = document.getElementById(id);

  if (!stack) {
    stack = document.createElement("div");
    stack.id = id;
    stack.className = "app-notice-stack";
    document.body.appendChild(stack);
  }

  const alreadyShown = Array.from(stack.children).some(
    (node) => node.dataset && node.dataset.noticeKey === String(dedupeKey)
  );
  if (alreadyShown) {
    return;
  }

  const notice = document.createElement("div");
  notice.className = `app-notice app-notice-${type}`;
  notice.dataset.noticeKey = dedupeKey;

  const text = document.createElement("span");
  text.textContent = message;

  const close = document.createElement("button");
  close.type = "button";
  close.textContent = "Fechar";
  close.addEventListener("click", () => notice.remove());

  notice.appendChild(text);
  notice.appendChild(close);
  stack.appendChild(notice);
}

function setupTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  } else if (!savedTheme && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.body.classList.add("light-theme");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem(THEME_STORAGE_KEY, isLight ? "light" : "dark");
  });
}

function setupTimer() {
  const timerText = document.getElementById("timer-text");
  let seconds = 0;
  let timerId = null;
  let isRunning = false;

  function formatTime(s) {
    const mins = Math.floor(s / 60).toString().padStart(2, "0");
    const secs = (s % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function start() {
    if (isRunning) return;
    isRunning = true;
    timerId = setInterval(() => {
      seconds += 1;
      if (timerText) {
        timerText.textContent = formatTime(seconds);
      }
    }, 1000);
  }

  function stop() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    isRunning = false;
  }

  function reset() {
    stop();
    seconds = 0;
    if (timerText) {
      timerText.textContent = "00:00";
    }
  }

  function getTimeFormatted() {
    return formatTime(seconds);
  }

  return { start, stop, reset, getTimeFormatted };
}

function validateAndBuildGrid(words) {
  const cellMap = new Map();
  const intersections = new Map(words.map(({ word }) => [word, new Set()]));

  let maxRow = 0;
  let maxCol = 0;

  for (const item of words) {
    if (!/^[A-Z]+$/.test(item.word)) {
      throw new Error(`Palavra inválida: ${item.word}`);
    }

    for (let i = 0; i < item.word.length; i += 1) {
      const row = item.row + (item.dir === "V" ? i : 0);
      const col = item.col + (item.dir === "H" ? i : 0);
      const key = `${row},${col}`;
      const letter = item.word[i];

      maxRow = Math.max(maxRow, row);
      maxCol = Math.max(maxCol, col);

      if (!cellMap.has(key)) {
        cellMap.set(key, { letter, words: [item.word] });
      } else {
        const current = cellMap.get(key);
        if (current.letter !== letter) {
          throw new Error(
            `Conflito de letra em (${row}, ${col}): ${current.letter} x ${letter}`
          );
        }
        current.words.push(item.word);
      }
    }
  }

  for (const cell of cellMap.values()) {
    if (cell.words.length > 1) {
      for (const a of cell.words) {
        for (const b of cell.words) {
          if (a !== b) intersections.get(a).add(b);
        }
      }
    }
  }

  for (const item of words) {
    if (intersections.get(item.word).size === 0) {
      throw new Error(`Palavra isolada detectada: ${item.word}`);
    }
  }

  const visited = new Set();
  const queue = [words[0].word];
  visited.add(words[0].word);

  while (queue.length) {
    const current = queue.shift();
    for (const next of intersections.get(current)) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push(next);
      }
    }
  }

  if (visited.size !== words.length) {
    throw new Error("Nem todas as palavras estão conectadas no diagrama.");
  }

  return {
    cellMap,
    rows: maxRow + 1,
    cols: maxCol + 1
  };
}

function getStartNumbers(words) {
  const starts = new Map();

  for (const item of words) {
    const key = `${item.row},${item.col}`;
    if (!starts.has(key)) {
      starts.set(key, { row: item.row, col: item.col });
    }
  }

  const ordered = Array.from(starts.values()).sort((a, b) =>
    a.row === b.row ? a.col - b.col : a.row - b.row
  );

  const numbered = new Map();
  ordered.forEach((start, index) => {
    numbered.set(`${start.row},${start.col}`, index + 1);
  });

  return numbered;
}

function buildGameModel(words) {
  const entries = words.map((item, index) => {
    const key = `${index}:${item.word}:${item.dir}:${item.row},${item.col}`;
    const cells = [];
    const cellIndex = new Map();

    for (let i = 0; i < item.word.length; i += 1) {
      const row = item.row + (item.dir === "V" ? i : 0);
      const col = item.col + (item.dir === "H" ? i : 0);
      const coordKey = `${row},${col}`;
      cells.push(coordKey);
      cellIndex.set(coordKey, i);
    }

    return {
      ...item,
      key,
      cells,
      cellIndex
    };
  });

  const cellToWords = new Map();
  for (const entry of entries) {
    for (const cellKey of entry.cells) {
      if (!cellToWords.has(cellKey)) {
        cellToWords.set(cellKey, []);
      }
      cellToWords.get(cellKey).push(entry);
    }
  }

  return { entries, cellToWords };
}

function renderBoard(gridData, startNumbers) {
  const board = document.getElementById("board");
  if (!board) {
    return { cellsByKey: new Map(), inputsByKey: new Map() };
  }
  board.style.gridTemplateColumns = `repeat(${gridData.cols}, var(--cell-size))`;
  const cellsByKey = new Map();
  const inputsByKey = new Map();

  for (let row = 0; row < gridData.rows; row += 1) {
    for (let col = 0; col < gridData.cols; col += 1) {
      const key = `${row},${col}`;
      const cell = document.createElement("div");
      cell.className = "cell";

      if (!gridData.cellMap.has(key)) {
        cell.classList.add("inactive");
      } else {
        cell.classList.add("active");
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.setAttribute("aria-label", `Linha ${row + 1}, coluna ${col + 1}`);
        input.dataset.cellKey = key;
        cell.appendChild(input);
        cellsByKey.set(key, cell);
        inputsByKey.set(key, input);

        if (startNumbers.has(key)) {
          const number = document.createElement("span");
          number.className = "number";
          number.textContent = startNumbers.get(key);
          cell.appendChild(number);
        }
      }

      board.appendChild(cell);
    }
  }

  return { cellsByKey, inputsByKey };
}

function renderClues(words, startNumbers, onClueClick) {
  const acrossList = document.getElementById("across-clues");
  const downList = document.getElementById("down-clues");
  const clueItemByWordKey = new Map();
  if (!acrossList || !downList) return clueItemByWordKey;

  const sorted = [...words].sort((a, b) => {
    const n1 = startNumbers.get(`${a.row},${a.col}`);
    const n2 = startNumbers.get(`${b.row},${b.col}`);
    if (n1 !== n2) return n1 - n2;
    return a.dir.localeCompare(b.dir);
  });

  for (const item of sorted) {
    const number = startNumbers.get(`${item.row},${item.col}`);
    const li = document.createElement("li");
    li.value = number;
    li.textContent = item.clue;
    li.dataset.wordKey = item.key;
    li.setAttribute("role", "button");
    li.setAttribute("tabindex", "0");
    li.setAttribute("title", "Clique para selecionar esta pista no tabuleiro");

    li.addEventListener("click", () => {
      if (onClueClick) onClueClick(item);
    });

    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (onClueClick) onClueClick(item);
      }
    });

    clueItemByWordKey.set(item.key, li);

    if (item.dir === "H") {
      acrossList.appendChild(li);
    } else {
      downList.appendChild(li);
    }
  }

  return clueItemByWordKey;
}

function updateClueBar(entry, startNumbers) {
  const clueBar = document.getElementById("clue-bar");
  const dirSpan = document.getElementById("clue-bar-dir");
  const numSpan = document.getElementById("clue-bar-number");
  const textSpan = document.getElementById("clue-bar-text");

  if (!clueBar || !dirSpan || !numSpan || !textSpan || !entry) return;

  const number = startNumbers.get(`${entry.row},${entry.col}`) || "";
  dirSpan.textContent = entry.dir === "H" ? "Horizontal" : "Vertical";
  numSpan.textContent = `${number}.`;
  textSpan.textContent = entry.clue;
  clueBar.hidden = false;
}

function updateProgress(correctCount, total) {
  const counter = document.getElementById("progress-counter");
  const bar = document.getElementById("progress-bar");
  const message = document.getElementById("progress-message");

  if (counter) {
    counter.textContent = `${correctCount} de ${total} palavras`;
  }

  const percent = total > 0 ? (correctCount / total) * 100 : 0;
  if (bar) {
    bar.style.width = `${percent}%`;
    bar.classList.remove("bar-low", "bar-mid", "bar-high", "bar-complete");
    if (correctCount === 0) {
      // initial
    } else if (percent < 30) {
      bar.classList.add("bar-low");
    } else if (percent < 75) {
      bar.classList.add("bar-mid");
    } else if (percent < 100) {
      bar.classList.add("bar-high");
    } else {
      bar.classList.add("bar-complete");
    }
  }

  if (message) {
    if (correctCount === 0) {
      message.textContent = "Preencha as palavras e clique em Conferir!";
    } else if (correctCount <= 4) {
      message.textContent = "Bom começo! Continue explorando os conceitos.";
    } else if (correctCount <= 10) {
      message.textContent = "Ótimo progresso! Mais da metade concluída.";
    } else if (correctCount < total) {
      message.textContent = "Quase lá! Faltam apenas alguns ajustes.";
    } else {
      message.textContent = "Perfeito! Domínio total da arquitetura!";
    }
  }
}

function createConfetti() {
  const colors = ["#2f80ed", "#2a9f63", "#f2994a", "#9b51e0", "#eb5757", "#f2c94c"];
  const count = 40;
  for (let i = 0; i < count; i += 1) {
    const confetti = document.createElement("div");
    confetti.className = "confetti-particle";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = "-10px";
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.setProperty("--duration", `${1.5 + Math.random() * 2}s`);
    confetti.style.setProperty("--rot", `${360 + Math.random() * 720}deg`);
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3500);
  }
}

function showCelebration(timerFormatted) {
  const overlay = document.getElementById("celebration-overlay");
  const stats = document.getElementById("celebration-stats");
  const closeBtn = document.getElementById("celebration-close");

  if (!overlay) return;

  if (stats) {
    stats.textContent = `Tempo total: ${timerFormatted} | Todos os 16 conceitos dominados!`;
  }

  overlay.hidden = false;
  createConfetti();

  if (closeBtn) {
    closeBtn.onclick = () => {
      overlay.hidden = true;
    };
  }
}

function setupInteractions(state) {
  const {
    entries,
    cellToWords,
    cellsByKey,
    inputsByKey,
    clueItemByWordKey,
    startNumbers,
    gridRows,
    gridCols,
    timer
  } = state;

  const wordByKey = new Map(entries.map((entry) => [entry.key, entry]));
  const boardElement = document.getElementById("board");
  let activeCellKey = entries[0].cells[0];
  let activeDirection = entries[0].dir;
  let activeWordKey = entries[0].key;
  let highlightedCells = [];
  let highlightedClue = null;
  let lastClickedCellKey = null;
  let directionFeedbackTimeout = null;

  function getCellCoords(cellKey) {
    const [row, col] = cellKey.split(",").map(Number);
    return { row, col };
  }

  function getWordForCellByDirection(cellKey, direction) {
    const wordsAtCell = cellToWords.get(cellKey) || [];
    return wordsAtCell.find((entry) => entry.dir === direction) || null;
  }

  function chooseDirectionForCell(cellKey, preferredDirection) {
    const wordsAtCell = cellToWords.get(cellKey) || [];
    const hasH = wordsAtCell.some((entry) => entry.dir === "H");
    const hasV = wordsAtCell.some((entry) => entry.dir === "V");

    if (preferredDirection && wordsAtCell.some((entry) => entry.dir === preferredDirection)) {
      return preferredDirection;
    }
    if (activeDirection && wordsAtCell.some((entry) => entry.dir === activeDirection)) {
      return activeDirection;
    }
    if (hasH) return "H";
    if (hasV) return "V";
    return "H";
  }

  function applyHighlights() {
    for (const key of highlightedCells) {
      const cell = cellsByKey.get(key);
      if (cell) {
        cell.classList.remove("word-highlight");
        cell.classList.remove("current-cell");
      }
    }
    highlightedCells = [];

    if (highlightedClue) {
      highlightedClue.classList.remove("clue-active");
      highlightedClue = null;
    }

    const activeWord = wordByKey.get(activeWordKey);
    if (!activeWord) return;

    for (const key of activeWord.cells) {
      const cell = cellsByKey.get(key);
      if (cell) {
        cell.classList.add("word-highlight");
        highlightedCells.push(key);
      }
    }

    const currentCell = cellsByKey.get(activeCellKey);
    if (currentCell) {
      currentCell.classList.add("current-cell");
    }

    highlightedClue = clueItemByWordKey.get(activeWordKey) || null;
    if (highlightedClue) {
      highlightedClue.classList.add("clue-active");
    }

    updateClueBar(activeWord, startNumbers);
  }

  function setActiveCell(cellKey, options = {}) {
    if (!inputsByKey.has(cellKey)) return;

    const { preferredDirection = null, toggleDirection = false, focus = true } = options;
    const previousDirection = activeDirection;
    let nextDirection = chooseDirectionForCell(cellKey, preferredDirection);

    if (toggleDirection) {
      const wordsAtCell = cellToWords.get(cellKey) || [];
      const hasH = wordsAtCell.some((entry) => entry.dir === "H");
      const hasV = wordsAtCell.some((entry) => entry.dir === "V");
      if (hasH && hasV) {
        nextDirection = nextDirection === "H" ? "V" : "H";
      }
    }

    const nextWord = getWordForCellByDirection(cellKey, nextDirection);
    if (!nextWord) return;

    activeCellKey = cellKey;
    activeDirection = nextDirection;
    activeWordKey = nextWord.key;
    applyHighlights();

    if (previousDirection && previousDirection !== nextDirection) {
      const classToAdd = nextDirection === "H" ? "dir-switch-h" : "dir-switch-v";
      if (boardElement) {
        boardElement.classList.remove("dir-switch-h", "dir-switch-v");
        boardElement.classList.add(classToAdd);
      }
      if (directionFeedbackTimeout) {
        window.clearTimeout(directionFeedbackTimeout);
      }
      directionFeedbackTimeout = window.setTimeout(() => {
        if (boardElement) {
          boardElement.classList.remove("dir-switch-h", "dir-switch-v");
        }
      }, 220);
    }

    if (focus) {
      const input = inputsByKey.get(cellKey);
      input.focus();
      input.select();
    }
  }

  function selectWord(entry) {
    if (!entry) return;
    activeDirection = entry.dir;
    activeWordKey = entry.key;
    setActiveCell(entry.cells[0], { preferredDirection: entry.dir, focus: true });
    const cellEl = cellsByKey.get(entry.cells[0]);
    if (cellEl && cellEl.scrollIntoView) {
      cellEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }

  function moveInsideActiveWord(step) {
    const activeWord = wordByKey.get(activeWordKey);
    if (!activeWord) return null;
    const idx = activeWord.cellIndex.get(activeCellKey);
    if (idx === undefined) return null;
    const nextIdx = idx + step;
    if (nextIdx < 0 || nextIdx >= activeWord.cells.length) return null;
    return activeWord.cells[nextIdx];
  }

  function findNextActiveCellByArrow(startCellKey, direction) {
    const vectors = {
      ArrowLeft: [0, -1],
      ArrowRight: [0, 1],
      ArrowUp: [-1, 0],
      ArrowDown: [1, 0]
    };
    const [dr, dc] = vectors[direction];
    let { row, col } = getCellCoords(startCellKey);

    while (true) {
      row += dr;
      col += dc;
      if (row < 0 || row >= gridRows || col < 0 || col >= gridCols) {
        return null;
      }
      const key = `${row},${col}`;
      if (inputsByKey.has(key)) {
        return key;
      }
    }
  }

  function handleCellClick(cellKey) {
    const shouldToggle = lastClickedCellKey === cellKey;
    setActiveCell(cellKey, { toggleDirection: shouldToggle });
    lastClickedCellKey = cellKey;
  }

  for (const [cellKey, input] of inputsByKey.entries()) {
    input.addEventListener("focus", () => {
      timer.start();
      setActiveCell(cellKey, { focus: false });
      lastClickedCellKey = null;
    });

    input.addEventListener("click", () => {
      timer.start();
      handleCellClick(cellKey);
    });

    input.addEventListener("input", (event) => {
      timer.start();
      const sanitized = event.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 1);
      event.target.value = sanitized;
      if (sanitized) {
        const nextCell = moveInsideActiveWord(1);
        if (nextCell) {
          setActiveCell(nextCell);
        }
      }
    });

    input.addEventListener("keydown", (event) => {
      timer.start();
      const key = event.key;

      if (/^[a-zA-Z]$/.test(key)) {
        event.preventDefault();
        input.value = key.toUpperCase();
        lastClickedCellKey = null;
        const nextCell = moveInsideActiveWord(1);
        if (nextCell) {
          setActiveCell(nextCell);
        }
        return;
      }

      if (key === "Backspace") {
        event.preventDefault();
        lastClickedCellKey = null;
        if (input.value) {
          input.value = "";
        } else {
          const previousCell = moveInsideActiveWord(-1);
          if (previousCell) {
            setActiveCell(previousCell);
            inputsByKey.get(previousCell).value = "";
          }
        }
        return;
      }

      if (key === "ArrowLeft" || key === "ArrowRight" || key === "ArrowUp" || key === "ArrowDown") {
        event.preventDefault();
        lastClickedCellKey = null;
        const nextCell = findNextActiveCellByArrow(cellKey, key);
        if (!nextCell) return;
        const preferredDirection = key === "ArrowLeft" || key === "ArrowRight" ? "H" : "V";
        setActiveCell(nextCell, { preferredDirection });
      }
    });
  }

  setActiveCell(activeCellKey, { focus: false });

  function getActiveWord() {
    return wordByKey.get(activeWordKey);
  }

  return {
    selectWord,
    getActiveWord,
    setActiveCell
  };
}

function clearValidationStyles(cellsByKey, clueItemByWordKey) {
  for (const cell of cellsByKey.values()) {
    cell.classList.remove(
      "cell-check-correct",
      "cell-check-incorrect",
      "cell-correct-flash",
      "cell-hint-revealed",
      "cell-revealed"
    );
  }

  for (const clueItem of clueItemByWordKey.values()) {
    clueItem.classList.remove("clue-correct", "clue-incorrect");
    const oldBtn = clueItem.querySelector(".clue-reveal-btn");
    if (oldBtn) oldBtn.remove();
  }
}

function evaluateWords(entries, inputsByKey) {
  const results = new Map();
  let correctCount = 0;

  for (const entry of entries) {
    const attempt = entry.cells.map((cellKey) => (inputsByKey.get(cellKey)?.value || "").toUpperCase()).join("");
    const isCorrect = attempt.length === entry.word.length && attempt === entry.word;
    const isBlank = attempt.trim().length === 0;
    results.set(entry.key, { isCorrect, isBlank, attempt });
    if (isCorrect) correctCount += 1;
  }

  return { results, correctCount };
}

function applyValidationStyles(
  entries,
  results,
  cellsByKey,
  clueItemByWordKey,
  onRevealWord,
  revealedWordKeys = new Set(),
  previousResults = null
) {
  clearValidationStyles(cellsByKey, clueItemByWordKey);

  const cellState = new Map();
  const flashCandidates = new Set();
  for (const entry of entries) {
    const status = results.get(entry.key);
    for (const cellKey of entry.cells) {
      if (!cellState.has(cellKey)) {
        cellState.set(cellKey, { hasCorrect: false, hasIncorrect: false });
      }
      const state = cellState.get(cellKey);
      if (status.isCorrect) {
        state.hasCorrect = true;
      } else {
        state.hasIncorrect = true;
      }
    }

    const clueItem = clueItemByWordKey.get(entry.key);
    if (clueItem) {
      clueItem.classList.add(status.isCorrect ? "clue-correct" : "clue-incorrect");
      if (!status.isCorrect && onRevealWord) {
        const revealBtn = document.createElement("button");
        revealBtn.type = "button";
        revealBtn.className = "clue-reveal-btn";
        revealBtn.innerHTML = `
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Revelar
        `;
        revealBtn.title = "Revelar letras desta palavra";
        revealBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          onRevealWord(entry);
        });
        clueItem.appendChild(revealBtn);
      }
    }

    const wasCorrectBefore = previousResults?.get(entry.key)?.isCorrect === true;
    if (status.isCorrect && !wasCorrectBefore) {
      for (const cellKey of entry.cells) {
        flashCandidates.add(cellKey);
      }
    }
  }

  for (const [cellKey, state] of cellState.entries()) {
    const cell = cellsByKey.get(cellKey);
    if (!cell) continue;
    if (state.hasIncorrect) {
      cell.classList.add("cell-check-incorrect");
    } else if (state.hasCorrect) {
      cell.classList.add("cell-check-correct");
    }
  }

  // Preserve revealed styling for explicitly revealed words
  for (const wordKey of revealedWordKeys) {
    const entry = entries.find((e) => e.key === wordKey);
    if (entry) {
      for (const cellKey of entry.cells) {
        const cell = cellsByKey.get(cellKey);
        if (cell) {
          cell.classList.remove("cell-check-correct");
          cell.classList.add("cell-revealed");
        }
      }
    }
  }

  for (const cellKey of flashCandidates) {
    const cell = cellsByKey.get(cellKey);
    if (!cell || cell.classList.contains("cell-check-incorrect")) continue;
    cell.classList.remove("cell-correct-flash");
    void cell.offsetWidth;
    cell.classList.add("cell-correct-flash");
  }
}

function loadDiagnostics() {
  try {
    const raw = localStorage.getItem(DIAGNOSTIC_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};

    const clean = {};
    for (const [word, value] of Object.entries(parsed)) {
      if (Number.isFinite(value) && value > 0) {
        clean[word] = Math.floor(value);
      }
    }
    return clean;
  } catch {
    return {};
  }
}

function saveDiagnostics(data) {
  try {
    localStorage.setItem(DIAGNOSTIC_STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch {
    showAppNotice("Não foi possível salvar o histórico de dificuldades neste navegador.");
    return false;
  }
}

function registerDifficulties(incorrectWords) {
  const diagnostics = loadDiagnostics();
  for (const word of incorrectWords) {
    diagnostics[word] = (diagnostics[word] || 0) + 1;
  }
  saveDiagnostics(diagnostics);
  return diagnostics;
}

function updateReinforceIndicator() {
  const diagnostics = loadDiagnostics();
  const reinforceCount = Object.values(diagnostics).filter((count) => count > 0).length;
  const indicator = document.getElementById("reinforce-indicator");
  if (!indicator) return;
  indicator.textContent = `${reinforceCount} conceitos para reforço`;
}

function renderLearningPanel(entries) {
  const panel = document.getElementById("review-panel");
  const content = document.getElementById("review-content");

  if (!panel || !content) return;

  if (content.children.length === 0) {
    entries.forEach((entry, index) => {
      const data = LEARNING_DATA[entry.word];
      const cat = CATEGORIES[entry.word] || "arquitetura";
      const diagram = CONCEPT_DIAGRAMS[entry.word] || "";
      const tip = MEMORY_TIPS[entry.word] || "";

      const card = document.createElement("article");
      card.className = "review-card";
      card.style.setProperty("--delay", `${index * 30}ms`);

      card.innerHTML = `
        <div class="review-card-diagram" aria-hidden="true">
          ${diagram}
        </div>
        <div class="review-card-top">
          <h3 class="review-card-title">${entry.word}</h3>
          <span class="review-card-badge">${CATEGORY_LABELS[cat] || cat}</span>
        </div>
        <div class="review-card-body">
          <div class="review-card-bullet">
            <span class="review-card-bullet-icon">&#9889;</span>
            <p><strong>Função:</strong> ${data.explanation}</p>
          </div>
          <div class="review-card-bullet">
            <span class="review-card-bullet-icon">&#128161;</span>
            <p><strong>Exemplo:</strong> ${data.example}</p>
          </div>
        </div>
        <div class="review-card-tip">
          <span aria-hidden="true">&#128204;</span>
          <span><strong>Dica:</strong> ${tip}</span>
        </div>
      `;

      content.appendChild(card);
    });
  }

  requestAnimationFrame(() => {
    panel.classList.add("review-panel-open");
  });
}

function fillStudyGuide(incorrectEntries = [], hasChecked = false) {
  const container = document.getElementById("study-guide-content");
  if (!container) {
    showAppNotice("Área de impressão do PDF não foi encontrada.");
    return;
  }
  const diagnostics = loadDiagnostics();
  container.innerHTML = "";

  const incorrectWords = new Set((incorrectEntries || []).map((e) => e.word));
  const today = new Date().toLocaleDateString("pt-BR");

  let statusText = "Guia Didático Completo de Referência";
  if (hasChecked) {
    if (incorrectWords.size === 0) {
      statusText = "16 de 16 Acertos (Excelente Domínio!)";
    } else {
      const correctCount = 16 - incorrectWords.size;
      statusText = `${correctCount} de 16 Acertos (${incorrectWords.size} em Reforço)`;
    }
  }

  // 1. Header
  const header = document.createElement("header");
  header.className = "study-print-header";
  header.innerHTML = `
    <div class="study-print-title-group">
      <h1 class="study-print-title">Guia Didático e Ilustrado de Arquitetura de Computadores</h1>
      <p class="study-print-subtitle">Material de Fixação Passo a Passo com Diagramas Esquematizados e Fluxo de Execução</p>
    </div>
    <div class="study-print-meta-grid">
      <div class="study-print-meta-card">
        <span class="study-print-meta-label">Data de Emissão</span>
        <span class="study-print-meta-val">${today}</span>
      </div>
      <div class="study-print-meta-card">
        <span class="study-print-meta-label">Conteúdo Abrangido</span>
        <span class="study-print-meta-val">16 Componentes Ilustrados</span>
      </div>
      <div class="study-print-meta-card">
        <span class="study-print-meta-label">Diagnóstico Atual</span>
        <span class="study-print-meta-val">${statusText}</span>
      </div>
    </div>
  `;
  container.appendChild(header);

  // 2. Section: Execution Flow Step-by-Step + Visual Overview Diagram
  const flowSection = document.createElement("section");
  flowSection.className = "study-print-section study-print-section-keep";
  flowSection.innerHTML = `
    <h2 class="study-print-section-title">
      <span class="study-print-section-number">1</span>
      Passo a Passo do Fluxo de Execução da Arquitetura (Ciclo de Instrução)
    </h2>
    <p class="study-print-section-desc">Veja como cada componente atua em sequência desde a leitura de uma instrução até o armazenamento definitivo:</p>
    <div class="execution-flow-diagram-box">
      <svg viewBox="0 0 680 96" class="execution-flow-svg" aria-label="Diagrama visual do fluxo passo a passo da arquitetura">
        <rect x="8" y="10" width="114" height="54" rx="6" fill="rgba(47,128,237,0.12)" stroke="#2f80ed" stroke-width="1.5"/>
        <text x="65" y="28" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f2c59">1. BUSCA (FETCH)</text>
        <text x="65" y="42" text-anchor="middle" font-size="7.5" fill="#2f80ed" font-weight="bold">Address Bus ➔ RAM</text>
        <text x="65" y="54" text-anchor="middle" font-size="7" fill="#3b516b">Localiza a instrução</text>

        <path d="M122 37h18M135 32l6 5-6 5" fill="none" stroke="#2f80ed" stroke-width="1.8" stroke-linecap="round"/>

        <rect x="144" y="10" width="114" height="54" rx="6" fill="rgba(242,153,74,0.14)" stroke="#d9822b" stroke-width="1.5"/>
        <text x="201" y="28" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f2c59">2. DECODIFICA</text>
        <text x="201" y="42" text-anchor="middle" font-size="7.5" fill="#b46312" font-weight="bold">Unidade de Controle</text>
        <text x="201" y="54" text-anchor="middle" font-size="7" fill="#3b516b">Interpreta o comando</text>

        <path d="M258 37h18M271 32l6 5-6 5" fill="none" stroke="#2f80ed" stroke-width="1.8" stroke-linecap="round"/>

        <rect x="280" y="10" width="114" height="54" rx="6" fill="rgba(42,159,99,0.14)" stroke="#2a9f63" stroke-width="1.5"/>
        <text x="337" y="28" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f2c59">3. EXECUTA</text>
        <text x="337" y="42" text-anchor="middle" font-size="7.5" fill="#1e7e4e" font-weight="bold">ULA + Registradores</text>
        <text x="337" y="54" text-anchor="middle" font-size="7" fill="#3b516b">Calcula e compara</text>

        <path d="M394 37h18M407 32l6 5-6 5" fill="none" stroke="#2f80ed" stroke-width="1.8" stroke-linecap="round"/>

        <rect x="416" y="10" width="114" height="54" rx="6" fill="rgba(155,81,224,0.12)" stroke="#9b51e0" stroke-width="1.5"/>
        <text x="473" y="28" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f2c59">4. TRANSFERE</text>
        <text x="473" y="42" text-anchor="middle" font-size="7.5" fill="#7c3aed" font-weight="bold">Data Bus &amp; DMA</text>
        <text x="473" y="54" text-anchor="middle" font-size="7" fill="#3b516b">Move blocos de dados</text>

        <path d="M530 37h18M543 32l6 5-6 5" fill="none" stroke="#2f80ed" stroke-width="1.8" stroke-linecap="round"/>

        <rect x="552" y="10" width="118" height="54" rx="6" fill="rgba(100,116,139,0.14)" stroke="#64748b" stroke-width="1.5"/>
        <text x="611" y="28" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f2c59">5. PERSISTE</text>
        <text x="611" y="42" text-anchor="middle" font-size="7.5" fill="#475569" font-weight="bold">Flash, ROM &amp; Massa</text>
        <text x="611" y="54" text-anchor="middle" font-size="7" fill="#3b516b">Grava permanentemente</text>

        <path d="M611 64v17H65V67M60 72l5-6 5 6" fill="none" stroke="#2f80ed" stroke-width="1.4" stroke-dasharray="4,3"/>
        <rect x="225" y="73" width="230" height="16" rx="8" fill="#ffffff" stroke="#c8daf0" stroke-width="1"/>
        <text x="340" y="84" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#1a569d">Ciclo contínuo sincronizado pelo clock (próxima instrução no PC)</text>
      </svg>
    </div>
    <div class="execution-flow-grid">
      <div class="execution-flow-card">
        <span class="execution-flow-step-tag">Passo 1</span>
        <h4 class="execution-flow-step-title">Busca (Fetch)</h4>
        <p class="execution-flow-step-desc">O PC nos <strong>REGISTRADORES</strong> aponta o endereço. O <strong>ADDRESS BUS</strong> busca na <strong>CACHE</strong> ou <strong>RAM</strong> e traz os bits pelo <strong>DATA BUS</strong>.</p>
      </div>
      <div class="execution-flow-card">
        <span class="execution-flow-step-tag">Passo 2</span>
        <h4 class="execution-flow-step-title">Decodificação</h4>
        <p class="execution-flow-step-desc">A <strong>UC</strong> (Unidade de Controle) interpreta o opcode da instrução e gera pulsos sincronizados de clock para os circuitos internos.</p>
      </div>
      <div class="execution-flow-card">
        <span class="execution-flow-step-tag">Passo 3</span>
        <h4 class="execution-flow-step-title">Execução</h4>
        <p class="execution-flow-step-desc">A <strong>ULA</strong> executa cálculos e comparações. Em CPUs <strong>DUALCORE</strong> ou <strong>QUADCORE</strong>, vários núcleos operam em paralelo.</p>
      </div>
      <div class="execution-flow-card">
        <span class="execution-flow-step-tag">Passo 4</span>
        <h4 class="execution-flow-step-title">E/S e Barramentos</h4>
        <p class="execution-flow-step-desc">O <strong>DATA BUS</strong> transfere dados processados. O controlador <strong>DMA</strong> move blocos de periféricos sem sobrecarregar a <strong>CPU</strong>.</p>
      </div>
      <div class="execution-flow-card">
        <span class="execution-flow-step-tag">Passo 5</span>
        <h4 class="execution-flow-step-title">Persistência</h4>
        <p class="execution-flow-step-desc">A <strong>ROM</strong>/<strong>EEPROM</strong> guarda o firmware de partida. Arquivos definitivos ficam em <strong>FLASH</strong> ou <strong>MEMÓRIA DE MASSA</strong>.</p>
      </div>
    </div>
  `;
  container.appendChild(flowSection);

  // 3. Section: Memory Hierarchy Pyramid (Properly Proportioned SVG)
  const hierarchySection = document.createElement("section");
  hierarchySection.className = "study-print-section study-print-section-keep";
  hierarchySection.innerHTML = `
    <h2 class="study-print-section-title">
      <span class="study-print-section-number">2</span>
      Pirâmide Hierárquica de Memórias (Velocidade vs. Custo vs. Capacidade)
    </h2>
    <p class="study-print-section-desc">Quanto mais próxima do processador, mais rápida e cara por byte é a memória; quanto mais na base, maior sua capacidade de armazenamento:</p>
    <div class="memory-hierarchy-box">
      <svg viewBox="0 0 680 170" class="memory-hierarchy-svg" aria-label="Pirâmide de Hierarquia de Memória">
        <!-- Left Scale Indicators -->
        <rect x="6" y="12" width="84" height="36" rx="5" fill="rgba(47,128,237,0.12)" stroke="#2f80ed" stroke-width="1"/>
        <text x="48" y="26" text-anchor="middle" font-size="8" font-weight="bold" fill="#1a569d">▲ TOPO</text>
        <text x="48" y="37" text-anchor="middle" font-size="7" fill="#0f2c59">+ Rápida / + Cara</text>
        <path d="M48 52v64M44 58l4-6 4 6M44 110l4 6 4-6" fill="none" stroke="#64748b" stroke-width="1.4" stroke-linecap="round"/>
        <rect x="6" y="120" width="84" height="36" rx="5" fill="rgba(100,116,139,0.12)" stroke="#64748b" stroke-width="1"/>
        <text x="48" y="134" text-anchor="middle" font-size="8" font-weight="bold" fill="#334155">▼ BASE</text>
        <text x="48" y="145" text-anchor="middle" font-size="7" fill="#0f2c59">+ Espaço / - Custo</text>

        <!-- Pyramid Tiers (Truncated top so text always fits comfortably inside) -->
        <polygon points="215,12 315,12 335,38 195,38" fill="rgba(235,87,87,0.18)" stroke="#eb5757" stroke-width="1.5"/>
        <text x="265" y="28" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0f2c59">1. REGISTRADORES</text>

        <polygon points="192,42 338,42 358,68 172,68" fill="rgba(47,128,237,0.18)" stroke="#2f80ed" stroke-width="1.5"/>
        <text x="265" y="58" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0f2c59">2. CACHE (L1 / L2 / L3)</text>

        <polygon points="169,72 361,72 381,98 149,98" fill="rgba(42,159,99,0.18)" stroke="#2a9f63" stroke-width="1.5"/>
        <text x="265" y="88" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0f2c59">3. MEMÓRIA RAM</text>

        <polygon points="146,102 384,102 404,128 126,128" fill="rgba(242,153,74,0.18)" stroke="#d9822b" stroke-width="1.5"/>
        <text x="265" y="118" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0f2c59">4. FLASH / EEPROM / ROM</text>

        <polygon points="123,132 407,132 427,158 103,158" fill="rgba(100,116,139,0.18)" stroke="#64748b" stroke-width="1.5"/>
        <text x="265" y="148" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0f2c59">5. MEMÓRIA DE MASSA (HD / SSD)</text>

        <!-- Right Callout Connectors & Labels -->
        <path d="M328 25h112" stroke="#eb5757" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="446" y="28" font-size="8" fill="#1f2937"><tspan font-weight="bold" fill="#b91c1c">Dentro da CPU</tspan> • Acesso em 1 ciclo de clock</text>

        <path d="M351 55h89" stroke="#2f80ed" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="446" y="58" font-size="8" fill="#1f2937"><tspan font-weight="bold" fill="#1d4ed8">Atalho SRAM</tspan> • Reduz o gargalo com a RAM</text>

        <path d="M374 85h66" stroke="#2a9f63" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="446" y="88" font-size="8" fill="#1f2937"><tspan font-weight="bold" fill="#15803d">Principal Volátil</tspan> • Programas abertos em uso</text>

        <path d="M397 115h43" stroke="#d9822b" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="446" y="118" font-size="8" fill="#1f2937"><tspan font-weight="bold" fill="#b45309">Não Volátil</tspan> • BIOS, configurações e blocos NAND</text>

        <path d="M420 145h20" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="446" y="148" font-size="8" fill="#1f2937"><tspan font-weight="bold" fill="#334155">Persistente</tspan> • Terabytes para arquivos e SO</text>
      </svg>
    </div>
  `;
  container.appendChild(hierarchySection);

  // 4. Section: 16 Illustrated Concepts with Step-by-Step Breakdown
  const cardsSection = document.createElement("section");
  cardsSection.className = "study-print-section";
  cardsSection.innerHTML = `
    <h2 class="study-print-section-title">
      <span class="study-print-section-number">3</span>
      Fichas Didáticas Ilustradas Passo a Passo (16 Componentes)
    </h2>
    <p class="study-print-section-desc">Cada ficha apresenta o diagrama esquemático, a definição técnica, o funcionamento passo a passo em 3 etapas, um exemplo prático e uma dica de fixação:</p>
  `;

  const grid = document.createElement("div");
  grid.className = "study-guide-grid";

  // Sort concepts: incorrect words first, then alphabetical
  const sortedWords = [...WORDS].sort((a, b) => {
    const aInc = incorrectWords.has(a.word) ? 1 : 0;
    const bInc = incorrectWords.has(b.word) ? 1 : 0;
    if (aInc !== bInc) return bInc - aInc;
    return a.word.localeCompare(b.word);
  });

  for (const entry of sortedWords) {
    const data = LEARNING_DATA[entry.word] || { explanation: "", example: "" };
    const steps = CONCEPT_STEPS[entry.word] || [];
    const category = CATEGORIES[entry.word] || "arquitetura";
    const categoryLabel = CATEGORY_LABELS[category] || "Componente";
    const isPriority = incorrectWords.has(entry.word);
    const difficultyCount = diagnostics[entry.word] || 0;

    const card = document.createElement("article");
    card.className = `study-guide-card ${isPriority ? "is-priority-review" : ""}`;

    const priorityCountLabel = difficultyCount > 0
      ? ` (${difficultyCount} erro${difficultyCount === 1 ? "" : "s"})`
      : "";
    const priorityBadge = isPriority
      ? `<span class="study-guide-badge priority-badge">&#9888; Reforço Prioritário${priorityCountLabel}</span>`
      : "";

    const stepsHtml = steps.length > 0
      ? `<div class="study-guide-steps-box">
          <span class="study-guide-steps-heading">Funcionamento passo a passo:</span>
          <ol class="study-guide-steps">
            ${steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
        </div>`
      : `<p class="study-guide-card-row"><strong>Como funciona:</strong> ${data.explanation}</p>`;

    card.innerHTML = `
      <div class="study-guide-card-header">
        <h3 class="study-guide-card-title">${entry.word}</h3>
        <div class="study-guide-card-badges">
          ${priorityBadge}
          <span class="study-guide-badge">${categoryLabel}</span>
        </div>
      </div>
      <div class="study-guide-card-diagram">
        ${CONCEPT_DIAGRAMS[entry.word] || ""}
      </div>
      <div class="study-guide-card-body">
        <p class="study-guide-card-row"><strong>O que é:</strong> ${entry.clue}</p>
        ${stepsHtml}
        <p class="study-guide-card-row"><strong>Na prática:</strong> ${data.example}</p>
        <div class="study-guide-tip-box">
          <strong>Dica de fixação:</strong> ${MEMORY_TIPS[entry.word]}
        </div>
      </div>
    `;

    grid.appendChild(card);
  }

  cardsSection.appendChild(grid);
  container.appendChild(cardsSection);

  // 5. Footer
  const footer = document.createElement("footer");
  footer.className = "study-print-footer";
  footer.textContent = "Guia Didático de Arquitetura Computacional — Material educativo gerado localmente via impressão nativa do navegador.";
  container.appendChild(footer);
}

function printStudyGuide() {
  document.body.classList.add("printing-study-guide");
  window.print();
}

function setupTabs() {
  const tabs = Array.from(document.querySelectorAll(".top-tab"));
  const panels = {
    crossword: document.getElementById("tab-crossword"),
    architecture: document.getElementById("tab-architecture"),
    glossary: document.getElementById("tab-glossary")
  };

  function activate(target) {
    for (const tab of tabs) {
      const isActive = tab.dataset.tabTarget === target;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    }

    for (const [name, panel] of Object.entries(panels)) {
      if (panel) {
        panel.hidden = name !== target;
        panel.classList.toggle("is-active", name === target);
      }
    }

    document.dispatchEvent(
      new CustomEvent("app:tabchange", {
        detail: { target }
      })
    );
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab.dataset.tabTarget));
  });

  activate("crossword");
}

function setupBinaryEasterEgg() {
  const trigger = document.getElementById("binary-trigger");
  const toast = document.getElementById("binary-toast");
  const closeButton = document.getElementById("binary-toast-close");
  if (!trigger || !toast || !closeButton) {
    return {
      activateMode() {},
      deactivateMode() {},
      hideToast() {}
    };
  }

  let clickStreak = 0;
  let streakTimeout = null;
  let modeTimeout = null;
  let hideToastTimeout = null;

  function playLampAnimation() {
    trigger.classList.remove("lamp-bounce");
    void trigger.offsetWidth;
    trigger.classList.add("lamp-bounce");
  }

  function hideToast() {
    toast.classList.remove("is-visible");
    if (hideToastTimeout) {
      window.clearTimeout(hideToastTimeout);
    }
    hideToastTimeout = window.setTimeout(() => {
      toast.hidden = true;
    }, 220);
  }

  function showToast() {
    if (hideToastTimeout) {
      window.clearTimeout(hideToastTimeout);
      hideToastTimeout = null;
    }
    toast.hidden = false;
    requestAnimationFrame(() => {
      toast.classList.add("is-visible");
    });
  }

  function deactivateMode() {
    document.body.classList.remove("binary-light-mode");
    trigger.classList.remove("lamp-on");
    if (modeTimeout) {
      window.clearTimeout(modeTimeout);
      modeTimeout = null;
    }
  }

  function activateMode() {
    document.body.classList.add("binary-light-mode");
    trigger.classList.add("lamp-on");
    showToast();
    if (modeTimeout) {
      window.clearTimeout(modeTimeout);
    }
    modeTimeout = window.setTimeout(() => {
      deactivateMode();
      hideToast();
    }, 8000);
  }

  trigger.addEventListener("click", () => {
    playLampAnimation();
    clickStreak += 1;
    if (streakTimeout) {
      window.clearTimeout(streakTimeout);
    }
    streakTimeout = window.setTimeout(() => {
      clickStreak = 0;
    }, 1400);

    if (clickStreak >= 3) {
      clickStreak = 0;
      activateMode();
    }
  });

  closeButton.addEventListener("click", hideToast);

  return {
    activateMode,
    deactivateMode,
    hideToast
  };
}

function setupArchitectureChallenge() {
  const bank = document.getElementById("arch-cards-bank");
  const diagram = document.getElementById("arch-diagram");
  const checkButton = document.getElementById("arch-check");
  const resetButton = document.getElementById("arch-reset");
  const solveButton = document.getElementById("arch-solve");
  const status = document.getElementById("arch-status");

  if (!bank || !diagram || !checkButton || !resetButton || !status) {
    return;
  }

  const slots = Array.from(diagram.querySelectorAll(".arch-slot"));
  if (slots.length === 0) return;

  const slotById = new Map(slots.map((slot) => [slot.dataset.slot, slot]));
  const cardsById = new Map();
  const locationByCard = new Map();
  let selectedCardId = null;

  function loadArchDiagnostics() {
    try {
      const raw = localStorage.getItem(ARCH_DIAGNOSTIC_STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return {};
      const clean = {};
      for (const [key, value] of Object.entries(parsed)) {
        if (Number.isFinite(value) && value > 0) {
          clean[key] = Math.floor(value);
        }
      }
      return clean;
    } catch {
      return {};
    }
  }

  function saveArchDiagnostics(data) {
    try {
      localStorage.setItem(ARCH_DIAGNOSTIC_STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch {
      return false;
    }
  }

  function clearSlotState() {
    slots.forEach((slot) => {
      slot.classList.remove("arch-correct", "arch-incorrect", "is-over");
      slot.removeAttribute("title");
    });
  }

  function setSelectedCard(cardId) {
    selectedCardId = cardId;
    for (const [id, card] of cardsById.entries()) {
      card.classList.toggle("is-selected", id === selectedCardId);
    }
  }

  function updateSlotHasCard(slot) {
    const hasCard = !!slot.querySelector(".arch-card");
    slot.classList.toggle("has-card", hasCard);
  }

  function moveCardToBank(cardId) {
    const card = cardsById.get(cardId);
    if (!card) return;
    const previousLocation = locationByCard.get(cardId);
    bank.appendChild(card);
    locationByCard.set(cardId, "bank");
    if (previousLocation && previousLocation !== "bank") {
      const previousSlot = slotById.get(previousLocation);
      if (previousSlot) {
        updateSlotHasCard(previousSlot);
      }
    }
  }

  function placeCardInSlot(cardId, slot) {
    const card = cardsById.get(cardId);
    if (!card || !slot) return;

    const currentLocation = locationByCard.get(cardId);
    if (currentLocation && currentLocation !== "bank") {
      const currentSlot = slotById.get(currentLocation);
      if (currentSlot && currentSlot !== slot) {
        updateSlotHasCard(currentSlot);
      }
    }

    const existingCard = slot.querySelector(".arch-card");
    if (existingCard && existingCard.dataset.cardId !== cardId) {
      moveCardToBank(existingCard.dataset.cardId);
    }

    slot.appendChild(card);
    locationByCard.set(cardId, slot.dataset.slot);
    updateSlotHasCard(slot);
    if (currentLocation && currentLocation !== "bank" && currentLocation !== slot.dataset.slot) {
      const oldSlot = slotById.get(currentLocation);
      if (oldSlot) updateSlotHasCard(oldSlot);
    }
    clearSlotState();
    setSelectedCard(null);
  }

  function createCard(component) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "arch-card";
    card.textContent = component.label;
    card.dataset.cardId = component.id;
    card.draggable = true;

    card.addEventListener("click", () => {
      if (selectedCardId === component.id) {
        setSelectedCard(null);
      } else {
        setSelectedCard(component.id);
      }
    });

    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", component.id);
      event.dataTransfer.effectAllowed = "move";
      setSelectedCard(component.id);
    });

    cardsById.set(component.id, card);
    locationByCard.set(component.id, "bank");
    return card;
  }

  function evaluateDiagram() {
    clearSlotState();
    let correct = 0;
    const diagnostics = loadArchDiagnostics();

    slots.forEach((slot) => {
      const card = slot.querySelector(".arch-card");
      const expected = slot.dataset.expected;
      const isCorrect = !!card && card.dataset.cardId === expected;
      slot.classList.add(isCorrect ? "arch-correct" : "arch-incorrect");
      if (isCorrect) {
        correct += 1;
      } else {
        slot.title = `Incorreto! Esperado: ${expected}`;
        diagnostics[expected] = (diagnostics[expected] || 0) + 1;
      }
    });

    saveArchDiagnostics(diagnostics);
    status.textContent = `${correct} de ${slots.length} componentes corretos`;
  }

  function resetDiagram() {
    clearSlotState();
    setSelectedCard(null);
    status.textContent = `0 de ${slots.length} componentes corretos`;

    const shuffled = [...ARCH_COMPONENTS].sort(() => Math.random() - 0.5);
    for (const component of shuffled) {
      moveCardToBank(component.id);
    }
    slots.forEach((slot) => updateSlotHasCard(slot));
  }

  function solveDiagram() {
    clearSlotState();
    setSelectedCard(null);
    slots.forEach((slot) => {
      const expected = slot.dataset.expected;
      placeCardInSlot(expected, slot);
      slot.classList.add("arch-correct");
    });
    status.textContent = `${slots.length} de ${slots.length} componentes corretos`;
  }

  slots.forEach((slot) => {
    slot.addEventListener("dragover", (event) => {
      event.preventDefault();
      slot.classList.add("is-over");
    });

    slot.addEventListener("dragleave", () => {
      slot.classList.remove("is-over");
    });

    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      slot.classList.remove("is-over");
      const cardId = event.dataTransfer.getData("text/plain") || selectedCardId;
      if (!cardId) return;
      placeCardInSlot(cardId, slot);
    });

    slot.addEventListener("click", () => {
      if (!selectedCardId) return;
      placeCardInSlot(selectedCardId, slot);
    });

    slot.addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && selectedCardId) {
        event.preventDefault();
        placeCardInSlot(selectedCardId, slot);
      }
    });
  });

  bank.addEventListener("click", (event) => {
    const maybeCard = event.target.closest(".arch-card");
    if (!maybeCard && selectedCardId) {
      setSelectedCard(null);
    }
  });

  checkButton.addEventListener("click", evaluateDiagram);
  resetButton.addEventListener("click", resetDiagram);
  if (solveButton) {
    solveButton.addEventListener("click", solveDiagram);
  }

  document.addEventListener("app:tabchange", (event) => {
    if (event.detail?.target !== "architecture") {
      setSelectedCard(null);
    }
  });

  ARCH_COMPONENTS.forEach((component) => {
    bank.appendChild(createCard(component));
  });
  resetDiagram();
}

function setupGlossary() {
  const cardsContainer = document.getElementById("glossary-cards");
  const searchInput = document.getElementById("glossary-search");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!cardsContainer) return;

  const cards = [];

  WORDS.forEach((item) => {
    const word = item.word;
    const cat = CATEGORIES[word] || "arquitetura";
    const learning = LEARNING_DATA[word] || {};
    const diagram = CONCEPT_DIAGRAMS[word] || "";
    const tip = MEMORY_TIPS[word] || "";

    const card = document.createElement("article");
    card.className = "glossary-card";
    card.dataset.category = cat;
    card.dataset.word = word.toLowerCase();
    card.dataset.search = `${word} ${item.clue} ${learning.explanation || ""} ${learning.example || ""} ${tip}`.toLowerCase();

    card.innerHTML = `
      <div class="review-card-diagram" aria-hidden="true">
        ${diagram}
      </div>
      <div class="glossary-card-header">
        <h3 class="glossary-card-title">${word}</h3>
        <span class="glossary-badge">${CATEGORY_LABELS[cat] || cat}</span>
      </div>
      <div class="glossary-card-body">
        <p><strong>Definição:</strong> ${item.clue}</p>
        <p><strong>Funcionamento:</strong> ${learning.explanation || ""} ${learning.example || ""}</p>
        <div class="glossary-tip">
          <span class="glossary-tip-icon">&#128161;</span>
          <span><strong>Dica:</strong> ${tip}</span>
        </div>
      </div>
    `;

    cardsContainer.appendChild(card);
    cards.push(card);
  });

  let currentCategory = "all";
  let currentSearch = "";

  function filterCards() {
    cards.forEach((card) => {
      const matchCat = currentCategory === "all" || card.dataset.category === currentCategory;
      const matchSearch = !currentSearch || card.dataset.search.includes(currentSearch);
      card.classList.toggle("is-hidden", !(matchCat && matchSearch));
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      filterCards();
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      currentCategory = btn.dataset.filter || "all";
      filterCards();
    });
  });
}

function setupControls(state) {
  const { entries, cellsByKey, inputsByKey, clueItemByWordKey, interactions, timer } = state;
  const totalWords = entries.length;
  const checkButton = document.getElementById("check-button");
  const resetButton = document.getElementById("reset-button");
  const pdfButton = document.getElementById("pdf-button");
  const hintButton = document.getElementById("hint-button");
  const toggleStudyBtn = document.getElementById("toggle-study-button");
  const toggleStudyText = document.getElementById("toggle-study-btn-text");
  const reviewPanel = document.getElementById("review-panel");
  const reviewToggleBtn = document.getElementById("review-toggle-btn");
  const reviewToggleText = document.getElementById("review-toggle-text");

  if (!checkButton || !resetButton || !pdfButton) return;

  const binaryMode = setupBinaryEasterEgg();
  const revealedWordKeys = new Set();
  let lastIncorrectEntries = [];
  let hasCheckedAtLeastOnce = false;
  let previousResults = null;

  updateProgress(0, totalWords);
  updateReinforceIndicator();

  function setStudyPanelVisibility(show, scroll = false) {
    if (!reviewPanel) return;
    if (show) {
      reviewPanel.hidden = false;
      reviewPanel.classList.remove("is-collapsed");
      reviewPanel.classList.add("review-panel-open");
      if (toggleStudyText) toggleStudyText.textContent = "Ocultar Aprendizagem";
      if (reviewToggleText) reviewToggleText.textContent = "Ocultar revisão";
      if (reviewToggleBtn) reviewToggleBtn.setAttribute("aria-expanded", "true");
      if (scroll) {
        reviewPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      reviewPanel.classList.add("is-collapsed");
      reviewPanel.classList.remove("review-panel-open");
      if (toggleStudyText) toggleStudyText.textContent = "Mostrar Aprendizagem";
      if (reviewToggleText) reviewToggleText.textContent = "Mostrar revisão";
      if (reviewToggleBtn) reviewToggleBtn.setAttribute("aria-expanded", "false");
    }
  }

  if (toggleStudyBtn) {
    toggleStudyBtn.addEventListener("click", () => {
      const isCurrentlyOpen = !reviewPanel.hidden && !reviewPanel.classList.contains("is-collapsed");
      setStudyPanelVisibility(!isCurrentlyOpen, !isCurrentlyOpen);
    });
  }

  if (reviewToggleBtn) {
    reviewToggleBtn.addEventListener("click", () => {
      const isCurrentlyOpen = !reviewPanel.classList.contains("is-collapsed");
      setStudyPanelVisibility(!isCurrentlyOpen, false);
    });
  }

  function onRevealWord(entry) {
    timer.start();
    revealedWordKeys.add(entry.key);
    for (let i = 0; i < entry.cells.length; i += 1) {
      const cellKey = entry.cells[i];
      const input = inputsByKey.get(cellKey);
      if (input) {
        input.value = entry.word[i];
      }
    }
    const { results, correctCount } = evaluateWords(entries, inputsByKey);
    applyValidationStyles(entries, results, cellsByKey, clueItemByWordKey, onRevealWord, revealedWordKeys, previousResults);
    updateProgress(correctCount, totalWords);
    lastIncorrectEntries = entries.filter((e) => !results.get(e.key).isCorrect);
    if (correctCount === totalWords) {
      timer.stop();
      showCelebration(timer.getTimeFormatted());
      binaryMode.activateMode();
    }
  }

  if (hintButton) {
    hintButton.addEventListener("click", () => {
      timer.start();
      const activeWord = interactions.getActiveWord();
      if (!activeWord) {
        showAppNotice("Selecione uma palavra no tabuleiro para receber uma dica.");
        return;
      }

      let revealed = false;
      for (let i = 0; i < activeWord.cells.length; i += 1) {
        const cellKey = activeWord.cells[i];
        const input = inputsByKey.get(cellKey);
        const cell = cellsByKey.get(cellKey);
        const expectedLetter = activeWord.word[i];

        if (input && input.value !== expectedLetter) {
          input.value = expectedLetter;
          if (cell) {
            cell.classList.add("cell-hint-revealed");
          }
          interactions.setActiveCell(cellKey);
          revealed = true;
          break;
        }
      }

      if (revealed) {
        const { correctCount } = evaluateWords(entries, inputsByKey);
        updateProgress(correctCount, totalWords);
        if (correctCount === totalWords) {
          timer.stop();
          showCelebration(timer.getTimeFormatted());
          binaryMode.activateMode();
        }
      } else {
        showAppNotice(`Dica para ${activeWord.word}: ${MEMORY_TIPS[activeWord.word]}`, "info");
      }
    });
  }

  checkButton.addEventListener("click", () => {
    timer.start();
    const { results, correctCount } = evaluateWords(entries, inputsByKey);
    applyValidationStyles(entries, results, cellsByKey, clueItemByWordKey, onRevealWord, revealedWordKeys, previousResults);
    updateProgress(correctCount, totalWords);
    lastIncorrectEntries = entries.filter((entry) => !results.get(entry.key).isCorrect);
    registerDifficulties(lastIncorrectEntries.map((entry) => entry.word));
    updateReinforceIndicator();
    hasCheckedAtLeastOnce = true;
    previousResults = results;

    setStudyPanelVisibility(true, true);

    if (correctCount === totalWords) {
      timer.stop();
      showCelebration(timer.getTimeFormatted());
      binaryMode.activateMode();
    }
  });

  resetButton.addEventListener("click", () => {
    for (const input of inputsByKey.values()) {
      input.value = "";
    }
    revealedWordKeys.clear();
    clearValidationStyles(cellsByKey, clueItemByWordKey);
    updateProgress(0, totalWords);
    timer.reset();

    const clueBar = document.getElementById("clue-bar");
    if (clueBar) {
      clueBar.hidden = true;
    }

    lastIncorrectEntries = [];
    previousResults = null;
    binaryMode.deactivateMode();
    binaryMode.hideToast();
    const firstInput = inputsByKey.get(entries[0].cells[0]);
    if (firstInput) {
      firstInput.focus();
      firstInput.select();
    }
  });

  pdfButton.addEventListener("click", () => {
    fillStudyGuide(lastIncorrectEntries, hasCheckedAtLeastOnce);
    printStudyGuide();
  });

  window.addEventListener("afterprint", () => {
    document.body.classList.remove("printing-study-guide");
  });
}

function init() {
  try {
    setupTheme();
    setupTabs();
    setupArchitectureChallenge();
    setupGlossary();

    const timer = setupTimer();
    const gridData = validateAndBuildGrid(WORDS);
    const startNumbers = getStartNumbers(WORDS);
    const { entries, cellToWords } = buildGameModel(WORDS);
    const { cellsByKey, inputsByKey } = renderBoard(gridData, startNumbers);

    let interactions = null;

    const clueItemByWordKey = renderClues(entries, startNumbers, (clickedWord) => {
      if (interactions) {
        interactions.selectWord(clickedWord);
      }
    });

    interactions = setupInteractions({
      entries,
      cellToWords,
      cellsByKey,
      inputsByKey,
      clueItemByWordKey,
      startNumbers,
      gridRows: gridData.rows,
      gridCols: gridData.cols,
      timer
    });

    // Pre-populate learning panel immediately
    renderLearningPanel(entries);

    setupControls({
      entries,
      cellsByKey,
      inputsByKey,
      clueItemByWordKey,
      interactions,
      timer
    });
  } catch (error) {
    showAppNotice("Ocorreu uma falha ao inicializar o jogo. Recarregue a página.");
    console.error(error);
  }
}

init();
