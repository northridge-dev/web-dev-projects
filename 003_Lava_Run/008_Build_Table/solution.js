const legend = {
  ".": "empty",
  "#": "wall",
  "@": "player",
  o: "coin",
  "+": "lava",
  "=": "lava",
  "|": "lava",
  v: "lava",
};

const levelMap = `
.##..............
.#...........o.o.
.#...............
.#..........####.
.#...@......#++#.
.############++##
`;

const rows = levelMap
  .trim()
  .split("\n")
  .map((row) => [...row]);

const cols = rows[0].length;
const size = 20;

function createTd(className) {
  const td = document.createElement("td");
  td.className = className;
  td.style.height = `${size}px`;

  return td;
}

function createTr(cells) {
  const tr = document.createElement("tr");

  for (let cell of cells) {
    const className = legend[cell];
    tr.appendChild(createTd(className));
  }

  return tr;
}

function addRows(rows) {
  const table = document.getElementById("background-table");
  table.style.width = `${cols * size}px`;
  const map = rows.map(createTr);

  for (let row of map) {
    table.appendChild(row);
  }
}

addRows(rows);
