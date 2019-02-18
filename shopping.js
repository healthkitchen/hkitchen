


function loadShoppingList()
{

  console.log("Initializing Shopping List page");
  var retrievedmyrecipes = localStorage.getItem("MR")
  var myrecipes = JSON.parse(retrievedmyrecipes);


  for(var i = 0; i < myrecipes.length; i++)
  {
    var node = document.createElement("LI");

    var t = document.querySelector("#cardtemplate");
    t.content.querySelector('img').src = "images/science.png";
    t.content.querySelector('.description').innerHTML = "delicious";
    t.content.querySelector('a').href = "recipe.html#0"

    var clone = document.importNode(t.content,true);

    node.appendChild(clone);
    document.getElementById("ingredients-list").appendChild(node);
  }


};

function addRec()
{
  var retrievedmyrecipes = localStorage.getItem("MR")
  var myrecipes = JSON.parse(retrievedmyrecipes);
  var index = parseURI();
  myrecipes.push(index);
  localStorage.setItem("MR", JSON.stringify(myrecipes));
}
