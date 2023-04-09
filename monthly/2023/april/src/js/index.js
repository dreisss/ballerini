const input = document.querySelector("input"),
  form = document.querySelector("form"),
  results = document.querySelector("#results"),
  message = document.querySelector(".result.message");

let typing_timer;

window.addEventListener("load", request_api);

input.addEventListener("keyup", (event) => {
  clearTimeout(typing_timer);

  if (event.key.match("^\\w$|\\s") || event.key == "Backspace") {
    typing_timer = setTimeout(request_api, 500);
  }

  if (event.key == "Escape") {
    input.blur();
  }
});

input.addEventListener("keydown", () => {
  clearTimeout(typing_timer);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  request_api();
});

function request_api() {
  let url = `https://discord.com/api//discovery/search?query=${input.value.trim()}&limit=16`,
    language = localStorage.getItem("language"),
    loading_text = lang_data[language].loading || "Carregando resultados...";

  results.innerHTML = `
    <li class="result message">
      <p>${loading_text}</p>
    </li>`;

  fetch(url)
    .then((data_promise) => data_promise.json())
    .then((data) => {
      results.innerHTML = "";

      for (let hit of data.hits) {
        let image = `https://cdn.discordapp.com/icons/${hit.id}/${hit.icon}.png`,
          invite = `https://discord.gg/${hit.vanity_url_code}`,
          members = Intl.NumberFormat("en-US", {
            notation: "compact",
          }).format(hit.approximate_member_count),
          members_text =
            lang_data[language].members || "Carregando resultados...",
          join_text = lang_data[language].join || "Carregando resultados...";

        results.innerHTML += `
          <li class="result">
            <div>
              <div><img src="${image}" /></div>
              <hgroup>
                <h3>${hit.name}</h3>
                <h4>${members} <span class="members">${members_text}</span></h4>
              </hgroup>
            </div>
            <div>
              <a href="${invite}" class="join" target="_blank">${join_text}</a>
            </div>
          </li>`;
      }
    });
}
