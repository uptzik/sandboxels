elements.phosphate_rock = {
    color: ["#D2B48C", "#C2B280","#A89F91", "#8C7A6B"],
    behavior: behaviors.POWDER,
    temp: 20,
    category: "land",
    state: "solid",
    tempHigh: 300,
    stateHigh: "white_phosphurus",
};
elements.white_phosphurus = {
    color: ["#FFFFFF", "#F5F5F5","#FFFFE0", "#FAFAD2"],
    behavior: behaviors.POWDER,
    temp: 20,
    category: "powders",
    state: "solid",
    tempHigh: 400,
    stateHigh: "red_phosphurus",
};
elements.red_phosphurus = {
    color: ["#8B0000", "#A52A2A","#B22222", "#800000"],
    behavior: behaviors.POWDER,
    temp: 20,
    category: "powders",
    state: "solid",
    tempHigh: 1000,
    stateHigh: "fire",
	burn: 100,
	burnTime: 2000,
    reactions: {
        "iodine": { elem1: null, elem2: "iodine_phosphate" },
        "steam": { elem1: null, elem2: "poison_gas" },}
};
if (!elements.white_phosphurus.reactions) elements.white_phosphurus.reactions = {};
elements.white_phosphurus.reactions.head = { elem1: "rotten_meat", elem2: null }
if (!elements.white_phosphurus.reactions) elements.white_phosphurus.reactions = {};
elements.white_phosphurus.reactions.body = { elem1: "rotten_meat", elem2: null }
elements.brine = {
    color: ["#FFFFFF", "#F5F5F5","#F0E68C", "#C2B280"],
    behavior: behaviors.POWDER,
    temp: 20,
    category: "powders",
    state: "solid",
    reactions: {
        "algae": { elem1: null, elem2: "iodine" },
        "kelp": { elem1: null, elem2: "iodine" },
}}
elements.iodine = {
    color: ["#8A2BE2", "#800080"],
    behavior: behaviors.POWDER,
    temp: 20,
    category: "powders",
    state: "solid",
    reactions: {
        "red_phosphurus": { elem1: null, elem2: "iodine_phosphate" },
}}
elements.iodine_phosphate = {
    color: ["8B0000", "#8A2BE2","#B22222", "#800080"],
    behavior: behaviors.POWDER,
    temp: 20,
    category: "powders",
    state: "solid",
    reactions: {
        "ephedrine": { elem1: null, elem2: "liquid_white_meth" },
        "ephedrine_iodite": { elem1: null, elem2: "liquid_white_meth" },
        "ephedrine_phosphate": { elem1: null, elem2: "liquid_white_meth" }
}}
elements.ephedrine_seed = {
    color: ["#58021d", "#7f2830","#821232", "#800080"],
    behavior: [
        "XX|M2%0.25|XX",
        "XX|L2:plant,ephedrine_plant AND C2:ephedrine_plant%30|XX",
        "XX|M1|XX",
    ],
    temp: 20,
    category: "life",
    state: "solid",
    reactions: {
}}
elements.ephedrine_plant = {
    color: ["#58021d", "#7f2830","#821232", "#800080"],
    behavior: behaviors.POWDER,
    temp: 20,
    tempHigh: 50,
    stateHigh: "ephedrine",
    breakInto: ["ephedrine","ephedrine_seed"],
    category: "life",
    state: "solid",
    reactions: {
}}
elements.ephedrine = {
    color: ["#FFFAF0", "#F5F5F5","#F8F8FF", "#FFFFFF"],
    behavior: behaviors.POWDER,
    temp: 20,
    category: "powders",
    state: "solid",
    reactions: {
        "red_phosphurus": { elem1: null, elem2: "ephedrine_phosphate" },
        "iodine": { elem1: null, elem2: "ephedrine_iodite" }
}}
elements.ephedrine_iodite = {
    color: ["#FFFAF0", "#F5F5F5","#8A2BE2", "#800080"],
    behavior: behaviors.POWDER,
    temp: 20,
    category: "powders",
    state: "solid",
    reactions: {
        "red_phosphurus": { elem1: null, elem2: "liquid_white_meth" },
        "ephedrine_phosphate": { elem1: null, elem2: "liquid_white_meth" }
}}
elements.ephedrine_phosphate = {
    color: ["#FFFAF0", "#F5F5F5","#B22222", "#800000"],
    behavior: behaviors.POWDER,
    temp: 20,
    category: "powders",
    state: "solid",
    reactions: {
        "iodine": { elem1: null, elem2: "liquid_white_meth" }
}}
elements.liquid_white_meth = {
    color: ["#E8F8F5", "#FAF0E6","#F5F5F5", "#FFFFFF"],
    behavior: behaviors.LIQUID,
    temp: 20,
    category: "liquids",
    state: "liquid",
    reactions: {
        "acid": { elem1: null, elem2: "white_meth" }
}}
elements.white_meth = {
    color: ["#E0FFFF", "#F5F5F5","#FAFAFF", "#D3D3D3"],
    behavior: behaviors.POWDER,
    temp: 20,
    category: "powders",
    state: "solid",
	isFood: true,
}
if (!elements.ammonia.reactions) elements.ammonia.reactions = {};
elements.ammonia.reactions.Methanol = { elem1: "Methylamine", elem2: null }
elements.Methylamine = {
    color: ["#F0FFFF", "#FAF0E6","#FAFAFF", "#D3D3D3"],
    behavior: behaviors.LIQUID,
    temp: 20,
    category: "liquids",
    state: "solid",
}
elements.acid.ignore.push("white_meth")
elements.acid.ignore.push("p2p")
elements.Methanol = {
    color: ["#F0FFFF", "#FAF0E6","#FAFAFF", "#D3D3D3"],
    behavior: behaviors.LIQUID,
    temp: 20,
    category: "liquids",
    state: "liquid",
}
if (!elements.cyanide.reactions) elements.cyanide.reactions = {};
elements.cyanide.reactions.acid = { elem1: "p2p", elem2: null }
elements.p2p = {
    color: ["#F0FF9F", "#FAF0E6","#FAFAFF", "#D3D3D3"],
    behavior: behaviors.LIQUID,
    temp: 20,
    category: "liquids",
    state: "liquid",
    reactions: {
        "Methylamine": { elem1: null, elem2: "liquid_blue_meth" }
}}
elements.liquid_blue_meth = {
    color: ["#4682B4", "#5F9EA0","#00BFFF", "#1E90FF"],
    behavior: behaviors.LIQUID,
    temp: 20,
    category: "liquids",
    state: "liquid",
    reactions: {
        "amalgam": { elem1: null, elem2: "crystal_blue_meth" }
    }}
elements.crystal_blue_meth = {
     color: ["#00CED1", "#4682B4","#87CEEB", "#5F9EA0"],
    behavior: behaviors.WALL,
    temp: 20,
     category: "solids",
    state: "solid",
    breakInto: ["blue_meth",null],
     }
elements.blue_meth = {
        color: ["#00BFFF", "#1E90FF","#87CEEB", "#5F9EA0"],
        behavior: behaviors.POWDER,
        temp: 20,
        category: "powders",
        state: "solid",
        isFood: true,
         }