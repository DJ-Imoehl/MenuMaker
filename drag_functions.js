var itemList = [];

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

  itemList.push(htmlElementTitle.innerHTML);
}

//TODO: Reorder on drop
function removedrop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text/plain");
  var htmlElement= document.getElementById(data);
  var htmlElementTitle = document.getElementById(data + "-title");
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
