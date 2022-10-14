
export default function ingresso(inteira, meia, diaSemana, nacional){

    let resul = 0;
    if(nacional==true){
        resul = (inteira+meia)*5;
    }

    else if(diaSemana=='quarta-feira'){
        resul=(inteira+meia)*14.25;
    }
    
    else {
        resul= (inteira*28.50)+(meia *14.25);
    }
       
    

    return resul;
}