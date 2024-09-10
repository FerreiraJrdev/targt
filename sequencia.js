function getLast(sequence) {
    return sequence[sequence.length - 1];
}

function getNextNumber(sequence, logic) {
    const last = getLast(sequence);
    switch (logic) {
        case 'odd':
            return last + 2;
        case 'double':
            return last * 2;
        case 'square':
            return sequence.length * sequence.length;
        case 'evenSquare':
            const nextEven = (sequence.length + 1) * 2;
            return nextEven * nextEven;
        case 'fibonacci':
            return sequence[sequence.length - 1] + sequence[sequence.length - 2];
        case 'custom':
            return last < 10 ? 10 : last + 1;
        default:
            throw new Error('Lógica desconhecida');
    }
}

let sequenceA = [1, 3, 5, 7];
console.log("a) Próximo número:", getNextNumber(sequenceA, 'odd'));

let sequenceB = [2, 4, 8, 16, 32, 64];
console.log("b) Próximo número:", getNextNumber(sequenceB, 'double'));

let sequenceC = [0, 1, 4, 9, 16, 25, 36];
console.log("c) Próximo número:", getNextNumber(sequenceC, 'square'));

let sequenceD = [4, 16, 36, 64];
console.log("d) Próximo número:", getNextNumber(sequenceD, 'evenSquare'));

let sequenceE = [1, 1, 2, 3, 5, 8];
console.log("e) Próximo número:", getNextNumber(sequenceE, 'fibonacci'));

let sequenceF = [2, 10, 12, 16, 17, 18, 19];
console.log("f) Próximo número:", getNextNumber(sequenceF, 'custom'));
