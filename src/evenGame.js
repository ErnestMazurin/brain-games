#!/usr/bin/env node

import readlineSync from 'readline-sync';

const random = (min, max) => (() => Math.floor(Math.random() * (max - (min + 1))) + min);

// --------------------------------------------------------------------------------
const answerCheck = (answer, number) => {
  if (number % 2 === 0) {
    return answer === 'yes';
  }
  return answer === 'no';
};

// --------------------------------------------------------------------------------
const questionSolver = (number) => {
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return answer;
};


// --------------------------------------------------------------------------------
const question = (randInt, getAnswer) => {
  const number = randInt();
  console.log(`Question: ${number}`);
  const answer = getAnswer();
  if (answerCheck(answer, number)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionSolver(number)}'.`);
  return false;
};

// --------------------------------------------------------------------------------
const NUMBEROFSTEPS = 3; // число шагов

// --------------------------------------------------------------------------------
const customAnswer = () => {
  const answer = readlineSync.question('Your answer:  ');
  return answer;
};

// --------------------------------------------------------------------------------
const customRandom = random(0, 100);

const evenGame = (name) => {
  const iter = (counter) => {
    if (counter >= NUMBEROFSTEPS) {
      return counter;
    }
    const iterResult = question(customRandom, customAnswer);
    if (iterResult) {
      return iter(counter + 1);
    }
    return counter;
  };

  const result = iter(0);

  if (result < NUMBEROFSTEPS) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
  return 1;
};

export default evenGame;
