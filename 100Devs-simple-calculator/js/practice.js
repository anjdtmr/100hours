let total = 0;

document.querySelector("#pumpkin").addEventListener("mouseenter", zero);
document.querySelector("#dominosPizza").addEventListener("click", add3);
document.querySelector("#zebra").addEventListener("click", add9);
document.querySelector("#cantThinkOfAnything").addEventListener("click", sub2);
document.querySelector("#MeToo").addEventListener("click", add5);

function zero() {
  total = 0;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function add3() {
  total = total + 3;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function add9() {
  total = total + 9;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function sub2() {
  total = total - 2;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function add5() {
  total = total + 5;
  document.querySelector("#placeToPutResult").innerHTML = total;
}
