/* ==========================================================================
   Ilustrações didáticas (SVG inline, sem bibliotecas externas)
   - Desafio: cenas e ícones que explicam a arquitetura sem revelar respostas
   - Glossário: versão ilustrada em quadrinhos ("A grande aventura do Bit")
   ========================================================================== */

const C_INK = "#1b2a41";
const GLOSSARY_MODE_STORAGE_KEY = "cruzadinha_arqcomp_glossario_modo_v1";

const stk = (width = 2.4) =>
  `stroke="${C_INK}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"`;

function ctext(x, y, str, size = 11, fill = C_INK, weight = 800, anchor = "middle") {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}" font-family="'Segoe UI', Arial, sans-serif">${str}</text>`;
}

/* ---------- Personagem: Bit, o bit curioso ---------- */
function comicBit(x, y, s = 1, mood = "happy") {
  const mouth =
    mood === "wow"
      ? `<ellipse cx="0" cy="11" rx="4" ry="5" fill="${C_INK}"/>`
      : `<path d="M-8 8 Q0 17 8 8" fill="none" ${stk(2.2)}/>`;
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <path d="M0 -25 V-32" fill="none" ${stk(2.4)}/>
    <circle cx="0" cy="-36" r="4" fill="#eb5757" ${stk(2)}/>
    <path d="M-23 4 L-33 14 M23 4 L33 14" fill="none" ${stk(2.6)}/>
    <path d="M-9 24 V33 M9 24 V33" fill="none" ${stk(3)}/>
    <ellipse cx="0" cy="0" rx="23" ry="25" fill="#ffd54f" ${stk(2.5)}/>
    <circle cx="-8" cy="-6" r="6.5" fill="#fff" ${stk(1.8)}/>
    <circle cx="8" cy="-6" r="6.5" fill="#fff" ${stk(1.8)}/>
    <circle cx="-7" cy="-5" r="2.6" fill="${C_INK}"/>
    <circle cx="9" cy="-5" r="2.6" fill="${C_INK}"/>
    <circle cx="-15" cy="6" r="3" fill="#ff9aa2" opacity="0.75"/>
    <circle cx="15" cy="6" r="3" fill="#ff9aa2" opacity="0.75"/>
    ${mouth}
    ${ctext(0, 22, "01", 7.5, "#a9741a", 800)}
  </g>`;
}

/* ---------- Balão de fala ---------- */
function comicBubble(x, y, lines, tx, ty) {
  const w = Math.max(...lines.map((l) => l.length)) * 5.9 + 18;
  const h = lines.length * 13 + 12;
  const baseX = Math.min(Math.max(tx, x + 14), x + w - 14);
  const tspans = lines
    .map((l, i) => `<tspan x="${x + w / 2}" y="${y + 17 + i * 13}">${l}</tspan>`)
    .join("");
  return `<path d="M${tx} ${ty} L${baseX - 7} ${y + h - 1} L${baseX + 7} ${y + h - 1} Z" fill="#fff" ${stk(2)}/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" fill="#fff" ${stk(2)}/>
    <rect x="${baseX - 5.5}" y="${y + h - 2}" width="11" height="3.6" fill="#fff"/>
    <text text-anchor="middle" font-size="10.5" font-weight="700" fill="${C_INK}" font-family="'Segoe UI', Arial, sans-serif">${tspans}</text>`;
}

function comicFace(cx, cy, gap = 12, r = 5) {
  return `<circle cx="${cx - gap}" cy="${cy}" r="${r}" fill="#fff" ${stk(1.6)}/>
    <circle cx="${cx + gap}" cy="${cy}" r="${r}" fill="#fff" ${stk(1.6)}/>
    <circle cx="${cx - gap + 1}" cy="${cy + 1}" r="${(r * 0.45).toFixed(1)}" fill="${C_INK}"/>
    <circle cx="${cx + gap + 1}" cy="${cy + 1}" r="${(r * 0.45).toFixed(1)}" fill="${C_INK}"/>
    <path d="M${cx - gap * 0.6} ${cy + r + 5} Q${cx} ${cy + r + 12} ${cx + gap * 0.6} ${cy + r + 5}" fill="none" ${stk(2)}/>`;
}

function comicChip(x, y, w, h, fill) {
  let pins = "";
  const n = Math.max(2, Math.floor((h - 16) / 18));
  for (let i = 0; i < n; i += 1) {
    const py = y + 12 + i * ((h - 24) / Math.max(1, n - 1));
    pins += `<rect x="${x - 9}" y="${py - 3.5}" width="11" height="7" rx="2" fill="#cbd5e1" ${stk(1.8)}/>
      <rect x="${x + w - 2}" y="${py - 3.5}" width="11" height="7" rx="2" fill="#cbd5e1" ${stk(1.8)}/>`;
  }
  return `${pins}<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" ${stk()}/>`;
}

function comicCore(x, y, color) {
  return `<rect x="${x}" y="${y}" width="46" height="46" rx="9" fill="${color}" ${stk()}/>${comicFace(x + 23, y + 20, 9, 4.2)}`;
}

function comicTruck(x, y, dir, color) {
  return `<g transform="translate(${x} ${y}) scale(${dir} 1)">
    <rect x="-32" y="-26" width="36" height="26" rx="3" fill="${color}" ${stk(2)}/>
    <rect x="6" y="-18" width="19" height="18" rx="3" fill="#fff" ${stk(2)}/>
    <rect x="14" y="-14" width="8" height="7" rx="1" fill="#bfe0ff"/>
    <circle cx="-18" cy="2" r="6" fill="${C_INK}"/>
    <circle cx="14" cy="2" r="6" fill="${C_INK}"/>
  </g>`;
}

function comicSvg(bg, label, inner) {
  return `<svg viewBox="0 0 360 220" class="comic-svg" role="img" aria-label="${label}"><rect width="360" height="220" fill="${bg}"/>${inner}</svg>`;
}

/* ---------- Nomes legíveis para exibir na interface ---------- */
const CONCEPT_NAMES = {
  CPU: "CPU",
  ULA: "ULA",
  UC: "UC",
  REGISTRADORES: "Registradores",
  RAM: "RAM",
  ROM: "ROM",
  EEPROM: "EEPROM",
  FLASH: "Flash",
  CACHE: "Cache",
  MEMORIADEMASSA: "Memória de Massa",
  DMA: "DMA",
  ADDRESSBUS: "Address Bus",
  DATABUS: "Data Bus",
  MICROCONTROLADOR: "Microcontrolador",
  DUALCORE: "Dual-Core",
  QUADCORE: "Quad-Core"
};

/* ==========================================================================
   QUADRINHOS: "A grande aventura do Bit"
   ========================================================================== */
