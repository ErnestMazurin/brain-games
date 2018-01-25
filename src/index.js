import readlineSync from 'readline-sync';

const gamerName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export default gamerName;
