const GameInstance = class {
constructor() {
    this.narrativeManager = new narrativeManager(this)
    
    this.panels = ["panel1", "panel2", "panel3"]
    this.currentPanel = "panel1";

    this.ore = 0;
    this.miners = 0;
    this.fossils = 1;
    this.cleaners = 0;
    
    this.collectorsProtected = 0;
    this.findersProtected = 0;
    this.gardenCollectors = 0;
}




// the following functions are to be called from buttons in the index.html
gainOre(){ this.ore++; this.updateDisplay();}
gainMiners(){ 
    if (this.ore >= 10) {
        this.miners++; 
        this.ore -= 10;
        this.updateDisplay();
    }
}

gainFossils(){
    if (this.ore >= 1) {
        this.fossils += 1; 
        this.updateDisplay();
    }
}
gainCleaners(){ 
    if (this.ore >= 20) {
        this.cleaners++; 
        this.ore -= 20;
        this.updateDisplay();
    }
}

runMinerWork(){
    if (this.miners > 0) {
        this.ore += (Math.floor(Math.random()*this.miners) + 1)
    }
}

runCleanerWork(){
    if (this.cleaners > 0 && this.ore >= this.cleaners) {
        console.log('hi')
        this.ore -= this.cleaners;
        this.fossils += (Math.floor(Math.random()*this.cleaners) + 1)
    }
}

    
// this function takes in a panel 
switchPanels(panel) {
    game.currentPanel = panel;
    io.showPanel(game);    
}

updateDisplay(){
    io.writeValueIntoClass(this.ore, "oreNumber")
    io.writeValueIntoClass(this.miners, "minerNumber")
    io.writeValueIntoClass(this.fossils, "fossilNumber")
    io.writeValueIntoClass(this.cleaners, "cleanerNumber")
}

};


// this function forom JQuery waits until the web page is fully loaded before triggering the start of the game
$( document ).ready(function() {
game = new GameInstance();
game.narrativeManager.setup();
game.updateDisplay()

startRecording(game);

// Run the Loop
gameTimer = setInterval(function(){
    game.runMinerWork();
    game.runCleanerWork();
    game.narrativeManager.assess()
    game.updateDisplay()
}, 500)


})
