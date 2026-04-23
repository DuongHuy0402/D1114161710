const gameBoard = document.getElementById("gameBoard");
const scoreDisplay = document.getElementById("score");

let score = 0;
let activeHole = null;
let gameInterval;

for (let i = 0; i < 9; i++) {
    const hole = document.createElement("div");
    hole.classList.add("hole");

    const mole = document.createElement("div");
    mole.classList.add("mole");

    hole.appendChild(mole);

    hole.addEventListener("click", () => {
        if (hole === activeHole) {
            score++;
            scoreDisplay.textContent = score;
            hole.classList.remove("active");
            activeHole = null;
        }
    });

    gameBoard.appendChild(hole);
}

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;

    const holes = document.querySelectorAll(".hole");

    clearInterval(gameInterval);

    gameInterval = setInterval(() => {
        holes.forEach(hole => hole.classList.remove("active"));

        const randomIndex = Math.floor(Math.random() * holes.length);
        activeHole = holes[randomIndex];
        activeHole.classList.add("active");
    }, 800);

    setTimeout(() => {
        clearInterval(gameInterval);
        alert(`遊戲結束！你的分數是 ${score}`);
    }, 20000);
}