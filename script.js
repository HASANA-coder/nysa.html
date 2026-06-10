// ===============================
// Nysa Fashion Boutique
// script.js
// ===============================

// Search Products
// Product Search

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const searchValue = searchInput.value.toLowerCase();

        const products = document.querySelectorAll(".product-card");

        products.forEach(product => {

            const productName = product.querySelector("h3").textContent.toLowerCase();

            if (productName.includes(searchValue)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });
}

// Smooth page loading effect

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.5s ease";