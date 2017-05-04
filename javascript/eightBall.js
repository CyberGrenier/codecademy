var userQuestion = 'is there a meaning to life ?';
var randomNumber = Math.floor(Math.random() * 7);
var eightBall = '';

if(randomNumber === 0){ eightBall = 'Yes';}
   else if (randomNumber === 1) {eightBall = 'Maybe';}
 else if (randomNumber === 2) { eightBall = 'Surely';}
 else if (randomNumber === 3) { eightBall = 'Suposingly';}
 else if (randomNumber === 4) { eightBall = 'Probably';}
 else if (randomNumber === 5) { eightBall = 'Eventually';}
 else if (randomNumber === 6) { eightBall = 'certainly';}
 else if (randomNumber === 7) { eightBall = 'no';}

prompt('What do you wanna know ? ');
console.log('The eight ball answered: ' + eightBall);