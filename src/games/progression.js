import game from '..';
import { random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const [minRandomInterval1, maxRandomInterval1] = [0, 10]; // first element`s interval
const [minRandomInterval2, maxRandomInterval2] = [1, 10]; // step`s values interval

const progressionLength = 10; // length of progression;
const [minRandomInterval3, maxRandomInterval3] = [0, progressionLength - 1];
const emptySymbol = '..';
const progGen = (start, step, i) => start + (step * i);

//--------------------------------------------------------------------------------
// ================================= making game =================================
const progressionGame = () => {
  const greeting = 'Insert the missing item.';
  const progressionTask = () => {
    const start = random(minRandomInterval1, maxRandomInterval1)();
    const step = random(minRandomInterval2, maxRandomInterval2)();
    const imiss = random(minRandomInterval3, maxRandomInterval3)();

    const generator = (acc, missedItem, i) => {
      if (i === progressionLength) {
        return [acc, String(missedItem)];
      }
      if (i === imiss) {
        return generator(`${acc} ${emptySymbol}`, progGen(start, step, i), i + 1);
      }
      return generator(`${acc}  ${String(progGen(start, step, i))}`, missedItem, i + 1);
    };

    const [question, answer] = generator('', 0, 0);
    return [question, answer];
  };

  game(greeting, progressionTask);
};

export default progressionGame;
