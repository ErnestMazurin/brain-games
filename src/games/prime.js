import game from '..';
import { random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const [minRandomInterval, maxRandomInterval] = [0, 100]; // interval of random numbers
const primeRandom = random(minRandomInterval, maxRandomInterval); // task`s data

// -------------------------------------------------------------------------------
// ============================== making game ====================================
const isPrime = (number) => {
  const iter = (i) => {
    if (i === number) {
      return true;
    }
    if (number % i === 0) {
      return false;
    }
    return iter(i + 1);
  };

  return iter(2);
};

const primeGame = () => {
  const greeting = 'Is this number prime?';
  const solve = num => (isPrime(num) ? 'yes' : 'no');
  const toString = num => String(num);

  game(greeting, solve, toString, primeRandom);
};

export default primeGame;
