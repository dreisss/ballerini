document.addEventListener("alpine-i18n:ready", () => {
  window.AlpineI18n.create("pt", translations);
});

document.addEventListener("alpine:init", () => {
  theme_init();
  language_init();
  todolist_init();
  timer_init();
  app_init();
});
