function generate_monster() {
    result = "<ol>"
    monsterData = {
        "name1":["Ghi", "God", "Go", "Ro", "Moth", "Mecha", "Destro", "Goro", "Tyranno", "King #name1#", "Mega", "Igua", "Veloci", "Carno", "Star", "Robo", "Abominable #name1#", "La", "Ence", "Destructo", "Beta", "Vil", "Jaka", "Ry", "Titani", "Titano", "Demon #name1#", "Thunder", "Blazing #name1#", "Alpha", "Mino", "Cen", "Manti", "Char", "Cer", "Cy", "Scy", "Fro", "Avi", "Aqua", "Ta", "Qi", "Super #name1#", "Pyro", "Furious #name1#", "Oro"],
        "name2":["do", "ji", "ro", "lo", "ky", "ko", "ber", "no", "ga", "go", "gu", "shi", "ra", "rah", "ya", "yah", "gue", "cu", "yo", "zo", "mo", "ia", "la", "mu", "mi", "chi"],
        "name3":["zilla", "dan", "izer", "aizer", "zer", "saurus", "lon", "don", "nodon", "raptor", "taurus", "oid", "tron", "don", "ladus", "rax", "gax", "rak", "kon", "saur", "#name3# King", "on", "ron", "claw", "con", "wing", "ous", "rous", "taur", "os", "phon", "us", "clops", "lla", "mon", "tan", "ras", "zora", "gon", " Rex", " Prime", " X", "los", "dius", "nius", "mera", "head", "vum", "nator", "roc", "zoid", "maru"],
        "name":["#name1##name2#", "#name1##name2##name2#", "#name1##name3#", "#name1##name2##name3#", "#name1##name2##name2##name3#"],
        "lowHome":["the depths below", "dark caverns unkwown", "hell itself", "deep underground", "depths unknown", "the planet's core", "an active volcano", "murky swamplands", "the shadows", "the deep sea", "the ocean's depths", "the sea floor", "beneath the surface"],
        "highHome":["the stars above", "the skies above", "above the clouds", "a galaxy far far away", "the farthest reaches of outer space", "the upper atmosphere"],
        "home":["#lowHome#", "#highHome#", "distant lands", "lands unknown", "freezing tundras", "sweltering deserts", "dense jungles", "vast grasslands"],
        "lowVerb":["Arising", "Rising up", "Emerging"],
        "highVerb":["Falling", "Dropping in", "Descending", "Plummeting", "Tumbling in"],
        "homeVerb":["Hailing", "Coming", "Originating"],
        "homeSentence":["#lowVerb# from #lowHome#", "#highVerb# from #highHome#", "#homeVerb# from #home#"],
        "featureVerb":["brandishes", "flashes", "displays", "flaunts", "waves around", "boasts", "exposes", "readies", "reveals", "shows off"],
        "featureAdjective":["fearsome", "impressive", "shiny", "sharp", "wide", "acidic", "toxic", "flaming", "blazing", "burning", "frozen", "frosted", "spiky", "large", "massive", "intimidating", "spindly", "avian", "feline", "canine", "imposing", "snapping", "hardened", "sturdy", "slimy", "slippery", "gooey"],
        "featureNoun":["claws", "fangs", "teeth", "wings", "tentacles", "limbs", "arms", "fists", "legs", "hands", "feet", "paws", "tail", "form", "stature", "body", "hooves", "armor"],
        "feature":["#featureAdjective# #featureNoun#", "#featureAdjective#, #featureAdjective# #featureNoun#"],
        "featureSentence":["#featureVerb# its #feature#"],
        "monsterAdj":["feared", "respected", "revered", "known", "infamous", "venerated", "notorious", "detested", "hated", "loathed", "despised", "abhorred"],
        "attackAdj":["sweeping", "paralyzing", "blazing", "flaming", "explosive", "burning", "electric", "crushing", "freezing", "sub-zero", "treacherous", "devastating", "piercing", "toxic", "acidic", "lashing", "ruinous", "splintering", "earth-shattering", "fiery"],
        "attackNoun":["blast", "beam", "slash", "slice", "strike", "flail", "slam", "horde of minions", "ground pound", "bomb", "gas cloud", "projectile", "screech", "sludge", "slime"],
        "attack":["#attackAdj.a# #attackNoun#", "#attackAdj.a#, #attackAdj# #attackNoun#"],
        "monster":["#homeSentence#, #monsterName# approaches. The pilots scan the monster and watch as it #featureSentence# and #featureSentence#. #monsterName# is #monsterAdj# for its signature attack: #attack#."],
        "origin":["#[monsterName:#name#]monster#"]
    }
    result += grammars.GenerationSimple(monsterData);
    io.write_into_element(result, "monster");
}