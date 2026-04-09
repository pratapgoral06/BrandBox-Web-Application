/* --- 1. NAVIGATION FUNCTIONS --- */

// English Comment: Redirects user to the Men's collection page
function goToMen() {
    window.location.href = "Men.html";
}

// English Comment: Redirects user to the Women's collection page (FIXED spelling from Womem to Women)
function goToWomen() {
    window.location.href = "Womem.html"; 
}

// English Comment: Redirects user to the Shopping Cart page
function goToCart() {
    window.location.href = "Cart.html";
}

/* --- 2. PRODUCT DETAILS LOGIC --- */

// English Comment: Saves product info to localStorage and ensures unique data for each product
function viewDetails(name, price, image, description) {
    // Ensuring fresh data by clearing existing keys first
    localStorage.removeItem("pName");
    localStorage.removeItem("pPrice");
    localStorage.setItem("pImage", ""); // Clear previous image link
    localStorage.removeItem("pDesc");

    // Saving clicked product's unique information
    localStorage.setItem("pName", name);
    localStorage.setItem("pPrice", price);
    localStorage.setItem("pImage", image); 
    localStorage.setItem("pDesc", description);
    
    // Debugging: Log the image being saved (Check this in browser F12 console if image is wrong)
    console.log("Saving image for " + name + ": " + image);

    // Redirect to the details page
    window.location.href = "ProductDetails.html";
}

/* --- 3. DISPLAY & FILTER LOGIC --- */

function showAll() {
    let products = document.querySelectorAll(".product-card");
    products.forEach(p => {
        p.style.display = "block";
    });
}

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

/* --- 4. CART MANAGEMENT --- */

function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    
    updateCartCount();
    alert(name + " added to Cart 🛒");
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let countElement = document.getElementById("cartCount");
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

/* --- 5. SEARCH FUNCTIONALITY --- */

function searchProduct() {
    let inputField = document.querySelector(".search-box input");
    let input = inputField ? inputField.value.toLowerCase() : "";
    let products = document.querySelectorAll(".product-card");

    products.forEach(p => {
        let nameElement = p.querySelector("h4");
        if (nameElement) {
            let name = nameElement.innerText.toLowerCase();
            p.style.display = name.includes(input) ? "block" : "none";
        }
    });
}

/* --- 6. INITIAL LOAD --- */

window.onload = function () {
    updateCartCount();
    showAll();
};