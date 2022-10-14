export default function verificarFebre(temperatura){
    let msg = "";

    if(temperatura <=0) {
        msg = "Temperatura inválida."
    }

    if(temperatura >= 41){
        msg = "Hipertemia";
    }

    else if(temperatura >= 39.6 && temperatura < 41){
        msg = "Febre alta";
    }

    else if(temperatura >= 37.6 && temperatura < 39.6){
        msg = "Febre";
    }

    else if(temperatura >= 36 && temperatura < 37.6){
        msg = "Febre";
    }

    else if(temperatura < 36){
        msg = "Hipotermia";
    }

    return msg;
}

