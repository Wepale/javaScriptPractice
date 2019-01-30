var listContent = ["item 1", "item 2", "item 3", "item 4", "item 5"];

function createList(array){
  var str = "<ul>";
  array.forEach(function(item) {
    str += "<li>" + item + "</li>";
  });
  str += "</ul>";
  return str;
}

window.onload = function() {
  document.getElementById("listContainer").innerHTML = createList(listContent);
}
