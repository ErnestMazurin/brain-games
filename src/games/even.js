import game from '..';
import { random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const [minRandomInterval, maxRandomInterval] = [0, 100]; // interval of random numbers
const evenRandom = random(minRandomInterval, maxRandomInterval); // task`s data

// ============================== task object ====================================
const evenGame = () => {
  const greeting = 'Answer "yes" if number even otherwise answer "no"';
  const solve = num => (num % 2 === 0 ? 'yes' : 'no');
  const toString = num => String(num);

  game(greeting, solve, toString, evenRandom);
};

export default evenGame;
