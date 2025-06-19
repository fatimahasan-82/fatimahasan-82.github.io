// Scroll to top button
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  topBtn.style.display = window.scrollY > 100 ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Theme toggle (Dark Mode)
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Console Easter Egg
console.log("👋 Hey there! Curious developer spotted.");
