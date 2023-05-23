function runArenaMinigame() {

    game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
    
    var dinoSize = 64;
    var currentDino = document.getElementById("dinoSelect").value;

    game.context.drawImage(document.getElementById(currentDino + "Sprite"), game.dinoX - (dinoSize/2), game.dinoY - (dinoSize/2), dinoSize, dinoSize);
    game.context.font = "16px Times New Roman";
    game.context.fillText("Lv. " + eval("game."+currentDino), game.dinoX - (dinoSize/2), game.dinoY - (dinoSize/2));
}

moveDino = function(mouseClick) {

    game.dinoX = mouseClick.offsetX;
    game.dinoY = mouseClick.offsetY;  
}