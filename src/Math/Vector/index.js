class Vector {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  copy() {
    return new Vector(this.x, this.y, this.z);
  }

  add(v) {
    this.x += v.x || 0;
    this.y += v.y || 0;
    this.z += v.z || 0;
    return this;
  }

  sub(v) {
    this.x -= v.x || 0;
    this.y -= v.y || 0;
    this.z -= v.z || 0;
    return this;
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

  div(v) {
    if (x.x === 0 || x.y === 0 || x.z === 0) {
      console.warn("Math/Vectors", "Cannot divide by 0");
      return this;
    }
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  }

  dist(v) {
    return Math.sqrt(
      (this.x - v.x) ** 2 + (this.y - v.y) ** 2 + (this.y - v.y) ** 2
    );
  }
}

export default Vector;
