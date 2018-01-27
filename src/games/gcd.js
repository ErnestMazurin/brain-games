import gameMaker from '..';
import { random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
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
    this.greeting = 'Find the greatest common division of given numbers.';
  }
  getGreeting() {
    return this.greeting;
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
const gcdMain = gameMaker(gcdRandom, GCDtask);

export default gcdMain;
