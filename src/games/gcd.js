import game from '..';
import { random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const [minRandomInterval1, maxRandomInterval1] = [1, 100]; // first interval of random numbers
const [minRandomInterval2, maxRandomInterval2] = [1, 100]; // second interval of random numbers

// -------------------------------------------------------------------------------
// ========================== making game ========================================
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const gcdGame = () => {
  const greeting = 'Find the greatest common division of given numbers.';
  const gcdTask = () => {
    const number1 = random(minRandomInterval1, maxRandomInterval1)();
    const number2 = random(minRandomInterval2, maxRandomInterval2)();
    const question = `${number1} ${number2}`;
    const answer = String(gcd(number1, number2));

    return [question, answer];
  };

  game(greeting, gcdTask);
};

export default gcdGame;
