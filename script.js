// FluexNest JavaScript

// Shop Now buttons
const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Thank you for visiting FluexNest!\nShopping feature will be available soon.");
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Welcome message
console.log("Welcome to FluexNest");
