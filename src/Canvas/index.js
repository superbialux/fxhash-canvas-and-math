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
      a.download = "secunda.png";
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
    if (window.$fxhashFeatures["Hue"] === "Black & White") {
      hue = 0;
      sat = 0;
      ln = Num.rand(50, 80);
    } else {
      const hueFeat = colors.find(
        (hue) => hue.name === window.$fxhashFeatures["Hue"]
      );
      hue = Num.rand(hueFeat.start, hueFeat.end);
      sat = 20;
      ln = Num.rand(50, 80);
    }

    const container = document.createElement("div");
    container.id = "superbia";
    document.body.prepend(container);
    container.style.backgroundColor = `hsl(${hue}, ${sat}%, ${ln * 0.2}%)`;
    const canvas = document.createElement("canvas");

    canvas.id = "lux";
    canvas.width = width;
    canvas.height = height;

    container.prepend(canvas);

    const noise = new Noise();
    noise.setSeed(seed);
    const flow = [];

    const el = canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = `hsl(${hue}, ${sat}%, ${ln}%)`;
    ctx.fillRect(0, 0, el.width, el.height);

    return {
      canvas,
      color: {
        hue,
        sat,
        ln,
      },
      combDim: el.width + el.height,
      inc: (el.width + el.height) * 0.001,
      noise,
      el,
      ctx,
      flow,
    };
  }
}

export default Canvas;
