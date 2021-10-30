import * as PIXI from 'pixi.js'
import gsap from 'gsap';

/**
 * Application main entry point
 *
 * @class PixiLauncher
 */
export default class PixiLauncher {

  /**
   * Initialise the PIXI instance and attach to the DOM at canvas#root
   * Set width / height in Application configuration.
   *
   * @constructor
   */
  constructor() {
    /* start example */
    const canvas = document.getElementById('root');
    const app = new PIXI.Application({
      width: 800,
      height: 600,
      view: canvas
    });

    // create a new background sprite
    const background = PIXI.Sprite.from('./assets/bg_rotate.jpg');
    background.width = app.view.width;
    background.height = app.view.height;
    app.stage.addChild(background);

    // create an array to store a reference to the dudes
    const dudeArray = [];

    const totaldudes = 20;

    for (let i = 0; i < totaldudes; i++) {
      // create a new Sprite that uses the image name that we just generated as its source
      const dude = PIXI.Sprite.from('./assets/chilli-lg.png');

      dude.anchor.set(0.5);

      // set a random scale for the dude
      dude.scale.set(0.8 + Math.random() * 0.3);

      // finally let's set the dude to be at a random position...
      dude.x = Math.floor(Math.random() * app.view.width);
      dude.y = Math.floor(Math.random() * app.view.height);

      // The important bit of this example, this is how you change the default blend mode of the sprite
      dude.blendMode = PIXI.BLEND_MODES.ADD;

      // create some extra properties that will control movement
      dude.direction = Math.random() * Math.PI * 2;

      // this number will be used to modify the direction of the dude over time
      dude.turningSpeed = Math.random() - 0.8;

      // create a random speed for the dude between 0 - 2
      dude.speed = 2 + Math.random() * 2;

      // finally we push the dude into the dudeArray so it it can be easily accessed later
      dudeArray.push(dude);

      app.stage.addChild(dude);
    }

    // create a bounding box for the little dudes
    const dudeBoundsPadding = 100;

    const dudeBounds = new PIXI.Rectangle(
      -dudeBoundsPadding,
      -dudeBoundsPadding,
      app.screen.width + dudeBoundsPadding * 2,
      app.screen.height + dudeBoundsPadding * 2,
    );

    const textMargin = 20;

    let graphics = new PIXI.Graphics();
    // Set the fill color
    graphics.beginFill(0xe74c3c); // Re
    graphics.alpha = 0.64;
    graphics.drawRect(textMargin, textMargin, 460, 240); //
    graphics.endFill();

    app.stage.addChild(graphics);

    let textStr = 'Congratulations Rizzla Parcel App rolled!. {nn} ' +
      `Default settings: {n} ` +
      `width: ${app.screen.width} {n} ` +
      `height: ${app.screen.height} {n} ` +
      'renderer: pixijs {n} ' +
      'extras: gsap {n}' +
      'build: parcel'
    let textArr = textStr.split(' ');
    let t, tm, sp;
    let style = new PIXI.TextStyle({
      fontFamily : 'Arial',
      fontSize: 24,
      fill : 0xffffff,
      align : 'left'
    });
    let x = textMargin;
    let y = textMargin;

    let timeline = gsap.timeline({delay: 1});
    let tween, tween1;

    for (let i = 0; i < textArr.length; i++) {
      if (textArr[i] === '{n}' || textArr[i] === '{nn}') {
        continue;
      }
      t = new PIXI.Text(textArr[i], style);
      tm = new PIXI.TextMetrics.measureText(textArr[i], style);
      sp = new PIXI.TextMetrics.measureText(' ', style);
      app.stage.addChild(t);
      t.x = x;
      t.y = y;
      t.alpha = 0;
      tween = gsap.from(t, {duration: 0.3, x:x, y:y -sp.height, ease:"elastic.out"});
      tween1 = gsap.to(t, {duration: 0.25, alpha:1, ease:"power1.out" });
      timeline.addLabel('anim' + i, "-=0.2");
      timeline.add(tween, "anim" + i);
      timeline.add(tween1, "anim" + i);
      x += sp.width + tm.width;
      if (i < textArr.length && textArr[i+1] === '{n}') {
        x = textMargin;
        y += sp.height;
      } else if (i < textArr.length && textArr[i+1] === '{nn}') {
        x = textMargin;
        y += sp.height * 2;
      }
    }
    timeline.play();

    // init class vars
    this.app = app;
    this.dudeArray = dudeArray;
    this.dudeBounds = dudeBounds;
    this.background = background;

    // init main loop
    this.loop();

    console.log('Parcel - Pixi app rolled up and ready!');
  }

  /**
   * Main game loop - should be called once per frame (when available
   * from window.requestAnimationFrame)
   *
   * @method loop
   */
  loop() {
    const dudeArray = this.dudeArray;
    const dudeBounds = this.dudeBounds;

    for (let i = 0; i < dudeArray.length; i++) {
      const dude = dudeArray[i];
      dude.direction += dude.turningSpeed * 0.01;
      dude.x += Math.sin(dude.direction) * dude.speed;
      dude.y += Math.cos(dude.direction) * dude.speed;
      dude.rotation = -dude.direction - Math.PI / 2;

      // wrap the dudes by testing their bounds...
      if (dude.x < dudeBounds.x) {
        dude.x += dudeBounds.width;
      } else if (dude.x > dudeBounds.x + dudeBounds.width) {
        dude.x -= dudeBounds.width;
      }

      if (dude.y < dudeBounds.y) {
        dude.y += dudeBounds.height;
      } else if (dude.y > dudeBounds.y + dudeBounds.height) {
        dude.y -= dudeBounds.height;
      }
    }

    window.requestAnimationFrame(this.loop.bind(this));
    this.app.renderer.render(this.app.stage);
  }
}

new PixiLauncher();