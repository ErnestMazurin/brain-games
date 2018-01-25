import gamerName from '..';

const mainMaker = (gameGreeting, game) => {
  const main = () => {
    console.log('Welcome to the Brain Games!');
    console.log(`${gameGreeting}\n`);
    const gamer = gamerName();
    game(gamer);
  };
  return main;
};

export default mainMaker;
