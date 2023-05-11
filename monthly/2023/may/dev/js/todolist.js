function todolist_init() {
  Alpine.data("todolist", () => ({
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
}
