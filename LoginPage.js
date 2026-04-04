// LOGIN REDIRECT
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "" || pass === "") {
        alert("Please fill all fields");
    } else {
        // ✅ Save user info (optional but useful)
        localStorage.setItem("username", user);

        // ✅ Redirect to home page
        window.location.href = "Home.html";
    }
});