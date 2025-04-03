function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { valor: array[i], restante: list };
    }
    return list;
}

function listToArray(list) {
    let array = [];
    while (list !== null) {
        array.push(list.valor);
        list = list.restante;
    }
    return array;
}

function prepend(element, list) {
    return { valor: element, restante: list };
}

function nth(list, n) {
    if (!list) return undefined;
    return n === 0 ? list.valor : nth(list.restante, n - 1);
}

let lista = arrayToList([1, 2, 3]);
console.log(lista);
console.log(listToArray(lista));
console.log(prepend(0, lista));
console.log(nth(lista, 1));
