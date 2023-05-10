function theme_init() {
  Alpine.data("theme", () => ({
    dark: Alpine.$persist(true),

    init() {
      document.body.classList.add(this.dark ? "dark" : "light");
      document.body.classList.remove(!this.dark ? "dark" : "light");
    },

    toggle() {
      this.dark = !this.dark;
      document.body.classList.toggle("dark");
      document.body.classList.toggle("light");
    },
  }));
}
