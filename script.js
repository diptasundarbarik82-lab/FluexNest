function buyProduct(product) {
    alert(
        "🛍️ " + product +
        "\n\nThank you for visiting FluexNest!" +
        "\nOnline shopping feature will be available soon."
    );
}
let cart = 0;

const buttons = document.querySelectorAll(".add-cart");
const cartText = document.querySelector("#cart-count");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cart++;
        cartText.textContent = cart;
        alert("Product added to cart!");
    });
});
