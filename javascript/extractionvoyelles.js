var input = prompt('Tape la phrase dont tu souhaites extraire les voyelles');
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
var resultArray = [];


for (var i = 0; i < input.length ; i++) {
  
  
	if(input[i] ==='e' || input[i] ==='u'){
    resultArray.push(input[i]);
  	}
  
  for (var j = 0; j < vowels.length; j++){
  
  if(input[i]===vowels[j]) {
     resultArray.push(input[i]);
     }
    
  }
  
}

console.log(resultArray.join('').toUpperCase());
