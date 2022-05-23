const btn = document.getElementById("btn");

const random_activity = document.getElementById("random_activity");

btn.addEventListener("click", getRandomAct);

function getRandomAct() {
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.activity);
      random_activity.innerHTML = `<p>${data.activity}</p>`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
