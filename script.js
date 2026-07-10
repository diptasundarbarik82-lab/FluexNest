function shopNow() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

const cartButtons = document.querySelectorAll(".card button");

cartButtons.forEach(button => {
    button.addEventListener("click", function () {
        alert("Product added to cart successfully!");
    });
});

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function () {

    const value = searchBox.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
