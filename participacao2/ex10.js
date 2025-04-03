// . Suponha que o método toUpperCase não existisse em uma string. Implemente uma função
// toUpperCase que retorna o mesmo resultado da original.

function toUpperCase(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);
        if (code >= 97 && code <= 122) {
            code -= 32;
        }
        result += String.fromCharCode(code);
    }
    return result;
}

console.log(toUpperCase("abc"));
