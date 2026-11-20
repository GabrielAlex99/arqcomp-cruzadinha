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

function renderBoard(words, gridData, startNumbers) {
  const board = document.getElementById("board");
  board.style.gridTemplateColumns = `repeat(${gridData.cols}, 34px)`;

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
        input.addEventListener("input", (event) => {
          event.target.value = event.target.value.toUpperCase().replace(/[^A-Z]/g, "");
        });
        cell.appendChild(input);

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
}

function renderClues(words, startNumbers) {
  const acrossList = document.getElementById("across-clues");
  const downList = document.getElementById("down-clues");

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

    if (item.dir === "H") {
      acrossList.appendChild(li);
    } else {
      downList.appendChild(li);
    }
  }
}

function init() {
  const gridData = validateAndBuildGrid(WORDS);
  const startNumbers = getStartNumbers(WORDS);
  renderBoard(WORDS, gridData, startNumbers);
  renderClues(WORDS, startNumbers);
}

init();
