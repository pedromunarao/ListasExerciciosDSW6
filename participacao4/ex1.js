function dobraValor(numero){
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            if(typeof numero !== 'number'){
                reject("Errado!");
            }else{
                resolved(numero*2);
            }
        }, 5000);
    } )
}

dobraValor(2).then((resposta) => {
    console.log(resposta)
}).catch(error => {
    console.log(error);
})