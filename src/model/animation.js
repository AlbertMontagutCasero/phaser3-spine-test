export class Animation {
  #duration;
  #name;
  #time = 0;
  #onCompleteCallback;

  constructor({name, duration}, onCompleteCallback) {
    this.#duration = duration === 0 ? 1000 : duration * 1000;
    this.#name = name;
    this.#onCompleteCallback = onCompleteCallback;
  }

  AddTime(delta) {
    this.#time += delta;

    if (this.#time >= this.#duration) {
      this.resetTime();
      this.#onCompleteCallback?.();
    }
  }

  getName() {
    return this.#name;
  }

  resetTime() {
    this.#time = 0;
  }
}