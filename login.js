var credentials = window.localStorage;

function register() {
    var username = document.getElementById("uname");
    var password = document.getElementById("psw");

    credentials.setItem('username', username);
    credentials.setItem('password', password);
}

function validate(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    var correctU = credentials.getItem('username');
    var correctP = credentials.getItem('password');

    if (username.value == correctU && password.value == correctP) {
        window.location = "index.html";
        return false;
    }
}