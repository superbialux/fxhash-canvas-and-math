import Num from "./Math/Number";
import Canvas from "./Canvas";
import { colors } from "./Canvas/constants";
import Renderer from "./Renderer";
import Sky from "./Content/Sky";

const SEED = Num.rand(1, 60000);
const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;

window.$fxhashFeatures = {
  Hue: colors[Num.rand(0, colors.length - 1)].name,
};

const initialize = (height, width) => {
  Canvas.removeLoader();
  console.log("Rendering at:", height, "x", width);

  // Initialize canvas
  const cv = Canvas.create(width, height, SEED);

  // Adding an object to the canvas
  const sky = new Sky(cv);
  sky.render();

  // Initialize renderer
  const renderer = new Renderer(
    cv,
    2000,
    () => requestAnimationFrame(() => renderer.render()),
    () => {
      fxpreview();
      console.log("Finished rendering.");
      console.log(window.$fxhashFeatures);
    }
  );

  requestAnimationFrame(() => renderer.render());
};

// Initializing
const currentURL = new URL(window.location.href);
const mult = currentURL.searchParams.get("resMult");

let multipler = 1;

if (mult && isFinite(mult)) {
  multipler = parseInt(mult, 10);
}

// The throbbler doesn't appear without the timeout
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    initialize(HEIGHT * multipler, WIDTH * multipler);
  }, 100);
});

// Set the resolution multipler or save canvas as an image
document.addEventListener("keypress", function onEvent(event) {
  if (isFinite(event.key) && event.key != "0") {
    let url = new URL(window.location.href);
    url.searchParams.set("resMult", event.key);
    window.location.href = url.href;
  }

  if (event.key.toLowerCase() === "s") {
    Canvas.save();
  }
});
