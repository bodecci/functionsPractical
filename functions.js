function actualMath(num0, num1) {
  console.log('inside actualMath:', num0, num1);
  let answer = num0 * num1;
  return answer;
}//end of actualMath

function logger(){
  console.log('inside of logger');
}//end of logger

function mathExample(){
  console.log('inside mathExample');
  let answer = 3 * 9;
  return answer;
}//end of mathExample


function returner (){
  console.log('inside returner');
  return true;
}//end of returner

logger();
returner();
console.log('runnning returner:', returner());
console.log('running mathExample:', mathExample());
console.log('running actualMath with 4 & 6:', actualMath(4, 6));
console.log('running actualMath with 0.123 & 654:', actualMath(0.123, 654));
console.log('running actualMath with 1 & 2:', actualMath(1, 2));
