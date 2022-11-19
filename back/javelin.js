function lancerde() {
    return Math.floor(Math.random() * 6 + 1); 
  }

tableau = [[lancerde(), false], [lancerde(), false], [lancerde(), false], [lancerde(), false], [lancerde(), false], [lancerde(), false]]

function gelerunde(tableau, index){
    tableau[index-1][1] = true;
    return tableau
}

function relancer(tableau) {
    for(var i = 0; i < nb_des; i++){
        if(tableau[i][1] = false){
            tableau[i][0] = lancer();
        }
    }
    return tableau
}

function somme(tableau){
    S = 0;
    for(var i = 0; i < L.length; i++){
        S = S + L[i][0];
    }
    return S
}





