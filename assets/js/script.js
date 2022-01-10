const buble = document.getElementById("buble");
const score = document.getElementById("score");
score.innerHTML = 0;
function randomNumber() {
  return Math.floor(Math.random() * 450);
}

function randomNumberRGB() {
  return Math.floor(Math.random() * 255);
}
randomPosition();

function randomPosition() {
  let positionX = randomNumber();
  let positionY = randomNumber();
  buble.style.position = "relative";
  buble.style.left = `${positionX}px`;
  buble.style.top = `${positionY}px`;
  buble.style.background = `rgb(${randomNumberRGB()}, ${randomNumberRGB()}, ${randomNumberRGB()}) `;
}

document.addEventListener("click", (e) => {
  const teste = e.composedPath().includes(buble);
  randomPosition();
  let framescore = parseInt(score.textContent);

  if (teste) {
    score.innerHTML = `${framescore + 10}`;
    score.style.color= 'green'
  } else {
    score.innerHTML = `${framescore - 10}`;
    score.style.color= 'red'
  }
  if (parseInt(score.textContent) === 30) {
    alert("Você ganhou Parabens");
    score.innerHTML = 0;
  }
  if (parseInt(score.textContent) === -30) {
    alert("Você Perdeu");
    score.innerHTML = 0;
  }
});
