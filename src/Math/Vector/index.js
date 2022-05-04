class Vector {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z || 0;
  }

  copy() {
    return new Vector(this.x, this.y, this.z);
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  normalize() {
    const len = this.mag();
    if (len !== 0) this.mult(1 / len);
    return this;
  }

  add(v) {
    this.x += v.x || 0;
    this.y += v.y || 0;
    this.z += v.z || 0;
    return this;
  }

  static add(v1, v2) {
    const newV = v1.copy();
    newV.x += v2.x;
    newV.y += v2.y;
    newV.z += v2.z;
    return newV;
  }

  sub(v) {
    this.x -= v.x || 0;
    this.y -= v.y || 0;
    this.z -= v.z || 0;
    return this;
  }

  static sub(v1, v2) {
    const newV = v1.copy();
    newV.x -= v2.x;
    newV.y -= v2.y;
    newV.z -= v2.z;
    return newV;
  }

  mult(x) {
    if (x instanceof Vector) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
      return this;
    }

    this.x *= x;
    this.y *= x;
    this.z *= x;
    return this;
  }

  static mult(v1, v2) {
    const newV = v1.copy();
    if (v2 instanceof Vector) {
      newV.x *= v2.x;
      newV.y *= v2.y;
      newV.z *= v2.z;
      return newV;
    }

    newV.x *= v2;
    newV.y *= v2;
    newV.z *= v2;
    return newV;
  }

  div(x) {
    if (x instanceof Vector) {
      if (x.x === 0 || x.y === 0 || x.z === 0) {
        console.warn("Math/Vectors", "Cannot divide by 0");
        return this;
      }
      this.x /= v.x;
      this.y /= v.y;
      this.z /= v.z;
      return this;
    }
    if (x === 0) {
      console.warn("Math/Vectors", "Cannot divide by 0");
      return this;
    }
    this.x /= x;
    this.y /= x;
    this.z /= x;
    return this;
  }

  dist(v) {
    return Math.sqrt(
      (this.x - v.x) ** 2 + (this.y - v.y) ** 2 + (this.z - v.z) ** 2
    );
  }

  static dist(v1, v2) {
    return Math.sqrt(
      (v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2 + (v1.z - v2.z) ** 2
    );
  }
}

export default Vector;
