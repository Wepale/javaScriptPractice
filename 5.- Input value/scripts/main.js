function copyInput(){
  var userText = document.getElementById("userInput").value;
  if (userText === "") {
    alert("You need to write something!");
  } else {
    document.getElementById("userCopy").innerHTML = "<p>" + userText + "</p>";
  }
}
