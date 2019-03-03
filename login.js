//var credentials = window.localStorage;
//credentials.setItem('username', 'abcd');
//credentials.setItem('password', 'abcd');

function cancel() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("uname").value = "";
    document.getElementById("psw").value = "";
    document.getElementById("psw-repeat").value = "";
}

function register() {
    var userFirstName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;
    var userUsername = document.getElementById("uname").value;
    var userPassword = document.getElementById("psw").value;
    var repeat = document.getElementById("psw-repeat").value;

    if (password != repeat) {
        $(".alert-warning").hide();
        $(".alert-danger").text('Passwords do not match!');
        $(".alert-danger").show();
    } else {
        profiles[userUsername] = {
            firstname: userFirstName,
            password: userPassword,
            MR: "",
            SL: "",
        }

        window.location = "index.html";
    }
}

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //var correctU = credentials.getItem('username');
    //var correctP = credentials.getItem('password');
    if (!username) {
        $(".alert-danger").hide();
        $(".alert-warning").text("Please enter your username.");
        $(".alert-warning").show();
    } else if (!password) {
        $(".alert-danger").hide();
        $(".alert-warning").text("Please enter your password.");
        $(".alert-warning").show();
    } else if (!profiles[username]) {
        console.log('\"' + username + '" not recognized. Remember usernames are case sensitive.');
        $(".alert-warning").hide();
        $(".alert-danger").text('\"' + username + '" not a recognized username');
        $(".alert-danger").show();
    } else if (profiles[username]["password"] != password) {
        $(".alert-warning").hide();
        $(".alert-danger").text('Password incorrect.');
        $(".alert-danger").show();
    } else {
        var profile = profiles[username];
        sessionStorage.setItem("name", profile.firstname);
        localStorage.setItem("MR", profile.MR);
        localStorage.setItem("SL", profile.SL);
        window.location = "index.html";
    }
}

$('.name_field').keyup(function (e) {
    if (e.keyCode == 13) {
        $("#password").focus();
    }
});

$('#password').keyup(function (e) {
    if (e.keyCode == 13) {
        validate();
    }
});


var profiles = {
    "GRamsay": {
        firstname: "Gordon",
        password: "ramsay1",
        MR: "[7,1,2]",
        SL: "{\"recipes\":[\"Mark Bittman's Chicken Cutlets\",\"Sous Vide Salmon\"],\"Pantry\":{\"Flour\":[3.49,\"2 lb\",1],\"Black Pepper\":[2.99,\"3 oz\",1],\"Olive Oil\":[5.89,\"24 oz\",1],\"Butter\":[3.69,\"1 lb\",1],\"White Wine\":[2.18,\"13 oz\",1],\"Vegetable Oil\":[2.89,\"16 oz\",1]},\"Meats\":{\"Chicken\":[4.49,\"3 lb\",1],\"Chicken Stock\":[2.99,\"32 oz\",1],\"Salmon\":[15.4,\"1 lb\",1]},\"Produce\":{\"Parsley\":[2.49,\"2 oz\",1],\"Lemon\":[1.49,\"1 unit\",1],\"Dill\":[1.49,\".5 oz\",1]}}"
    },
    "JAverage": {
        firstname: "Joe",
        password: "average2",
        MR: "[0,6,8]",
        SL: "{\"recipes\":[\"Mac and Cheese\",\"Easy Fried Rice\"],\"Pasta\":{\"Macaroni\":[1.49,\"24 oz\",1]},\"Pantry\":{\"Salt\":[0.89,\"26 oz\",1],\"Rice\":[0.99,\"1 lb\",1],\"Vegetable Oil\":[2.89,\"16 oz\",1],\"Soy Sauce\":[2.29,\"1.25 qt\",1],\"Sesame Oil\":[7.49,\"8.45 oz\",1]},\"Dairy\":{\"Milk\":[1.69,\"1 gal\",1],\"Cheese\":[2.79,\"24 oz\",1]},\"Produce\":{\"Onion\":[1,\"1 unit\",1],\"Carrot\":[1.5,\"1lb\",1],\"Scallions\":[1.89,\"6 oz\",1],\"Garlic\":[1.39,\"4 cloves\",1]},\"Meats\":{\"Egg\":[1.69,\"1 dozen\",1]},\"Frozen\":{\"Frozen Peas\":[0.99,\"1 lb\",1]}}"
    }
};