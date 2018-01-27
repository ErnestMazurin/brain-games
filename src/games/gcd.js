import gameMaker from '..';
import { getName, getAnswer, random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const gameSteps = 3; // number of steps
const [minRandomInterval1, maxRandomInterval1] = [1, 100]; // first interval of random numbers
const [minRandomInterval2, maxRandomInterval2] = [1, 100]; // second interval of random numbers

// -------------------------------------------------------------------------------
// ======================= input data functions ==================================
// task`s data
const gcdRandom = () => {
  const number1 = random(minRandomInterval1, maxRandomInterval1)();
  const number2 = random(minRandomInterval2, maxRandomInterval2)();
  return [number1, number2];
};

// -------------------------------------------------------------------------------
// ============================== task object ====================================
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

// -------------------------------------------------------------------------------
// ==================== making game object =======================================
const gcdMain = gameMaker('Find the greatest common division of given numbers.\n', gameSteps, getName, getAnswer, gcdRandom, GCDtask);

export default gcdMain;
