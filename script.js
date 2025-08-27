var submit = document.getElementById("submit")

submit.addEventListener("click", function(event){
    event.preventDefault()

    var nameregex = /^[a-zA-Z]+$/
    var emailregex = /^[a-zA-Z0-9]+@gmail\.com/
    var passwordregex = /^[a-zA-Z0-9]{6,}$/

    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    var validate = true

    if(nameregex.test(name.value) == false){
        document.querySelector(".nameError").style.display = "inline"
        validate = false
    }
    else{
        document.querySelector(".nameError").style.display = "none"
    }
    if(emailregex.test(email.value) == false){
        document.querySelector(".emailError").style.display = "inline"
        validate = false
    }
    else{
        document.querySelector(".emailError").style.display = "none"
    }
    if(passwordregex.test(password.value) == false){
        document.querySelector(".passwordError").style.display = "inline"
        validate = false
    }
    else{
        document.querySelector(".passwordError").style.display = "none"
    }

    if(validate == true){
        alert("Form Submitted Successfully")
    }
})

//password 
var togglePassword = document.querySelector(".toggle-password");
var password = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
});
