import {TestImage} from "../gameobjects/test-image";

export class GameplayScene extends Phaser.Scene {
  init(){
    console.log("Init")
  }

  preload(){
    console.log("Preload")
  }

  create(){
    console.log("create")
    console.dir(this)

    new TestImage(this);
  }
}