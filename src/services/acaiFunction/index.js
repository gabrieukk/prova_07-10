

export default async function acai(qtdPeq,qtdMed,qtdGra,Desc){

    if(qtdPeq < 0 || qtdMed < 0 || qtdGra < 0 || Desc < 0 ){
      alert('Valor negativo não é permitido')
    }
  

    let resp = (await qtdGra * 17.50 + qtdMed * 15.00 + qtdPeq * 13.50) * (Desc / 100 -1) 

    return(Math.abs(resp));

    
  }