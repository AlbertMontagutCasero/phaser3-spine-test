import {Scene} from "phaser";
import {GameplayScene} from "./gameplay-scene";

export class BootloaderScene extends Scene {
  constructor(config) {
    super(config);
  }

  preload() {
    this.load.image("test-square", "./assets/test-square.jpg");
    this.load.spine("owl-spine", "./assets/owl-pro.json", ["./assets/owl-pro.atlas"], true)
  }

  create() {
    this.scene.add("Gameplay", GameplayScene, true);
  }
}