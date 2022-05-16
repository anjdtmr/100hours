document.querySelector("#check").addEventListener("click", handleClick);

function handleClick() {
  const day = document.querySelector("#day").value.toLowerCase();
  // console.log(day);

  //Conditionals go here
  if (day === "tuesday" || day === "thursday") {
    document.querySelector("#placeToSee").innerHTML = "CLASS DAY!";
  } else if (day === "saturday" || day === "sunday") {
    document.querySelector("#placeToSee").innerHTML = "Weekend!";
  } else {
    document.querySelector("#placeToSee").innerHTML = "BORRRRRRINNNNNGGGGG!!!";
  }
}

// document.querySelector("#check").addEventListener("click", function() {
//   console.log('iets')
// });

// alert("CLASS DAY!");
// alert("Weekend!");
// alert("BORRRRRRINNNNNGGGGG!!!");

// msg.innerHTML = "CLASS DAY!";

// document.querySelector("placeToSee").innerHTML = value;
