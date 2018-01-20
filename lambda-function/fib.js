const uniqueRandom = require('unique-random');

function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
}

function getRandomInt(max) {
    let rand = uniqueRandom(1, max);
    return rand();
}
//create an array of 10000 items
function makeFibArray() {
    let array = [];
    for(let i = 0; i < 1000; i++) {
        let rand = getRandomInt(1000);
        let value = fibonacci(rand);
        array.push(value);
    }

    return array;
}

module.exports = makeFibArray;