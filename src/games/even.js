import userAnswer from '../userAnswer';
import EvenTask from '../tasks/EvenTask';
import questionMaker from '../makers/questionMaker';
import gameMaker from '../makers/gameMaker';
import mainMaker from '../makers/mainMaker';
import random from '../random';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const gameSteps = 3; // number of steps
const [minRandomInterval, maxRandomInterval] = [0, 100]; // interval of random numbers
// -------------------------------------------------------------------------------
// ======================= input data functions ==================================
// task`s data
const evenRandom = () => random(minRandomInterval, maxRandomInterval)();

// -------------------------------------------------------------------------------
// ==================== making game objects ======================================
const gameQuestion = questionMaker(userAnswer, evenRandom, EvenTask);
const evenGame = gameMaker(gameSteps, gameQuestion);
const evenMain = mainMaker('Answer "yes" if number even otherwise answer "no"\n', evenGame);

export default evenMain;
