document.addEventListener("alpine-i18n:ready", () => {
  window.AlpineI18n.create("pt", translations);
});

document.addEventListener("alpine:init", () => {
  Alpine.data("theme", () => ({
    is_dark: Alpine.$persist(true),

    init() {
      if (this.is_dark) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      }
    },

    toggle() {
      this.is_dark = !this.is_dark;
      document.body.classList.toggle("dark");
      document.body.classList.toggle("light");
    },
  }));

  Alpine.data("language", () => ({
    language: Alpine.$persist("pt"),

    init() {
      AlpineI18n.locale = this.language;
    },

    toggle() {
      this.language = this.language == "pt" ? "en" : "pt";
      AlpineI18n.locale = this.language;
    },
  }));

  Alpine.data("todo_list", () => ({
    list: Alpine.$persist([]),
    input: "",

    submit() {
      if (this.input.trim() != "") {
        this.list.push({
          checked: false,
          text: this.input.trim(),
        });
        this.input = "";
      }
    },

    clear() {
      this.list = [];
    },
  }));
});
