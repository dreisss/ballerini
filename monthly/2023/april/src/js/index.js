const input = document.querySelector("input"),
  form = document.querySelector("form"),
  results = document.querySelector("#results"),
  message = document.querySelector(".result.message"),
  valid_chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let typing_timer;

window.addEventListener("load", request_api);

input.addEventListener("keyup", () => {
  clearTimeout(typing_timer);
  typing_timer = setTimeout(request_api, 500);
});

input.addEventListener("keydown", () => {
  clearTimeout(typing_timer);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  request_api();
});

async function request_api() {
  let url = `https://discord.com/api//discovery/search?query=${input.value.trim()}&limit=16`;

  results.innerHTML = `
    <li class="result message">
      <p>Carregando resultados...</p>
    </li>`;

  fetch(url)
    .then((data_promise) => data_promise.json())
    .then((data) => {
      results.innerHTML = "";

      for (let hit of data.hits) {
        let image = `https://cdn.discordapp.com/icons/${hit.id}/${hit.icon}.png`;
        let invite = `https://discord.gg/${hit.vanity_url_code}`;
        let members = Intl.NumberFormat("en-US", {
          notation: "compact",
          maximumFractionDigits: 1,
        }).format(hit.approximate_member_count);

        results.innerHTML += `
          <li class="result">
            <div>
              <div><img src="${image}" /></div>
              <hgroup>
                <h3>${hit.name}</h3>
                <h4>${members} Membros</h4>
              </hgroup>
            </div>
            <div>
              <a href="${invite}">
                Entrar
              </a>
              </div>
              </li>`;
      }
    });
}
