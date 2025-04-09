function firstPromise(valor){
    return new Promise((resolved, reject) => {
        if(valor > 2 && typeof valor != 'number'){
            reject("numero invalido");
        }else{
            resolved(valor);
        }
    })
}

function secondPromise(valor){
    return new Promise((resolved, reject) => {
        let resp = valor + 1;
        if(resp % 2 == 0){
            resolved(resp);
        }else{
            reject("Errado!");
        }
    })
}

async function name() {
    try {
        const valor = await firstPromise(0);
        const valor2 = await secondPromise(valor); 

        console.log(valor2);
    } catch (error) {
        console.log(error);
    }
}

name();