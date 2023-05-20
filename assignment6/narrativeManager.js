// this object is to keep track of narrative beats and unlocks

// each "beat" has a test function, a function which unlocks elements, and a report function

const narrativeManager = class {
  constructor(parentObject) {
  this.data = parentObject;
    console.log(parentObject, this.data)
    
  this.beats = [
  {
    triggered: false,
    test: function(data){return data.ore >= 10}, 
    unlock:function(){io.showElement("minerRow")}, 
    report: function(){
      io.appendIntoElement("You have enough ore to build a mining rig!", "reports");
      io.writeIntoElement ("Industrial Revolution", "era");
      }
  },
  {
    triggered: false,
    test: function(data){return data.ore >= 100}, 
    unlock:function(){io.showElement("fossilRow")},  
    report: function(){
        io.appendIntoElement("You dug up a fossil! Try cleaning up some of the ore you dug out to find more.", "reports");
        io.writeIntoElement("Eureka!", "era");
    }
  },
  {
    triggered: false,
    test: function(data){return data.fossils >= 20}, 
    unlock:function(){io.showElement("cleanerRow")},  
    report: function(){
        io.appendIntoElement("You can now build automated fossil cleaners!", "reports");
    }
  }
  ]
  }
  
  setup(){
    io.hideElement("minerRow")
    io.hideElement("fossilRow")
    io.hideElement("cleanerRow")
    io.hideElement("showPanel2")
    io.hideElement("showPanel3")
  }


// goes through all narrative events, checks if they activate, runs activation code, and runs code that delivers a message about the story event
  assess(){
    for (let b = 0; b < this.beats.length; b++){
      let beat = this.beats[b]
      if (!beat.triggered){
        if (beat.test(this.data)){
          beat.triggered = true;
          beat.unlock();
          beat.report();
        }
      }
    }
  }

}