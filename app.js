function newItem(){

  console.log("Inside newItem");
  /*Store the item (get the id element, then access value. store that.)*/
  var item = document.getElementById("input").value;
  console.log(item);

  /*Store the list element in a var*/
  var list = document.getElementById("list");

  // Append all old list items from local storage
  getLocally();

  // create a new bullet element
  var el = document.createElement("li");

  /* access the bullet element var, append a new:
      create a "textnode" that has a bullet then the item var we stored earlier*/
  el.appendChild(document.createTextNode("☀ " + item));

  /*add it to the list!*/
  list.appendChild(el);

  /*Clear the text in the box*/
  document.getElementById("input").value = " ";

  /*Remove item when the li element is clicked*/
  el.onclick = removeItem;

  /*Save in local storage*/
  saveLocally(el);

}

function getLocally(list) {
  console.log("retrieving old data");
  var oldList = localStorage.getItem(list);
  if (oldList != null){
    list.appendChild(document.createTextNode(oldList));
  }
}

function saveLocally(el){
  console.log("saving new data");
  // Get element
  // slap it in local data
  localStorage.setItem(el); // ??
}

function removeItem(e) {
  // when the funcition is called on an item (e) it will get stored in e.target, then is remove() d
  e.target.remove();
  localStorage.removeItem(e); // ??
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 13){
    console.log("enter clicked!");
    newItem();
  }
};
