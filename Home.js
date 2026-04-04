// NAVIGATION
function goToMen() {
    window.location.href = "men.html";
}

function goToWomen() {
    window.location.href = "Womem.html";
}

function goToCart() {
    window.location.href = "cart.html";
}

// SHOW ALL PRODUCTS
function showAll() {
    let products = document.querySelectorAll(".product-card");

    products.forEach(p => {
        p.style.display = "block";
    });
}
// ADD TO CART FUNCTION
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name, price, image });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("Added to Cart 🛒");
}
// FILTER (optional if needed later)
function filterCategory(type) {
    let products = document.querySelectorAll(".product-card");

    products.forEach(p => {
        if (p.getAttribute("data-category") === type) {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    });
}

// CART COUNT
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartCount").innerText = cart.length;
}
// SEARCH FUNCTION
function searchProduct() {
    let input = document.querySelector(".search-box input").value.toLowerCase();
    let products = document.querySelectorAll(".product-card");

    products.forEach(p => {
        let name = p.querySelector("h4").innerText.toLowerCase();

        if (name.includes(input)) {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    });
}
// LOAD
window.onload = function () {
    updateCartCount();
    showAll(); // show all by default
};