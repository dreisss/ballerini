const en = document.querySelector("#en"),
  pt = document.querySelector("#pt"),
  title = document.querySelector("#title"),
  subtitle = document.querySelector("#subtitle"),
  loading = document.querySelector("#loading");

window.addEventListener("load", () => {
  change_language(localStorage.getItem("language") || "pt-BR");
});

en.addEventListener("click", () => change_language("en-US"));
pt.addEventListener("click", () => change_language("pt-BR"));

en.addEventListener("focus", () => {
  en.addEventListener(
    "keydown",
    (event) => event.key == "Enter" && change_language("en-US")
  );
});

pt.addEventListener("focus", () => {
  pt.addEventListener(
    "keydown",
    (event) => event.key == "Enter" && change_language("pt-BR")
  );
});

function change_language(language) {
  document.getRootNode().documentElement.setAttribute("lang", language);
  localStorage.setItem("language", language);

  document.title = lang_data[language].pagetitle;
  title.textContent = lang_data[language].title;
  input.setAttribute("placeholder", lang_data[language].title);
  subtitle.textContent = lang_data[language].subtitle;
  loading.textContent = lang_data[language].loading;
  for (join of document.querySelectorAll(".join")) {
    join.textContent = lang_data[language].join;
  }

  for (members of document.querySelectorAll(".members")) {
    members.textContent = lang_data[language].members;
  }
}
