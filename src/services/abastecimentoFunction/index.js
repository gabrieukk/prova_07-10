export default function Abastecimento(capacidade, consumo, distancia){
    
    if(capacidade <=0 || consumo <= 0 || distancia <=0){
        return 0
    }

    let resposta = distancia / consumo / capacidade;

    return (Math.ceil(resposta));
}