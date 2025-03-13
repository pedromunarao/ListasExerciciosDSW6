function add(a, b) {
    return a + b;
}

multiply = (a, b) => a * b;

function executeFunction(funcao, a, b) {
    return funcao(a, b);
}

console.log(executeFunction(add, 2, 3));
console.log(executeFunction(multiply, 2, 3));
