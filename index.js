console.log("Welcome to Tic Tac Toe");
let gameOverAudio = new Audio('gameOver.mp3');
let playerTurnAudio = new Audio('ting.mp3');
let music = new Audio('music.mp3');
let Gameovermusic = new Audio('Gameovermusic.mp3');
let Turn = "X";
let isgameover = false

//Change Player Turn
let ChangeTurn = () => {
    return Turn === "X" ? "O" : "X"
}

// function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("box-text");
    wins=[
        [0,1,2,1,5,0],
        [3,4,5,1,15,0],
        [6,7,8,1,25,0],
        [0,3,6,-9,15,90],
        [1,4,7,1,15,90],
        [2,5,8,11,15,90],
        [0,4,8,1,15,45],
        [2,4,6,1,15,135]
    ]

    wins.forEach((e)=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector(".info").innerText = "Player "+ boxtext[e[0]].innerText +" Won"
            isgameover = true
            document.getElementsByTagName('img')[0].style.width ="200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "28vw"
            gameOverAudio.play()
            Gameover()
        }
    })
}

// game logic
let boxes = document.getElementsByClassName("box");
let count =0
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".box-text");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = Turn
            Turn = ChangeTurn()
            playerTurnAudio.play()
            checkWin()
            count+=1;
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + Turn;
            }
        }
        if(count===9 && !checkWin()){
            document.querySelector(".info").innerText = "Match tie"
            Gameovermusic.play()
        }
    })
})

function Gameover(){
    const container = document.querySelector(".container");
    container.style.pointerEvents = "none"
}


// Add onclick listener in reset button
let reset = document.getElementById("reset");
reset.addEventListener("click",()=>{
    let boxtexts = document.querySelectorAll(".box-text");
    Array.from(boxtexts).forEach((element)=>{
        element.innerText=""
    })
    Turn="X";
    isgameover = false;
    count = 0
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + Turn;
    document.getElementsByTagName('img')[0].style.width ="0px";
    document.querySelector(".line").style.width = "0vw"
    const container = document.querySelector(".container");
    container.style.pointerEvents = "auto";

})
