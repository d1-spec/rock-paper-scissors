const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resultado = document.getElementById('resultado');
const puntos = document.getElementById('puntos');
let player;
let puntuacionPlayer = 0;
let puntuacionComp = 0;

const getCompChoice = function () {
    const opciones = ["Rock", "Paper", "Scissors"];
    const opAleatoria = Math.floor(Math.random() * 3);
    return opciones[opAleatoria];
}

function game(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        resultado.textContent = 'Tie!';
    } else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")
    ) {
        resultado.textContent = 'You win!';
        puntuacionPlayer++;
    } else {
      resultado.textContent = 'You lose!';
      puntuacionComp++;
    }

    puntos.textContent = `Player: ${puntuacionPlayer} - Enemie: ${puntuacionComp}`;

    if (puntuacionPlayer === 5) {
      alert("You win!");
      puntuacionPlayer = 0;
      puntuacionComp = 0;
    } else if (puntuacionComp === 5) {
      alert("You lose!");
      puntuacionPlayer = 0;
      puntuacionComp = 0;
    }
}

rock.addEventListener('click', function () {
    player = "Rock";
    const computerSelection = getCompChoice();
    game(player, computerSelection);
});

paper.addEventListener('click', function () {
    player = "Paper";
    const computerSelection = getCompChoice();
    game(player, computerSelection);
})

scissors.addEventListener('click', function () {
    player = "Scissors";
    const computerSelection = getCompChoice();
    game(player, computerSelection);
})
