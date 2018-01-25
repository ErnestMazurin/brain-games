
import GCDtask from '../tasks/GCDtask';
import questionMaker from '../makers/questionMaker';
import gameMaker from '../makers/gameMaker';
import mainMaker from '../makers/mainMaker';
import random from '../random';
import userAnswer from '../userAnswer';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const gameSteps = 3; // number of steps
const [minRandomInterval1, maxRandomInterval1] = [1, 100]; // first interval of random numbers
const [minRandomInterval2, maxRandomInterval2] = [1, 100]; // second interval of random numbers

// -------------------------------------------------------------------------------
// ======================= input data functions ==================================
// task`s data
const gcdRandom = () => {
  const number1 = random(minRandomInterval1, maxRandomInterval1)();
  const number2 = random(minRandomInterval2, maxRandomInterval2)();
  return [number1, number2];
};

// -------------------------------------------------------------------------------
// ==================== making game objects ======================================
const gameQuestion = questionMaker(userAnswer, gcdRandom, GCDtask);
const gcdGame = gameMaker(gameSteps, gameQuestion);
const gcdMain = mainMaker('Find the greatest common division of given numbers.\n', gcdGame);

export default gcdMain;
