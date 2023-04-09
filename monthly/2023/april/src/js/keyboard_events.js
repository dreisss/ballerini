window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key == "k") {
    event.preventDefault();
    input.focus();
  }
});
