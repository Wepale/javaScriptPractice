function randomColor() {
  var hex = "0123456789ABCDEF"; //16 posibilities
  var color = "#"; //Color in hexadecimal have 6 char after # Ex: #123456
  for (var i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

function moreRow(){
  var table = document.getElementById("table"); //Table
  var rowNumber = table.rows.length;            //Numbers of rows
  var newRow = table.insertRow(rowNumber);      //Insert row at the end (<tr></tr>)
  var inside = newRow.insertCell(0);            //Insert a cell on that row (<td></td>)
  inside.innerHTML = "Color Name Example";      //Inser some text inside the cell (<td>Color Name Example</td>)
  newRow.style.backgroundColor = randomColor(); //Add random background color
}
