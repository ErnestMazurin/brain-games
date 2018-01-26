import readlineSync from 'readline-sync';

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const getAnswer = () => readlineSync.question('Your answer:  ');

export const random = (min, max) => (() => Math.floor(Math.random() * (max - (min + 1))) + min);
