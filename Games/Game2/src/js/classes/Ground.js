class Ground {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.position = {
      x: 0,
      y: 0
    }

    console.log("ground siap");
  }

  create() {
    board.fillStyle = this.color
    board.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}
