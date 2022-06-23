import Num from "../../Math/Number";
import Vec3 from "../../Math/Vec3";

class Sky {
  constructor(cv) {
    this.cv = cv;
    this.el = cv.el;
    this.ctx = cv.ctx;
    this.inc = cv.inc;
    this.color = cv.color;
    this.noise = cv.noise;

    this.pts = cv.pts;
  }

  render() {
    // Clouds
    for (let x = -this.el.width / 2; x < this.el.width / 2; x += this.inc) {
      for (let y = -this.el.height / 2; y < this.el.height / 2; y += this.inc) {
        const noise = this.noise.at(
          Num.normalize(x, this.el.width) * 5,
          Num.normalize(y, this.el.height) * 5
        );

        const col = this.color.copy();
        col.mult(0.5);
        col.mult(noise + 0.5);

        this.pts.push({
          pos: new Vec3(x, y, 0),
          col,
        });
      }
    }
  }
}

export default Sky;
