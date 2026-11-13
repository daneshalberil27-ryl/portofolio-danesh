
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
// DARK MODE BLUE

const themeToggle = document.getElementById("theme-toggle");

let currentTheme =
  localStorage.getItem("danesh-theme") || "light";

function applyTheme() {
  document.documentElement.setAttribute(
    "data-theme",
    currentTheme
  );

  themeToggle.textContent =
    currentTheme === "dark"
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
}

if (themeToggle) {
  applyTheme();

  themeToggle.addEventListener("click", function () {
    currentTheme =
      currentTheme === "light" ? "dark" : "light";

    localStorage.setItem("danesh-theme", currentTheme);

    applyTheme();
  });
}