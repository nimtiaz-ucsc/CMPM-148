let resources = [
  {key: "power", value: 50, image: "./images/PowerIcon.png", },
  {key: "responsibility", value: 50, image: "./images/ResponsibilityIcon.png"}
]

function addResource(key, amount){
  for (x in resources){
    if (key == resources[x].key) resources[x].value += amount;
  }
  
}


function setStatIcons () {
  let resource_bar = ""
  
  for (x in resources) {
    resource_bar += "<div class='statIconImageContainer'><div class='resourceBarFront' id='" + resources[x].key + "Bar'></div><div class='resourceBarBack'></div><image src='" + resources[x].image +"'class='statIconImage' id='" + resources[x].key +  "'> </image></div>"
  }

  io.appendIntoElement(resource_bar, "statIcons")
} 

function updateMeters() {
    for (x in resources) {
      //console.log(resources[x].key+"Bar", resources[x].value/100*75)
      document.getElementById(resources[x].key+"Bar").style.transform = "scaleY(" + resources[x].value/100 + ")";
      //console.log(resources[x].value/100*75+ "px", )
  }
  
}

function checkFail() {
  failures = []
    for (x in resources) {
      if (resources[x].value > 100) {failures.push({resource: resources[x].key, level: "high"})}
      if (resources[x].value < 0) {failures.push({rsource: resources[x].key, level: "low"})}
  }
  if (failures.length == 0 && deck.length == 0) {
    addToTopDeck(defaultFailCard, false);
    return;
  }
  for (x in failures){
    let f = failures[x];
    for ( i in failCards){
      let failCard = failCards[i];
      if (failCard.resource === f.resource && failCard.level === f.level) {
        addToTopDeck(failCard.card, false);
        return;
      }
    }
    
  }
 
}