import Vec2 from "../Vec2";

class Vec3 {
  constructor(x, y, z) {
    this.x = x instanceof Vec2 ? x.x : x;
    this.y = x instanceof Vec2 ? x.y : y;
    this.z = z;
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

  dot(x, y, z) {
    if (x instanceof Vec3) {
      return this.dot(x.x, x.y, x.z);
    }
    return this.x * (x || 0) + this.y * (y || 0) + this.z * (z || 0);
  }

  add(x) {
    if (x instanceof Vec3) {
      this.x += x.x;
      this.y += x.y;
      this.z += x.z;
      return this;
    }

    this.x += x;
    this.y += x;
    this.z += x;

    return this;
  }

  cross(v) {
    const x = this.y * v.z - this.z * v.y;
    const y = this.z * v.x - this.x * v.z;
    const z = this.x * v.y - this.y * v.x;
    return new Vector(x, y, z);
  }

  static add(v1, v2) {
    const newV = v1.copy();
    if (v2 instanceof Vec3) {
      newV.x += v2.x;
      newV.y += v2.y;
      newV.z += v2.z;
    }

    this.x += v2;
    this.y += v2;
    this.z += v2;

    return newV;
  }

  sub(x) {
    if (x instanceof Vec3) {
      this.x -= x.x;
      this.y -= x.y;
      this.z -= x.z;
      return this;
    }

    this.x -= x;
    this.y -= x;
    this.z -= x;

    return this;
  }

  static sub(v1, v2) {
    const newV = v1.copy();
    if (v2 instanceof Vec3) {
      newV.x -= v2.x;
      newV.y -= v2.y;
      newV.z -= v2.z;
    }

    this.x -= v2;
    this.y -= v2;
    this.z -= v2;

    return newV;
  }

  mult(x) {
    if (x instanceof Vec3) {
      this.x *= x.x;
      this.y *= x.y;
      this.z *= x.z;
      return this;
    }

    this.x *= x;
    this.y *= x;
    this.z *= x;
    return this;
  }

  static mult(v1, v2) {
    const newV = v1.copy();
    if (v2 instanceof Vec3) {
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
    if (x instanceof Vec3) {
      if (x.x === 0 || x.y === 0 || x.z === 0) {
        console.warn("Math/Vectors", "Cannot divide by 0");
        return this;
      }
      this.x /= x.x;
      this.y /= x.y;
      this.z /= x.z;
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

  static div(v1, v2) {
    const newV = v1.copy();
    if (v2 instanceof Vec3) {
      if (v2.x === 0 || v2.y === 0 || v2.z === 0) {
        console.warn("Math/Vectors", "Cannot divide by 0");
        return this;
      }
      newV.x /= v2.x;
      newV.y /= v2.y;
      newV.z /= v2.z;
      return newV;
    }
    if (v2 === 0) {
      console.warn("Math/Vectors", "Cannot divide by 0");
      return this;
    }
    newV.x /= v2;
    newV.y /= v2;
    newV.z /= v2;
    return newV;
  }

  pow(x) {
    if (x instanceof Vec3) {
      this.x **= x.x;
      this.y **= x.y;
      this.z **= x.z;
      return this;
    }

    this.x **= x;
    this.y **= x;
    this.z **= x;
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

export default Vec3;
