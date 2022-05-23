const btn = document.getElementById("btn");

const random_activity = document.getElementById("random_activity");

btn.addEventListener("click", getRandomAct);

function getRandomAct() {
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.fact);
      random_activity.innerHTML = `<p>${data.fact}</p>`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
