const symbolDisp = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

class CalcTask {
  constructor(args) {
    const [number1, symbol, number2] = args;
    this.number1 = number1;
    this.number2 = number2;
    this.symbol = symbol;
  }
  solve() {
    return String(symbolDisp[this.symbol](this.number1, this.number2));
  }
  toString() {
    return `${this.number1} ${this.symbol} ${this.number2}`;
  }
}

export default CalcTask;
