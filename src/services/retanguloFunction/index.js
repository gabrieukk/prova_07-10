

export default function retangulo(base, altura){
    const ret = [];

    for ( let linha = 1; linha <= altura; linha++){
        const col = [];
        for ( let coluna = 1; coluna <= base; coluna ++){
            col.push('*');
        }
        ret.push(col);
    }
    console.log(ret);
    return ret;
}