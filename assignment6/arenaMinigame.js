function runArenaMinigame() {

    game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
    
    var dinoSize = 64;
    var currentDino = document.getElementById("dinoSelect").value;

    game.context.drawImage(document.getElementById(currentDino + "Sprite"), game.dinoX - (dinoSize/2), game.dinoY - (dinoSize/2), dinoSize, dinoSize);
    game.context.font = "16px Times New Roman";
    game.context.fillText("Lv. " + eval("game."+currentDino), game.dinoX - (dinoSize/2), game.dinoY - (dinoSize/2));

    if (Math.random() < .15){
        game.enemies.push({x:Math.floor(Math.random()*game.canvas.width), y:Math.floor(Math.random()*game.canvas.height), dirX:0, dirY:0, sprite: game.dinosaurs[Math.floor(Math.random()*game.dinosaurs.length)]})
        //console.log(game.enemies)
      }  
    game.enemies.forEach(function (e){
        game.context.drawImage(document.getElementById(e.sprite + "Sprite"), e.x - 16, e.y - 16, 32, 32);
    })
}

moveDino = function(mouseClick) {

    game.dinoX = mouseClick.offsetX;
    game.dinoY = mouseClick.offsetY;  
}