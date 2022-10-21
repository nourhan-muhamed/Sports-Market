const submitbutton = document.getElementById("submit");

submitbutton.addEventListener("click",() => {
    let emailInput = document.getElementById("email");
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let password2Input = document.getElementById("password2");
    let accouts = JSON.parse(localStorage.getItem("accouts"))  || [];
    let newaAccout = {
        username:usernameInput.value,
        email:emailInput.value,
        password:passwordInput.value,
        password2:password2Input.value,
        type:"user",

    }
    accouts.push(newaAccout);
    localStorage.setItem("accounts", JSON.stringify(accouts))
    window.location.href = "./login.html";




});