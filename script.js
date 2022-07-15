const computerPlay = () => {
    let computerChoice = null;
    switch (Math.floor(Math.random() * 3) + 1){
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}


const round = (playerChoice, computerPlay) => {
    if(playerChoice === "rock" && computerPlay === "scissors"){
        console.log("You win! Rock beats scissors.");
    }
    else if(playerChoice === "paper" && computerPlay === "rock"){
        console.log("You win! Paper beats rock.");
    }
    else if(playerChoice === "scissors" && computerPlay === "paper"){
        console.log("You win! Scissors beats paper.");
    }
    else if(playerChoice === computerPlay){
        console.log("Tie!");
    }
    else {
        console.log("You lose!");
    }
}

const game = () => {
    let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    playerChoice = playerChoice.replace(playerChoice[0], playerChoice[0].toUpperCase());
    round(playerChoice, computerPlay());
}

for(let i = 0; i < 5; i++){
    game();
}