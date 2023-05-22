const GameInstance = class {
constructor() {
    this.narrativeManager = new narrativeManager(this)
    
    this.panels = ["panel1", "panel2", "panel3"]
    this.currentPanel = "panel1";

    this.ore = 0;
    this.miners = 0;
    this.fossils = 1;
    this.cleaners = 0;

    this.dinosaurs = [
        "Tyrannosaurus",
        "Velociraptor",
        "Stegosaurus",
        "Spinosaurus",
        "Brachiosaurus",
        "Ankylosaurus",
        "Apatosaurus",
        "Archaeopteryx",
        "Pteranodon",
        "Triceratops"
    ]

    this.parts = [
        " skull",
        " limb",
        " leg",
        " toe",
        " rib",
        " tail",
        " spine",
        " tooth",
        " bone"

    ]
    
    this.dinoTotal = 0;

    this.Tyrannosaurus = 0;
    this.Velociraptor = 0;
    this.Stegosaurus = 0;
    this.Spinosaurus = 0;
    this.Brachiosaurus = 0;
    this.Ankylosaurus = 0;
    this.Apatosaurus = 0;
    this.Archaeopteryx = 0;
    this.Pteranodon = 0;
    this.Triceratops = 0;
}




// the following functions are to be called from buttons in the index.html
gainOre(){ 
    this.ore++; 
    this.updateDisplay();
}

gainMiners(){ 
    if (this.ore >= 10) {
        this.miners++; 
        this.ore -= 10;
        this.updateDisplay();
    }
}

gainFossils(){
    if (this.ore >= 1) {
        this.ore--
        this.fossils++; 
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

gainDino() {
    if (this.fossils >= 0) {
        //this.fossils -= 100;

        if (Math.floor(Math.random()*100) <= 49) {
            io.appendIntoElement("Did not find any meaningful remains...", "reports");
        } else {
            this.updateDino(Math.floor(Math.random() * 10));
        }

    }
}

updateDino(dino) {
    this.varString = "this." + this.dinosaurs[dino];

    eval(this.varString + "++");
    io.appendIntoElement("Found a " + this.dinosaurs[dino] + this.parts[Math.floor(Math.random()*this.parts.length)] + "!", "reports");
    io.writeValueIntoClass(eval(this.varString), this.dinosaurs[dino] + "Number");
    io.writeValueIntoClass("Lv. " + eval(this.varString), this.dinosaurs[dino] + "Level");
    
    if (eval(this.varString) == 1) {
        io.showElement(this.dinosaurs[dino]);
        io.showElement(this.dinosaurs[dino]+"Battle");
        this.dinoTotal++;
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
        this.yield = Math.floor(Math.random()*this.cleaners) + 1
        this.ore -= this.yield;
        this.fossils += this.yield;
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
    io.writeValueIntoClass(this.dinoTotal + "/10", "dinoNumber");
}

};


// this function forom JQuery waits until the web page is fully loaded before triggering the start of the game
$( document ).ready(function() {
game = new GameInstance();
game.switchPanels(game.currentPanel)
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
