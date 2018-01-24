#!/usr/bin/env node

import greeting from '..';
import evenGame from '../evenGame';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"\n');

const gamer = greeting();
evenGame(gamer);
