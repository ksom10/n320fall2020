TweenMax.from(".content", {duration: 5, alpha: 0});

function mouseOver(e){
    TweenMax.to(e.target, {
        duration: 1,
        transform: "scale(1.5)",
    });
}

function mouseOff(e){
    TweenMax.to(e.target, {
        duration: 1,
        transform: "scale(1)",
    });
}

function click(e){
    TweenMax.to(e.target, {
        duration: 1,
        alpha: 0,
    });
}

document.getElementById("purpleBlock").addEventListener("mouseover", mouseOver);
document.getElementById("purpleBlock").addEventListener("mouseout", mouseOff);
document.getElementById("purpleBlockTwo").addEventListener("mouseover", mouseOver);
document.getElementById("purpleBlockTwo").addEventListener("mouseout", mouseOff);
document.getElementById("purpleBlockThree").addEventListener("mouseover", mouseOver);
document.getElementById("purpleBlockThree").addEventListener("mouseout", mouseOff);
document.getElementById("purpleBlockFour").addEventListener("mouseover", mouseOver);
document.getElementById("purpleBlockFour").addEventListener("mouseout", mouseOff);
document.getElementById("purpleBlockFive").addEventListener("mouseover", mouseOver);
document.getElementById("purpleBlockFive").addEventListener("mouseout", mouseOff);
document.getElementById("purpleBlockSix").addEventListener("mouseover", mouseOver);
document.getElementById("purpleBlockSix").addEventListener("mouseout", mouseOff);
document.getElementById("purpleBlock").addEventListener("click", click);
document.getElementById("purpleBlockTwo").addEventListener("click", click);
document.getElementById("purpleBlockThree").addEventListener("click", click);
document.getElementById("purpleBlockFour").addEventListener("click", click);
document.getElementById("purpleBlockFive").addEventListener("click", click);
document.getElementById("purpleBlockSix").addEventListener("click", click);