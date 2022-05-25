//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const apiKey = "hoahIhbc1AdLPtBS5AaAmi5BAhSFVkAqgddzhnIm";

fetch(
  "https://api.nasa.gov/planetary/apod?api_key=hoahIhbc1AdLPtBS5AaAmi5BAhSFVkAqgddzhnIm"
)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data.hdurl);
    document.querySelector("img").src = data.hdurl;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
