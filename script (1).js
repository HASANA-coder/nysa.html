const sheetURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2_JZ57ARZILvdOPZW_37jjFTtZPnG2kkQnxNLox2ceGJpgdyOPGKIO0qN2wM_6jb8CgjrPV648SRo/pub?output=csv";

async function loadProducts() {

    const response = await fetch(sheetURL);
    const csvText = await response.text();

    const rows = csvText.trim().split("\n");

    const products = [];

    for(let i = 1; i < rows.length; i++){

        const cols = rows[i].split(",");

        products.push({
            id: cols[0],
            name: cols[1],
            category: cols[2],
            price: cols[3],
            description: cols[4],
            image: cols[5],
            whatsapp: cols[6]
        });

    }

    displayProducts(products);
}

function displayProducts(products){

    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    products.forEach(product => {

        grid.innerHTML += `
        <div class="product-card">

            <a href="product.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}">
            </a>

            <h3>${product.name}</h3>

            <p>${product.category}</p>

            <h4>₹${product.price}</h4>

            <a
            href="product.html?id=${product.id}"
            class="order-btn">
            View Details
            </a>

        </div>
        `;
    });
}

loadProducts();