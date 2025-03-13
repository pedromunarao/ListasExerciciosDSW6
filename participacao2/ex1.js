// Escreva uma classe Vec que represente um vetor no espaço bidimensional (Use qualquer uma
//     das notações apresentadas em aula). Ela recebe parâmetros x e y (números), que deve salvar como
//     propriedades com os mesmos nomes.

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }
    minus(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
    
const v1 = new Vec(3, 4);
const v2 = new Vec(1, 2);

console.log("Soma:", v1.plus(v2)); 
console.log("Subtração:", v1.minus(v2)); 
console.log("Comprimento de v1:", v1.length);

