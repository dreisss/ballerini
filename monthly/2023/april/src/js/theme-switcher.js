const sun = document.querySelector("#sun"),
  moon = document.querySelector("#moon");

window.addEventListener("load", () =>
  change_theme(localStorage.getItem("theme") || "dark")
);

sun.addEventListener("click", () => change_theme("light"));
moon.addEventListener("click", () => change_theme("dark"));

sun.addEventListener("focus", () => {
  sun.addEventListener(
    "keydown",
    (event) => event.key == "Enter" && change_theme("light")
  );
});

moon.addEventListener("focus", () => {
  moon.addEventListener(
    "keydown",
    (event) => event.key == "Enter" && change_theme("dark")
  );
});

function change_theme(theme) {
  document.getRootNode().documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}
