const MIN = 60;

document.addEventListener("alpine-i18n:ready", () => {
  window.AlpineI18n.create("pt", translations);
});

document.addEventListener("alpine:init", () => {
  Alpine.data("theme", () => ({
    is_dark: Alpine.$persist(true),

    init() {
      document.body.classList.add(this.is_dark ? "dark" : "light");
      document.body.classList.remove(this.is_dark ? "light" : "dark");
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

  Alpine.data("timer", () => ({
    // Open on hover effect
    open: false,

    show() {
      this.open = true;
    },

    hide() {
      this.$el.classList.add("closing");
      setTimeout(() => {
        this.open = false;
        this.$el.classList.remove("closing");
      }, 250);
    },

    // Working
    mode_time: [25 * MIN, 5 * MIN, 25 * MIN, 5 * MIN, 25 * MIN, 5 * MIN, 25 * MIN, 15 * MIN],
    running: false,
    finished: true,
    counter: 0,
    minutes: "",
    seconds: "",

    init() {
      this.update();
    },

    update() {
      this.seconds = (this.counter % MIN).toString().padStart(2, "0");

      if (this.counter % MIN == 0) {
        this.minutes = Math.trunc(this.counter / MIN)
          .toString()
          .padStart(2, "0");
      }
    },

    start() {
      this.running = true;
    },

    end() {
      this.running = false;
    },
  }));

  Alpine.data("app", () => ({
    queue: ["focus", "short-break", "focus", "short-break", "focus", "short-break", "focus", "long-break"],
    state: 7,
  }));
});
