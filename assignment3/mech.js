function generate_mech() {
    result = "<ol>"
    mechData = {
        "team1":["Star", "Blitz", "Defense", "Offense", "Mecha", "Mech", "Titan", "Guardian", "Guard", "Sentinel", "Alpha", "Beta", "Delta", "Gamma", "Epsilon", "Omega", "Elite", "Power", "Super", "Ultra", "Giga", "Mega"],
        "team2":["Squadron", "Squad", "Division", "Team", "Sector", "Corps", "Unit", "Force"],
        "digit":["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        "number":["", " #digit#", " #digit##digit#", " #digit##digit##digit#"],
        "team":["#prefix# #team2##number#"],
        "teamAdj":["elite", "prestigious", "top", "hardened", "premier", "unrivaled", "unparalleled", "great"],
        "animal":["lion", "dinosaur", "leopard", "jaguar", "raptor", "eagle", "crane", "sports car", "construction vehicle", "tank", "fighter jet", "cheetah", "rhino", "elephant", "armadillo", "knight", "spider", "insect", "bird", "gryphon"],
        "mechAdj":["mighty", "formidable", "awesome", "imposing", "indomitable", "sturdy", "powerful", "graceful", "robust", "steadfast"],
        "mech":["#mechAdj# #prefix# #teamAnimal.capitalize#", "#mechAdj# #prefix# #teamAnimal.capitalize# #digit#", "#mechAdj# #prefix# #teamAnimal.capitalize# Mark #digit#"],
        "weaponAdj":["sweeping", "paralyzing", "blazing", "flaming", "explosive", "burning", "electric", "crushing", "freezing", "sub-zero", "devastating", "piercing", "toxic", "acidic", "ruinous", "earth-shattering", "fiery", "glimmering", "gleaming", "shining"],
        "weaponNoun":["Cannon", "Blaster", "Missile", "Beam", "Gun", "Blade", "Sword", "Katana", "Cutlass", "Knife", "Dagger", "Scimitar", "Broadsword", "Hammer", "Warhammer", "Halberd", "Mace", "Flail", "Axe", "Spear", "Staff", "Bow", "Crossbow", "Knuckle", "Fist", "Gauntlet", "Nunchaku", "Sai", "Tonfa", "Wrecking Ball", "Grenade", "Bomb", "Whip", "Glaive", "Rifle", "Shotgun", "Shield"],
        "weapon":["#weaponAdj# #prefix# #weaponNoun#", "#weaponAdj# #prefix# Dual #weaponNoun.s#"],
        "sentence":["You are members of #team#, #teamAdj.a# group of pilots, and humanity's last line of defense against the threat of giant monsters. Each of you control #mechAdj# mechanical #teamAnimal.s#. Your mechs can combine to form the #mech#, unlocking the use of its signature weapon: the #weapon#."],
        "origin":["#[prefix:#team1#][teamAnimal:#animal#]sentence#"]
    }
    result += grammars.GenerationSimple(mechData);
    io.write_into_element(result, "mech");
}