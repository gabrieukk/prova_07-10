const readLine = require('prompt-sync')();

function sortearNumero(){
    return(parseInt(Math.random() * 1000));
}

//function Ganhou(sorteado, numUsuario, tentativa){

   // let msg = '';
   // sorteado = sortearNumero();

  //  for (tentativa = 1; tentativa < 10 || msg === 'Acertou'; tentativa++) {

      //  console.log('Insira um número:');
      //  numUsuario = Number(readLine());

      //  if(numUsuario === sorteado){
        //    msg = 'Acertou'
       // }
      //  else if(numUsuario < sorteado){
      //      msg = 'Menor'
      //  }
     //   else if(numUsuario > sorteado){
       //     msg = 'Maior'
      //  }
      //  else if(tentativa === 10){
      //      msg = 'Perdeu'
      //  }   
      //  return msg;
   // }
//}

function Ganhou(sorteado, numUsuario, tentativa){

    let msg = '';
    sorteado = sortearNumero();

    while( tentativa<=10 && msg=='menor'||msg=='maior'){
        console.log('Insira um numero')
        let r = readLine(numUsuario);

        if(numUsuario === sorteado){
            msg = 'Acertou'
        }
        else if(numUsuario < sorteado){
            msg = 'Menor'
        }
        else if(numUsuario > sorteado){
            msg = 'Maior'
        }
        else if(tentativa === 10){
            msg = 'Perdeu'
        }   
        return msg;

    }
}

console.log(Ganhou())
   
//function main(){
  //  try {
        
       // console.log('digite um numero de 1 a 1000');
       // let resp1 =readLine();
      //  let z = Ganhou(sorteado, resp1, tentativa);
    //    console.log(z);



    //} catch (err) {
     //   console.log(err.message)
    //}
//}    

console.log(Ganhou());
  
