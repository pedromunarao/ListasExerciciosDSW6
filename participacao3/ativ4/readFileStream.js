import { createReadStream } from 'fs';
import { createInterface } from 'readline';

function readFileStream(filePath) {
    let init = Date.now();
    const stream = createReadStream(filePath, 'utf-8');
    const rl = createInterface({ input: stream });

    rl.on('line', (line) => {
        console.log(line);
    });

    rl.on('close', () => {
        let end = Date.now();
        console.log(`Tempo de leitura (stream): ${end - init}ms`);
    });
}

readFileStream('arquivo.txt');