const COMIC_PANELS = [
  {
    title: "Conheça o chefe",
    concepts: ["CPU"],
    caption:
      "O Bit quer somar 2 + 3. Ele chega à CPU, o cérebro do computador, que busca, decodifica e executa cada instrução.",
    svg: () =>
      comicSvg(
        "#e8f1ff",
        "O Bit chega à CPU, o cérebro do computador, e pede para somar 2 + 3",
        comicChip(170, 78, 130, 96, "#4f8df5") +
          `<rect x="190" y="94" width="90" height="64" rx="8" fill="#6ea6ff" ${stk(1.8)}/>` +
          `<path d="M205 78 L211 58 L225 70 L235 54 L245 70 L259 58 L265 78 Z" fill="#ffd54f" ${stk(2)}/>` +
          comicFace(235, 118, 14, 7) +
          `<rect x="200" y="182" width="70" height="22" rx="7" fill="#ffd54f" ${stk(2)}/>` +
          ctext(235, 198, "CPU", 13) +
          comicBit(52, 150, 1.1, "wow") +
          `<path d="M92 146 C112 140 134 138 156 134" fill="none" ${stk(2)} stroke-dasharray="5 5"/>` +
          `<path d="M150 127 L162 133 L151 141 Z" fill="${C_INK}"/>` +
          comicBubble(8, 12, ["Quero somar", "2 + 3!"], 50, 104) +
          comicBubble(188, 6, ["Sou o cérebro:", "busco e executo!"], 226, 56)
      )
  },
  {
    title: "Mais cabeças, mais rapidez",
    concepts: ["DUALCORE", "QUADCORE"],
    caption:
      "Cada núcleo é como um mini-processador. O Dual-Core tem 2 e o Quad-Core tem 4: quanto mais núcleos, mais tarefas ao mesmo tempo.",
    svg: () =>
      comicSvg(
        "#eaf8f0",
        "Dual-Core com dois núcleos ao lado de Quad-Core com quatro núcleos",
        `<rect x="16" y="64" width="124" height="74" rx="12" fill="#fff" ${stk(2)} stroke-dasharray="6 4"/>` +
          comicCore(26, 78, "#4f8df5") +
          comicCore(84, 78, "#4f8df5") +
          `<rect x="34" y="146" width="88" height="22" rx="7" fill="#ffd54f" ${stk(2)}/>` +
          ctext(78, 162, "DUAL-CORE", 11.5) +
          ctext(78, 186, "2 núcleos", 10, C_INK, 700) +
          `<rect x="204" y="38" width="124" height="128" rx="12" fill="#fff" ${stk(2)} stroke-dasharray="6 4"/>` +
          comicCore(214, 50, "#43b581") +
          comicCore(272, 50, "#43b581") +
          comicCore(214, 108, "#43b581") +
          comicCore(272, 108, "#43b581") +
          `<rect x="222" y="174" width="88" height="22" rx="7" fill="#ffd54f" ${stk(2)}/>` +
          ctext(266, 190, "QUAD-CORE", 11.5) +
          ctext(266, 212, "4 núcleos", 10, C_INK, 700) +
          `<circle cx="172" cy="104" r="16" fill="#ffd54f" ${stk(2)}/>` +
          ctext(172, 109, "VS", 12) +
          comicBubble(28, 8, ["Mais núcleos =", "mais tarefas juntas!"], 78, 62)
      )
  },
  {
    title: "Dentro da CPU",
    concepts: ["UC", "ULA", "REGISTRADORES"],
    caption:
      "A UC é a regente que dá as ordens. A ULA é a calculadora que faz contas e comparações. Os Registradores são os bolsos super rápidos que guardam os valores do momento.",
    svg: () =>
      comicSvg(
        "#fff4e5",
        "Dentro da CPU: a UC regente, a ULA calculadora e os registradores como gavetas",
        `<rect x="12" y="10" width="336" height="200" rx="16" fill="#dbe9ff" ${stk(2.4)}/>` +
          ctext(180, 30, "DENTRO DA CPU", 11.5) +
          [24, 130, 236]
            .map((x) => `<rect x="${x}" y="42" width="100" height="156" rx="10" fill="#fff" ${stk(2)}/>`)
            .join("") +
          // UC: regente
          `<circle cx="74" cy="80" r="11" fill="#ffd9b3" ${stk(2)}/>` +
          `<path d="M57 128 L65 94 L83 94 L91 128 Z" fill="#2d3e5f" ${stk(2)}/>` +
          `<path d="M86 102 L112 78" fill="none" ${stk(2.4)}/>` +
          `<circle cx="114" cy="76" r="3" fill="#eb5757" ${stk(1.5)}/>` +
          ctext(74, 156, "UC", 15) +
          ctext(74, 172, "dá as ordens", 9.5, C_INK, 700) +
          ctext(74, 186, "(a regente)", 9, "#4a5f7a", 600) +
          // ULA: calculadora
          `<rect x="150" y="60" width="60" height="80" rx="8" fill="#43b581" ${stk(2)}/>` +
          `<rect x="158" y="68" width="44" height="17" rx="3" fill="#e8fff3" ${stk(1.6)}/>` +
          ctext(198, 81, "5", 13) +
          [165, 180, 195].map((cx) => `<circle cx="${cx}" cy="100" r="5.5" fill="#fff" ${stk(1.4)}/>`).join("") +
          [165, 180, 195].map((cx) => `<circle cx="${cx}" cy="116" r="5.5" fill="#fff" ${stk(1.4)}/>`).join("") +
          [165, 180, 195].map((cx) => `<circle cx="${cx}" cy="130" r="4" fill="#fff" ${stk(1.4)}/>`).join("") +
          ctext(165, 103, "+", 9) +
          ctext(180, 103, "−", 9) +
          ctext(195, 103, "×", 9) +
          ctext(165, 119, "&lt;", 9) +
          ctext(180, 119, "=", 9) +
          ctext(195, 119, "÷", 9) +
          ctext(180, 156, "ULA", 15) +
          ctext(180, 172, "faz as contas", 9.5, C_INK, 700) +
          ctext(180, 186, "(a calculadora)", 9, "#4a5f7a", 600) +
          // Registradores: gavetas
          [60, 90, 120]
            .map(
              (y, i) =>
                `<rect x="252" y="${y}" width="68" height="26" rx="5" fill="#f8b4c0" ${stk(2)}/>` +
                `<rect x="278" y="${y + 10}" width="16" height="5" rx="2" fill="#fff"/>` +
                ctext(262, y + 17, `R${i}`, 8.5, C_INK, 800, "start")
            )
            .join("") +
          ctext(286, 164, "REGISTRADORES", 9, C_INK, 800) +
          ctext(286, 177, "bolsos da CPU", 9.5, C_INK, 700) +
          ctext(286, 190, "(super rápidos)", 9, "#4a5f7a", 600)
      )
  },
  {
    title: "Qual é o endereço?",
    concepts: ["ADDRESSBUS"],
    caption:
      "Para buscar o número 2, a CPU precisa dizer onde ele está guardado. O Address Bus é uma estrada de mão única que leva só o endereço até a memória.",
    svg: () =>
      comicSvg(
        "#e8f1ff",
        "Address Bus: estrada de mão única levando o endereço da CPU até a memória",
        `<rect x="0" y="108" width="360" height="46" fill="#4a5568"/>` +
          `<path d="M0 131 H360" stroke="#fff" stroke-width="3" stroke-dasharray="14 10"/>` +
          `<path d="M96 120 L106 131 L96 142 M214 120 L224 131 L214 142 M258 120 L268 131 L258 142" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>` +
          `<rect x="230" y="62" width="4" height="46" fill="${C_INK}"/>` +
          `<rect x="196" y="36" width="72" height="28" rx="6" fill="#ffd54f" ${stk(2)}/>` +
          ctext(232, 54, "MÃO ÚNICA →", 9.5) +
          comicChip(16, 92, 56, 76, "#4f8df5") +
          comicFace(44, 122, 10, 5) +
          ctext(44, 186, "CPU", 11) +
          `<rect x="286" y="66" width="62" height="118" rx="7" fill="#fff" ${stk(2)}/>` +
          [78, 108, 138]
            .map(
              (y, i) =>
                `<rect x="294" y="${y}" width="46" height="26" rx="4" fill="${i === 1 ? "#ffd54f" : "#eef2f7"}" ${stk(1.6)}/>` +
                ctext(317, y + 17, ["2A4E", "2A4F", "2A50"][i], 9.5)
            )
            .join("") +
          ctext(317, 200, "MEMÓRIA", 10) +
          `<path d="M116 118 L126 118 L134 104 L160 104 L168 118 L176 118 L176 136 L116 136 Z" fill="#f2994a" ${stk(2)}/>` +
          `<circle cx="130" cy="138" r="7" fill="${C_INK}"/><circle cx="162" cy="138" r="7" fill="${C_INK}"/>` +
          `<path d="M147 104 V84" fill="none" ${stk(2)}/>` +
          `<rect x="147" y="76" width="36" height="15" rx="3" fill="#fff" ${stk(1.8)}/>` +
          ctext(165, 87, "2A4F", 9) +
          ctext(170, 180, "ADDRESS BUS: só vai, nunca volta", 10) +
          comicBubble(8, 8, ["Quero o dado do", "endereço 2A4F!"], 44, 90)
      )
  },
  {
    title: "A entrega chegou!",
    concepts: ["DATABUS"],
    caption:
      "Com o endereço certo, o Data Bus entra em ação: uma estrada de mão dupla que leva e traz o conteúdo real entre processador, memória e periféricos.",
    svg: () =>
      comicSvg(
        "#fff7e6",
        "Data Bus: estrada de mão dupla com caminhões levando e trazendo dados",
        `<rect x="0" y="96" width="360" height="72" fill="#4a5568"/>` +
          `<path d="M0 132 H360" stroke="#fff" stroke-width="3" stroke-dasharray="14 10"/>` +
          `<path d="M70 106 L80 114 L70 122 M270 106 L280 114 L270 122" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity="0.7"/>` +
          `<path d="M100 142 L90 150 L100 158 M290 142 L280 150 L290 158" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity="0.7"/>` +
          comicChip(16, 88, 50, 70, "#4f8df5") +
          comicFace(41, 114, 9, 4.5) +
          ctext(41, 182, "CPU", 11) +
          `<rect x="296" y="76" width="54" height="92" rx="6" fill="#fff" ${stk(2)}/>` +
          [86, 112, 138]
            .map((y) => `<rect x="303" y="${y}" width="40" height="20" rx="3" fill="#eef2f7" ${stk(1.5)}/>`)
            .join("") +
          ctext(323, 188, "MEMÓRIA", 10) +
          `<rect x="178" y="62" width="4" height="34" fill="${C_INK}"/>` +
          `<rect x="124" y="36" width="112" height="28" rx="6" fill="#ffd54f" ${stk(2)}/>` +
          ctext(180, 54, "MÃO DUPLA ⇄", 10.5) +
          comicTruck(150, 124, 1, "#43b581") +
          ctext(137, 118, "5", 12, "#fff") +
          comicTruck(215, 160, -1, "#f2994a") +
          ctext(228, 154, "2", 12, "#fff") +
          ctext(180, 206, "DATA BUS: vai e volta com os dados!", 10.5)
      )
  },
  {
    title: "O atalho veloz",
    concepts: ["CACHE"],
    caption:
      "Buscar na RAM demora. A Cache fica coladinha na CPU e guarda cópias do que é mais usado, então o dado chega em um piscar de olhos.",
    svg: () =>
      comicSvg(
        "#f0f7ff",
        "Cache: geladeira ao lado da CPU entregando rápido, enquanto a RAM distante é lenta como um caracol",
        comicChip(10, 92, 52, 76, "#4f8df5") +
          comicFace(36, 118, 9, 4.5) +
          ctext(36, 186, "CPU", 11) +
          `<rect x="108" y="88" width="50" height="82" rx="8" fill="#6ea6ff" ${stk()}/>` +
          `<path d="M108 122 H158" fill="none" ${stk(2)}/>` +
          `<rect x="146" y="98" width="4" height="14" rx="2" fill="#fff"/><rect x="146" y="130" width="4" height="22" rx="2" fill="#fff"/>` +
          ctext(133, 186, "CACHE", 11) +
          `<path d="M76 130 H106" stroke="#43b581" stroke-width="5" stroke-linecap="round"/>` +
          ctext(91, 118, "0,5 ns", 8.5, "#1e7e4e") +
          `<path d="M98 60 L86 80 H94 L90 98 L104 76 H96 Z" fill="#ffd54f" ${stk(1.6)}/>` +
          `<path d="M164 130 H286" fill="none" stroke="#94a3b8" stroke-width="4" stroke-dasharray="8 8" stroke-linecap="round"/>` +
          `<ellipse cx="220" cy="128" rx="19" ry="6" fill="#ffd9b3" ${stk(1.6)}/>` +
          `<circle cx="214" cy="116" r="11" fill="#c68642" ${stk(1.8)}/>` +
          `<path d="M214 116 m-5 0 a5 5 0 1 1 5 5" fill="none" ${stk(1.4)}/>` +
          `<circle cx="237" cy="122" r="5" fill="#ffd9b3" ${stk(1.6)}/>` +
          `<path d="M236 118 L233 110 M240 119 L243 111" fill="none" ${stk(1.4)}/>` +
          ctext(224, 160, "50 ns (lenta)", 9.5, "#475569") +
          `<rect x="288" y="104" width="62" height="52" rx="6" fill="#43b581" ${stk()}/>` +
          [296, 313, 330]
            .map((x) => `<rect x="${x}" y="112" width="12" height="16" rx="2" fill="#fff" ${stk(1.4)}/>`)
            .join("") +
          [296, 306, 316, 326, 336]
            .map((x) => `<rect x="${x}" y="156" width="5" height="9" fill="#ffd54f"/>`)
            .join("") +
          ctext(319, 186, "RAM", 11) +
          comicBubble(30, 8, ["Achei no cache!", "Que rapidez!"], 40, 88)
      )
  },
  {
    title: "A mesa de trabalho",
    concepts: ["RAM"],
    caption:
      "A RAM guarda os programas e dados em uso agora. Ela é rápida, mas volátil: sem energia elétrica, tudo some.",
    svg: () => {
      const desk = (x) =>
        `<rect x="${x}" y="132" width="140" height="12" rx="3" fill="#c68642" ${stk(2)}/>` +
        `<rect x="${x + 10}" y="144" width="8" height="40" fill="#a0692f" ${stk(2)}/>` +
        `<rect x="${x + 122}" y="144" width="8" height="40" fill="#a0692f" ${stk(2)}/>`;
      const lamp = (dx, on) =>
        `<rect x="${dx + 16}" y="124" width="24" height="8" rx="2" fill="#475569" ${stk(1.8)}/>` +
        `<path d="M${dx + 28} 124 L${dx + 38} 86 L${dx + 60} 80" fill="none" ${stk(2)}/>` +
        `<path d="M${dx + 50} 74 L${dx + 76} 80 L${dx + 68} 98 L${dx + 44} 90 Z" fill="${on ? "#ffd54f" : "#94a3b8"}" ${stk(2)}/>` +
        (on
          ? `<path d="M${dx + 48} 94 L${dx + 32} 132 L${dx + 80} 132 L${dx + 70} 100 Z" fill="#ffe27a" opacity="0.4"/>`
          : "");
      return comicSvg(
        "#eaf8f0",
        "RAM: com energia os programas ficam na mesa de trabalho, sem energia tudo desaparece",
        `<path d="M180 10 V212" stroke="${C_INK}" stroke-width="2" stroke-dasharray="6 6"/>` +
          desk(20) +
          lamp(20, true) +
          `<rect x="100" y="110" width="26" height="22" rx="2" fill="#fff" ${stk(1.8)}/>` +
          ctext(113, 125, "app", 8.5) +
          `<rect x="130" y="104" width="26" height="28" rx="2" fill="#cfe6ff" ${stk(1.8)}/>` +
          ctext(143, 122, "jogo", 8.5) +
          `<rect x="35" y="10" width="110" height="24" rx="8" fill="#43b581" ${stk(2)}/>` +
          ctext(90, 27, "COM ENERGIA", 10.5, "#fff") +
          desk(200) +
          lamp(200, false) +
          `<rect x="280" y="110" width="26" height="22" rx="2" fill="none" ${stk(1.6)} stroke-dasharray="4 3"/>` +
          `<rect x="310" y="104" width="26" height="28" rx="2" fill="none" ${stk(1.6)} stroke-dasharray="4 3"/>` +
          `<ellipse cx="300" cy="88" rx="20" ry="10" fill="#fff" ${stk(1.6)}/><ellipse cx="318" cy="82" rx="12" ry="8" fill="#fff" ${stk(1.6)}/>` +
          ctext(306, 92, "puf!", 11) +
          `<path d="M222 132 Q226 172 258 178" fill="none" ${stk(2)}/>` +
          `<rect x="260" y="170" width="18" height="14" rx="3" fill="#fff" ${stk(2)}/>` +
          `<path d="M280 174 H286 M280 180 H286" fill="none" ${stk(2)}/>` +
          `<rect x="215" y="10" width="110" height="24" rx="8" fill="#eb5757" ${stk(2)}/>` +
          ctext(270, 27, "SEM ENERGIA", 10.5, "#fff") +
          ctext(90, 206, "programas abertos na RAM", 9.5, C_INK, 700) +
          ctext(270, 206, "desligou? perdeu tudo!", 9.5, C_INK, 700)
      );
    }
  },
  {
    title: "Memórias que não esquecem",
    concepts: ["ROM", "EEPROM", "FLASH"],
    caption:
      "A ROM vem gravada de fábrica, como a BIOS que liga o PC. A EEPROM pode ser regravada byte a byte e a Flash apaga e grava por blocos, como em SSDs e pendrives.",
    svg: () =>
      comicSvg(
        "#f3eefc",
        "ROM como livro trancado, EEPROM como quadro que se apaga letra a letra e Flash como pendrive de blocos",
        [12, 128, 244]
          .map((x) => `<rect x="${x}" y="30" width="104" height="156" rx="10" fill="#fff" ${stk(2)}/>`)
          .join("") +
          ctext(64, 52, "ROM", 14) +
          ctext(180, 52, "EEPROM", 14) +
          ctext(296, 52, "FLASH", 14) +
          // ROM: livro trancado
          `<rect x="34" y="68" width="60" height="52" rx="5" fill="#9b6bdb" ${stk(2)}/>` +
          `<path d="M42 68 V120" fill="none" ${stk(1.6)}/>` +
          `<rect x="52" y="92" width="24" height="20" rx="4" fill="#ffd54f" ${stk(2)}/>` +
          `<path d="M57 92 v-6 a7 7 0 0 1 14 0 v6" fill="none" ${stk(2)}/>` +
          ctext(64, 142, "gravada de fábrica", 9, C_INK, 700) +
          ctext(64, 156, "só leitura", 9.5, C_INK, 700) +
          ctext(64, 172, "(BIOS)", 9.5, "#4a5f7a", 600) +
          // EEPROM: quadro
          `<rect x="138" y="68" width="84" height="52" rx="4" fill="#fff" ${stk(2)}/>` +
          [0, 1, 2, 3]
            .map(
              (i) =>
                `<rect x="${146 + i * 19}" y="80" width="16" height="22" rx="3" fill="${i === 2 ? "#f2994a" : "#eef2f7"}" ${stk(1.5)}/>` +
                ctext(154 + i * 19, 96, "ABCD"[i], 12)
            )
            .join("") +
          `<path d="M212 116 L196 100" fill="none" ${stk(2.4)}/>` +
          `<path d="M196 100 L192 96" fill="none" stroke="#eb5757" stroke-width="3" stroke-linecap="round"/>` +
          ctext(180, 142, "apaga e regrava", 9, C_INK, 700) +
          ctext(180, 156, "1 byte por vez", 9.5, C_INK, 700) +
          ctext(180, 172, "(pulso elétrico)", 9.5, "#4a5f7a", 600) +
          // Flash: pendrive e blocos
          `<rect x="254" y="68" width="52" height="22" rx="4" fill="#f2994a" ${stk(2)}/>` +
          `<rect x="306" y="73" width="14" height="12" rx="2" fill="#cbd5e1" ${stk(1.8)}/>` +
          `<circle cx="266" cy="79" r="3" fill="#fff"/>` +
          [0, 1]
            .map((r) =>
              [0, 1, 2, 3]
                .map(
                  (c) =>
                    `<rect x="${256 + c * 16}" y="${100 + r * 17}" width="13" height="14" rx="2" fill="${r === 0 && c === 1 ? "#f2994a" : "#ffe0b2"}" ${stk(1.3)}/>`
                )
                .join("")
            )
            .join("") +
          ctext(296, 142, "apaga em blocos", 9, C_INK, 700) +
          ctext(296, 156, "SSD e pendrive", 9.5, C_INK, 700) +
          ctext(296, 172, "(rápida)", 9.5, "#4a5f7a", 600) +
          ctext(180, 208, "Não perdem os dados sem energia!", 11)
      )
  },
  {
    title: "O grande arquivo",
    concepts: ["MEMORIADEMASSA"],
    caption:
      "Para guardar fotos, jogos e o sistema para sempre, usamos a Memória de Massa: o HD, com disco giratório, ou o SSD, com chips Flash. Tem muito espaço!",
    svg: () =>
      comicSvg(
        "#e8f1ff",
        "Memória de massa: um grande arquivo com HD de disco giratório e SSD de chips",
        `<path d="M26 74 L180 26 L334 74 Z" fill="#f2994a" ${stk()}/>` +
          `<rect x="40" y="74" width="280" height="110" fill="#fff" ${stk()}/>` +
          ctext(180, 66, "ARQUIVO PERMANENTE", 11, "#fff") +
          `<circle cx="112" cy="124" r="32" fill="#cbd5e1" ${stk()}/>` +
          `<circle cx="112" cy="124" r="20" fill="#e2e8f0" ${stk(1.6)}/>` +
          `<circle cx="112" cy="124" r="6" fill="${C_INK}"/>` +
          `<path d="M150 90 L122 120" fill="none" ${stk(3)}/>` +
          `<circle cx="150" cy="90" r="5" fill="#eb5757" ${stk(1.8)}/>` +
          ctext(112, 174, "HD (disco girando)", 10) +
          `<rect x="222" y="100" width="88" height="48" rx="5" fill="#43b581" ${stk()}/>` +
          [232, 258, 284]
            .map((x) => `<rect x="${x}" y="108" width="20" height="14" rx="2" fill="#fff" ${stk(1.4)}/>`)
            .join("") +
          [0, 1, 2, 3, 4, 5, 6]
            .map((i) => `<rect x="${230 + i * 11}" y="148" width="6" height="8" fill="#ffd54f"/>`)
            .join("") +
          ctext(266, 174, "SSD (chips flash)", 10) +
          ctext(180, 206, "Guarda tudo mesmo desligado: terabytes!", 10.5)
      )
  },
  {
    title: "O entregador esperto",
    concepts: ["DMA"],
    caption:
      "Copiar arquivos deixava a CPU sobrecarregada. Com o DMA, um entregador leva blocos de dados direto do periférico para a RAM, e a CPU fica livre para outras tarefas.",
    svg: () =>
      comicSvg(
        "#fff7e6",
        "DMA: entregador levando dados direto do periférico para a RAM enquanto a CPU relaxa",
        comicChip(150, 18, 60, 52, "#4f8df5") +
          `<rect x="158" y="34" width="20" height="10" rx="4" fill="${C_INK}"/><rect x="182" y="34" width="20" height="10" rx="4" fill="${C_INK}"/>` +
          `<path d="M178 38 H182" fill="none" ${stk(2)}/>` +
          `<path d="M170 54 Q180 62 190 54" fill="none" ${stk(2)}/>` +
          `<path d="M222 40 h20 v14 a8 8 0 0 1 -8 8 h-4 a8 8 0 0 1 -8 -8z" fill="#fff" ${stk(2)}/>` +
          `<path d="M242 44 h4 a5 5 0 0 1 0 10 h-4" fill="none" ${stk(2)}/>` +
          `<path d="M228 34 q3 -6 0 -10 M236 34 q3 -6 0 -10" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>` +
          ctext(180, 90, "CPU livre!", 10) +
          comicBubble(14, 12, ["Pode levar direto,", "DMA! Eu relaxo."], 146, 40) +
          `<rect x="14" y="132" width="50" height="24" rx="4" fill="#f2994a" ${stk(2)}/>` +
          `<rect x="64" y="137" width="14" height="14" rx="2" fill="#cbd5e1" ${stk(1.8)}/>` +
          ctext(46, 178, "Periférico", 9.5) +
          `<path d="M84 144 H146" fill="none" ${stk(2)} stroke-dasharray="5 5"/>` +
          `<path d="M142 138 L152 144 L142 150 Z" fill="${C_INK}"/>` +
          `<path d="M230 144 H282" fill="none" ${stk(2)} stroke-dasharray="5 5"/>` +
          `<path d="M278 138 L288 144 L278 150 Z" fill="${C_INK}"/>` +
          `<circle cx="180" cy="116" r="12" fill="#ffd9b3" ${stk(2)}/>` +
          `<path d="M168 112 A12 12 0 0 1 192 112 Z" fill="#eb5757" ${stk(2)}/>` +
          `<circle cx="176" cy="118" r="1.8" fill="${C_INK}"/><circle cx="184" cy="118" r="1.8" fill="${C_INK}"/>` +
          `<rect x="166" y="130" width="28" height="30" rx="7" fill="#4f8df5" ${stk(2)}/>` +
          ctext(180, 150, "DMA", 9, "#fff") +
          `<path d="M173 160 V174 M187 160 V174" fill="none" ${stk(3.2)}/>` +
          `<path d="M194 142 L198 142" fill="none" ${stk(2.4)}/>` +
          `<rect x="198" y="134" width="28" height="22" rx="3" fill="#c68642" ${stk(2)}/>` +
          `<path d="M212 134 V156" fill="none" ${stk(1.6)}/>` +
          `<rect x="288" y="122" width="56" height="42" rx="5" fill="#43b581" ${stk(2)}/>` +
          [294, 310, 326]
            .map((x) => `<rect x="${x}" y="130" width="11" height="14" rx="2" fill="#fff" ${stk(1.3)}/>`)
            .join("") +
          ctext(316, 182, "RAM", 10.5) +
          `<rect x="150" y="182" width="60" height="20" rx="6" fill="#ffd54f" ${stk(2)}/>` +
          ctext(180, 196, "DMA", 12) +
          ctext(180, 214, "copia blocos sem ocupar a CPU", 9.5, C_INK, 700)
      )
  },
  {
    title: "Um computador num chip",
    concepts: ["MICROCONTROLADOR"],
    caption:
      "O Microcontrolador junta CPU, memórias e portas de entrada e saída em um único chip. Ele está no micro-ondas, no Arduino, em sensores e muito mais.",
    svg: () =>
      comicSvg(
        "#f3eefc",
        "Microcontrolador: um único chip com CPU, RAM, Flash e portas, ligado a um sensor e a uma lâmpada",
        `<rect x="100" y="12" width="160" height="26" rx="8" fill="#ffd54f" ${stk(2)}/>` +
          ctext(180, 30, "TUDO EM 1 CHIP!", 12) +
          comicChip(112, 54, 136, 116, "#3b4a66") +
          [
            [122, 64, "CPU", "#4f8df5"],
            [186, 64, "RAM", "#43b581"],
            [122, 112, "FLASH", "#f2994a"],
            [186, 112, "E/S", "#9b6bdb"]
          ]
            .map(
              ([x, y, label, color]) =>
                `<rect x="${x}" y="${y}" width="54" height="44" rx="6" fill="${color}" ${stk(1.8)}/>` +
                ctext(x + 27, y + 27, label, 11, "#fff")
            )
            .join("") +
          `<rect x="22" y="80" width="14" height="56" rx="7" fill="#fff" ${stk(2)}/>` +
          `<rect x="26" y="104" width="6" height="36" fill="#eb5757"/>` +
          `<circle cx="29" cy="142" r="11" fill="#eb5757" ${stk(2)}/>` +
          `<path d="M44 112 H92" fill="none" ${stk(2)} stroke-dasharray="5 4"/>` +
          `<path d="M92 106 L102 112 L92 118 Z" fill="${C_INK}"/>` +
          ctext(29, 172, "sensor", 9.5) +
          `<path d="M262 112 H296" fill="none" ${stk(2)} stroke-dasharray="5 4"/>` +
          `<path d="M290 106 L300 112 L290 118 Z" fill="${C_INK}"/>` +
          `<circle cx="326" cy="108" r="16" fill="#ffe27a" ${stk(2)}/>` +
          `<path d="M326 84 V78 M304 90 L299 85 M348 90 L353 85 M300 108 H294 M352 108 H358" fill="none" ${stk(2)}/>` +
          `<rect x="318" y="124" width="16" height="10" rx="2" fill="#94a3b8" ${stk(1.8)}/>` +
          ctext(326, 156, "luz acende", 9.5) +
          ctext(180, 194, "Arduino, micro-ondas, termostato...", 10) +
          ctext(180, 210, "um computador completo em miniatura", 9.5, "#4a5f7a", 600)
      )
  },
  {
    title: "Missão cumprida!",
    concepts: [],
    caption:
      "Pedir, trazer, buscar, calcular e guardar: o Bit descobriu que 2 + 3 = 5 passando por todos os componentes. Agora é só revisar a teoria ou jogar a cruzadinha!",
    svg: () => {
      const xs = [40, 110, 180, 250, 320];
      const colors = ["#6ea6ff", "#f2994a", "#43b581", "#9b6bdb", "#ffd54f"];
      const top = ["Pedir", "Trazer", "Buscar", "Calcular", "Guardar"];
      const sub = ["Address Bus", "Data Bus", "Cache / RAM", "UC + ULA", "Registradores"];
      const confetti = [
        [20, 24, "#eb5757"], [60, 60, "#43b581"], [96, 20, "#9b6bdb"], [320, 30, "#f2994a"],
        [340, 70, "#4f8df5"], [300, 12, "#eb5757"], [30, 88, "#ffd54f"], [336, 100, "#43b581"]
      ]
        .map(([x, y, c], i) =>
          i % 2 === 0
            ? `<rect x="${x}" y="${y}" width="9" height="9" rx="2" fill="${c}" transform="rotate(${20 + i * 17} ${x} ${y})"/>`
            : `<circle cx="${x}" cy="${y}" r="4.5" fill="${c}"/>`
        )
        .join("");
      const links = [0, 1, 2, 3]
        .map(
          (i) =>
            `<path d="M${xs[i] + 25} 140 H${xs[i + 1] - 31}" fill="none" ${stk(2.2)}/>` +
            `<path d="M${xs[i + 1] - 33} 134 L${xs[i + 1] - 25} 140 L${xs[i + 1] - 33} 146 Z" fill="${C_INK}"/>`
        )
        .join("");
      const steps = xs
        .map(
          (x, i) =>
            `<circle cx="${x}" cy="140" r="22" fill="${colors[i]}" ${stk(2.2)}/>` +
            ctext(x, 146, String(i + 1), 16, i === 4 ? C_INK : "#fff") +
            ctext(x, 180, top[i], 10.5) +
            ctext(x, 193, sub[i], 8.5, "#4a5f7a", 600)
        )
        .join("");
      return comicSvg(
        "#fff9d6",
        "Resumo da viagem do Bit: pedir, trazer, buscar, calcular e guardar, chegando a 2 + 3 = 5",
        confetti +
          comicBit(150, 76, 0.95, "happy") +
          comicBubble(196, 12, ["2 + 3 = 5!", "Missão cumprida!"], 174, 62) +
          links +
          steps +
          ctext(180, 214, "16 conceitos, 1 só sistema!", 11)
      );
    }
  }
];

