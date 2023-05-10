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
    counter: 14.5 * 60,
    interval: null,

    minutes: (c) => format2digits(Math.trunc(c / 60)),
    seconds: (c) => format2digits(c % 60),

    progress(counter) {
      return 656 * (1 - counter / this.duration[this.state]);
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
      console.log("ok");
      this.counter += 1;

      if (this.counter == this.duration[this.state]) {
        this.end();
      }
    },

    end() {
      this.pause();
      this.counter = 0;
    },
  }));
}
