// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAmqyEPpanrmKD7rDz0aA6M_Un0bGFnevk",
  authDomain: "brandbox-11fb7.firebaseapp.com",
  projectId: "brandbox-11fb7",
  storageBucket: "brandbox-11fb7.firebasestorage.app",
  messagingSenderId: "214410646376",
  appId: "1:214410646376:web:e8cd435ecd821dccec7cdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔥 Signup Form Submit
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Basic validation
    if(name === "" || email === "" || user === "" || pass === "") {
        alert("Please fill all fields");
        return;
    }

    // Firebase Signup
    createUserWithEmailAndPassword(auth, email, pass)
    .then(() => {
        alert("Signup Successful ✅");
        window.location.href = "login.html";
    })
    .catch((error) => {
        alert(error.message);
    });
});

// 👁 Password Toggle
window.togglePassword = function() {
    let pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
};