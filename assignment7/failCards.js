failCards = [{
  resource:"power", 
  level: "high", 
  card: {
    prompt: "<i>Slowly but surely, the symbiote has taken over. It has made you stronger, but also more aggressive and vengeful towards friend and foe alike.</i>",
    rightChoiceText: "RESTART",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "RESTART", 
    leftChoice: function(){location.reload();
    },
    name: "Great Power",
    resultText: "",
    image: "./images/SpiderManSymbiote.png"
  }  
}, {
    resource:"responsibility", 
    level: "high", 
    card: {
    prompt: "<i>Despite the malicious nature of the symbiote, you stayed true to who you are, and it rejects you, slithering off to find a new host.",
    rightChoiceText: "RESTART",
    rightChoice: function(){location.reload();
        },
    
    leftChoiceText: "RESTART", 
    leftChoice: function(){location.reload();
    },
    name: "Great Responsibility",
    resultText: "",
    image: "./images/SpiderMan.png"
    }  
}]

defaultFailCard = {
  prompt: "<i>While you occasionally gave in to the symbiote's hostile tendencies, you managed to keep it in check and use it for (mostly) good.</i>",
  rightChoiceText: "RESTART",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "RESTART", 
  leftChoice: function(){location.reload();
  },
  name: "With Great Power, Comes Great Responsibility",
  resultText: "",
  image: "./images/HalfSpiderMan.png"
}