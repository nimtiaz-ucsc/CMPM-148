const GameInstance = class {
constructor() {
    this.narrativeManager = new narrativeManager(this)
    
    this.panels = ["panel1", "panel2", "panel3"]
    this.currentPanel = "panel1";

    this.ore = 0;
    this.miners = 0;
    this.fossils = 1;
    this.cleaners = 0;
    this.winnings = 0;

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
    this.highestLevel = 0;

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

    this.canvas = document.getElementById("arena");
    this.context = this.canvas.getContext("2d");
    this.dinoX = this.canvas.width/2;
    this.dinoY = this.canvas.height/2;

    this.enemies = [];
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
    if (this.fossils >= 100) {
        this.fossils -= 100;

        if (Math.random() < 0.5) {
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

        var select = document.getElementById("dinoSelect");
        var option = document.createElement("option");
        option.text = this.dinosaurs[dino]
        select.add(option, dino);

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
    this.highestLevel = Math.max(this.Tyrannosaurus, this.Velociraptor, 
                                 this.Stegosaurus, this.Spinosaurus, 
                                 this.Brachiosaurus, this.Ankylosaurus, 
                                 this.Apatosaurus, this.Archaeopteryx, 
                                 this.Pteranodon, this.Triceratops);

    io.writeValueIntoClass(this.ore, "oreNumber")
    io.writeValueIntoClass(this.miners, "minerNumber")
    io.writeValueIntoClass(this.fossils, "fossilNumber")
    io.writeValueIntoClass(this.cleaners, "cleanerNumber")
    io.writeValueIntoClass(this.dinoTotal + "/10", "dinoNumber");
    io.writeValueIntoClass("$" + this.winnings, "winningsNumber");

    this.dinosaurs.forEach( (dino) => {
        io.writeValueIntoClass(eval("this." + dino), dino + "Number");
        io.writeValueIntoClass("Lv. " + eval("this." + dino), dino + "Level");
    }) 
}

};


// this function forom JQuery waits until the web page is fully loaded before triggering the start of the game
$( document ).ready(function() {
game = new GameInstance();
//arena = new ArenaMinigame();
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
