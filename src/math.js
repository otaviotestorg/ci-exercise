function sum(a,b) {
    return a + b
};

function sub(a,b) {
    return a - b;
};

function times(a,b){
    return a * b;
};

function divison(a, b){
    return a / b;
};

function exponent(a, b) {
    let total = 0;

    for(let initial = 0; initial < b; b++){
        total = a * total
    }
    return total;
};


function main() {
    console.log(sum(1,2))
    console.log(sub(1,2))
    console.log(times(1,2))
    console.log(divison(1,2))
    console.log(exponent(1,2))
    
    return;
}

module.exports = { sum, sub, times, divison, exponent, main }