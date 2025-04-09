function retornaTipoValor(valor){
    return new Promise((resolved, reject) => {
        if(typeof valor !== 'number'){
            reject("Não é um número");
        }else if(valor % 2 !== 0){
            setTimeout(() => {
                resolved(`${valor} é impar`);
            }, 1000)
        }else{
            setTimeout(() => {
                reject(`${valor} é par`);
            }, 2000)
        }
    })
}

retornaTipoValor(3).then((resposta) => {
    console.log(resposta)
}).catch(error => {
    console.log(error)
})