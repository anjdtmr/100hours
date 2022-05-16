document.querySelector("#check").addEventListener("click", someFunction);

function someFunction() {
  const day = document.querySelector("#day").value.toLowerCase();

  if (day === "tuesday" || day === "thursday") {
    document.querySelector("#placeToSee").innerHTML = "Awesome Day!";
  } else if (day === "saturday" || day === "sunday") {
    document.querySelector("#placeToSee").innerHTML = "Rest Day!";
  } else {
    document.querySelector("#placeToSee").innerHTML = "Boringggggg!";
  }
}
