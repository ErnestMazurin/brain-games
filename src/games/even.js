import gameMaker from '../gameMaker';
import { getName, getAnswer, random } from '..';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const gameSteps = 3; // number of steps
const [minRandomInterval, maxRandomInterval] = [0, 100]; // interval of random numbers

// -------------------------------------------------------------------------------
// ======================= input data functions ==================================
const evenRandom = random(minRandomInterval, maxRandomInterval); // task`s data

// -------------------------------------------------------------------------------
// ============================== task object ====================================
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

// -------------------------------------------------------------------------------
// ==================== making game object =======================================
const evenMain = gameMaker('Answer "yes" if number even otherwise answer "no"\n', gameSteps, getName, getAnswer, evenRandom, EvenTask);

export default evenMain;
