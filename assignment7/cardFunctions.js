



deck= [];

// card is a key, except when it is an onject and not from the pool
function addToTopDeck(card, fromPool=true){
  if (fromPool)deck.push(cardPool[card])
  else deck.push(card);
  console.log("OVER HERE\n" + card)
}
function drawFromDeck(){
  if (deck.length ==0) checkFail();
  return deck.pop();
}
function shuffleIntoDeck(card, fromPool=true){
  addToTopDeck(card, fromPool)
  shuffleDeck(deck)
}

// shuffles the deck and then arranges by priority
function shuffleDeck(array){
  positions = []
  for (x in array) positions.push({value:array[x], roll:Math.random()});
  console.log(positions)
  positions.sort(function(a, b){return a.roll - b.roll;})  
    
  newArray = [];
  for (x in positions) {newArray.push(positions[x].value)}
  newArray.sort(function(a, b){return a.priority - b.priority})
  
    deck = newArray;
  }
  
  
  function addPackToDeck(pack){
    console.log("attempt to add pack")
    for (x in cardPool.uniqueIDList){
      console.log(pack, cardPool.uniqueIDList[x].pack)
      if (cardPool[cardPool.uniqueIDList[x]].pack == pack) {
        shuffleIntoDeck(cardPool.uniqueIDList[x]);
      }
    }
    
  }
  
  function importCardData() {

  let data = document.getElementById("data").innerHTML;
  
  let cards = data.split("\n")
  let labels = [];
  for ( c in cards){
    if ((c == 0))  // get Labels
    {
      header = cards[c].split("\t")
      for (i in header)
        labels.push(header[i])
      //console.log(labels)
      
    }
    else{
      card = {}
      values = cards[c].split("\t")
      for (i in values){ 
        card[labels[i]] = values[i];
        if (labels[i] == "image"){
        card[labels[i]] = "./images/" + values[i];
        }
        if (labels[i] == "rightChoice" || labels[i] == "leftChoice"){
          console.log(values[i])
          let localFunction = new Function(values[i])
          card[labels[i]] = localFunction;
        }
      } 
        console.log(card)
      
      console.log(values)
      
      cardPool.uniqueIDList.push(values[0])
      cardPool[values[0]] = card;
    }
    
  } 
  console.log("CARD POOL\n" + cardPool.uniqueIDList)
  }
