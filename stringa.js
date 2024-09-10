function contarA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}

let string = prompt("Informe uma string: ");
let contagem = contarA(string);

console.log(`A letra 'a' aparece ${contagem} vezes na string.`);
