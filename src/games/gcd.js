import game from '..';
import { random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const [minRandomInterval1, maxRandomInterval1] = [1, 100]; // first interval of random numbers
const [minRandomInterval2, maxRandomInterval2] = [1, 100]; // second interval of random numbers

// -------------------------------------------------------------------------------
// ======================= input data functions ==================================
const gcdRandom = () => {
  const number1 = random(minRandomInterval1, maxRandomInterval1)();
  const number2 = random(minRandomInterval2, maxRandomInterval2)();
  return [number1, number2];
};

// -------------------------------------------------------------------------------
// ==================== making game ==============================================
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gcdGame = () => {
  const greeting = 'Find the greatest common division of given numbers.';
  const solve = content => String(gcd(content[0], content[1]));
  const toString = content => content.join(' ');

  game(greeting, solve, toString, gcdRandom);
};

export default gcdGame;
