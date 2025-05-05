const legend = {
  ".": "empty",
  "#": "wall",
  "@": "player",
  o: "coin",
  "+": "lava",
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

function createTd(className) {}

function createTr(cells) {}

function addRows(rows) {}
