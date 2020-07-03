function newItem(){
  console.log("Inside newItem");
  /*Store the item (get the id element, then access value. store that.)*/
  var item = document.getElementById("input").value;
  console.log(item);

  /*Store the list element in a var*/
  var list = document.getElementById("list");

  var li = document.createElement("li");
  // note: og tutorial said to add a "-" in front but it automatically creates a bullet for me
  /* access the li var. append a new:
      create a "textnode" that has a - then the item var we stored earlier*/
  li.appendChild(document.createTextNode("☀ " + item));

  /*add it to the list!*/
  list.appendChild(li);

  /*Clear the text in the box*/
  document.getElementById("input").value = " ";

  /*Remove item when the li element is clicked*/
  li.onclick = removeItem;
}


function removeItem(e) {
  // when the funcition is called on an item (e) it will get stored in e.target, then is remove() d
  e.target.remove();
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 13){
    console.log("enter clicked!");
    newItem();
  }
};
