var game;

var config = {
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  parent: "phaser-game",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 3000 },
      debug: false,
    },
  },
  scene: [Menu, Level1, WinScreen, LoseScreen],
};
game = new Phaser.Game(config);

function openPopup(sel) {
  let modal = document.querySelector(sel);
  modal.style.display = "flex";
}
