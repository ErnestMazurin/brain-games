import game from '..';
import { random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const [minRandomInterval, maxRandomInterval] = [0, 100]; // interval of random numbers

// ============================== making game ====================================
const evenGame = () => {
  const greeting = 'Answer "yes" if number even otherwise answer "no"';

  const evenTask = () => {
    const question = random(minRandomInterval, maxRandomInterval)();
    const answer = (question % 2 === 0 ? 'yes' : 'no');
    return [String(question), answer];
  };

  game(greeting, evenTask);
};

export default evenGame;