function renderGlossaryComic(container) {
  if (!container || container.dataset.rendered === "true") return;

  const intro = `
    <div class="comic-intro">
      <svg viewBox="0 0 110 104" class="comic-intro-bit" role="img" aria-label="Bit, o bit curioso, mascote da história">${comicBit(55, 58, 1.3, "happy")}</svg>
      <div class="comic-intro-text">
        <h3>A grande aventura do Bit</h3>
        <p>Conheça o Bit, um bit muito curioso que quer descobrir quanto é 2 + 3. Acompanhe a viagem dele pelo computador, quadrinho a quadrinho, e conheça os 16 conceitos da cruzadinha.</p>
      </div>
    </div>`;

  const panels = COMIC_PANELS.map((panel, index) => {
    const tags = panel.concepts.length
      ? panel.concepts
          .map(
            (word) =>
              `<li><button type="button" class="comic-tag-btn" data-comic-concept="${word}" title="Abrir explicação teórica de ${CONCEPT_NAMES[word] || word}">${CONCEPT_NAMES[word] || word}</button></li>`
          )
          .join("")
      : `<li><button type="button" class="comic-tag-btn" data-comic-go-theory>Todos os 16 conceitos</button></li>`;
    return `
      <article class="comic-panel">
        <header class="comic-panel-head">
          <span class="comic-panel-num" aria-hidden="true">${index + 1}</span>
          <h3>${panel.title}</h3>
        </header>
        <div class="comic-panel-art">${panel.svg()}</div>
        <p class="comic-panel-caption">${panel.caption}</p>
        <ul class="comic-panel-tags" aria-label="Conceitos deste quadrinho">${tags}</ul>
      </article>`;
  }).join("");

  const ending = `
    <div class="comic-end">
      <p>Fim da história! Quer ver a explicação completa de cada conceito?</p>
      <button type="button" class="comic-end-btn" data-comic-go-theory>Ver versão teórica</button>
    </div>`;

  container.innerHTML = `${intro}<div class="comic-strip">${panels}</div>${ending}`;
  container.dataset.rendered = "true";
}

