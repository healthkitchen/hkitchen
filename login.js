var credentials = window.localStorage;
credentials.setItem('username', 'abcd');
credentials.setItem('password', 'abcd');

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