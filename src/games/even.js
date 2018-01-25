import readlineSync from 'readline-sync';
import EvenTask from '../tasks/EvenTask';
import questionMaker from '../makers/questionMaker';
import gameMaker from '../makers/gameMaker';
import random from '../random';
import gamerName from '..';
import startString from '../startString';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const gameSteps = 3; // number of steps
const [minRandomInterval, maxRandomInterval] = [0, 100]; // interval of random numbers

// -------------------------------------------------------------------------------
// ======================= input data functions ==================================
// task`s data
const evenRandom = () => random(minRandomInterval, maxRandomInterval)();

// answer`s data
const evenAnswer = () => readlineSync.question('Your answer:  ');

// -------------------------------------------------------------------------------
// ==================== making game objects ======================================
const gameQuestion = questionMaker(evenAnswer, evenRandom, EvenTask);
const evenGame = gameMaker(gameSteps, gameQuestion);

// -------------------------------------------------------------------------------
// ==================== main game function =======================================
const evenMain = () => {
  startString();
  console.log('Answer "yes" if number even otherwise answer "no"\n');
  const gamer = gamerName();
  evenGame(gamer);
};

export default evenMain;
