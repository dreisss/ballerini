function timer_init() {
  Alpine.data("timer_buttons", () => ({
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
  }));

  function format2digits(value) {
    return value.toString().padStart(2, "0");
  }

  Alpine.data("timer", () => ({
    running: false,
    counter: 0,
    interval: null,

    minutes: (c) => format2digits(Math.trunc(c / 60)),
    seconds: (c) => format2digits(c % 60),

    progress(counter) {
      return 656 * (1 - counter / this.duration[this.mode % 8]);
    },

    play() {
      this.running = true;
      this.interval = setInterval(() => this.update(), 1000);
    },

    pause() {
      clearInterval(this.interval);
      this.running = false;
    },

    update() {
      this.counter -= 1;

      if (this.counter == 0) {
        this.end();
      }
    },

    end() {
      this.pause();
      this.finished = true;
      alert(Alpine.$t("time_ended"));
    },

    restart() {
      this.counter = this.duration[this.mode % 8];
    },
  }));
}
