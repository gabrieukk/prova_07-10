
export default function simples(capital, montante, taxa, entrada, tempo)
{
    function JurosComposto( capital, taxa, tempo){

    

        let montante= capital*(1+taxa) ;
        let parcela = (montante**tempo);
        let juros = parcela - capital ;
        return juros;
    }
}