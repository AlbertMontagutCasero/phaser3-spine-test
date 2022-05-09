export class TestImage extends Phaser.GameObjects.Image {
  constructor(scene) {
    const gameSize = scene.scale.gameSize;
    const yCenterScreen = gameSize.height / 2;
    const xCenterScreen = gameSize.width / 2;

    super(scene, xCenterScreen, yCenterScreen, "test-square");

    scene.add.existing(this);
  }
}