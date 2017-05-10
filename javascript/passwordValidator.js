function hasUppercase(input) {
  for (var i = 0 ; i < input.length ; i ++) {
    if (input[i]===input[i].toUpperCase()) {
      return true;  
    } 
  }
}

function hasLowercase(input) {
  for (var i = 0 ; i < input.length ; i ++) {
    if (input[i]===input[i].toLowerCase()) {
      return true;  
    } 
  }
}

function isLongEnough(input) {
  for (var i = 0 ; i < input.length ; i ++) {
    if(input.length >= 8) {
      return true ; 
    }
  }
}

function hasSpecialCharacter(input) {
  var specialCharacters = ['&','.','!'];
  for (var i = 0 ; i < input.length ; i ++) {
     for (var j = 0 ; j < input.length ; j ++) {
       if(input[i]===specialCharacters[j]) {
         return true;
       }
     }
  }
}

function isPasswordValid(input) {
  
    if (hasLowercase(input) && hasUppercase(input) && isLongEnough(input) && hasSpecialCharacter(input)  ) {
        console.log('password is valid');
    	}
 	 	if (!hasLowercase(input)) {
        console.log('password needs a lower letter');
    	}
 	 	if (!hasUppercase(input)) {
        console.log('password needs a capital letter');
    }
    if (!hasSpecialCharacter(input)) {
        console.log('password needs a special character');
    }
    if (!isLongEnough(input)) {
        console.log('password is not long enough');
    }
}

isPasswordValid('DDderssI!ssss');