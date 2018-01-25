class CalcTask {
  constructor() {
    this.content = [];
  }
  solve() {
    return String(eval(`${this.content[0]} ${this.content[1]} ${this.content[2]}`));
  }
  toString() {
    return `${this.content[0]} ${this.content[1]} ${this.content[2]}`;
  }
}

export default CalcTask;
