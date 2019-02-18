

function loadShoppingList() {

    console.log("Initializing Shopping List page");
    var retrievedmyrecipes = localStorage.getItem("MR") || '[]'
    var myrecipes = JSON.parse(retrievedmyrecipes);

    var retrieved_shoppinglist = localStorage.getItem("SL") || '[]';
    var myshoppinglist = JSON.parse(retrieved_shoppinglist);

    //first clear out old recipe list and re-render
    var node = document.getElementById("ingredients-list");
    while (node && node.firstChild) {
        node.removeChild(node.firstChild);
    }
    //clear out old shopping list and re-render
    var node = document.getElementById("shopping-list");
    while (node && node.firstChild) {
        node.removeChild(node.firstChild);
    }

    //iterate and render my recipes
    for (let i = 0; i < myrecipes.length; i++) {
        var recipe_idx = myrecipes[i];
        var dat = recipes[recipe_idx];
        var node = document.createElement("LI");

        var t = document.querySelector("#shopping_cardtemplate");
        t.content.querySelector('img').src = dat.imgsrc;
        t.content.querySelector('.description').innerHTML = dat.name;
        t.content.querySelector('a').href = "javascript:addToShoppingList(" + i + ")";

        var clone = document.importNode(t.content, true);

        node.appendChild(clone);
        node.querySelector(".btn").onclick = function () { removeFromMyRecipes(i) };
        document.getElementById("ingredients-list").appendChild(node);
    }

    //iterate and render shopping list
    var total = 0;
    for (let i = 0; i < myshoppinglist.length; i++) {
        var node = document.createElement("li");
        node.innerHTML = myshoppinglist[i] + " $" + ingredients[myshoppinglist[i].toLowerCase()];
        node.innerHTML += "<a class=\"rm\"  href=\"javascript:removeFromShoppingList("+i+")\">x</a>";
        total += ingredients[myshoppinglist[i].toLowerCase()];
        document.getElementById("shopping-list").appendChild(node);
    }
    document.getElementById("total").innerHTML = "Total: " + total;


};

function addToShoppingList(idx) {
    console.log("adding to shopping list " + idx);
    var retrieved_str = localStorage.getItem("SL") || '[]';
    var SL = JSON.parse(retrieved_str);

    let recipe = recipes[idx];
    for (let d of recipe.ingredients) {
        SL.push(d[1]);
    }


    localStorage.setItem("SL", JSON.stringify(SL));
    loadShoppingList();

}

function removeFromShoppingList(idx){
    console.log("removing shopping " + idx);
    var retrievedSL = localStorage.getItem("SL") || '[]'
    var SL = JSON.parse(retrievedSL);

    SL.splice(idx, 1);
    localStorage.setItem("SL", JSON.stringify(SL));
    loadShoppingList();
}

function clearShoppingList(){
    localStorage.removeItem("SL",null);
    loadShoppingList();
}

function clearMyRecipes() {
    localStorage.removeItem("MR", null);
    loadShoppingList();
}

function removeFromMyRecipes(idx) {
    console.log("removing myrecipes " + idx);
    var retrievedmyrecipes = localStorage.getItem("MR") || '[]'
    var myrecipes = JSON.parse(retrievedmyrecipes);

    myrecipes.splice(idx, 1);
    localStorage.setItem("MR", JSON.stringify(myrecipes));
    loadShoppingList();


};

/*
//we dont needs this because it's in recipe.js
function addRec()
{
  var retrievedmyrecipes = localStorage.getItem("MR")
  var myrecipes = JSON.parse(retrievedmyrecipes);
  var index = parseURI();
  myrecipes.push(index);
  localStorage.setItem("MR", JSON.stringify(myrecipes));
}*/
