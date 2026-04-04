// Signup Validation
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(name === "" || email === "" || user === "" || pass === "") {
        alert("Please fill all fields");
    } else {
        alert("Signup Successful ✅");
        window.location.href = "LoginPage.html"; // redirect to login
    }
});