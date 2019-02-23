

function loadShoppingList() {

    console.log("Initializing Shopping List page");
    var retrievedmyrecipes = localStorage.getItem("MR") || '{}'
    var myrecipes = JSON.parse(retrievedmyrecipes);

    var retrieved_shoppinglist = localStorage.getItem("SL") || '{}';
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
    if (myrecipes.length == 0) {
        var node = document.createElement("h5");
        node.textContent = "Add recipes you like from the home page!";
        document.getElementById("ingredients-list").appendChild(node);
    }
    else {
        for (let i = 0; i < myrecipes.length; i++) {
            let recipe_idx = myrecipes[i];
            var dat = recipes[recipe_idx];
            var node = document.createElement("li");

            var t = document.querySelector("#shopping_cardtemplate");
            t.content.querySelector('img').src = dat.imgsrc;
            t.content.querySelector('p').textContent = dat.name;
            t.content.querySelector('a').href = "recipe.html#"+recipe_idx;

            var clone = document.importNode(t.content, true);
            clone.querySelector(".list_add").onclick = function(){addToShoppingList(recipe_idx)};
            clone.querySelector(".list_remove").onclick = function () { removeFromMyRecipes(i) };

            node.appendChild(clone);

            document.getElementById("ingredients-list").appendChild(node);
        }
    }

    //iterate and render shopping list
    var total = 0;
    for (let category in myshoppinglist) {
        //console.log(category);
        //console.log(myshoppinglist[category]);
        var node = document.createElement("h5");
        node.textContent = category;
        document.getElementById("shopping-list").append(node);
        for(let item in myshoppinglist[category]){
            var node = document.createElement("tr");
            node.setAttribute("class","row")
            var info = document.createElement("td");
            info.setAttribute("class","col-md-3 align-bottom");
            info.textContent = item;
            node.append(info);
            var info = document.createElement("td");
            info.setAttribute("class","col-md-3");
            info.textContent = myshoppinglist[category][item][1]; //typical size
            node.append(info);
            var info = document.createElement("td");
            info.setAttribute("class","col-md-2");
            info.textContent = "$" + myshoppinglist[category][item][0]; //price
            node.append(info);
            var info = document.createElement("td");
            info.setAttribute("class","col-md-2");
            info.textContent = myshoppinglist[category][item][2]; //quantity
            node.append(info);

            //up and down arrows
            var info = document.createElement("td");
            //info.setAttribute("class","row");
            var t = document.querySelector("#quant_link");
            t.content.querySelector("a").href="javascript:upQuant(\""+category + "\",\"" + item +"\")";
            t.content.querySelector("i").innerHTML = "keyboard_arrow_up";
            t.content.querySelector("i").value="up";
            info.appendChild(document.importNode(t.content,true));

            var t = document.querySelector("#quant_link");
            t.content.querySelector("a").href="javascript:downQuant(\""+category + "\",\"" + item +"\")";
            t.content.querySelector("i").innerHTML = "keyboard_arrow_down";
            t.content.querySelector("i").value="down";
            info.appendChild(document.importNode(t.content,true));
            node.append(info);

            var info = document.createElement("a");
            info.setAttribute("class","col-md-2");
            info.href = "javascript:removeFromShoppingList(\""+category + "\",\"" + item +"\")";
            info.textContent = "x"; //quantity
            node.append(info);

            
            total += myshoppinglist[category][item][0] * myshoppinglist[category][item][2];
            
            document.getElementById("shopping-list").append(node);
        }

    }
    document.getElementById("total").innerHTML = "Total: $" + Math.round(total * 100) / 100;


};

function addToShoppingList(idx) {
    console.log("adding to shopping list " + idx);
    var retrieved_str = localStorage.getItem("SL") || '{}';
    var SL = JSON.parse(retrieved_str);

    //adds unique recipes to shopping list
    let recipe = recipes[idx];
    for (let d of recipe.ingredients) {
        var name = d[1];
        var ingredient_info = ingredients[name];
        var category = ingredient_info[2];
        if(!(category in SL)){
            SL[category] = {};
        }
        if(!(name in SL[category])){
            SL[category][name] = ingredient_info.slice(0,2);
            SL[category][name][2] = 1;
        }
    }


    localStorage.setItem("SL", JSON.stringify(SL));
    loadShoppingList();

}


function upQuant(category,item){
    var retrieved_str = localStorage.getItem("SL") || '{}';
    var SL = JSON.parse(retrieved_str);
    SL[category][item][2] += 1;
    
    localStorage.setItem("SL", JSON.stringify(SL));
    loadShoppingList();
}

function downQuant(category,item){
    var retrieved_str = localStorage.getItem("SL") || '{}';
    var SL = JSON.parse(retrieved_str);
    SL[category][item][2] -= 1;
    if(SL[category][item][2] <= 0){
        SL[category][item][2] = 1;
    }
    
    localStorage.setItem("SL", JSON.stringify(SL));
    loadShoppingList();
}

function removeFromShoppingList(category,item) {
    console.log("removing shopping " + category + " " + item);
    var retrievedSL = localStorage.getItem("SL") || '{}'
    var SL = JSON.parse(retrievedSL);

    delete SL[category][item];
    if(jQuery.isEmptyObject(SL[category])){
        delete SL[category];
    }
    localStorage.setItem("SL", JSON.stringify(SL));
    loadShoppingList();
}

function clearShoppingList() {
    localStorage.removeItem("SL", null);
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
