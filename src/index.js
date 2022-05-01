import Num from "./Math/Number";
import Canvas from "./Canvas";
import Vector from "./Math/Vector";

const { cv, ctx } = Canvas.create(window.innerWidth, window.innerHeight);
ctx.fillStyle = `hsl(${Num.rand(0, 360)}, 50%, 50%)`;
ctx.fillRect(0, 0, cv.width, cv.height);

const v1 = new Vector(0, 0);
const v2 = new Vector(cv.width / 2, cv.height / 2);
const v3 = v1.copy().add(v2);
const v4 = v3.copy().mult(2);

ctx.lineWidth = 5;
ctx.strokeStyle = `hsl(${Num.rand(0, 360)}, 50%, 50%)`;
ctx.beginPath();
ctx.moveTo(v1.x, v1.y);
ctx.lineTo(v2.x, v2.y);
ctx.stroke();

ctx.lineWidth = 10;
ctx.strokeStyle = `hsl(${Num.rand(0, 360)}, 50%, 50%)`;
ctx.beginPath();
ctx.moveTo(v4.x, v4.y);
ctx.lineTo(v3.x, v3.y);
ctx.stroke();
