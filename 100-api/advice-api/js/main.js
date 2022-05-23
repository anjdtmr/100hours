const btn = document.getElementById("btn");

const random_advice = document.getElementById("random_advice");

btn.addEventListener("click", getRandomAdvice);

function getRandomAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.slip.advice);
      random_advice.innerHTML = `<p>${data.slip.advice}</p>`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
