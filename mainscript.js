

function init(){
    console.log("Initializing index page");

    for(var i = 0; i < recipes.length; i++){
    var t = document.querySelector("#cardtemplate");
    var r = recipes[i]
    t.content.querySelector('img').src = r.imgsrc;
    t.content.querySelector('.description').innerHTML = r.name + " $" +r.homeprice;
    t.content.querySelector('a').href = "recipe.html#" + i;

    var clone = document.importNode(t.content,true);
    document.querySelector(".cards > .row").appendChild(clone);
    }
}