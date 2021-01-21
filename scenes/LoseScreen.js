class LoseScreen extends Phaser.Scene {
  constructor() {
    super("LoseScreen");
  }
  preload() {
    //   load images,
  }
  create() {
    console.log("You Lost...");
    this.add
      .text(400, 200, "You Lost...", { font: "80px sans-serif" })
      .setOrigin(0.5);
    this.add
      .text(400, 360, "Tap to try again!", { font: "30px sans-serif" })
      .setOrigin(0.5);
    this.input.on("pointerdown", () => {
      this.scene.start("Level1");
    });
  }
  update() {
    //   actual game loop, like void loop()
  }
}
