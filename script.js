
// Animasi saat elemen terlihat di layar

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const elements = document.querySelectorAll(".section");

elements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});
