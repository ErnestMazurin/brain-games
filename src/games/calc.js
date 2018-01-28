import game from '..';
import { random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const [minRandomInterval1, maxRandomInterval1] = [0, 100]; // first interval of random numbers
const [minRandomInterval2, maxRandomInterval2] = [0, 100]; // second interval of random numbers
const mathSymbols = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

// -------------------------------------------------------------------------------
// ============================ making game=======================================
const calcGame = () => {
  const greeting = 'What is the result of the expression?';

  const calcTask = () => {
    const number1 = random(minRandomInterval1, maxRandomInterval1)();
    const number2 = random(minRandomInterval2, maxRandomInterval2)();
    const symbols = Object.keys(mathSymbols);
    const symb = symbols[Math.floor(Math.random() * symbols.length)];
    const question = `${number1} ${symb} ${number2}`;
    const answer = String(mathSymbols[symb](number1, number2));
    return [question, answer];
  };

  game(greeting, calcTask);
};

export default calcGame;
