import game from '..';
import { random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const [minRandomInterval, maxRandomInterval] = [0, 100]; // interval of random numbers
const primeRandom = random(minRandomInterval, maxRandomInterval); // task`s data

// -------------------------------------------------------------------------------
// ============================== making game ====================================
const isPrime = (number) => {
  const iter = (num, i) => {
    if (num % i === 0) {
      return true;
    }
    if (i >= num) {
      return false;
    }
    return iter(num, i + 1);
  };
  return iter(number, 2);
};

const primeGame = () => {
  const greeting = 'Is this number prime?';
  const solve = num => (isPrime(num) ? 'yes' : 'no');
  const toString = num => String(num);

  game(greeting, solve, toString, primeRandom);
};

export default primeGame;
