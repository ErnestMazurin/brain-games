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

const calcRandom = () => {
  const number1 = random(minRandomInterval1, maxRandomInterval1)();
  const number2 = random(minRandomInterval2, maxRandomInterval2)();
  const symbols = Object.keys(mathSymbols);
  const symb = symbols[Math.floor(Math.random() * symbols.length)];
  return [number1, symb, number2];
};

// -------------------------------------------------------------------------------
// ============================ making game=======================================
const calcGame = () => {
  const greeting = 'What is the result of the expression?';
  const solve = content => String(mathSymbols[content[1]](content[0], content[2]));
  const toString = content => content.join(' ');

  game(greeting, solve, toString, calcRandom);
};

export default calcGame;
