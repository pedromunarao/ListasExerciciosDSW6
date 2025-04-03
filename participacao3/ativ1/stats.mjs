const soma = (x, y) => x + y;
const quadrado = x => x * x;

export function media(dados) {
    return dados.reduce(soma) / dados.length;
}

export function desvioPadrão(dados) {
    let médiaCalculada = media(dados);
    return Math.sqrt(
        dados.map(x => x - médiaCalculada).map(quadrado).reduce(soma) / (dados.length - 1)
    );
};