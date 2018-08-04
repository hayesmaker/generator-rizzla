import * as PIXI from 'pixi.js'
import {TweenLite, TimelineLinte, Elastic, Power1} from 'gsap';

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
    this.renderer = PIXI.autoDetectRenderer(
      opts
    );
    window.document.body.appendChild(this.renderer.view);
    this.stage = new PIXI.Container();
    let textStr = 'Congratulations you just rolled your own game scaffoled. ${nn} ' +
      'Default settings: ${n} ' +
      'width: window.innerWidth ${n} ' +
      'height: window.innerHeight ${n} ' +
      'backgroundColor: black ${n} ' +
      'framework: none ${n} ' +
      'renderer: pixijs';
    let textArr = textStr.split(' ');
    let t, tm, sp;
    let style = new PIXI.TextStyle({fontFamily : 'Arial', fontSize: 24, fill : 0xffffff, align : 'left'});
    let x = 0;
    let y = 0;

    let timeline = new TimelineLite({delay: 1});
    let tween, tween1;

    for (let i = 0; i < textArr.length; i++) {
      if (textArr[i] === '${n}' || textArr[i] === '${nn}') {
        continue;
      }
      t = new PIXI.Text(textArr[i], style);
      tm = new PIXI.TextMetrics.measureText(textArr[i], style);
      sp = new PIXI.TextMetrics.measureText(' ', style);
      this.stage.addChild(t);
      t.x = x;
      t.y = y;
      t.alpha = 0;
      tween = TweenLite.from(t, 0.3, {x:x, y:y -sp.height, ease:Elastic.easeOut});
      tween1 = TweenLite.to(t, 0.25, {alpha:1, ease:Power1.easeOut });
      timeline.addLabel('anim' + i, "-=0.2");
      timeline.add(tween, "anim" + i);
      timeline.add(tween1, "anim" + i);
      x += sp.width + tm.width;
      if (i < textArr.length && textArr[i+1] === '${n}') {
        x = 0;
        y += sp.height;
      } else if (i < textArr.length && textArr[i+1] === '${nn}') {
        x = 0;
        y += sp.height * 2;
      }
    }
    timeline.play();
    this.loop();
  }

  loop() {
    window.requestAnimationFrame(this.loop.bind(this));
    this.renderer.render(this.stage);
  }
}

new PixiLauncher();