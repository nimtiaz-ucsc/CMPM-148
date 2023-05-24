function runArenaMinigame() {

    game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
    
    var dinoSize = 64;
    var currentDino = document.getElementById("dinoSelect").value;

    game.context.drawImage(document.getElementById(currentDino + "Sprite"), game.dinoX - (dinoSize/2), game.dinoY - (dinoSize/2), dinoSize, dinoSize);
    game.context.fillStyle = "black";
    game.context.font = "16px Times New Roman";
    game.context.fillText("Lv. " + eval("game." + currentDino), game.dinoX - (dinoSize/2), game.dinoY - (dinoSize/2));

    if (Math.random() < .15 && game.enemies.length <= 3){
        var max = game.canvas.height - dinoSize;

        game.enemies.push({x:game.canvas.width, y:Math.floor(Math.random()* (max - dinoSize) + dinoSize), sprite: game.dinosaurs[Math.floor(Math.random()*game.dinosaurs.length)], level: Math.floor(Math.random() * ((game.highestLevel * 1.5) - 1) + 1)})
      }  
    game.enemies.forEach(function (e){
        e.x -= 5;
        game.context.drawImage(document.getElementById(e.sprite + "SpriteEnemy"), e.x - (dinoSize/2), e.y - (dinoSize/2), dinoSize, dinoSize);
        if (e.level > eval("game." + currentDino)) {
            game.context.fillStyle = "red";
        } else {
            game.context.fillStyle = "green";
        }
        game.context.fillText("Lv. " + e.level, e.x - (dinoSize/2), e.y - (dinoSize/2));

        if (e.x <= 0) {
            game.enemies.splice(game.enemies.indexOf(e), 1);
        }

        if ((e.x > game.dinoX - dinoSize) && (e.x < game.dinoX + dinoSize) && (e.y > game.dinoY - dinoSize) && (e.y < game.dinoY + dinoSize)) {
            if (e.level > eval("game." + currentDino)) {
                if (eval("game." + currentDino) > 1) {
                    eval("game." + currentDino + "--");
                }
            } else {
                game.winnings += Math.floor(Math.random() * 1000 * eval("game." + currentDino) / (eval("game." + currentDino) - e.level + 1));
            }

            game.enemies.splice(game.enemies.indexOf(e), 1);
        }
    })
}

moveDino = function(mouseClick) {

    game.dinoX = mouseClick.offsetX;
    game.dinoY = mouseClick.offsetY;  
}