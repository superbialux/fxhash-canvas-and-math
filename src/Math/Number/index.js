class Num {
  static rand(min, max, round = true) {
    if (round) {
      return Math.round(fxrand() * (max - min) + min);
    }
    return fxrand() * (max - min) + min;
  }

  static randMapped(min, max) {
    return this.map(fxrand(), 0, 1, min, max);
  }

  static normalize(axis, limit) {
    return axis / limit;
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

    const t = Plane.clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
    return t * t * (3.0 - 2.0 * t);
  }

  static clamp(x, minVal, maxVal) {
    return Math.min(Math.max(x, minVal), maxVal);
  }

  static step(a, x) {
    return x >= a;
  }

  static mix(x, y, a) {
    if (x instanceof Vector && y instanceof Vector) {
      return Vector.add(Vector.mult(x, 1 - a), Vector.mult(y, a));
    }
    return x * (1 - a) + y * a;
  }
}

export default Num;
