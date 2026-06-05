document.querySelectorAll('.repo-card, .lang-tag').forEach((el, i) => {
  el.style.animationDelay = `${i * 0.04}s`;
});
const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light") ? "light" : "dark"
    );
  });

  const saved = localStorage.getItem("theme");
  if (saved === "light") document.body.classList.add("light");
}

