import { userName, getAnswer } from './functions';

const gameCycle = (stepsNumber, getRandom, Task, counter) => {
  if (counter >= stepsNumber) {
    return counter;
  }
  const tasklItem = new Task(getRandom());
  console.log(`Question: ${tasklItem.toString()}`);
  const answer = getAnswer();
  if (tasklItem.solve() === answer) {
    console.log('Correct!');
    return gameCycle(stepsNumber, getRandom, Task, counter + 1);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${tasklItem.solve()}'.`);
  return counter;
};

const gameMaker = (getRandom, Task) => {
  const main = () => {
    const greetTask = new Task(getRandom);
    const gameGreeting = greetTask.getGreeting();
    console.log('Welcome to the Brain Games!');
    console.log(`${gameGreeting}\n`);
    const stepsNumber = 3;
    const gamer = userName();
    const gameResult = gameCycle(stepsNumber, getRandom, Task, 0);
    if (gameResult < stepsNumber) {
      console.log(`Let's try again, ${gamer}!`);
    } else {
      console.log(`Congratulations, ${gamer}!`);
    }
  };
  return main;
};

export default gameMaker;
