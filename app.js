let userScore = 0;
let compSore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game is draw");
    msg.innerText = "Game is draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compSore++;
        compScorePara.innerText = compSore;
        console.log("you lose");
        msg.innerText = `You lost. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice)
    //Generate computer choice

    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userchoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            //scissor or paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            //scissor or rock

            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }

}

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");

        playGame(userchoice)
    })
});