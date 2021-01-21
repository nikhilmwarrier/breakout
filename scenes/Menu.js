class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }
  preload() {
    //   load images,
  }
  create() {
    console.log("Ready!");
    this.add
      .text(400, 200, "Break---Out", { font: "80px sans-serif" })
      .setOrigin(0.5);
    this.add
      .text(400, 360, "Tap to continue", { font: "30px sans-serif" })
      .setOrigin(0.5);
    this.input.on("pointerdown", () => {
      this.scene.start("Level1");
    });
  }
  update() {
    //   actual game loop, like void loop()
  }
}
