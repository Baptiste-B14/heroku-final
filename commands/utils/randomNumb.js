
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function randomNumb(pNumber){
    let RandomNumber = getRandomArbitrary(1,pNumber);
    let RoundRandom = Math.floor(RandomNumber);
    return RoundRandom;
}
