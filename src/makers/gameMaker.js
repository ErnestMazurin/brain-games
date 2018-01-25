const gameMaker = (stepsNumber, question) => {
  const gameItem = (name) => {
    const iter = (counter) => {
      if (counter >= stepsNumber) {
        return counter;
      }

      const iterResult = question();
      if (iterResult) {
        return iter(counter + 1);
      }
      return counter;
    };
    const result = iter(0);
    if (result < stepsNumber) {
      console.log(`Let's try again, ${name}!`);
    } else {
      console.log(`Congratulations, ${name}!`);
    }
    return 1;
  };
  return gameItem;
};

export default gameMaker;
