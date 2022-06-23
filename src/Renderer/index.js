class Renderer {
  constructor(cv, ptf, callback, onFinish) {
    this.ctx = cv.ctx;
    this.color = cv.color;

    this.size = cv.inc;
    this.pts = cv.pts;
    this.ptf = ptf;
    this.callback = callback;
    this.onFinish = onFinish;

    this.i = 0;
    this.isCallbackCalled = 0;
  }

  render() {
    if (this.i < this.pts.length) {
      let maxPts = this.i + this.ptf;
      if (maxPts > this.pts.length) {
        maxPts = this.pts.length;
      }

      while (this.i < maxPts) {
        const p = this.pts[this.i];
        if (p) {
          const col = p.col.copy();
          const pos = p.pos.copy();
          const size = p.size || this.size; // * Num.rand(0.5, 2, false)

          col.add(this.color);
          col.div(2);
          col.pow(0.4545);
          this.ctx.beginPath();
          this.ctx.arc(pos.x, pos.y, size, 0, 2 * Math.PI);
          this.ctx.fillStyle = `rgb(${255 * col.x}, ${255 * col.y}, ${
            255 * col.z
          })`;
          this.ctx.fill();
          this.i++;
        }
      }

      this.callback();
    } else {
      this.onFinish();
    }
  }
}

export default Renderer;
