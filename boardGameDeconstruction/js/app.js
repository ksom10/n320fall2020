var gamePiece = document.getElementById("gamePiece");


function toggleDisplay(){
    if(gamePiece.style.display === "block"){
        gamePiece.style.display === "none";
    } else if(gamePiece.style.display === "none"){
        gamePiece.style.display === "block";
    }
}

gamePiece.onclick = toggleDisplay();