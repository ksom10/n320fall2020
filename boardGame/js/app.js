
//starts off with an animation
TweenMax.from(".content", {duration: 2, alpha: 0});


var turn = true;
var player1 = true;

class ticTacToe{
    constructor(){
        this.won = 0;
        this.space= document.getElementsByClassName("emptyCirc");
        this.board = [
            [0], [1], [2],
            [3], [4], [5],
            [6], [7], [8],
        ];
        this.wins = 0;
    }

    //function for win if space id's are filled with same color
    win(){
        for(let i = 0; i > this.space.length; i++){
                //check horizontal win
                if((this.space[i].getElementsById("0").style.fill) && (this.space[i].getElementsById("0").style.fill === this.space[i].getElementsById("1").style.fill) && (this.space[i].getElementsById("0").style.fill === this.space[i].getElementsById("2").style.fill)){
                    console.log("player1 wins");
                    round.win();
                    
            }
    }
}

    
     //player 1 (blue) always goes first
    turn(){
        
        //middle pieces
        for(let i = 0; i < this.space.length; i++){
            this.space[i].addEventListener("click", function(e){
                if(e.target.getAttribute("cx")== "160"){
                    //bottom middle piece changes
                    if(e.target.getAttribute("cy")== "190"){
                        this.board = [7];
                        //checks whos turn it is
                        if(turn != false){
                            turn = false;
                            e.target.style.fill = "#446a7d";
                            e.target.setAttribute("click", "1");
                            player1 = true;
                            console.log(player1);
                            
                        }
                        else{
                            //player 2's turn
                            turn = true;
                            e.target.style.fill =  "#df1e35";
                            e.target.setAttribute("click", "2");
                            player1 = false;
                            console.log(player1);
                            
                        } 
                        //middle piece in middle section changes
                    } else if(e.target.getAttribute("cy")== "115"){
                        this.board = [4];
                        if(turn != false){
                            turn = false;
                            e.target.style.fill = "#446a7d";
                            e.target.setAttribute("click", "1");
                            player1 = true;
                            console.log(player1);
                            
                        
                        }else{
                            turn = true;
                            e.target.style.fill =  "#df1e35";
                            e.target.setAttribute("click", "2");
                            player1 = false;
                            console.log(player1);
                        }
                    } else {
                        //middle top piece changes
                        this.board = [1];
                        if(turn != false){
                            turn = false;
                            e.target.style.fill = "#446a7d";
                            player1 = true;
                            e.target.setAttribute("click", "1");
                            console.log(player1);

                        
                        }else{
                            turn = true;
                            e.target.style.fill =  "#df1e35";
                            e.target.setAttribute("click", "2");
                            player1 = false;
                            console.log(player1);
                        } 
                    }
                }                
                
                
                
                 
            } )
            
        }
        //right pieces
        for(let i = 0; i < this.space.length; i++){
            this.space[i].addEventListener("click", function(e){
                if(e.target.getAttribute("cx")== "235"){
                    //bottom right changes
                    if(e.target.getAttribute("cy")== "190"){
                        this.board = [8];
                        if(turn != false){
                            turn = false;
                            e.target.style.fill = "#446a7d";
                            e.target.setAttribute("click", "1");
                            player1 = true;
                            console.log(player1);
                            
                        
                        }else{
                            turn = true;
                            e.target.style.fill =  "#df1e35";
                            e.target.setAttribute("click", "2");
                            player1 = false;
                            console.log(player1);
                        } 
                    } //middle right changes 
                    else if(e.target.getAttribute("cy")== "115"){
                        this.board = [5];
                        if(turn != false){
                            turn = false;
                            e.target.style.fill = "#446a7d";
                            e.target.setAttribute("click", "1");
                            player1 = true;
                        
                        }else{
                            turn = true;
                            e.target.style.fill =  "#df1e35";
                            e.target.setAttribute("click", "2");
                            player1 = false;
                        }
                        //top right changes
                    } else {
                        this.board = [2];
                        if(turn != false){
                            turn = false;
                            e.target.style.fill = "#446a7d";
                            e.target.setAttribute("click", "1");
                            player1 = true;
                        
                        }else{
                            turn = true;
                            e.target.style.fill =  "#df1e35";
                            e.target.setAttribute("click", "2");
                            player1 = false;
                        }
                    }
                }                
                
                
                
                 
            } )
        }
        //left pieces
        for(let i = 0; i < this.space.length; i++){
            this.space[i].addEventListener("click", function(e){
                if(e.target.getAttribute("cx")== "90"){
                    //bottom left changes
                    if(e.target.getAttribute("cy")== "190"){
                        this.board = [6];
                        if(turn != false){
                            turn = false;
                            e.target.style.fill = "#446a7d";
                            e.target.setAttribute("click", "1");
                            player1 = true;
                            console.log(player1);
                            
                        
                        }else{
                            turn = true;
                            e.target.style.fill =  "#df1e35";
                            e.target.setAttribute("click", "2");
                            player1 = false;
                            console.log(player1);
                        } 
                    } //middle left changes 
                    else if(e.target.getAttribute("cy")== "115"){
                        this.board = [3];
                        if(turn != false){
                            turn = false;
                            e.target.style.fill = "#446a7d";
                            e.target.setAttribute("click", "1");
                            player1 = true;
                        
                        }else{
                            turn = true;
                            e.target.style.fill =  "#df1e35";
                            e.target.setAttribute("click", "2");
                            player1 = false;
                        }
                        //top left changes
                    } else {
                        this.board = [0];
                        if(turn != false){
                            turn = false;
                            e.target.style.fill = "#446a7d";
                            e.target.setAttribute("click", "1");
                            player1 = true;
                        
                        }else{
                            turn = true;
                            e.target.style.fill =  "#df1e35";
                            e.target.setAttribute("click", "2");
                            player1 = false;
                        }
                    }
                    } 
                    })
                             
                
                
                

    }
    }
    

    //restarts game with new circles and an animation
    reset(){
        
        for(let i = 0; i < this.space.length; i++){
            this.space[i].style.fill = "#ffffff";
            if(turn != true){
                turn = true;
                TweenMax.from(".content", {duration: 1, alpha: 0});
                
        }
        
    }
    
}}




let round = new ticTacToe;
let ticTacToeDiv = document.getElementsByClassName("ticTacToeDiv");
ticTacToeDiv.innerHTML = round.reset();
round.turn();



function newRound(){
    round.reset();
    ticTacToeDiv.innerHTML = round.reset();
}

    
