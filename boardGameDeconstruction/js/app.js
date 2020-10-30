var gamePiece = document.getElementById("gamePiece");
addEventListener("click", toggleDisplay);

function toggleDisplay(){
    if(gamePiece.style.display === "none"){
        gamePiece.style.display === "block";
    } else if(gamePiece.style.display === "block"){
        gamePiece.style.display === "none";
    }
}
