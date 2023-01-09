/* Declare variables */
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");
const score0 = document.getElementById("score0");
const score1 = document.getElementById("score1");
const current0 = document.getElementById("current0");
const current1 = document.getElementById("current1 ");
let img = document.querySelector(".des");
console.log(img);
img.classList.add("hide");
const btnNew = document.querySelector(".btnNew");
const btnRoll = document.querySelector(".btnRoll");
const btnHold = document.querySelector(".btnHold");
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
let playerPlaying = true;
score0.textContent = 0;
score1.textContent = 0;

/* Changement de joueur */
let switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0.classList.toggle("playerActif");
  player1.classList.toggle("playerActif");
};

/* Bouton lancer le des */
btnRoll.addEventListener("click", function () {
  if (playerPlaying) {
    img.classList.remove("hide");
    let tirage = Math.floor(6 * Math.random() + 1);
    console.log(tirage); /* verification que le des correspond bien */
    img.src = `./Ressources/Pictos/Pictos_Des${tirage}.svg`;
    if (tirage !== 1) {
      currentScore += tirage;
      document.getElementById(`current${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

/* Bouton garder ce des */
btnHold.addEventListener("click", function () {
  if (playerPlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 10) {
      playerPlaying = false;
      img.classList.add("hide");
      document.getElementById(`score${activePlayer}`).textContent = "Gagné !";
      document
        .querySelector(`.player${activePlayer}`)
        .classList.add("playerWin");
      switchPlayer();
      document.getElementById(`score${activePlayer}`).textContent = "Perdu...";
      /* activePlayer = activePlayer == 0 ? 1 : 0; */
      document
        .querySelector(`.player${activePlayer}`)
        .classList.add("playerActif");
    } else {
      switchPlayer();
    }
  }
});

/* Bouton rejouer */
btnNew.addEventListener("click", function () {
  playerPlaying = true;
  document
    .querySelector(`.player${activePlayer}`)
    .classList.remove("playerWin");
  activePlayer = 0;
});
