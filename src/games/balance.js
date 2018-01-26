import gameMaker from '../gameMaker';
import { getName, getAnswer, random } from '..';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const gameSteps = 3; // number of steps
const [minRandomInterval1, maxRandomInterval1] = [0, 10000]; // interval of random numbers

// -------------------------------------------------------------------------------
// ======================= input data functions ==================================
const balanceRandom = random(minRandomInterval1, maxRandomInterval1); // task`s data

// -------------------------------------------------------------------------------
// ============================== task object ====================================
const number2Array = num => String(num).split('').map(x => Number(x));
const array2String = arr => arr.map(x => String(x)).join('');

const isBalance = (sequence) => {
  const diff = Math.max(...sequence) - Math.min(...sequence);
  const sortedSequence = sequence.slice().sort((a, b) => a - b);
  return (diff <= 1) && (array2String(sequence) === array2String(sortedSequence));
};

const balance = (arr) => {
  if (isBalance(arr)) {
    return arr;
  }
  const [min, max] = [Math.min(...arr), Math.max(...arr)];
  const [imin, imax] = [arr.indexOf(min), arr.indexOf(max)];
  const newArr = arr.slice();
  newArr[imin] = min + 1; // A little bit mutable style.
  newArr[imax] = max - 1; // But, I think, it`s ok, because I working whith copy.
  newArr.sort((a, b) => a - b); // Or not?
  return balance(newArr);
};

class BalanceTask {
  constructor(number) {
    this.number = number;
  }
  solve() {
    return array2String(balance(number2Array(this.number)));
  }
  toString() {
    return String(this.number);
  }
}

// -------------------------------------------------------------------------------
// ==================== making game object =======================================
const balanceMain = gameMaker('Balance the given number.\n', gameSteps, getName, getAnswer, balanceRandom, BalanceTask);

export default balanceMain;
