
firstCard = {
    prompt: "<i>You come across this strange, black, and slimy lifeform. It writhes in place and feels... off. You feel a faint pull towards it.</i>",
    rightChoiceText: "Try to grab it",
      rightChoice: function(){
        addResource("power", 10);
        addToTopDeck("symbiote");
      },
    leftChoiceText: "Approach cautiously", 
    leftChoice: function(){
        addResource("responsibility", 10);
        addToTopDeck("symbiote");
    },
    name: "Symbiote",
    resultText: "",
    image: "./images/Symbiote.png",
    priority: 1,
    pack : "none"
}


cardPool = {
  "uniqueIDList" : ["symbiote"],

  "symbiote": {
    prompt: "<i>The slime lunges towards you, and crawls up your arm and soaks into your suit. The bright red and blue is replaced with a deep black. You feel more tense, as if your senses have heightened.</i>",
    rightChoiceText: "Fight crime",
      rightChoice: function(){
        addPackToDeck("foes");
      },
    leftChoiceText: "Retire for the day", 
    leftChoice: function(){
        addPackToDeck("friends");
    },
    name: "Symbiote",
    resultText: "",
    image: "./images/Symbiote.png",
    priority: 1,
    pack : "none"
  }

}