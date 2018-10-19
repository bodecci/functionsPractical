function logger(){
  console.log('inside of logger');
}//end of logger

function returner (){
  console.log('inside returner');
  return true;
}//end of returner

logger();
returner();
console.log('runnning returner():', returner());
