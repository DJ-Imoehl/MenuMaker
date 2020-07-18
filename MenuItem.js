class MenuItem {
  constructor(id, name, description, price){
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }

  generateElement(parentElement){
    var menuItemElement = document.createElement("DIV");
    menuItemElement.className = "food-item";
    menuItemElement.id = this.id;
    var title = document.createElement("H4");
    title.className = "food-item-title";
    title.id = this.id + "-title";
    title.innerHTML = this.name;
    menuItemElement.appendChild(title);
    var desc = document.createElement("I");
    desc.className = "food-item-desc";
    desc.id = this.id + "-desc";
    desc.innerHTML = this.description;
    menuItemElement.appendChild(desc);

    menuItemElement.draggable = true;
    menuItemElement.addEventListener("dragstart", drag);
    parentElement.appendChild(menuItemElement);
  }
}
