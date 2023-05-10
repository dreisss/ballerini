function app_init() {
  const MIN = 60;

  Alpine.data("app", () => ({
    queue: ["focus", "short-break", "focus", "short-break", "focus", "short-break", "focus", "long-break"],
    duration: [25 * MIN, 5 * MIN, 25 * MIN, 5 * MIN, 25 * MIN, 5 * MIN, 25 * MIN, 15 * MIN],
    state: 7,

    current(state) {
      return this.queue[state % 8];
    },

    next(state) {
      return this.queue[(state + 1) % 8];
    },
  }));
}
