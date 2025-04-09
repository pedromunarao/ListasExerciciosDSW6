function doAction(){
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved("Ola Mundo");
        }, 2000);
    })
}

doAction().then((resposta) => {
    console.log(resposta);
})