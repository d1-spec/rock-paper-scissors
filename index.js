const getCompChoice = function () {

    const opciones = ["Rock", "Paper", "Scissors" ];

    const opAleatoria = Math.floor(Math.random() * 3);
    return opciones[opAleatoria];
}
 

function game (computerSelection, playerSelection) {
  computerSelection = getCompChoice().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    console.log("Tie");
    return "Tie";
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "scissors" && computerSelection == "Paper")
  ) {
    console.log("You win!");
              return "You win!";
              } else {
                console.log("You lose.");
                return "You lose";
              }
}

const player = "Paper";

game(getCompChoice, player)