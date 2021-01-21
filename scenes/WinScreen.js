class WinScreen extends Phaser.Scene {
  constructor() {
    super("WinScreen");
  }
  preload() {
    //   load images,
  }
  create() {
    console.log("You Win!");
    this.add
      .text(400, 200, "You Win!", { font: "80px sans-serif" })
      .setOrigin(0.5);
    this.add
      .text(400, 360, "Tap to play again!", { font: "30px sans-serif" })
      .setOrigin(0.5);
    this.input.on("pointerdown", () => {
      this.scene.start("Level1");
    });
  }
  update() {
    //   actual game loop, like void loop()
  }
}
