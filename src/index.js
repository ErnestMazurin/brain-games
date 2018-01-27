import { getName, getAnswer } from './functions';

const gameCycle = (stepsNumber, solve, toString, random, counter) => {
  if (counter >= stepsNumber) {
    return counter;
  }
  const content = random();
  console.log(`Question: ${toString(content)}`);
  const answer = getAnswer();
  if (solve(content) === answer) {
    console.log('Correct!');
    return gameCycle(stepsNumber, solve, toString, random, counter + 1);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solve(content)}'.`);
  return counter;
};

const game = (greeting, solve, toString, random) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${greeting}\n`);
  const stepsNumber = 3;
  const gamer = getName();

  const gameResult = gameCycle(stepsNumber, solve, toString, random, 0);

  if (gameResult < stepsNumber) {
    console.log(`Let's try again, ${gamer}!`);
  } else {
    console.log(`Congratulations, ${gamer}!`);
  }
};

export default game;
