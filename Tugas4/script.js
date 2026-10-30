
const backToTop = document.getElementById("backToTop");

// Munculkan tombol ketika scroll lebih dari 500px
window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// Kembali ke posisi paling atas ketika diklik
backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
