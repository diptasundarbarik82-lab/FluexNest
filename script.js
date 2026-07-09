const shopBtn = document.getElementById("shopBtn");

shopBtn.addEventListener("click", function () {
    document.querySelector(".products").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
