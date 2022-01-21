function computerPlay(){
    randomNumber = getRandomIntInclusive(1,3);
    result = "";
    switch (randomNumber){
        case 1:
            result = "rock";
            break;
        case 2:
            result = "paper";
            break;
        case 3:
            result = "scissors";
            break;
    }
    return result;

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playerSelection(){
    playerChoice = prompt("Choose, Rock, Paper or Scissors");
    return playerChoice;
}

function playRound(playerChoice, computerChoice){
    
    winningCondition = winCondition(playerChoice);
    
    if (computerChoice === winningCondition){
        console.log("draw");
    }

    if(winningCondition === computerChoice){
        console.log("You win, " + playerChoice + " beats " + computerChoice);
        return 2;
    }

    else{
        console.log("You lose, " + computerChoice  + " beats " + playerChoice);
        return 1;
    }

}

function winCondition(choice){
    switch (choice.toLowerCase()){
        case "rock":
            return "scissors";  
        case "scissors":
            return "paper";    
        case "paper":
            return "rock";
    }
}

function play(){
    score = [0,0];
    
    for(i = 0; i < 5; i++){
        c = computerPlay();
        p = playerSelection();
        result = playRound(p,c) === 1 ? score[1] += 1 : score[0] += 1;
    }
    console.log("Computer won " + score[0] + " Player won " + score[1]);

    
}

play();
