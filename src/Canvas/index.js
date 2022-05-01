// these are the variables you can use as inputs to your algorithms
console.log(fxhash); // the 64 chars hex number fed to your algorithm
console.log(fxrand()); // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

// this code writes the values to the DOM as an example

class Canvas {
  static create(width, height) {
    const container = document.createElement("div");
    container.id = "superbia";
    document.body.prepend(container);

    const canvas = document.createElement("canvas");

    canvas.id = "lux";
    canvas.width = width
    canvas.height = height

    container.prepend(canvas);

    return { cv: canvas, ctx: canvas.getContext("2d") };
  }
}

export default Canvas;
