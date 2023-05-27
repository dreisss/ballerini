const skeleton = document.querySelector("#skeleton");

window.addEventListener("load", () => {
  setTimeout(() => {
    skeleton.style.opacity = "0";
    skeleton.style.visibility = "hidden";
  }, 500);
});
