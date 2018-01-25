export default (getAnswer, getRandom, task) => {
  const questionItem = () => {
    task.content = getRandom();
    console.log(`Question: ${task.toString()}`);
    const answer = getAnswer();
    if (task.solve() === answer) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${task.solve()}'.`);
    return false;
  };
  return questionItem;
};
