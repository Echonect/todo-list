const paragraphTag = document.createElement("p");
const node = document.createTextNode("This is new");
const element = document.getElementById("listdiv");

function addListItem() {
  paragraphTag.appendChild(node);
  element.appendChild(paragraphTag);
}

function deleteListItem() {
  paragraphTag.remove();
}




