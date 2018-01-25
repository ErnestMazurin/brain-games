class EvenTask {
  constructor() {
    this.content = [];
  } 
  solve() {
    return this.content[0] % 2 === 0 ? 'yes' : 'no';
  }
  toString() {
    return `${this.content[0]}`;
  }
}

export default EvenTask;

// return this.content[0] % 2 === 0 ? answer === 'yes' : answer === 'no';
