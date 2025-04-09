 // Função delay aciona o .then após 1s 
 const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

 async function por1Segundo() {
    for(i=1; i<=3; i++){
        await delay();
        console.log(`${i}s`)
    }
 }

 por1Segundo();