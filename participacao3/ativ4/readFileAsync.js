import { readFile } from 'fs/promises';

async function readFileAsync(filePath) {
    let init = Date.now();
    try {
        const data = await readFile(filePath, 'utf-8');
        let end = Date.now();
        console.log(`Tempo de leitura (async): ${end - init}ms`);
        console.log(data.split('\n'));
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
    }
}

readFileAsync('arquivo.txt');
