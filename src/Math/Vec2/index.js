import Vec3 from "../Vec3";

class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // Vec2 Swizzle, idk if needed
    this.yy = new Vec2(y, y);
    this.xx = new Vec2(x, x);
    this.yx = new Vec2(y, x);

    // Vec3 Swizzle
    this.xyy = new Vec3(x, y, y);
    this.yxy = new Vec2(y, x, y);
    this.yyx = new Vec2(y, y, x);
  }

  copy() {
    return new Vec2(this.x, this.y);
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    const len = this.mag();
    if (len !== 0) this.mult(1 / len);
    return this;
  }

  dot(x, y) {
    if (x instanceof Vector) {
      return this.dot(x.x, x.y);
    }
    return this.x * (x || 0) + this.y * (y || 0);
  }

  add(v) {
    this.x += v.x || 0;
    this.y += v.y || 0;
    return this;
  }

  // cross(v) {
  //   const x = this.y * v.z - this.z * v.y;
  //   const y = this.z * v.x - this.x * v.z;
  //   return new Vec2(x, y);
  // }

  static add(v1, v2) {
    const newV = v1.copy();
    newV.x += v2.x;
    newV.y += v2.y;
    return newV;
  }

  sub(v) {
    this.x -= v.x || 0;
    this.y -= v.y || 0;

    return this;
  }

  static sub(v1, v2) {
    const newV = v1.copy();

    newV.x -= v2.x;
    newV.y -= v2.y;
    return newV;
  }

  mult(x) {
    if (x instanceof Vector) {
      this.x *= x.x;
      this.y *= x.y;
      return this;
    }

    this.x *= x;
    this.y *= x;
    return this;
  }

  static mult(v1, v2) {
    const newV = v1.copy();
    if (v2 instanceof Vector) {
      newV.x *= v2.x;
      newV.y *= v2.y;
      return newV;
    }

    newV.x *= v2;
    newV.y *= v2;
    return newV;
  }

  div(x) {
    if (x instanceof Vector) {
      if (x.x === 0 || x.y === 0) {
        console.warn("Math/Vectors", "Cannot divide by 0");
        return this;
      }
      this.x /= x.x;
      this.y /= x.y;
      return this;
    }
    if (x === 0) {
      console.warn("Math/Vectors", "Cannot divide by 0");
      return this;
    }
    this.x /= x;
    this.y /= x;
    return this;
  }

  static div(v1, v2) {
    const newV = v1.copy();
    if (v2 instanceof Vector) {
      if (v2.x === 0 || v2.y === 0) {
        console.warn("Math/Vectors", "Cannot divide by 0");
        return this;
      }
      newV.x /= v2.x;
      newV.y /= v2.y;
      return newV;
    }
    if (v2 === 0) {
      console.warn("Math/Vectors", "Cannot divide by 0");
      return this;
    }
    newV.x /= v2;
    newV.y /= v2;
    return newV;
  }

  pow(x) {
    if (x instanceof Vector) {
      this.x **= x.x;
      this.y **= x.y;
      return this;
    }

    this.x **= x;
    this.y **= x;
    return this;
  }

  dist(v) {
    return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2);
  }

  static dist(v1, v2) {
    return Math.sqrt((v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2);
  }
}

export default Vec2;
