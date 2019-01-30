var imageList = ["images/baseball.jpg", "images/cross.jpg", "images/cycling.jpg", "images/football.jpg",
"images/icehockey.jpg", "images/mix.jpg", "images/soccer.jpg", "images/tennis.jpg", "images/tennistable.jpg"];

function changeImage(array){
  var randomImage = array[Math.floor(Math.random() * imageList.length)];
  var str = '<img src="' + randomImage + '">'
  document.getElementById("imageContainer").innerHTML = str;
}
