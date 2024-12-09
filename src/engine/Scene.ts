import { Container, Sprite, Texture } from "pixi.js";

// Class for handling the environment.
export class Scene {
  constructor(width, height) {
    // Create a main view that holds all layers.
    this.view = new Container();

    // Create the stationary sky that fills the entire screen.
    this.sky = Sprite.from("fond");
    this.sky.anchor.set(0, 1);
    this.sky.width = width;
    this.sky.height = height;

    // Create textures for the background, mid-ground, and platform.
    const backgroundTexture = Texture.from("background");
    const midgroundTexture = Texture.from("midground");
    const platformTexture = Texture.from("platform");

    const baseOptions = {
      anchor: { x: 0, y: 1 },
      applyAnchorToTexture: true,
    };

    // Create the tiling sprite layers.
    this.background = new Sprite({
      texture: backgroundTexture,
      width,
      height: backgroundTexture.height,
      ...baseOptions,
    });

    // Calculate the floor height for external referencing.
    this.floorHeight = 2;

    // Add all layers to the main view.
    this.view.addChild(this.sky, this.background);
  }

  // Use the platform's horizontal position as the key position for the scene.
  get positionX() {
    return 0;
  }

  // Set the horizontal position of the platform layer while applying parallax scrolling to the backdrop layers.
  set positionX(value) {
    this.background.tilePosition.x = value * 0.1;
  }
}
