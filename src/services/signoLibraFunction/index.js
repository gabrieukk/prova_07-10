
export default function Signo (dia,mes){
    
    let resp = false
   
    if (dia <= 0 || mes == Number) {
    throw new Error('Dia ou mês inválido');
   }

    if (mes == "setembro" && dia >= 23 && dia <= 30 || 
        mes == "outubro" && dia >= 1 && dia <=22){
          
          resp = true
    }
       return(resp)
  }