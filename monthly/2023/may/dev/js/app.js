function app_init() {
  const MIN = 60;

  Alpine.data("app", () => ({
    queue: ["focus", "short-break", "focus", "short-break", "focus", "short-break", "focus", "long-break"],
    duration: [25 * MIN, 5 * MIN, 25 * MIN, 5 * MIN, 25 * MIN, 5 * MIN, 25 * MIN, 15 * MIN],
    mode: 7,
    finished: true,

    current(mode) {
      return this.queue[mode % 8];
    },

    next(mode) {
      return this.queue[(mode + 1) % 8];
    },

    nextmode() {
      this.mode += 1;
      this.finished = false;
      this.counter = this.duration[this.mode % 8];
    },
  }));
}
