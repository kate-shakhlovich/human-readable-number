module.exports = function toReadable(number) {
    return [getHundreds(number), getDozens(number), getSingle(number)].filter(x => x).join(" ");
}

const getHundreds = (number) => {
    if (number < 100) return '';
    const hundreds = number / 100;
    return oneDigit[Math.floor(hundreds)] + ' hundred';
}

const getDozens = (number) => {
    if (number < 10) return '';
    const dozens = number % 100;
    if (dozens > 19) {
        const dozenCount = Math.floor(dozens / 10);
        return twoDigit[dozenCount];
    }
    return teens[dozens];
}

const getSingle = (number) => {
    if (number === 0) return oneDigit[0];
    const single = number % 10;
    const dozens = number % 100;
    return single === 0 || (dozens > 10 && dozens < 20) ? '' : oneDigit[single];
}

const oneDigit = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
};

const twoDigit = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
};

const teens = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
};
