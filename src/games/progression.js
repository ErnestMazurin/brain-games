import game from '..';
import { random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const [minRandomInterval1, maxRandomInterval1] = [0, 10]; // first element`s interval
const [minRandomInterval2, maxRandomInterval2] = [1, 10]; // step`s values interval

const progressionLength = 10; // length of progression;
const [minRandomInterval3, maxRandomInterval3] = [0, progressionLength - 1];
const missedElement = '..';

const progressionRandom = () => {
  const start = random(minRandomInterval1, maxRandomInterval1)();
  const step = random(minRandomInterval2, maxRandomInterval2)();
  const imiss = random(minRandomInterval3, maxRandomInterval3)();
  const progressionBuilder = (acc, i) => {
    if (i >= progressionLength - 1) {
      return acc;
    }
    return progressionBuilder(acc.concat(acc[i] + step), i + 1);
  };
  const prog = progressionBuilder([start], 0);
  const [firstPart, secondPart] = [prog.slice(0, imiss), prog.slice(imiss + 1)];
  return [...firstPart, missedElement, ...secondPart]; // immutable!!!
};


const progressionSolver = (sequence) => {
  const imiss = sequence.indexOf(missedElement);

  if (imiss === 0) {
    return (2 * sequence[imiss + 1]) - sequence[imiss + 2];
  }
  if (imiss === sequence.length) {
    return (2 * sequence[imiss - 1]) - sequence[imiss - 2];
  }
  const step = (sequence[imiss + 1] - sequence[imiss - 1]) / 2;
  return sequence[imiss - 1] + step;
};

//--------------------------------------------------------------------------------
// ================================= making game =================================
const progressionGame = () => {
  const greeting = 'Insert the missing item.';

  const solve = sequence => String(progressionSolver(sequence));
  const toString = content => content.join(' ');

  game(greeting, solve, toString, progressionRandom);
};

export default progressionGame;
