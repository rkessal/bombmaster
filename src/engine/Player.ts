import { Container, Sprite, Texture } from "pixi.js";

const animationMap = {
  idle: {
    name: "idle",
    loop: true,
  },
  walk: {
    name: "walk",
    loop: true,
  },
  run: {
    name: "run",
    loop: true,
  },
  jump: {
    name: "jump",
    timeScale: 1.5,
  },
  hover: {
    name: "hoverboard",
    loop: true,
  },
  spawn: {
    name: "portal",
  },
};

export class Player {
  state: { walk: boolean; run: boolean; hover: boolean; jump: boolean };
  view: Container;
  directionalView: Container;
  sprite: Sprite;

  constructor() {
    // The character's state.
    this.state = {
      walk: false,
      run: false,
      hover: false,
      jump: false,
    };

    // Create the main view and a nested view for directional scaling.
    this.view = new Container();
    this.directionalView = new Container();

    const playerTexture = Texture.from("player");
    // Create the Spine instance using the preloaded Spine asset aliases.
    this.sprite = new Sprite({
      texture: playerTexture,
      anchor: { x: 0.5, y: 0 },
    });
    // Add the Spine instance to the directional view.
    this.directionalView.addChild(this.sprite);

    // Add the directional view to the main view.
    this.view.addChild(this.directionalView);

    // Set the default mix duration for all animations.
    // This is the duration to blend from the previous animation to the next.
    // this.spine.state.data.defaultMix = 0.2;
  }

  // Return character's facing direction.
  get direction() {
    return this.directionalView.scale.x > 0 ? 1 : -1;
  }

  // Set character's facing direction.
  set direction(value) {
    this.directionalView.scale.x = value;
  }

  get positionX() {
    return this.directionalView.position.x;
  }

  set positionX(value) {
    this.directionalView.position.x = value;
  }
}
