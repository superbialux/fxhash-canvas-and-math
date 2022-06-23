import Noise from "../Math/Noise";
import Num from "../Math/Number";
import { colors } from "./constants";

class Canvas {
  static addLoader() {
    const loading = document.getElementById("loading");
    loading.style = "display: block";
  }

  static removeLoader() {
    const loading = document.getElementById("loading");
    loading.style = "display: none";
  }

  static save() {
    const canvasImage = document.getElementById("lux").toDataURL("image/png");
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = function () {
      let a = document.createElement("a");
      a.href = window.URL.createObjectURL(xhr.response);
      a.download = "interconnected.png";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.remove();
    };
    xhr.open("GET", canvasImage);
    xhr.send();
  }

  static remove() {
    const prevCanvas = document.getElementById("superbia");
    if (prevCanvas) {
      prevCanvas.remove();
    }
  }

  static create(width, height, seed) {
    //Features
    let hue, sat, ln;
    const hueFeat = colors.find(
      (hue) => hue.name === window.$fxhashFeatures["Hue"]
    );
    hue = Num.rand(hueFeat.start, hueFeat.end);
    sat = Num.rand(80, 100);
    ln = Num.rand(80, 100);

    const container = document.createElement("div");
    container.id = "superbia";
    document.body.prepend(container);
    container.style.backgroundColor = `hsl(${hue}, ${sat * 0.2}%, ${
      ln * 0.2
    }%)`;
    const canvas = document.createElement("canvas");

    canvas.id = "lux";
    canvas.width = width;
    canvas.height = height;

    container.prepend(canvas);

    const noise = new Noise();
    noise.setSeed(seed);
    const pts = [];

    const el = canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = `hsl(${hue}, ${sat * 0.2}%, ${ln}%)`;
    ctx.fillRect(0, 0, el.width, el.height);
    ctx.translate(el.width / 2, el.height / 2);

    el.depth = el.width;
    el.avgRes = (el.width + el.height) / 2;
    return {
      canvas,
      color: Num.toRGB(hue, sat, ln),
      inc: el.avgRes * 0.003,
      noise,
      el,
      ctx,
      pts,
    };
  }
}

export default Canvas;
