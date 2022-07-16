const computerPlay = () => {
    let computerChoice = "";
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
    console.log(`Computer: ${computerChoice}`);
    return computerChoice;
}


const round = (playerChoice, computerChoice) => {
    if(playerChoice === "Rock"){
        if(computerChoice === "Scissors"){
            console.log("You win! Rock beats scissors.");
        }
        else if(computerChoice === "Paper"){
            console.log("You lose! Paper beats rock.");
        }
        else {
            console.log("Tie!");
        }
    }
    else if(playerChoice === "Paper"){
        if(computerChoice === "Rock"){
            console.log("You win! Paper beats rock.");
        }
        else if(computerChoice === "Scissors"){
            console.log("You lose! Scissors beats paper.");
        }
        else {
            console.log("Tie!");
        }
    }
    else if(playerChoice === "Scissors" ){
        if(computerChoice === "Paper"){
            console.log("You win! Scissors beats paper.");
        }
        else if(computerChoice === "Rock"){
            console.log("You lose! Rock beats scissors.");
        }
        else {
            console.log("Tie!");
        }
    }
}

const game = () => {
    let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    playerChoice = playerChoice.replace(playerChoice[0], playerChoice[0].toUpperCase());
    console.log(`Player: ${playerChoice}`);
    round(playerChoice, computerPlay());
}

for(let i = 0; i < 5; i++){
    game();
}