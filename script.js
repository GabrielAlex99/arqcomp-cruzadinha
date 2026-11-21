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
    clue: "Memória principal volátil de leitura e escrita que armazena programas ativos durante o uso.",
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

const LEARNING_DATA = {
  CPU: {
    explanation:
      "A CPU coordena o ciclo buscar-decodificar-executar e controla o processamento geral do sistema.",
    example:
      "Exemplo: ao abrir um navegador, a CPU interpreta instruções e distribui tarefas."
  },
  ULA: {
    explanation:
      "A ULA executa operações aritméticas e lógicas, como soma, subtração e comparações binárias.",
    example:
      "Exemplo: calcular a média de notas usa somas e comparações feitas na ULA."
  },
  UC: {
    explanation:
      "A UC define sinais de controle para sincronizar CPU, registradores, memória e barramentos.",
    example:
      "Exemplo: durante um LOAD, a UC aciona leitura da RAM e escrita em registrador."
  },
  REGISTRADORES: {
    explanation:
      "Registradores armazenam dados imediatos com latência mínima dentro do processador.",
    example:
      "Exemplo: o contador de programa e acumuladores guardam endereços e resultados temporários."
  },
  RAM: {
    explanation:
      "A RAM mantém dados e código em uso; é volátil e perde conteúdo sem energia.",
    example:
      "Exemplo: editores e jogos carregam recursos na RAM para resposta rápida."
  },
  ROM: {
    explanation:
      "A ROM guarda firmware essencial e instruções permanentes de inicialização.",
    example:
      "Exemplo: BIOS/UEFI inicia testes de hardware antes de carregar o sistema operacional."
  },
  EEPROM: {
    explanation:
      "A EEPROM permite regravação elétrica byte a byte em memória não volátil.",
    example:
      "Exemplo: armazenamento de configurações persistentes de dispositivos embarcados."
  },
  FLASH: {
    explanation:
      "Memória flash é não volátil e regravada em blocos, com alta densidade de armazenamento.",
    example:
      "Exemplo: SSDs e pendrives usam flash para guardar arquivos sem energia."
  },
  CACHE: {
    explanation:
      "Cache reduz a diferença de velocidade entre CPU e RAM com dados acessados frequentemente.",
    example:
      "Exemplo: loops repetitivos aproveitam cache L1/L2 para reduzir leituras na RAM."
  },
  MEMORIADEMASSA: {
    explanation:
      "Memória de massa oferece grande capacidade não volátil para armazenamento permanente.",
    example:
      "Exemplo: HD/SSD guardam sistema operacional, documentos e aplicações instaladas."
  },
  DMA: {
    explanation:
      "DMA transfere blocos de dados entre periféricos e RAM sem ocupar continuamente a CPU.",
    example:
      "Exemplo: controladora de disco move dados para memória enquanto a CPU executa outro processo."
  },
  ADDRESSBUS: {
    explanation:
      "O barramento de endereços seleciona posições de memória e linhas de I/O a acessar.",
    example:
      "Exemplo: ao ler um byte, a CPU envia o endereço exato pelo ADDRESSBUS."
  },
  DATABUS: {
    explanation:
      "O barramento de dados transporta efetivamente valores entre CPU, memória e periféricos.",
    example:
      "Exemplo: uma instrução carregada da RAM chega ao processador via DATABUS."
  },
  MICROCONTROLADOR: {
    explanation:
      "Microcontrolador integra CPU, memória e periféricos no mesmo chip para sistemas dedicados.",
    example:
      "Exemplo: controle de temperatura em eletrodomésticos com sensores e atuadores."
  },
  DUALCORE: {
    explanation:
      "Dual-core possui dois núcleos físicos capazes de processar tarefas em paralelo.",
    example:
      "Exemplo: um núcleo renderiza vídeo enquanto outro mantém interface responsiva."
  },
  QUADCORE: {
    explanation:
      "Quad-core integra quatro núcleos físicos para maior paralelismo e melhor multitarefa.",
    example:
      "Exemplo: editar imagens, tocar música e navegar simultaneamente com menor travamento."
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
    li.setAttribute("title", "Clique para focar esta palavra no tabuleiro");

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
  dirSpan.textContent = entry.dir === "H" ? "H" : "V";
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
    stats.textContent = `Tempo total: ${timerFormatted} | Todos os 16 conceitos acertados!`;
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

function applyValidationStyles(entries, results, cellsByKey, clueItemByWordKey, onRevealWord, previousResults = null) {
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
      const item = document.createElement("article");
      item.className = "review-item";
      item.style.setProperty("--delay", `${index * 35}ms`);

      const title = document.createElement("h3");
      title.textContent = entry.word;

      const text = document.createElement("p");
      text.textContent = `${data.explanation} ${data.example}`;

      item.appendChild(title);
      item.appendChild(text);
      content.appendChild(item);
    });
  }

  panel.hidden = false;
  panel.classList.remove("review-panel-open");
  requestAnimationFrame(() => {
    panel.classList.add("review-panel-open");
    const items = content.querySelectorAll(".review-item");
    items.forEach((item) => item.classList.remove("review-item-open"));
    requestAnimationFrame(() => {
      items.forEach((item) => item.classList.add("review-item-open"));
    });
  });
}

