
function slideDown(element){
  element.classList.add("slideDown");
  element.classList.remove("slideUp");
}

function slideUp(element){
  element.classList.add("slideUp");
  element.classList.remove("slideDown");

}

function cliked(){
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      return document.getElementById(this.id);
    };
  }
}

function knowDiv(button){
  let idButton = button.id;
  let number = idButton.charAt(idButton.length-1);
  return document.getElementById("box" + number);
}

function removeDiv(div){
  let nodeDivs = document.getElementsByName("boxes"); //return a NodeList
  let arrayDivs = Array.from(nodeDivs) //Transform a NodeList to Array
  let index = arrayDivs.indexOf(div);
  if (index > -1) {
    arrayDivs.splice(index, 1);
  }
  return arrayDivs;
}

function makeDivsWork(event){
  let clickedButton = event.target;
  let div = knowDiv(clickedButton);
  if(div.classList.contains("slideDown")) {
    slideUp(div);
  } else {
    slideDown(div);
  }
  let restDivs = removeDiv(div);
  restDivs.forEach(function(item){
  if (item.classList.contains("slideUp")) {
    slideDown(item);
  }
})
};
