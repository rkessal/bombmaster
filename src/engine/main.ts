import "@esotericsoftware/spine-pixi-v8";

import { Application, Assets } from "pixi.js";
import { Controller } from "./Controller";
import { Scene } from "./Scene";
import { Player } from "./Player";

// Asynchronous IIFE
(async () => {
  // Create a PixiJS application.
  const app = new Application();

  // Intialize the application.
  await app.init({ background: "#1099bb", resizeTo: window });

  // Then adding the application's canvas to the DOM body.
  document.body.appendChild(app.canvas);

  // Load the assets.
  await Assets.load([
    {
      alias: "fond",
      src: "/fond.png",
    },
    {
      alias: "background",
      src: "/background.png",
    },
    {
      alias: "player",
      src: "/sample.png",
    },
    {
      alias: "sky",
      src: "https://pixijs.com/assets/tutorials/spineboy-adventure/sky.png",
    },
  ]);

  // Create a controller that handles keyboard inputs.
  const controller = new Controller();

  // Create a scene that holds the environment.
  const scene = new Scene(app.screen.width, app.screen.height);

  // Create our character
  // const spineBoy = new SpineBoy();
  const player = new Player();

  // Adjust views' transformation.
  scene.view.y = app.screen.height;
  // spineBoy.view.x = app.screen.width / 2;
  // spineBoy.view.y = app.screen.height - scene.floorHeight;
  // spineBoy.spine.scale.set(scene.scale * 0.32);

  // Add scene and character to the stage.
  app.stage.addChild(scene.view, player.view);

  // Trigger character's spawn animation.
  // spineBoy.spawn();

  // Animate the scene and the character based on the controller's input.
  app.ticker.add(() => {
    // Ignore the update loops while the character is doing the spawn animation.
    // if (spineBoy.isSpawning()) return;
    //
    // // Update character's state based on the controller's input.
    player.state.walk =
      controller.keys.left.pressed || controller.keys.right.pressed;
    if (player.state.run && player.state.walk) player.state.run = true;
    else
      player.state.run =
        controller.keys.left.doubleTap || controller.keys.right.doubleTap;
    player.state.hover = controller.keys.down.pressed;
    if (controller.keys.left.pressed) player.direction = -1;
    else if (controller.keys.right.pressed) player.direction = 1;
    player.state.jump = controller.keys.space.pressed;
    //
    // // Update character's animation based on the latest state.
    // spineBoy.update();
    //
    // // Determine the scene's horizontal scrolling speed based on the character's state.
    let speed = 1.25;
    //
    if (player.state.hover) speed = 7.5;
    else if (player.state.run) speed = 3.75;
    //
    // // Shift the scene's position based on the character's facing direction, if in a movement state.
    if (player.state.walk) player.positionX += speed * player.direction;
  });
})();
