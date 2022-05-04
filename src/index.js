import Num from "./Math/Number";
import Canvas from "./Canvas";
import Vector from "./Math/Vector";
import Noise from "./Math/Noise";

const { cv, ctx } = Canvas.create(window.innerWidth, window.innerHeight);
ctx.fillStyle = `hsl(0, 0%, 100%)`;
ctx.fillRect(0, 0, cv.width, cv.height);

const iterator = cv.width * 0.002;

const border = cv.width * 0.1;
const v1 = new Vector(border, border);
const v2 = new Vector(cv.width - border, cv.height - border);
const noise = new Noise();
noise.setSeed(Num.rand(0, 1000));
for (let x = v1.x; x < v2.x; x += iterator) {
  for (let y = v1.y; y < v2.y; y += iterator) {
    ctx.beginPath();
    ctx.arc(x, y, iterator, 0, 2 * Math.PI);
    const ns = noise.at(
      Num.normalize(x, cv.width),
      Num.normalize(y, cv.height)
    );
    const hue = Num.map(ns, 0, 1, 0, 360);
    ctx.fillStyle = `hsl(${hue}, 50%, 50%)`;
    ctx.fill();
  }
}
