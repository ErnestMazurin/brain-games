const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

class GCDtask {
  constructor(args) {
    const [number1, number2] = args;
    this.number1 = number1;
    this.number2 = number2;
  }
  solve() {
    return String(gcd(this.number1, this.number2));
  }
  toString() {
    return `${this.number1} ${this.number2}`;
  }
}

export default GCDtask;
