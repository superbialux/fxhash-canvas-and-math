class Num {
  static rand(min, max, round = true) {
    if (round) {
      return Math.round(fxrand() * (max - min) + min);
    }
    return fxrand() * (max - min) + min;
  }

  static randMapped(min, max) {
    return mapRange(fxrand(), 0, 1, min, max);
  }

  static normalize(axis, limit) {
    return axis / limit;
  }
}

export default Num;
