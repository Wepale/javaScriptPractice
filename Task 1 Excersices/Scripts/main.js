console.log("Starting javascript...");
var myName = "Yeray";
console.log(myName);
var age = 30;
console.log(age);
var ignasiAge = 32;
var ageDiff = age - ignasiAge;
console.log(ageDiff);
if (age>=21){
  console.log("You are older than 21");
}else{
  console.log("You are not older than 21");
}
if (age>ignasiAge){
  console.log("Ignasi is younger than you");
}else if (age==ignasiAge){
  console.log("You have the same age as Ignasi");
}else{
  console.log("Ignasi is older than you");
}
/*
var list = ["Yeray", "Pancho", "Oscar", "Ana", "Victoria", "Nagash", "Rodrigo", "Oriol", "Alex", "Dario", "Fabio", "Sara", "Mica", "Fer", "Jorge"];
list.sort();
var size = list.length;
console.log("La lista contiene " + size + " elementos" );

console.log(list[0] + " es el primero alfabeticamente y " + list[size-1] + " es el último alfabeticamente" );

for (var i=0; i<list.length; i++){
 console.log(list[i]);
}
*/

/*
 *          Module 3
 *
 *
*/

/////////////Exercice 1////////////////

/*Create an array with all the names of your class (including mentors).  Sort the array alphabetically.  Print the first element of the array in the console.
Print the last element of the array in the console.  Print all the elements of the array in the console.  Use a "for" loop.*/

var names = ["Yeray", "Pancho", "Oscar", "Ana", "Victoria", "Nagash", "Rodrigo", "Oriol", "Alex", "Dario", "Fabio", "Sara", "Mica", "Fer", "Jorge"];

function sortArray(listNames){
  var done = false;
  while(!done){
    done = true
    for (var i = 1; i < listNames.length; i++) {
      if (listNames[i-1] > listNames[i] ) {
        var temp = listNames[i];
        listNames[i] = listNames[i-1];
        listNames[i-1] = temp;
        done = false;
      }
    }
  }
  return listNames;
}

var sortNames = sortArray(names);

//Print first element
console.log("The first person on the list is: " + sortNames[0]);

//Print last element
console.log("The last person on the list is: " + sortNames[sortNames.length-1]);

//Print all elements
function printAllForLoop(array){
  for (var i = 0; i < array.length; i++) {
    console.log("Person " + [i]+ ": " + array[i]);
  }
}
printAllForLoop(sortNames);

///////////////////Exercise 2//////////////////////

/* Create an array with all the ages of the students in your class.  Iterate the array using a while loop, and then print every age in the console.
Add a conditional inside the while loop to only print even numbers.  Change the loop to use a "for" loop instead of a "while" loop.*/

var ages = [30, 28, 24, 29, 32, 25, 28, 26, 31, 37];

function printAllWhileLoop(array){
  var i = 0;
  while (i < array.length){
    console.log(array[i]);
    i++;
  }
}


function printEvenWhileLoop(array){
  var i = 0;
  while (i < array.length){
    if(array[i] % 2 === 0){
      console.log(array[i] + " is even (While Loop)");
    }
    i++;
  }
}

function printEvenForLoop(array){
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i] + " is even (For Loop)");
    }
  }
}

printAllWhileLoop(ages);
printEvenWhileLoop(ages);
printEvenForLoop(ages);

/////////////////////Exercise 3///////////////////////

/*Write a function which receives an array as a parameter and prints the lowest number in the array to the console.*/

function lowerNumber(array){
  let sortNumbers = sortArray(array);
  console.log("The lower number of your array is: " + sortNumbers[0]);
}

lowerNumber(ages);


////////////////////////Exercise 4/////////////////////////

/*Write a function which receives an array as a parameter and prints the biggest number in the array to the console.*/

function biggestNumber(array){
  let sortNumber = sortArray(array);
  console.log("The biggest number of your array is: " + sortNumber[array.length-1]);
}

biggestNumber(ages);

//////////////////////Exercise 5//////////////////////////

/*Write a function which receives two parameters, an array and an index. The function
will print thevalue of the element at the given position (one-based) to the console.*/

function printElement(array, index){
  console.log("The value of the element on index " + index + " is: " +array[index]);
}

printElement(ages, 5);

/////////////////////////Exercise 6///////////////////////

/*Write a function which receives an array and only prints the values that repeat.*/

var numbers = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function containElement(array, element){
  let contain = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      contain = true;
      break;
    }
  }
  return contain;
}

function printRepeat(array){
  let sort = sortArray(array);
  let result = [];
  for (var i = 1; i < sort.length; i++) {
    if(sort[i-1] == sort[i] && !containElement(result, sort[i-1])){
      result.push(sort[i-1]);
    }
  }
  if (result.length == 0) {
    console.log("No repeated values");
  } else {
    console.log("The repeated values are:");
    for (var i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
  }
}
printRepeat(numbers);

//////////////////////////Exercise 7/////////////////////

/*Write a simple JavaScript function to join all elements of an array into a string.*/

function concatenateElements(array){
  let result = "";
  for (var i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  console.log(result);
}

concatenateElements(names);

/*
 *          MODULE 4
 *
 *
*/

/////////////////////Exersice 1///////////////////////

//Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.//

function reverseNumber(number){
  let numberText = "" + number;
  let result = "";
  for (let i = numberText.length-1 ; i >= 0; i--) {
    result = result + numberText[i];
  }
  console.log((Number(result)));
}

reverseNumber(123456);

/////////////////////Exersice 2///////////////////////

//Write a JavaScript function that returns a string in alphabetical order//

function toArray(string){
  string = string.toLowerCase()
  let result = [];
  for (let i = 0; i < string.length; i++) {
    result.push(string.charAt([i]));
  }
  return result;
}

function toString(array){
  let result = "";
  for (var i = 0; i < array.length; i++) {
    result = result + array[i]
  }
  return result;
}

 function alphabeticalString(string){
  return toString(sortArray(toArray(string)));

 }

 console.log(alphabeticalString("Webmaster"));

 //////////////////////////////////Exersice 3/////////////////////////////////

 //Write a JavaScript function that converts the first letter of every word to uppercase.//

function toStringSpace(array){
  let result = "";
  for (var i = 0; i < array.length; i++) {
    result = result + array[i] + " ";
  }
  return result;
}

function firstLetterUpercase(string){
  let temp = string.split(" ");
  let result = [];
  for (var i = 0; i < temp.length; i++) {
    result.push(temp[i].charAt(0).toUpperCase() + temp[i].slice(1));
  }
  return toStringSpace(result);
}
console.log(firstLetterUpercase("prince of persia"));

/////////////////////////////////Exercise 4////////////////////////////////

//Write a JavaScript function that finds the longest word in a phrase//

function longestWord(string){
  let temp = string.split(" ");
  let longest = "";
  for (var i = 0; i < temp.length; i++) {
    if (temp[i].length > longest.length) {
      longest = temp[i];
    }
  }
  return longest;
}

console.log(longestWord("Web Development Tutorial"));
