function generate_city() {
    result = "<ol>"
    cityData = {
        "dayAdj":["ordinary", "windy", "warm", "cool", "hot", "peaceful", "busy", "freezing", "snowy", "sunny", "cloudy", "rainy", "stormy", "cold", "chilly", "breezy", "typical", "average"],
        "direction":["North ", "South ", "East ", "West ", "Central ", "", "", "", "", ""],
        "city1":["Bonne", "Win", "Star", "Los #city1#", "San #city1#", "Hudd", "Oak", "Luna", "Brooke", "Avon", "Metro", "Flora", "New #city1#", "Mel", "Lark", "Sun", "Elm", "Spring", "Rush", "Wey", "Grey", "Green", "Light", "Don", "Sunny", "Flower", "Free", "Moore", "Mo", "Gold", "Porter", "Blue", "Yellow", "Red", "Silver"],
        "city2":["ham", "ton", "ville", "opolis", "borough", "field", "burg", "view", "stead", "worth", "ford", "dale", "#city2# Rock", "bridge", "#city2# Point", "#city2# Valley", "#city2# Peak", "leaf", "mouth", "stone", "turf", "belle", "port", "deep", "rod", "wood", "ridge", "mond", "chester", "#city2# Grove", "clave", "vine"],
        "city":["#direction##city1##city2#"],
        "buildingsAdj":["known for its", "filled with", "populated by", "consisting of"],
        "buildings":["modestly sized offices and apartment complexes", "giant skyscrapers and bustling streets", "quiet suburbs and parks"],
        "origin":["It's #dayAdj.a# day in #city#, a city #buildingsAdj# #buildings#."]
    }
    result += grammars.GenerationSimple(cityData);
    io.write_into_element(result, "city");
}