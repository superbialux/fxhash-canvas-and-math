import Vec3 from "../Vec3";

class Num {
  static rand(min, max, round = true) {
    if (round) {
      return Math.round(fxrand() * (max - min) + min);
    }
    return fxrand() * (max - min) + min;
  }

  static vRand(min, max) {
    return Math.random() * (max - min) + min;
  }

  static randMapped(min, max) {
    return this.map(fxrand(), 0, 1, min, max);
  }

  static normalize(axis, limit) {
    return (axis+limit/2) / limit;
  }

  static map(n, start1, stop1, start2, stop2) {
    const newval =
      ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    return newval;
  }

  static fract(x) {
    return x - Math.floor(x);
  }

  static dist(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }

  static smoothstep(edge0, edge1, x) {
    // if (x < edge0) return 0;

    // if (x >= edge1) return 1;

    // // Scale/bias into [0..1] range
    // x = (x - edge0) / (edge1 - edge0);

    // return x * x * (3 - 2 * x);

    const t = Num.clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
    return t * t * (3.0 - 2.0 * t);
  }

  static clamp(x, minVal, maxVal) {
    return Math.min(Math.max(x, minVal), maxVal);
  }

  static step(a, x) {
    return x >= a;
  }

  static mix(x, y, a) {
    if (x instanceof Vec3 && y instanceof Vec3) {
      return Vec3.add(Vec3.mult(x, 1 - a), Vec3.mult(y, a));
    }
    return x * (1 - a) + y * a;
  }

  static toRGB(h, s, l) {
    const ss = s / 100;
    const ll = l / 100;
    const k = (n) => (n + h / 30) % 12;
    const a = ss * Math.min(ll, 1 - ll);
    const f = (n) =>
      ll - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return new Vec3(f(0), f(8), f(4));
  }
}

export default Num;
