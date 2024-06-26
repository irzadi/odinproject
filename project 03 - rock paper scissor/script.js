console.log("link successful")

let computerChoice = 0
let playerChoice = 0;
let winner = "undecided";

function compPick() {
    let a = Math.random()
    if (a<0.333) computerChoice = "Rock"
    if (a>0.33 && a <0.66) computerChoice = "Paper"
    if (a>0.66) computerChoice = "Scissor"
}

function pick(arg) {
    playerChoice = arg;
    compPick();
    if (arg == computerChoice ) {
        winner = "Draw"
    } else {
        if (arg=="Paper") {
            if (computerChoice=="Rock") winner="You"
            if (computerChoice=="Scissor") winner = "Computer"
        }
        if (arg=="Rock") {
            if (computerChoice=="Paper") winner="Computer"
            if (computerChoice=="Scissor") winner = "You"
        }
        if (arg=="Scissor") {
            if (computerChoice=="Paper") winner="You"
            if (computerChoice=="Rock") winner = "Computer"        
        }
    }
    result()
}


function result() {
    const resultDiv = document.getElementById("result")
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const node1 = document.createTextNode("You picked " + playerChoice);
    const node2 = document.createTextNode("Computer picked " + computerChoice);
    const node3 = document.createTextNode("Winner is " + winner);
    para1.appendChild(node1);
    para2.appendChild(node2);
    para3.appendChild(node3);
    let paragraphs = [para1,para2,para3];
    paragraphs.forEach((para) => resultDiv.appendChild(para));

}