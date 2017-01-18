function computerChoice() {
    let val = Math.floor(Math.random() * 3);
    var compChoice;
    switch (val) {
        case 0:
            compChoice = 'rock';
            break;
        case 1:
            compChoice = 'paper';
            break;
        case 2:
            compChoice = 'scissors';
            break;
        default:
            console.log('There was an error.');
    }
    return compChoice;
}

// function play(playerChoice) {
//     var compChoice = computerChoice();
//     var result;
//     switch (playerChoice) {
//         case (playerChoice == 'rock' && compChoice == 'rock'):
//         case (playerChoice == 'paper' && compChoice == 'paper'):
//         case (playerChoice == 'scissors' && compChoice == 'scissors'):
//             result = 'It\'s a draw!';
//             break;
//         case (playerChoice == 'rock' && compChoice == 'scissors'):
//         case (playerChoice == 'paper' && compChoice == 'rock'):
//         case (playerChoice == 'scissors' && compChoice == 'paper'):
//             result = 'You win!';
//             break;
//         case (playerChoice == 'rock' && compChoice == 'paper'):
//         case (playerChoice == 'paper' && compChoice == 'scissors'):
//         case (playerChoice == 'scissors' && compChoice == 'rock'):
//             result = 'You lost! Try again.';
//             break;
//         default:
//             result = 'There was an error, try again.';
//     }
//     return result;
// }

function play(playerChoice) {
    var compChoice = computerChoice();
    var result;
    if (playerChoice == 'rock' && compChoice == 'rock' || playerChoice == 'paper' && compChoice == 'paper' || playerChoice == 'scissors' && compChoice == 'scissors') {
        result = 'It\s a draw!';
    } else if (playerChoice == 'rock' && compChoice == 'scissors' || playerChoice == 'paper' && compChoice == 'rock' || playerChoice == 'scissors' && compChoice == 'paper') {
        result = 'You win!';
    } else if (playerChoice == 'rock' && compChoice == 'paper' || playerChoice == 'paper' && compChoice == 'scissors' || playerChoice == 'scissors' && compChoice == 'rock') {
        result = 'You lost! Try again.';
    } else {
        result = 'There was an error, try again.';
    }
    var h1 = document.getElementById('result');
    h1.innerText = result;
    var youPlayed = document.getElementById('player-choice');
    youPlayed.innerText = playerChoice;
    var compPlayed = document.getElementById('computer-choice');
    compPlayed.innerText = compChoice;
}
