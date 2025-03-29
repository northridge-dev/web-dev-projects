const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

function drawRect(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);

  const color = formData.get("color") || "black";
  const x = formData.get("x") || canvasWidth / 2;
  const y = formData.get("y") || canvasHeight / 2;
  const width = formData.get("width") || 10;
  const height = formData.get("height") || 10;

  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}

function clearCanvas() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
}
