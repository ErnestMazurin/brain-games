class EvenTask {
  constructor(number) {
    this.number = number;
  }
  solve() {
    return this.number % 2 === 0 ? 'yes' : 'no';
  }
  toString() {
    return String(this.number);
  }
}

export default EvenTask;

// return this.content[0] % 2 === 0 ? answer === 'yes' : answer === 'no';
