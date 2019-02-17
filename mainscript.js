

function init(){
    console.log("Initializing index page");

    for(var i = 0; i < 12; i++){
    var t = document.querySelector("#cardtemplate");
    t.content.querySelector('img').src = "images/science.png";
    t.content.querySelector('.description').innerHTML = "delicious";
    t.content.querySelector('a').href = "recipe.html#0"

    var clone = document.importNode(t.content,true);
    document.querySelector(".cards > .row").appendChild(clone);
    }
}