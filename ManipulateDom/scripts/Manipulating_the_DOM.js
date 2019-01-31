/*JavaScript Exercises 2
You might want to read this resources:
https://www.w3schools.com/js/js_htmldom.asp



/////////Exercise 1
Now let's add content to an HTML document instead of writing to the console.
Write a function called addBands(myBandList) that will list your favorite bands.
Start with an empty HTML page that contains a level 1 heading "My Favorite Bands"
and an empty unordered list with ID band-list.
Your function should use the JavaScript DOM to create list items and add them
to the unordered list, with one list item for each string in array myBandList.
For example, if I call:
  addBands(['Dire Straits', 'Kansas', 'Steely Dan']);
The function will add three list items to the unordered list.
//////Exercise 2
Write a function called addMultTable(rows, cols) that will create a multiplication
table like this. Start with an empty HTML page that only contains a level 1 heading.
Your function should use the JavaScript DOM to insert an HTML table after the heading.
For example, if I call:
    addMultTable(4, 8);
It will create an HTML table with 4 rows
and 8 columns, and append it after the level 1 heading.
*/


/////Exercise 1
let myBands = ["Dire Straits", "Kansas", "Steely Dan"];

function addBands(array){
  let myList = document.getElementById("bandList");
  myBands.forEach(function(item) {
    let li = document.createElement("LI");          //Create the element <li></li>
    let text = document.createTextNode(item);       //create the text
    li.appendChild(text);                           //Introduce the text inside <li></li>
    myList.appendChild(li);                         //Introduce the li element inside the ul
  });
}
addBands(myBands);

////////Exercise 2

function createDoubleArray(rows, column){
  let array = new Array(rows);
  for(let i = 0; i < array.length; i++){
    array[i] = new Array(column);
  }
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array.length; j++) {
        array[i][j] = i*j;
    }
  }
  array[0][0] = "";
  for(var i = 0; i < 1; i++) {
    for(var j = 1; j < array.length; j++) {
        array[i][j] = j;
        array[j][i] = j;
    }
  }
  return array;
}

function addMultTable(rows, columns){
  let table = document.createElement("TABLE");                              //Create table element
  table.setAttribute("id", "multTable");                                    //Set id
  document.body.appendChild(table);                                         //Insert inside body

  results = createDoubleArray(rows, columns);
  for(var i = 0; i < results.length; i++) {

    var newTr = document.createElement("TR");                               //Create tr element
    newTr.setAttribute("id", "myTr" + i.toString());                        //Set id
    document.getElementById("multTable").appendChild(newTr);                //Insert inside table

    for(var j = 0; j < results.length; j++) {

      var newTd = document.createElement("TD");                             //Create td element
      var text = document.createTextNode(results[i][j].toString());           //Create the text
      newTd.appendChild(text);                                              //Put the text inside of td element
      document.getElementById("myTr" + i.toString()).appendChild(newTd);    //Insert td element inside tr
    }
  }
}

addMultTable(11, 11);
