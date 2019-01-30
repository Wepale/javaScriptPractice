var oddNumbers = [];
var evenNumbers = [];

function randomArray(length) {
  let numbers = [];
  for (var i = 0; i < length; i++) {
    numbers.push(Math.floor(Math.random() * length))
  }
  return numbers;
}

function splitArray(array){
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) { //Is even
      evenNumbers.push(array[i]);
    } else {
      oddNumbers.push(array[i]);
    }
  }
}

splitArray(randomArray(100));
console.log(oddNumbers);
console.log(evenNumbers);
