class Renderer {
  constructor(cv, particlesPerFrame, callback, onFinish) {
    this.ctx = cv.ctx;
    this.size = cv.inc;
    this.flow = cv.flow;
    this.ptPerFrame = particlesPerFrame;
    this.callback = callback;
    this.onFinish = onFinish;

    this.flowStep = 0;
    this.i = 0;
    this.isCallbackCalled = 0;
  }

  render() {
    if (this.flowStep < this.flow.length) {
      const flow = this.flow[this.flowStep];
      if (!this.isCallbackCalled && flow.callback) {
        flow.callback();
        this.isCallbackCalled = true;
      }
      const particles = flow.particles;
      let id = this.i;
      let totalFrames = this.i + this.ptPerFrame;
      if (totalFrames > particles.length) {
        totalFrames = particles.length;
      }
      while (id < totalFrames) {
        const p = particles[id];
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, this.size, 0, 2 * Math.PI);
        this.ctx.fillStyle = p.color;
        this.ctx.fill();
        id++;
      }
      this.i = id;

      if (this.i === particles.length) {
        this.flowStep++;
        this.i = 0;
        this.isCallbackCalled = false;
      }

      this.callback();
    } else {
      this.onFinish();
    }
  }
}

export default Renderer;
