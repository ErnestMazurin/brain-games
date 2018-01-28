import game from '..';
import { random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const [minRandomInterval, maxRandomInterval] = [0, 100]; // interval of random numbers

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
  const primeTask = () => {
    const question = random(minRandomInterval, maxRandomInterval)();
    const answer = isPrime(question) ? 'yes' : 'no';
    return [String(question), answer];
  };

  game(greeting, primeTask);
};

export default primeGame;
