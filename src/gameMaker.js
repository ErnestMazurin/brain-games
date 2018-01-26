const gameCycle = (stepsNumber, userAnswer, getRandom, Task, counter) => {
  if (counter >= stepsNumber) {
    return counter;
  }
  const tasklItem = new Task(getRandom());
  console.log(`Question: ${tasklItem.toString()}`);
  const answer = userAnswer();
  if (tasklItem.solve() === answer) {
    console.log('Correct!');
    return gameCycle(stepsNumber, userAnswer, getRandom, Task, counter + 1);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${tasklItem.solve()}'.`);
  return counter;
};

const gameMaker = (gameGreeting, stepsNumber, userName, userAnswer, getRandom, Task) => {
  const main = () => {
    console.log('Welcome to the Brain Games!');
    console.log(`${gameGreeting}\n`);
    const gamer = userName();
    const gameResult = gameCycle(stepsNumber, userAnswer, getRandom, Task, 0);
    if (gameResult < stepsNumber) {
      console.log(`Let's try again, ${gamer}!`);
    } else {
      console.log(`Congratulations, ${gamer}!`);
    }
  };
  return main;
};

export default gameMaker;
