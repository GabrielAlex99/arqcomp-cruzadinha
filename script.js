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
  board.style.gridTemplateColumns = `repeat(${gridData.cols}, 34px)`;
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

function renderClues(words, startNumbers) {
  const acrossList = document.getElementById("across-clues");
  const downList = document.getElementById("down-clues");
  const clueItemByWordKey = new Map();

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
    clueItemByWordKey.set(item.key, li);

    if (item.dir === "H") {
      acrossList.appendChild(li);
    } else {
      downList.appendChild(li);
    }
  }

  return clueItemByWordKey;
}

function injectInteractionStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .cell.word-highlight { background: #d8e9ff; }
    .cell.current-cell { background: #a9ccff; }
    .clue-active { background: #fff0b8; font-weight: 700; padding: 1px 2px; }
  `;
  document.head.appendChild(style);
}

function setupInteractions(state) {
  const {
    entries,
    cellToWords,
    cellsByKey,
    inputsByKey,
    clueItemByWordKey,
    gridRows,
    gridCols
  } = state;

  const wordByKey = new Map(entries.map((entry) => [entry.key, entry]));
  let activeCellKey = entries[0].cells[0];
  let activeDirection = entries[0].dir;
  let activeWordKey = entries[0].key;
  let highlightedCells = [];
  let highlightedClue = null;
  let lastClickedCellKey = null;

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
  }

  function setActiveCell(cellKey, options = {}) {
    if (!inputsByKey.has(cellKey)) return;

    const { preferredDirection = null, toggleDirection = false, focus = true } = options;
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

    if (focus) {
      const input = inputsByKey.get(cellKey);
      input.focus();
      input.select();
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
      setActiveCell(cellKey, { focus: false });
      lastClickedCellKey = null;
    });

    input.addEventListener("click", () => {
      handleCellClick(cellKey);
    });

    input.addEventListener("input", (event) => {
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
}

function init() {
  const gridData = validateAndBuildGrid(WORDS);
  const startNumbers = getStartNumbers(WORDS);
  const { entries, cellToWords } = buildGameModel(WORDS);
  const { cellsByKey, inputsByKey } = renderBoard(gridData, startNumbers);
  const clueItemByWordKey = renderClues(entries, startNumbers);
  injectInteractionStyles();
  setupInteractions({
    entries,
    cellToWords,
    cellsByKey,
    inputsByKey,
    clueItemByWordKey,
    gridRows: gridData.rows,
    gridCols: gridData.cols
  });
}

init();
