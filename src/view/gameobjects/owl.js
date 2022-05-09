import {Animation} from "../../model/animation";

export class Owl {
  #animations = [];
  #animationIndex;
  #owl;

  constructor(scene) {
    const gameSize = scene.scale.gameSize;
    const yCenterScreen = gameSize.height / 2;
    const xCenterScreen = gameSize.width / 2;

    scene.cameras.main.setBackgroundColor(0xffffff);
    this.#owl = scene.add.spine(xCenterScreen, yCenterScreen + 200, 'owl-spine', 'blink', true);
    const animationsData = this.#owl['skeletonData']['animations'];
    this.createAnimations(animationsData);
    this.#animationIndex = 0;
  }

  createAnimations(animationsData) {
    for (let i = 0; i < animationsData.length; i++) {
      const animationData = animationsData[i];
      const animation = new Animation(animationData, this.onAnimationFinished.bind(this));
      this.#animations.push(animation);
    }
    this.sortAnimations();
  }

  sortAnimations() {
    const animation1 = this.#animations[1];
    this.#animations[1] = this.#animations[2];
    this.#animations[2] = animation1;
  }

  onAnimationFinished(){
    this.#animationIndex = (this.#animationIndex + 1) % this.#animations.length;
    const currentAnimation = this.getCurrentAnimation();
    const animationName = currentAnimation.getName();
    this.#owl.play(animationName);
  }

  update(time, delta) {
    this.getCurrentAnimation().AddTime(delta);
  }

  getCurrentAnimation(){
    return this.#animations[this.#animationIndex];
  }
}