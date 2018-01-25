import readlineSync from 'readline-sync';
import EvenTask from '../tasks/EvenTask.js';
import questionMaker from '../makers/questionMaker.js';
import gameMaker from '../makers/gameMaker.js';
import random from '../random.js'
import gamerName from '..';
import startString from '../startString.js'

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const gameSteps = 3; // number of steps
const [minRandomInterval, maxRandomInterval] = [0, 100]; // interval of random numbers

// -------------------------------------------------------------------------------
// ======================= input data functions ==================================
// task`s data
const evenRandom = () => {
  return [random(minRandomInterval, maxRandomInterval)()];
};

// answer`s data
const evenAnswer = () => readlineSync.question('Your answer:  ');

// -------------------------------------------------------------------------------
// ==================== making game objects ======================================
const evenTask = new EvenTask();
const gameQuestion = questionMaker(evenAnswer, evenRandom, evenTask)
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
