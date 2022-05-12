import {TestImage} from "../gameobjects/test-image";
import {Owl} from "../gameobjects/owl";
import { SpineChild } from "../gameobjects/spine-child.js";

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
    const owl = new Owl(this);
    const spineChildInstance = new SpineChild(this);
    this.updateables = [owl];
  }

  update(time, delta) {
    super.update(time, delta);

    this.updateables.forEach(updateable => updateable.update(time, delta));
  }
}