import * as PIXI from 'pixi.js'

export default class PixiLauncher {
  constructor() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let colour = 0x000000;
    let opts = {
      width,
      height,
      backgroundColor: colour
    };
    let renderer = PIXI.autoDetectRenderer(
     opts
    );
    window.document.body.appendChild(renderer.view);
    let stage = new PIXI.Container();
    let text = new PIXI.Text('Welcome to your new PixiJS App. Edit index.js and wait for reload \n\n' +
      'Default settings:\n' +
      'width: window.innerWidth\n' +
      'height: window.innerHeight' +
      '\nbackgroundColor: black',
      {fontFamily : 'Arial', fontSize: 24, fill : 0xc39fff, align : 'left'}
      );
    stage.addChild(text);
    renderer.render(stage);
  }
}

new PixiLauncher();