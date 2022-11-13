const { randomInt } = require("crypto");

function test(){
    console.log("ca marche")
}

function premier_lancer(){
    L = []
    for(var i = 0; i < 6; i++){
        L.append(randomInt(6))
    }
    return L
}

function lancer(nb_dices){      //fonction renvoyant la liste des récultats des dés lancés
    L = []
    for (var i=0; i < nb_dices; i++){
        L.append(randomInt(6))
    }
    return L 
}


module.exports = {
    tour_1 : premier_lancer,
}