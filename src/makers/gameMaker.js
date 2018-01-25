const gameCycle = (stepsNumber, question, counter) => {
  if (counter >= stepsNumber) {
    return counter;
  }
  const iterResult = question();
  if (iterResult) {
    return gameCycle(stepsNumber, question, counter + 1);
  }
  return counter;
};

const gameMaker = (stepsNumber, question) => {
  const gameItem = (name) => {
    const gameResult = gameCycle(stepsNumber, question, 0);
    if (gameResult < stepsNumber) {
      console.log(`Let's try again, ${name}!`);
    } else {
      console.log(`Congratulations, ${name}!`);
    }
    return 1;
  };
  return gameItem;
};

export default gameMaker;
