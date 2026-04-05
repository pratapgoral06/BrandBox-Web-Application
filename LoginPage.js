// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAmqyEPpanrmKD7rDz0aA6M_Un0bGFnevk",
  authDomain: "brandbox-11fb7.firebaseapp.com",
  projectId: "brandbox-11fb7",
  storageBucket: "brandbox-11fb7.firebasestorage.app",
  messagingSenderId: "214410646376",
  appId: "1:214410646376:web:e8cd435ecd821dccec7cdd",
  measurementId: "G-R2743ZZYSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔥 Login Form Submit
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        alert("Login Successful ✅");
        window.location.href = "home.html";
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