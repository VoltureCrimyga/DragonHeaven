'use strict';

exports.BattlePokedex = {
/* For pokemon with two abilities use
	   abilities: {0: "Ability1Name", H: "Ability2Name"},
	   For a pokemon with three abilities use
	   abilities: {0: "Ability1Name", 1: "Ability2Name", H: "Ability3Name"}, */
 grasshole: {
                 num: 3001,
                 species: "Grasshole",
                 types: ["Grass"],
                 baseStats: {hp: 56, atk: 60, def: 55, spa: 47, spd: 50, spe: 50},
                 abilities: {0: "Overgrow"},
                 evos: ["analgae"],
          },
  
  analgae: {
                 num: 3002,
                 species: "Analgae",
                 types: ["Grass", "Ground"],
                 baseStats: {hp: 55, atk: 85, def: 45, spa: 79, spd: 65, spe: 86},
                 abilities: {0: "Overgrow"},
                 evos: ["rectreem"],
                 prevo: "grasshole",
          },
	
  rectreem: {
                 num: 3003,
                 species: "Rectreem",
                 types: ["Grass", "Ground"],
                 baseStats: {hp: 90, atk: 120, def: 95, spa:70, spd: 70, spe: 80},
                 abilities: {0: "Overgrow", H:"Pressure"},
                 prevo: "analgae",
         },
 
   arabomb: {
                 num: 3004,
                 species: "Arabomb",
                 types: ["Fire"],
                 baseStats: {hp: 47, atk: 49, def: 50, spa: 65, spd: 45, spe: 62},
                 abilities: {0: "Blaze"},
                 evos: ["iguallah"],
         },
 
  iguallah: {
                 num: 3005,
                 species: "Iguallah",
                 types: ["Fire", "Dark"],
                 baseStats: {hp: 65, atk: 75, def: 55, spa: 85, spd: 50, spe: 75},
                 abilities: {0: "Blaze"},
                 evos: ["lizakbar"],
                 prevo: "arabomb",
         },
 
  lizakbar: {
                 num: 3006,
                 species: "Lizakbar",
                 types: ["Fire", "Dark"],
                 baseStats: {hp: 85, atk: 90, def: 65, spa: 120, spd: 65, spe: 100},
                 abilities: {0: "Blaze"},
                 prevo: "iguallah",
         },
 
   ejacasm: {
                 num: 3007,
                 species: "Ejacasm",
                 types: ["Water"],
                 baseStats: {hp: 60, atk: 50, def: 50, spa: 50, spd: 63, spe: 45},
                 abilities: {0: "Torrent"},
                 evos: ["hosajack"],
         },
 
  hosajack: { 
                 num: 3008,
                 species: "Hosajack",
                 types: ["Water", "Poison"],
                 baseStats: {hp: 85, atk: 55, def: 60, spa: 64, spd: 77, spe: 64},
                 abilities: {0: "Torrent"},
                 evos: ["condoom"],
                 prevo: "ejacasm",
         },
 
   condoom: {
                 num: 3009,
                 species: "Condoom",
                 types: ["Water", "Poison"],
                 baseStats: {hp: 120, atk: 60, def: 85, spa: 85, spd: 100, spe: 75},
                 abilities: {0: "Torrent"},
                 prevo: "hosajack",
         },
 
  squirrap: {
                 num: 3010,
                 species: "Squirrap",
                 types: ["Normal"],
                 baseStats: {hp: 40, atk: 53, def: 39, spa: 43, spd: 44, spe: 58},
                 abilities: {0: "Soundproof"},
                 evos: ["gampster"],
         },
 
  gampster: {
                 num: 3011,
                 species: "Gampster",
                 types: ["Normal"],
                 baseStats: {hp: 89, atk: 85, def: 51, spa: 49, spd: 54, spe: 87},
                 abilities: {0: "Soundproof"},
                 prevo: "squirrap"
         },
 
   kengeon: {
                 num: 3012,
                 species: "Kengeon",
                 types: ["Normal", "Flying"],
                 baseStats: {hp: 37, atk: 53, def: 45, spa: 36, spd: 48, spe: 55},
                 abilities: {0: "Early Bird, Shed skin"},
                 evos: ["frieden"],
         },
 
   frieden: {
                 num: 3013,
                 species: "Frieden",
                 types: ["Normal", "Flying"],
                 baseStats: {hp: 58, atk: 65, def: 59, spa: 55, spd: 65, spe: 65},
                 abilities: {0: "Gale Wings", "Rough Skin"},
                 evos: ["corooster"],
                 prevo: "kengeon",
         },
 
 corooster: {
                 num: 3014,
                 species: "Corooster",
                 types: ["Normal", "Flying"],
                 baseStats: {hp: 77, atk: 87, def: 77, spa: 67, spd: 77, spe: 87},
                 abilities: {0: "Gale Wings", "Rough Skin"},
                 prevo: "frieden",
         },
 
 curicrawl: {
                 num: 3015,
                 species: "Curicrawl",
                 types: ["Bug"],
                 baseStats: {hp: 60, atk: 65, def: 60, spa: 10, spd: 20, spe: 20},
                 abilities: {0: "Shield Dust", "Prankster"},
                 evos: ["gutsicoon"],
         },
 
 gutsicoon: {
                 num: 3016,
                 species: "Gutsicoon",
                 types: ["Bug"],
                 baseStats: {hp: 80, atk: 75, def: 70, spa: 15, spd: 30, spe: 20},
                 abilities: {0: "Shield Dust, Effect Spore"},
                 evos: ["gutsifly"],
                 prevo: "curicrawl",
         },
 
  gutsifly: {
                 num: 3017,
                 species: "Gutsifly",
                 types: ["Bug", "Flying"],
                 baseStats: {hp: 105, atk: 100, def: 110, spa: 25, spd: 40, spe: 30},
                 abilities: {0: "Shield Dust", "Prankster"},
                 prevo: "gutsicoon",
         },
 
  larvades: {
                 num: 3018,
                 species: "Larvades",
                 types: ["Bug"],
                 baseStats: {hp: 35, atk: 30, def: 35, spa: 55, spd: 50, spe: 55},
                 abilities: {0: "Compound Eyes", "Shield Dust"},
                 evos: ["proboskito"],
         },
 
proboskito: {
                 num: 3019,
                 species: "Proboskito",
                 types: ["Bug", "Electric"],
                 baseStats: {hp: 55, atk: 85, def: 40, spa: 85, spd: 55, spe: 125},
                 abilities: {0: "Compound Eyes", "Static"},
                 evos: ["venowatt"],
                 prevo: "larvades",
         },
  clovour: {
                 num: 3020,
                 species: "Clovour",
                 types: ["Grass"],
                 baseStats: {hp: 60, atk: 60, def: 52, spa: 20, spd: 52, spe: 71},
                 abilities: {0: "Sap Sipper", "Natural Cure"},
                 evos: ["chanolour", "kuuroba"],
         },
chanolour: {
                 num: 3021,
                 species: "Chanolour",
                 types: ["Grass","Steel"],
                 baseStats: {hp: 90, atk: 120, def: 85, spa: 40, spd: 85, spe: 110},
                 abilities: {0: "Sap Sipper", "Natural Cure"},
                 prevo: "clovour",
         },	
};
