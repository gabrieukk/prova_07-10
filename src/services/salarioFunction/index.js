

export default function SalarioLiquido(salario,bonus,desc) {
    if(salario<=0|| bonus< 0 || desc <0){
        return 0
    }    

    const resp= (salario-desc)+(bonus/100)*salario;
    return resp
}