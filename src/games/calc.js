import readlineSync from 'readline-sync';
import CalcTask from '../tasks/CalcTask.js';
import questionMaker from '../makers/questionMaker.js';
import gameMaker from '../makers/gameMaker.js';
import random from '../random.js'
import gamerName from '..';
import startString from '../startString.js'

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const gameSteps = 3; // number of steps
const [minRandomInterval1, maxRandomInterval1] = [0, 100]; // first interval of random numbers
const [minRandomInterval2, maxRandomInterval2] = [0, 100]; // second interval of random numbers
const symbolSet = ['+', '-', '*']; // available arithmetic operators

// -------------------------------------------------------------------------------
// ======================= input data functions ==================================
// task`s data
const calcRandom = () => {
  const number1 = random(minRandomInterval1,  maxRandomInterval1)();
  const number2 = random(minRandomInterval2,  maxRandomInterval2)();
  const symbol = symbolSet[Math.floor(Math.random()*symbolSet.length)];
  return [number1, symbol, number2];
};

// answer`s data
const calcAnswer = () => readlineSync.question('Your answer:  ');

// -------------------------------------------------------------------------------
// ==================== making game objects ======================================
const calcTask = new CalcTask();
const gameQuestion = questionMaker(calcAnswer, calcRandom, calcTask)
const calcGame = gameMaker(gameSteps, gameQuestion);

// -------------------------------------------------------------------------------
// ===================== main game function ======================================
const calcMain = () => {
  startString();
  console.log('What is the result of the expression?\n');
  const gamer = gamerName();
  calcGame(gamer);
};

export default calcMain;
