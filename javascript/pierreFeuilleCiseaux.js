function getUserChoice() {
  
  var userInput = prompt('pierre, feuille ou ciseaux ? ');
  userInput = userInput.toLowerCase();
  
  if (userInput === 'pierre' || userInput === 'feuille' || userInput === 'ciseaux' || userInput === 'bombe') {
  return userInput;
  }
	else {
    
    console.log('mauvais choix');
  
  }
  
}

function getComputerChoice() {
  
  var compuInput = Math.floor(Math.random()*2);
    switch(compuInput) {
      case 0:
      return 'feuille';
      break;
      case 1:
      return 'ciseaux';
      break;
      case 2:
      return 'pierre';
      break;
     }
}

function dertermineWinner(userChoice, computerChoice) {
  
  if (userChoice === computerChoice) {
    return 'EGALITE les cocos';
  }
  
  if (userChoice === 'bombe') {return 'Nucked, tu gagnes';}
  
  if (userChoice === 'pierre') {
      if (computerChoice === 'feuille') {
      return 'L\'ordi gagne!';
    } else {
      return 'Tu gagnes!';
    } 
	}
  
   if (userChoice === 'feuille') {
      if (computerChoice === 'pierre' || computerChoice === 'ciseaux') {
      return 'L\'ordi gagne!';
    } else {
      return 'Tu gagnes!';
    } 
	}
  
   if (userChoice === 'ciseaux') {
      if (computerChoice === 'pierre') {
      return 'L\'ordi gagne!';
    } if (computerChoice === 'feuille'){
      return 'Tu gagnes!';
    } 
	}  
}

function playGame() {
  
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  
  console.log('tu joues: ' + userChoice);
    console.log('l\'ordi joue: ' + computerChoice);
  
  console.log(dertermineWinner(userChoice, computerChoice));
  
}

playGame();

