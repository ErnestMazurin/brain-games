export default (getAnswer, getRandom, Task) => {
  const questionItem = () => {
    const tasklItem = new Task(getRandom());
    console.log(`Question: ${tasklItem.toString()}`);
    const answer = getAnswer();
    if (tasklItem.solve() === answer) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${tasklItem.solve()}'.`);
    return false;
  };
  return questionItem;
};
