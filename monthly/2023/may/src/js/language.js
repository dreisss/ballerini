function language_init() {
  Alpine.data("language", () => ({
    pt: Alpine.$persist(true),

    init() {
      AlpineI18n.locale = this.pt ? "pt" : "en";
    },

    toggle() {
      this.pt = !this.pt;
      AlpineI18n.locale = this.pt ? "pt" : "en";
    },
  }));
}

const translations = {
  pt: {
    title: "Pomodoro",
    subtitle: "Gerencie seu tempo de maneira mágica!",
    session: "Dados da sessão",
    session_subtitle: "Acompanhe os dados da sessão atual",
    mode: "Modo atual:",
    mode_subtitle: "O modo atual do cronômetro",
    next_mode: "Próximo modo:",
    next_mode_subtitle: "O modo que virá a seguir",

    focus: "Foco",
    long_break: "Pausa Longa",
    short_break: "Pausa Curta",

    congratulations: "Parabéns! 🎉",
    congratulations_subtitle: "Você chegou no fim de mais um cíclo dessa sessão!",

    start_focus: "Iniciar: Foco",
    start_long_break: "Iniciar: Pausa Longa",
    start_short_break: "Iniciar: Pausa Curta",

    todolist: "Lista de tarefas",
    todolist_subtitle: "Seus objetivos para essa sessão",
    todolist_empty: "Ainda não há nenhuma tarefa",
    todo_add: "Adicionar",
    todo_clear: "Limpar",
    todo_placeholder: "Nova tarefa",
  },

  en: {
    title: "Pomodoro",
    subtitle: "Manage your time in a magical way!",
    session: "Session data",
    session_subtitle: "Keep track of current session data",
    mode: "Current mode:",
    mode_subtitle: "The current stopwatch mode",
    next_mode: "Next mode:",
    next_mode_subtitle: "The mode that will come next",

    focus: "Focus",
    long_break: "Long Break",
    short_break: "Short Break",

    congratulations: "Congratulations! 🎉",
    congratulations_subtitle: "You have reached the end of another cycle of this session!",

    start_focus: "Start: Focus",
    start_long_break: "Start: Long Break",
    start_short_break: "Start: Short Break",

    todolist: "To-do list",
    todolist_subtitle: "Your goals for this session",
    todolist_empty: "There is no task yet",
    todo_add: "Add",
    todo_clear: "Clear",
    todo_placeholder: "New task",
  },
};
