function newItem(){

  console.log("Inside newItem");
  /*Store the item (get the id element, then access value. store that.)*/
  var item = document.getElementById("input").value;
  console.log(item);

  /*Store the list element in a var*/
  var list = document.getElementById("list");

  var oldList = localStorage.getItem(list);
  if (oldList != null){
    list.appendChild(document.createTextNode(oldList));
  }


  var el = document.createElement("li");

  /* access the li var. append a new:
      create a "textnode" that has a - then the item var we stored earlier*/
  el.appendChild(document.createTextNode("☀ " + item));

  /*add it to the list!*/
  list.appendChild(el);
  /*Save in local storage*/
  localStorage.setItem(list);

  /*Clear the text in the box*/
  document.getElementById("input").value = " ";

  /*Remove item when the li element is clicked*/
  el.onclick = removeItem;


}


function removeItem(e) {
  // when the funcition is called on an item (e) it will get stored in e.target, then is remove() d
  // e.target.remove();
  localStorage.removeItem(e);
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 13){
    console.log("enter clicked!");
    newItem();
  }
};
