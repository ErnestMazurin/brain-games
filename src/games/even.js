import gameMaker from '..';
import { random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const [minRandomInterval, maxRandomInterval] = [0, 100]; // interval of random numbers

// -------------------------------------------------------------------------------
// ======================= input data functions ==================================
const evenRandom = random(minRandomInterval, maxRandomInterval); // task`s data

// -------------------------------------------------------------------------------
// ============================== task object ====================================
class EvenTask {
  constructor(number) {
    this.number = number;
    this.greeting = 'Answer "yes" if number even otherwise answer "no"';
  }
  getGreeting() {
    return this.greeting;
  }
  solve() {
    return this.number % 2 === 0 ? 'yes' : 'no';
  }
  toString() {
    return String(this.number);
  }
}

// -------------------------------------------------------------------------------
// ==================== making game object =======================================
const evenMain = gameMaker(evenRandom, EvenTask);

export default evenMain;