function setupGlossaryModes() {
  const switchEl = document.querySelector(".glossary-mode-switch");
  const comic = document.getElementById("glossary-comic");
  const toolbar = document.querySelector(".glossary-toolbar");
  const cards = document.getElementById("glossary-cards");
  const empty = document.getElementById("glossary-empty");
  if (!switchEl || !comic || !cards) return;

  renderGlossaryComic(comic);
  const buttons = Array.from(switchEl.querySelectorAll("[data-glossary-mode]"));

  function apply(mode, persist) {
    const illustrated = mode === "ilustrada";
    buttons.forEach((button) => {
      const active = button.dataset.glossaryMode === mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", active ? "true" : "false");
    });
    comic.hidden = !illustrated;
    cards.hidden = illustrated;
    if (toolbar) toolbar.hidden = illustrated;
    if (empty) {
      empty.hidden = illustrated || cards.querySelectorAll(".glossary-card:not(.is-hidden)").length > 0;
    }
    if (persist) {
      try {
        localStorage.setItem(GLOSSARY_MODE_STORAGE_KEY, mode);
      } catch {
        /* sem armazenamento disponível: segue sem salvar a preferência */
      }
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => apply(button.dataset.glossaryMode, true));
  });

  comic.querySelectorAll("[data-comic-go-theory]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const searchInput = document.getElementById("glossary-search");
      const allFilter = document.querySelector('.filter-btn[data-filter="all"]');
      if (searchInput && searchInput.value) {
        searchInput.value = "";
        searchInput.dispatchEvent(new Event("input"));
      }
      if (allFilter) allFilter.click();
      apply("teorica", true);
      switchEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  comic.querySelectorAll("[data-comic-concept]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const word = btn.dataset.comicConcept;
      const searchInput = document.getElementById("glossary-search");
      const allFilter = document.querySelector('.filter-btn[data-filter="all"]');
      if (allFilter) allFilter.click();
      if (searchInput) {
        searchInput.value = CONCEPT_NAMES[word] || word;
        searchInput.dispatchEvent(new Event("input"));
      }
      apply("teorica", true);
      switchEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  let saved = "teorica";
  try {
    saved = localStorage.getItem(GLOSSARY_MODE_STORAGE_KEY) === "ilustrada" ? "ilustrada" : "teorica";
  } catch {
    saved = "teorica";
  }
  apply(saved, false);
}

/* ==========================================================================
   DESAFIO: ilustrações que ajudam a entender a arquitetura (sem dar respostas)
   ========================================================================== */
function archSvg(viewBox, label, inner, extraClass) {
  return `<svg viewBox="${viewBox}" class="${extraClass}" role="img" aria-label="${label}">${inner}</svg>`;
}

const ARCH_INTRO_SVG = archSvg(
  "0 0 720 124",
  "O Bit faz uma pergunta, o processador pensa, os barramentos transportam, a memória guarda e a resposta volta",
  `<rect x="2" y="2" width="716" height="120" rx="14" fill="#eef5ff" ${stk(2)}/>` +
    comicBit(62, 72, 0.95, "happy") +
    comicBubble(12, 8, ["Quanto é 2 + 3?"], 60, 36) +
    `<path d="M112 72 H160" fill="none" ${stk(2.2)} stroke-dasharray="5 5"/><path d="M158 66 L168 72 L158 78 Z" fill="${C_INK}"/>` +
    comicChip(190, 46, 52, 52, "#4f8df5") +
    comicFace(216, 66, 9, 4.2) +
    `<path d="M200 46 L204 34 L212 40 L216 30 L220 40 L228 34 L232 46 Z" fill="#ffd54f" ${stk(1.8)}/>` +
    ctext(216, 116, "1. Pensar", 11) +
    `<path d="M262 72 H312" fill="none" ${stk(2.2)} stroke-dasharray="5 5"/><path d="M310 66 L320 72 L310 78 Z" fill="${C_INK}"/>` +
    `<rect x="332" y="50" width="86" height="16" rx="3" fill="#4a5568"/><rect x="332" y="70" width="86" height="16" rx="3" fill="#4a5568"/>` +
    `<path d="M338 58 H412 M338 78 H412" stroke="#fff" stroke-width="2" stroke-dasharray="8 6"/>` +
    `<path d="M398 52 L408 58 L398 64 M352 72 L342 78 L352 84 M408 72 L418 78 L408 84" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>` +
    ctext(375, 116, "2. Transportar", 11) +
    `<path d="M438 72 H488" fill="none" ${stk(2.2)} stroke-dasharray="5 5"/><path d="M486 66 L496 72 L486 78 Z" fill="${C_INK}"/>` +
    `<rect x="512" y="42" width="60" height="62" rx="7" fill="#fff" ${stk(2)}/>` +
    [50, 68, 86]
      .map((y, i) => `<rect x="520" y="${y}" width="44" height="14" rx="3" fill="${["#43b581", "#6ea6ff", "#f2994a"][i]}" ${stk(1.5)}/>`)
      .join("") +
    ctext(542, 116, "3. Guardar", 11) +
    `<path d="M590 72 H624" fill="none" ${stk(2.2)} stroke-dasharray="5 5"/><path d="M622 66 L632 72 L622 78 Z" fill="${C_INK}"/>` +
    `<circle cx="672" cy="72" r="28" fill="#43b581" ${stk(2.4)}/>` +
    ctext(672, 82, "5", 28, "#fff") +
    ctext(672, 116, "4. Resposta", 11),
  "arch-illus-svg arch-illus-intro"
);

const ARCH_BLOCK_ILLUSTRATIONS = {
  processor: {
    caption: "O processador é como uma cozinha: três especialistas trabalham juntos lá dentro. Descubra quem é quem pelas dicas!",
    svg: archSvg(
      "0 0 360 84",
      "Um processador com coroa e três portas misteriosas",
      comicChip(20, 20, 62, 50, "#4f8df5") +
        comicFace(51, 40, 10, 4.5) +
        `<path d="M30 20 L35 8 L43 14 L51 4 L59 14 L67 8 L72 20 Z" fill="#ffd54f" ${stk(1.8)}/>` +
        `<path d="M96 45 H268" fill="none" ${stk(1.8)} stroke-dasharray="4 4"/>` +
        [124, 196, 268]
          .map(
            (x) =>
              `<rect x="${x}" y="20" width="56" height="50" rx="9" fill="#fff" ${stk(2)}/>` +
              ctext(x + 28, 54, "?", 28, "#9b6bdb")
          )
          .join(""),
      "arch-illus-svg arch-illus-block"
    )
  },
  buses: {
    caption: "Barramentos são estradas: uma só vai (mão única) e a outra vai e volta (mão dupla). Cada uma leva uma coisa diferente.",
    svg: archSvg(
      "0 0 360 84",
      "Duas estradas ligando o processador à memória, uma de mão única e outra de mão dupla",
      comicChip(12, 22, 42, 40, "#4f8df5") +
        comicFace(33, 38, 7, 3.4) +
        `<rect x="296" y="14" width="50" height="56" rx="6" fill="#fff" ${stk(2)}/>` +
        [22, 36, 50]
          .map((y) => `<rect x="302" y="${y}" width="38" height="10" rx="2" fill="#eef2f7" ${stk(1.4)}/>`)
          .join("") +
        `<rect x="74" y="12" width="200" height="26" rx="3" fill="#4a5568"/><rect x="74" y="46" width="200" height="26" rx="3" fill="#4a5568"/>` +
        `<path d="M80 25 H268 M80 59 H268" stroke="#fff" stroke-width="2" stroke-dasharray="9 7" opacity="0.55"/>` +
        `<path d="M250 17 L262 25 L250 33" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>` +
        `<path d="M98 51 L86 59 L98 67 M250 51 L262 59 L250 67" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>` +
        `<rect x="128" y="16" width="76" height="18" rx="9" fill="#2d3748"/>` +
        `<rect x="128" y="50" width="76" height="18" rx="9" fill="#2d3748"/>` +
        ctext(166, 28.5, "mão única", 9.5, "#fff") +
        ctext(166, 62.5, "mão dupla", 9.5, "#fff"),
      "arch-illus-svg arch-illus-block"
    )
  },
  memory: {
    caption: "Quanto mais perto do processador, mais rápida e cara é a memória. Quanto mais longe, maior e mais barata.",
    svg: archSvg(
      "0 0 360 84",
      "Quatro degraus de memória: os de cima são mais rápidos e os de baixo guardam mais",
      [
        [10, 8, 56, "#eb5757"],
        [10, 26, 110, "#4f8df5"],
        [10, 44, 166, "#43b581"],
        [10, 62, 222, "#64748b"]
      ]
        .map(([x, y, w, c]) => `<rect x="${x}" y="${y}" width="${w}" height="14" rx="4" fill="${c}" ${stk(1.8)}/>`)
        .join("") +
        ctext(244, 22, "↑ mais rápida e cara", 10, C_INK, 800, "start") +
        ctext(244, 72, "↓ mais espaço e barata", 10, C_INK, 800, "start"),
      "arch-illus-svg arch-illus-block"
    )
  }
};

/* Ícones de 48x48 para cada encaixe: ilustram a ideia sem escrever o nome da resposta */
const ARCH_SLOT_ICONS = {
  S1: `<svg viewBox="0 0 48 48"><rect x="10" y="5" width="28" height="38" rx="5" fill="#43b581" ${stk(2)}/><rect x="14" y="10" width="20" height="9" rx="2" fill="#e8fff3" ${stk(1.5)}/>${[17, 24, 31]
    .map((x) => `<circle cx="${x}" cy="27" r="2.4" fill="#fff"/><circle cx="${x}" cy="35" r="2.4" fill="#fff"/>`)
    .join("")}</svg>`,
  S2: `<svg viewBox="0 0 48 48"><circle cx="22" cy="12" r="7" fill="#ffd9b3" ${stk(2)}/><path d="M11 44 L16 22 H30 L35 44 Z" fill="#2d3e5f" ${stk(2)}/><path d="M32 28 L43 12" fill="none" ${stk(2.4)}/><circle cx="43" cy="11" r="2.4" fill="#eb5757"/></svg>`,
  S3: `<svg viewBox="0 0 48 48">${[7, 19, 31]
    .map((y) => `<rect x="9" y="${y}" width="30" height="10" rx="3" fill="#f8b4c0" ${stk(1.8)}/><rect x="20" y="${y + 3.5}" width="8" height="3" rx="1.5" fill="#fff"/>`)
    .join("")}</svg>`,
  S4: `<svg viewBox="0 0 48 48"><path d="M24 45 C14 31 12 25 12 19 a12 12 0 1 1 24 0 c0 6 -2 12 -12 26 z" fill="#eb5757" ${stk(2)}/><circle cx="24" cy="19" r="5" fill="#fff" ${stk(1.6)}/></svg>`,
  S5: `<svg viewBox="0 0 48 48"><path d="M7 9 H41 M12 4 L7 9 L12 14 M36 4 L41 9 L36 14" fill="none" ${stk(2.2)}/><rect x="10" y="20" width="28" height="22" rx="3" fill="#c68642" ${stk(2)}/><path d="M24 20 V42" fill="none" ${stk(1.6)}/></svg>`,
  S6: `<svg viewBox="0 0 48 48"><path d="M27 3 L9 27 H21 L17 45 L39 18 H27 Z" fill="#ffd54f" ${stk(2)}/></svg>`,
  S7: `<svg viewBox="0 0 48 48"><rect x="6" y="31" width="36" height="6" rx="2" fill="#c68642" ${stk(2)}/><path d="M11 37 V45 M37 37 V45" fill="none" ${stk(2.4)}/><rect x="12" y="15" width="14" height="16" rx="2" fill="#fff" ${stk(1.8)}/><rect x="28" y="20" width="10" height="11" rx="2" fill="#cfe6ff" ${stk(1.8)}/></svg>`,
  S8: `<svg viewBox="0 0 48 48"><rect x="9" y="6" width="30" height="36" rx="4" fill="#9b6bdb" ${stk(2)}/><rect x="17" y="24" width="14" height="12" rx="3" fill="#ffd54f" ${stk(1.8)}/><path d="M20 24 v-4 a4 4 0 0 1 8 0 v4" fill="none" ${stk(1.8)}/></svg>`,
  S9: `<svg viewBox="0 0 48 48"><rect x="9" y="5" width="30" height="38" rx="4" fill="#cbd5e1" ${stk(2)}/><path d="M9 18 H39 M9 31 H39" fill="none" ${stk(1.8)}/><rect x="19" y="10" width="10" height="3.5" rx="1.5" fill="${C_INK}"/><rect x="19" y="23" width="10" height="3.5" rx="1.5" fill="${C_INK}"/><rect x="19" y="36" width="10" height="3.5" rx="1.5" fill="${C_INK}"/></svg>`
};

function setupArchitectureIllustrations() {
  const layout = document.querySelector(".architecture-layout");
  const header = layout ? layout.querySelector(".architecture-header") : null;
  if (!layout || !header || layout.querySelector(".arch-intro")) return;

  const intro = document.createElement("figure");
  intro.className = "arch-intro";
  intro.innerHTML = `${ARCH_INTRO_SVG}<figcaption>Siga o caminho do Bit: o processador pensa, os barramentos transportam e a memória guarda. Monte o diagrama abaixo para ver a arquitetura funcionando!</figcaption>`;
  header.insertAdjacentElement("afterend", intro);

  const blocks = [
    [".arch-processor", "processor"],
    [".arch-buses", "buses"],
    [".arch-memory", "memory"]
  ];
  blocks.forEach(([selector, key]) => {
    const block = document.querySelector(selector);
    const title = block ? block.querySelector("h4") : null;
    const data = ARCH_BLOCK_ILLUSTRATIONS[key];
    if (!title || !data) return;
    const figure = document.createElement("figure");
    figure.className = "arch-block-illus";
    figure.innerHTML = `${data.svg}<figcaption>${data.caption}</figcaption>`;
    title.insertAdjacentElement("afterend", figure);
  });

  document.querySelectorAll(".arch-slot").forEach((slot) => {
    const card = slot.closest(".arch-slot-card");
    const icon = ARCH_SLOT_ICONS[slot.dataset.slot];
    if (!card || !icon) return;
    const holder = document.createElement("span");
    holder.className = "arch-slot-icon";
    holder.setAttribute("aria-hidden", "true");
    holder.innerHTML = icon;
    card.insertBefore(holder, card.firstChild);
  });
}
