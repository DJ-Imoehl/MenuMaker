var itemList = [];
var selectedMenu;
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text/plain");
  var htmlElement = document.getElementById(data);
  var htmlElementTitle = document.getElementById(data + "-title");
  ev.target.appendChild(htmlElement);

  htmlElementTitle.style.color = selectedMenu.textColor;
  htmlElementTitle.style.fontSize = selectedMenu.fontSize;

  itemList.push(htmlElementTitle.innerHTML);
  htmlElement.className = "food-item-set";
}

//TODO: Reorder on drop
function removedrop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text/plain");
  var htmlElement= document.getElementById(data);
  var htmlElementTitle = document.getElementById(data + "-title");
  htmlElementTitle.style.color = "black";
  htmlElement.className = "food-item";

  ev.target.appendChild(htmlElement);
  itemList = itemList.filter(function(item) {
    return item != htmlElementTitle.innerHTML;
  });
}

function getItemList(){
  var para = document.getElementById("itemList");
  var items = "";
  for(var i = 0; i < itemList.length; i++){
    items = items + itemList[i];
    if(i + 1 != itemList.length){
      items = items + ", ";
    }
  }
  para.innerHTML = items;
}
