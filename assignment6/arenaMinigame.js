function runArenaMinigame() {
    var canvas = document.getElementById("arena");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}

testCommand = function(mouseClick) {
    var canvas = document.getElementById("arena");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    let clickX = mouseClick.offsetX;
    let clickY = mouseClick.offsetY;

    let dimension = 100

    context.drawImage(document.getElementById("dinoSprite"), clickX - (dimension/2), clickY - (dimension/2), dimension, dimension);

    console.log(document.getElementById("dinoSelect").value)

}