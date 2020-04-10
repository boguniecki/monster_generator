// application monster_generator

const monster = ["vampire","werewolf","ghoul","zombie","skeleton","ork"];

const getRandomMonster = () => monster[Math.floor(Math.random() * monster.length)];

const setRandomMonster = () => document.getElementById('random_monster').innerText = getRandomMonster();



document.getElementById('generate').addEventListener('click', setRandomMonster)