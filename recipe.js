/*This function loads a recipe from a list of recipe objects in recipe_list.js */
function loadRecipe(){
    //get the recipe you need
    var recipe = recipes[0];
    var ingredients_list = document.getElementById("ingredients-list");
    var directions_list = document.getElementById("directions-list");

    document.getElementById("recipe-name").innerHTML=recipe.name;

    for(var i of recipe.ingredients){
        //console.log(i);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(i));
        ingredients_list.appendChild(li);
    }
    for(var d of recipe.directions){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(d));
        directions_list.appendChild(li);
    }
}