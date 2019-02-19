function randomNumber(){
    var num = Math.random()*6 +1;
    return Math.floor(num);
}

function gameWinner(){
    var numPlayer1 = randomNumber();
    var numPlayer2 = randomNumber(); 
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+numPlayer1+".png");
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+numPlayer2+".png");

    if(numPlayer1 === numPlayer2){
        document.querySelector("h1").innerText="Draw";

    }else if(numPlayer1 > numPlayer2){
        document.querySelector("h1").innerText="Player 1 Wins!";

    }else{
        document.querySelector("h1").innerText="Player 2 Wins!";

    }
}

gameWinner();