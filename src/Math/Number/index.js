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

  static map(n, start1, stop1, start2, stop2) {
    const newval =
      ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    return newval;
  }
}

export default Num;
