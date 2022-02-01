score = [0, 0];

function computerPlay() {
    randomNumber = getRandomIntInclusive(1, 3);
    result = "";
    switch (randomNumber) {
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

function playerSelection(e) {
    return e.target.value;
}

function playRound(playerChoice, computerChoice) {
    
    if (computerChoice === playerChoice) {
        alert("draw");
        return;
    }

    winningCondition = winCondition(playerChoice);


    if (winningCondition === computerChoice) {
        alert("You win, " + playerChoice + " beats " + computerChoice);
        return 2;
    }

    else {
        alert("You lose, " + computerChoice + " beats " + playerChoice);
        return 1;
    }

}

function winCondition(choice) {
    switch (choice.toLowerCase()) {
        case "rock":
            return "scissors";
        case "scissors":
            return "paper";
        case "paper":
            return "rock";
    }
}

function play(e) {
    


    c = computerPlay();
    p = e.target.textContent;
    result = playRound(p, c);
    if(result === 1){
        score[1] += 1;
    }
    if(result === 2){
        score[0] += 1;
    }
    const currentScore = document.querySelector('div');
    currentScore.textContent = score;
    alert("Player won " + score[0] + " Computer won " + score[1]);

    for(let i = 0 ; i < score.length; i++){
        let winner = i === 0 ? 'User' : 'Computer';
        
        if(score[i] === 5){
            alert(`WINNER IS ${winner}`);
        }
    }

    
}

function createInterface(){
    let paperButton = document.createElement('button');
    paperButton.textContent = 'paper';
    document.body.appendChild(paperButton);

    let scissorButton = document.createElement('button');
    scissorButton.textContent = 'scissors';
    document.body.appendChild(scissorButton);

    let rockButton = document.createElement('button');
    rockButton.textContent = 'rock';
    document.body.appendChild(rockButton);
    
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', e => play(e)));

}

function createScore(){
    const scoreBoard = document.createElement('div');
    scoreBoard.textContent = score;
    document.body.appendChild(scoreBoard);
}

createScore();
createInterface();
