import { getName, getAnswer } from './functions';

const gameCycle = (stepsNumber, task, counter) => {
  if (counter >= stepsNumber) {
    return counter;
  }
  const [taskQuestion, taskAnswer] = task();
  console.log(`Question: ${taskQuestion}`);
  const answer = getAnswer();
  if (answer === taskAnswer) {
    console.log('Correct!');
    return gameCycle(stepsNumber, task, counter + 1);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${taskAnswer}'.`);
  return counter;
};

const game = (greeting, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${greeting}\n`);
  const stepsNumber = 3;
  const gamer = getName();

  const gameResult = gameCycle(stepsNumber, task, 0);

  if (gameResult < stepsNumber) {
    console.log(`Let's try again, ${gamer}!`);
  } else {
    console.log(`Congratulations, ${gamer}!`);
  }
};

export default game;
