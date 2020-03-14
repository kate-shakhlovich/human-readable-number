module.exports = function toReadable (number) {
  return [getHundreds(number), getDozens(number), getSingle(number)].filter(x => x).join(" ");
}

const getHundreds = (number) => {
    // TODO
}

const getDozens = (number) => {
    // TODO
}

const getSingle = (number) => {
    // TODO
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
    1: 'ten',
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
    1: "eleven",
    2: "twelve",
    3: "thirteen",
    4: "fourteen",
    5: "fifteen",
    6: "sixteen",
    7: "seventeen",
    8: "eighteen",
    9: "nineteen"
}