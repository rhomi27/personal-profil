/*? no js js needed from me */

const canvas = document.querySelector("canvas");
const board = canvas.getContext("2d");

canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_RATIO.WIDTH;
canvas.height = DISPLAY_PIXEL.HEIGHT * ASPECT_RATIO.HEIGHT;

const playerProperty = {
  width: 40,
  height: 80,
  speed: 5,
  color: "black",
  position: {
    x: 0,
    y: canvas.height - 100,
  },
};

const ground = new Ground(canvas.width, canvas.height, "blue");
const player = new Player(playerProperty);

function animate() {
  ground.create();
  player.create();

  player.update();

  window.requestAnimationFrame(animate);
}

window.addEventListener("keydown", function (callback) {
  player.movement(callback.key);
});

animate();
