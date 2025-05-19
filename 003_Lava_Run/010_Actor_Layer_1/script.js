// More general function replaces createTr and createTd
function createEl(tag, attrs) {
  let el = document.createElement(tag);

  for (let attr in attrs) {
    el.setAttribute(attr, attrs[attr]);
  }

  return el;
}

class Level {
  constructor(map, scale = 20) {
    let rows = map
      .trim()
      .split("\n")
      .map((row) => [...row.trim()]);
    this.height = rows.length;
    this.width = rows[0].length;
    this.scale = scale;
    this.actorTypes = ["player", "coin", "lava"];
    this.legend = {
      ".": "empty",
      "#": "wall",
      "@": "player",
      o: "coin",
      "+": "lava",
    };
    this.startActors = [];

    this.rows = rows.map((row, y) => {
      return row.map((ch, x) => {
        const type = this.legend[ch];
        if (this.actorTypes.includes(type)) {
          this.startActors.push({ type, x, y });
          return "empty";
        }
        return type;
      });
    });
  }
}

function renderLevel(level) {
  const table = document.getElementById("background-table");
  table.style.width = `${level.width * level.scale}px`;

  level.rows.forEach((row) => {
    const tr = createEl("tr", "", {});
    row.forEach((cell) => {
      tr.appendChild(
        createEl("td", { class: cell, style: `height: ${level.scale}px;` }),
      );
    });

    table.appendChild(tr);
  });
}

function renderActors(actors) {
  const game = document.getElementById("game");

  for (let actor of actors) {
    const p = createEl("p", { style: `color: white;` });
    p.innerText = `${actor.type} at row ${actor.y}, column ${actor.x}`;
    game.appendChild(p);
  }
}

const level = new Level(levelMap);
renderLevel(level);
renderActors(level.startActors);
