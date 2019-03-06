var name_query;
var price_query;
var time_query;
function init_index(){
    console.log("Initializing index page");

    //clear out elements in content div and re-render
    var node = document.querySelector('.row');
    while (node && node.firstChild) {
        node.removeChild(node.firstChild);
    }

    name_query = name_query || "";
    price_query = price_query || Infinity;
    time_query = time_query || Infinity;

    for(var i = 0; i < recipes.length; i++){
    var t = document.querySelector("#cardtemplate");
    var r = recipes[i];

    if((parseFloat(r.time) > time_query) || r.homeprice > price_query || !(r.name.toLowerCase().includes(name_query.toLowerCase()))){
        continue;
    }

    t.content.querySelector('img').src = r.imgsrc;
    t.content.querySelector('.description').innerHTML = "<b>" + r.name + "</b><br /><font color='green'>$" +r.homeprice + "</font> Cook Time: " + r.time;
    t.content.querySelector('a').href = "recipe.html#" + i;

    var clone = document.importNode(t.content,true);
    document.querySelector(".cards > .row").appendChild(clone);
    }
}

function verifyUser(){
    console.log("verifying user " + sessionStorage.getItem("name"));
    if(!sessionStorage.getItem("name")){
        window.location="login.html";
    }
}

function logout(){
    sessionStorage.clear();
    localStorage.clear();
    window.location="login.html";
}

function search(){
    name_query = document.querySelector(".search-cards").value;
    price_query = parseFloat(document.querySelector(".search-price").value)||Infinity;
    time_query = parseFloat(document.querySelector(".search-time").value)||Infinity;

    console.log(price_query);
    init_index();
}