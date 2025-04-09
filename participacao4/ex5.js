function somar(valor1, valor2){
    let valor = valor1 + valor2;
    return new Promise((resolve, reject) => {
        if(valor %2 == 0){
            resolve(valor);
        }else{
            reject(`${valor} é impar`);
        }
    })
}

function callbackSuccess(){
    console.log("Resposta gerada com sucesso")
}

function callbackError(){
    console.log("Error")
}

somar(5, 5).then(callbackSuccess).catch(callbackError);