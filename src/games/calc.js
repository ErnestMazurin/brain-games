import gameMaker from '../gameMaker';
import { getName, getAnswer, random } from '..';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const gameSteps = 3; // number of steps
const [minRandomInterval1, maxRandomInterval1] = [0, 100]; // first interval of random numbers
const [minRandomInterval2, maxRandomInterval2] = [0, 100]; // second interval of random numbers
const mathSymbols = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

// -------------------------------------------------------------------------------
// ======================= input data functions ==================================
// task`s data
const calcRandom = () => {
  const number1 = random(minRandomInterval1, maxRandomInterval1)();
  const number2 = random(minRandomInterval2, maxRandomInterval2)();
  const symbols = Object.keys(mathSymbols);
  const symb = symbols[Math.floor(Math.random() * symbols.length)];
  return [number1, symb, number2];
};

// -------------------------------------------------------------------------------
// ============================== task object ====================================
class CalcTask {
  constructor(args) {
    const [number1, symbol, number2] = args;
    this.number1 = number1;
    this.number2 = number2;
    this.symbol = symbol;
  }
  solve() {
    return String(mathSymbols[this.symbol](this.number1, this.number2));
  }
  toString() {
    return `${this.number1} ${this.symbol} ${this.number2}`;
  }
}

// -------------------------------------------------------------------------------
// ==================== making game object =======================================
const calcMain = gameMaker('What is the result of the expression?\n', gameSteps, getName, getAnswer, calcRandom, CalcTask);

export default calcMain;
