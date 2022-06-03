import Num from "../../Math/Number";

class Sky {
  constructor(cv) {
    this.cv = cv;
    this.el = cv.el;
    this.ctx = cv.ctx;
    this.inc = cv.inc;
    this.color = cv.color;
    this.noise = cv.noise;

    this.flow = cv.flow;
    this.particles = [];
  }

  render() {
    // Clouds
    for (let x = 0; x < this.el.width; x += this.inc) {
      for (let y = 0; y < this.el.height; y += this.inc) {
        const noise = this.noise.at(
          Num.normalize(x, this.el.width) * 15,
          Num.normalize(y, this.el.height) * 15
        );
        const brightness = Num.map(noise, 0, 1, 80, 100);
        this.particles.push({
          x,
          y,
          color: `hsl(${this.color.hue}, ${this.color.sat}%, ${brightness}%)`,
        });
      }
    }

    this.flow.push({
      // Sky box
      callback: () => {
        this.ctx.fillStyle = `hsl(${this.color.hue}, ${this.color.sat}%, ${
          this.color.ln * 0.5
        }%)`;
        this.ctx.fillRect(0, 0, this.el.width, this.el.height);
      },
      particles: this.particles,
    });
  }
}

export default Sky;
