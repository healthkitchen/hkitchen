

function init(){
    console.log("Initializing index page");

    for(var i = 0; i < 12; i++){
    var t = document.querySelector("#cardtemplate");
    t.content.querySelector('img').src = "science.png";
    t.content.querySelector('.description').innerHTML = "delicious";

    var clone = document.importNode(t.content,true);
    document.querySelector(".cards > .row").appendChild(clone);
    }
}

init();