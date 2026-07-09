const shopBtn = document.getElementById("shopBtn");

shopBtn.addEventListener("click", () => {
    document.querySelector(".products").scrollIntoView({
        behavior: "smooth"
    });
});
