function mat1() {
  var x = Math.floor(Math.random() * 6) + 1;
  return x;
}
var randomNumber1 = mat1();

function mat2() {
  var y = Math.floor(Math.random() * 6) + 1;
  return y;
}
var randomNumber2 = mat2();

function changePhoto1() {
  document
    .querySelector(".dice .img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
}
changePhoto1();

function changePhoto2() {
  document
    .querySelector(".dice .img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");
}
changePhoto2();

function result() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}

result();

function resetAndPlay() {
  randomNumber1 = mat1();
  randomNumber2 = mat2();
  changePhoto1();
  changePhoto2();
  result();
}

document.addEventListener("keydown", (e) => {
  if (e) {
    resetAndPlay();
  }
});
