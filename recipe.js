/*This function loads a recipe from a list of recipe objects in recipe_list.js */
function loadRecipe(){
    //get the recipe you need
    console.log(window.location.href);
    var index = parseURI();
    //index = recipes.length -1;
    var recipe = recipes[index];
    var ingredients_list = document.getElementById("ingredients-list");
    var directions_list = document.getElementById("directions-list");

    document.getElementById("current_image").src = recipe.imgsrc;
    document.getElementById("recipe-name").innerHTML=recipe.name;
    document.getElementById("prices").innerHTML="Home Price: $" + recipe.homeprice
     + " Retail: $" + recipe.retailprice;

    for(var i of recipe.ingredients){
        //console.log(i);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(i[0]));
        ingredients_list.appendChild(li);
    }
    for(var d of recipe.directions){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(d));
        directions_list.appendChild(li);
    }
}

function parseURI(){
    var uri = decodeURI(window.location.href);
    var loc = uri.indexOf('#') + 1;
    return parseInt(uri.substring(loc));
}


$(document).ready(function(){
    $('button').click(function(){
        $('.alert').show()
    }) 
  });

function addRec()
{
  var retrievedmyrecipes = localStorage.getItem("MR")
  var myrecipes = JSON.parse(retrievedmyrecipes);
  var index = parseURI();
  myrecipes.push(index);
  localStorage.setItem("MR", JSON.stringify(myrecipes));
}