const eyes = document.getElementById("eye")
const password = document.getElementById("password")

eyes.onclick = function() {
 if (password.type == "password") {
    password.type = "text";
    eyes.src = "eye-fill.svg";
 }else {
    password.type = "password";
    eyes.src = "eye-slash-fill.svg";
 }



}