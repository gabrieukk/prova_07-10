

export default function sorveteria(gramas){
     
    let valor =  gramas * 3.50;
    
    if(gramas <= 0) {
        return('Peso inválido')

    }
    if(gramas >= 1000){
      valor = Math.round(gramas * 3.00);
    }

    return(valor / 100);
}