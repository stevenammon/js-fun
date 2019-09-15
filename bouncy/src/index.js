import css from './styles/style.css';
import Ball from "./model/Ball";
import * as base from "./Base";

// function to generate random number

const random = (min, max) => {
  var num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

// create balls
let balls = [];

while (balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, base.width - size),
    random(0 + size, base.height - size),
    random(-7, 7),
    random(-7, 7),
    'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
    size
  );

  balls.push(ball);
}

// loop function

const loop = () => {
  base.ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  base.ctx.fillRect(0, 0, base.width, base.height);

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw(base.ctx);
    balls[i].update();
  }

  requestAnimationFrame(loop);
}

// Play it
loop();