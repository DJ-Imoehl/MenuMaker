function onload(){
  window.addEventListener("dragenter", function(event) {
    if ( event.target.className == "MenuItems" ) {
      event.target.style.border = "3px dotted red";
    }
  });
  window.addEventListener("dragleave", function(event) {
    if ( event.target.className == "MenuItems" ) {
      event.target.style.border = "1px solid #aaaaaa";
    }
  });

  var lobsterItem = new MenuItem("drag1", "Lobster", "Boiled, buttered, and seasoned with lemon.", 18);
  var potatoItem = new MenuItem("drag2", "Mashed Potatoes", "Home-made buttered red potatoes", 5);
  var roastBeefItem = new MenuItem("drag3", "Roast Beef", "Rump roast seasoned with rosemary and tyme.", 12);
  var greekChickenItem = new MenuItem("drag4", "Greek Chicken", "Chicken seasoned with oregano and lemon.", 9);

  var itemList = [lobsterItem, potatoItem, roastBeefItem, greekChickenItem];

  var initialItems = document.getElementById("InitialItems");

  for(var i = 0; i < itemList.length; i++){
    itemList[i].generateElement(initialItems);
  }

  selectedMenu = new Menu("sample-menu.jpg", "20%", "10%",  "Arial", "30px", "#FFA500");

  var menuAreaElement = document.getElementById("MenuArea");
  menuAreaElement.style.paddingTop = selectedMenu.headerHeight;
  menuAreaElement.style.paddingLeft = selectedMenu.leftPadding;

}
