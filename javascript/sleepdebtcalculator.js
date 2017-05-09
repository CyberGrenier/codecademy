function getSleepHours(day) {
  var hours = prompt('how many hours of sleep you got on ' + day + '?');
  return Number(hours); 
}

function getActualSleepHours() {
  return getSleepHours('Monday') +
     getSleepHours('Tuesday') +
   getSleepHours('Wednesday') +
   getSleepHours('Thursday') +
   getSleepHours('Friday') +
   getSleepHours('Saturday') +
   getSleepHours('Sunday');
}

function getIdealSleepHours() {
 var idealHours = prompt('how many hours of sleep per night are  ideal for you ?');
  return Number(idealHours) * 7;
}

function calculateSleepDebt() {
  var actualHoursPerWeek = getActualSleepHours();
  var idealHoursPerWeek = getIdealSleepHours();
  
  if (idealHoursPerWeek === actualHoursPerWeek) {
  console.log('You got the ideal amount of sleep!');
} else if (idealHoursPerWeek < actualHoursPerWeek) {
  console.log('You got ' + (actualHoursPerWeek - idealHoursPerWeek) + ' hours more sleep than is ideal.');
} else {
  console.log('You need to get ' + (idealHoursPerWeek - actualHoursPerWeek) + ' more hours of sleep!');
  console.log('Make sure to get some rest to be your best!');
}
      
} 

calculateSleepDebt();

