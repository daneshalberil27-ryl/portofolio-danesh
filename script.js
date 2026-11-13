
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

// Ambil tema yang tersimpan
const savedTheme = localStorage.getItem("danesh-theme") || "light";

// Terapkan tema
document.documentElement.setAttribute("data-theme", savedTheme);

// Atur tulisan tombol
function updateThemeButton() {
  if (savedTheme === "dark") {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
}

// Ganti tema saat tombol diklik
let currentTheme = savedTheme;

updateThemeButton();

themeToggle.addEventListener("click", function () {
  currentTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", currentTheme);

  localStorage.setItem("danesh-theme", currentTheme);

  themeToggle.textContent =
    currentTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
});