function fillStudyGuide(incorrectEntries) {
  const container = document.getElementById("study-guide-content");
  if (!container) {
    showAppNotice("Área de impressão do PDF não foi encontrada.");
    return;
  }
  const diagnostics = loadDiagnostics();
  container.innerHTML = "";

  if (incorrectEntries.length === 0) {
    const message = document.createElement("p");
    message.textContent = "Nenhum conceito com erro na última conferência. Parabéns pelo domínio do conteúdo!";
    container.appendChild(message);
    return;
  }

  const dateLine = document.createElement("p");
  dateLine.textContent = `Gerado em: ${new Date().toLocaleDateString("pt-BR")}`;
  container.appendChild(dateLine);

  for (const entry of incorrectEntries) {
    const data = LEARNING_DATA[entry.word];
    const item = document.createElement("article");
    item.className = "study-guide-item";

    const title = document.createElement("h3");
    title.textContent = entry.word;

    const definition = document.createElement("p");
    definition.innerHTML = `<strong>Definição:</strong> ${entry.clue}`;

    const functioning = document.createElement("p");
    functioning.innerHTML = `<strong>Funcionamento na arquitetura:</strong> ${data.explanation} ${data.example}`;

    const tip = document.createElement("p");
    tip.innerHTML = `<strong>Dica de memorização:</strong> ${MEMORY_TIPS[entry.word]}`;

    const history = document.createElement("p");
    history.innerHTML = `<strong>Frequência de dificuldade:</strong> ${diagnostics[entry.word] || 0} conferência(s).`;

    item.appendChild(title);
    item.appendChild(definition);
    item.appendChild(functioning);
    item.appendChild(tip);
    item.appendChild(history);
    container.appendChild(item);
  }
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
    const tip = MEMORY_TIPS[word] || "";

    const card = document.createElement("article");
    card.className = "glossary-card";
    card.dataset.category = cat;
    card.dataset.word = word.toLowerCase();
    card.dataset.search = `${word} ${item.clue} ${learning.explanation || ""} ${learning.example || ""} ${tip}`.toLowerCase();

    card.innerHTML = `
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
  const reviewPanel = document.getElementById("review-panel");

  if (!checkButton || !resetButton || !pdfButton) return;

  const binaryMode = setupBinaryEasterEgg();
  let lastIncorrectEntries = [];
  let hasCheckedAtLeastOnce = false;
  let previousResults = null;

  updateProgress(0, totalWords);
  updateReinforceIndicator();

  function onRevealWord(entry) {
    timer.start();
    for (let i = 0; i < entry.cells.length; i += 1) {
      const cellKey = entry.cells[i];
      const input = inputsByKey.get(cellKey);
      const cell = cellsByKey.get(cellKey);
      if (input && cell) {
        input.value = entry.word[i];
        cell.classList.add("cell-revealed");
      }
    }
    const { results, correctCount } = evaluateWords(entries, inputsByKey);
    applyValidationStyles(entries, results, cellsByKey, clueItemByWordKey, onRevealWord, previousResults);
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

      if (!revealed) {
        showAppNotice(`Dica para ${activeWord.word}: ${MEMORY_TIPS[activeWord.word]}`, "info");
      }
    });
  }

  checkButton.addEventListener("click", () => {
    timer.start();
    const { results, correctCount } = evaluateWords(entries, inputsByKey);
    applyValidationStyles(entries, results, cellsByKey, clueItemByWordKey, onRevealWord, previousResults);
    updateProgress(correctCount, totalWords);
    lastIncorrectEntries = entries.filter((entry) => !results.get(entry.key).isCorrect);
    registerDifficulties(lastIncorrectEntries.map((entry) => entry.word));
    updateReinforceIndicator();
    hasCheckedAtLeastOnce = true;
    previousResults = results;
    renderLearningPanel(entries);

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
    clearValidationStyles(cellsByKey, clueItemByWordKey);
    updateProgress(0, totalWords);
    timer.reset();
    if (reviewPanel) {
      reviewPanel.hidden = true;
      reviewPanel.classList.remove("review-panel-open");
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
    if (!hasCheckedAtLeastOnce) {
      showAppNotice("Primeiro clique em Conferir para gerar o material personalizado.", "warning");
      return;
    }

    fillStudyGuide(lastIncorrectEntries);
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
