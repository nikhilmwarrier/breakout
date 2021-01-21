class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1");
  }
  preload() {
    this.load.image("bricks", "../assets/brick.png");
    this.load.image("hardbricks", "../assets/hardbrick.png");
    this.load.image("paddle", "../assets/paddle.png");
    this.load.image("ball", "../assets/ball.png");
    this.load.image("heart", "../assets/heart.png");
  }
  create() {
    console.log("Level 1");
    this.hearts = this.physics.add.staticGroup();
    this.hearts.create(30, 20, "heart");
    this.hearts.create(60, 20, "heart");
    this.hearts.create(90, 20, "heart");
    this.hearts.create(120, 20, "heart");
    this.hearts.create(150, 20, "heart");

    this.bricks = this.physics.add.staticGroup();
    this.paddles = this.physics.add.staticGroup();

    this.bricks.create(10, 40, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(100, 40, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(200, 40, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(300, 40, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(400, 40, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(500, 40, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(600, 40, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(700, 40, "bricks").setOrigin(0).refreshBody();

    // this.bricks.create(10, 40, "hardbricks").setOrigin(0).refreshBody();
    // this.bricks.create(100, 40, "hardbricks").setOrigin(0).refreshBody();
    // this.bricks.create(200, 40, "hardbricks").setOrigin(0).refreshBody();
    // this.bricks.create(300, 40, "hardbricks").setOrigin(0).refreshBody();
    // this.bricks.create(400, 40, "hardbricks").setOrigin(0).refreshBody();
    // this.bricks.create(500, 40, "hardbricks").setOrigin(0).refreshBody();
    // this.bricks.create(600, 40, "hardbricks").setOrigin(0).refreshBody();
    // this.bricks.create(700, 40, "hardbricks").setOrigin(0).refreshBody();

    this.bricks.create(10, 70, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(100, 70, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(200, 70, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(300, 70, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(400, 70, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(500, 70, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(600, 70, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(700, 70, "bricks").setOrigin(0).refreshBody();

    this.bricks.create(10, 100, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(100, 100, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(200, 100, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(300, 100, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(400, 100, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(500, 100, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(600, 100, "bricks").setOrigin(0).refreshBody();
    this.bricks.create(700, 100, "bricks").setOrigin(0).refreshBody();

    this.paddle = this.physics.add.sprite(300, 550, "paddle");
    this.paddle.body.setAllowGravity(false);

    this.ball = this.physics.add.image(300, 200, "ball");
    this.ball.setCollideWorldBounds(true);
    this.paddle.setCollideWorldBounds(true);
    this.paddle.setImmovable(true);
    let ball = this.ball;
    let bricks = this.bricks;
    let sys = this.sys;
    let paddle = this.paddle;

    this.physics.add.collider(this.ball, this.paddle, function () {
      ball.setVelocityY(-2000);
      let lr = Math.floor(Math.random() * 2);
      if (lr == 1) {
        if (ball.x <= 10) {
          ball.setVelocityX(paddle.x + paddle.displayWidth);
        } else if (ball.x >= sys.game.canvas.width - 10) {
          ball.setVelocityX(-paddle.x + paddle.displayWidth);
        } else {
          ball.setVelocityX(paddle.x + paddle.displayWidth);
        }
      } else if (lr == 0) {
        if (ball.x <= 10) {
          ball.setVelocityX(paddle.x + paddle.displayWidth);
        } else if (ball.x >= sys.game.canvas.width - 20) {
          ball.setVelocityX(-(paddle.x + paddle.displayWidth / 2));
        } else {
          ball.setVelocityX(-paddle.x + paddle.displayWidth);
        }
      }
    });

    // let physics = this.physics;

    bricks.getChildren().forEach((brick) => {
      this.physics.add.collider(this.ball, brick, function () {
        brick.destroy();
      });
    });

    this.speed = 30;
  }
  update() {
    let paddle = this.paddle;
    this.input.on("pointermove", function (pointer) {
      paddle.x = pointer.x;
      // paddle.y = pointer.y;
    });
    this.cursors = this.input.keyboard.createCursorKeys();

    if (this.cursors.left.isDown) {
      this.paddle.x -= this.speed;
    } else if (this.cursors.right.isDown) {
      this.paddle.x += this.speed;
    }

    if (this.bricks.getChildren().length <= 0) {
      this.scene.start("WinScreen");
    }

    if (this.ball.y >= this.sys.canvas.height - 20) {
      if (this.hearts.getChildren().length > 0) {
        this.hearts.remove(this.hearts.getLast(true), true);
        this.ball.x = this.paddle.x;
        this.ball.y = 500;
      } else if (this.hearts.getChildren().length <= 0) {
        this.scene.start("LoseScreen");
      }
    }
  }
}
