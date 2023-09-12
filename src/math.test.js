const { sum, sub, divison, exponent, main, times  } = require('./math');


test("1 + 2 should be 3", () => {
    const total = sum(1,2);
    expect(total).toEqual(3);
});

test("5 - 2 should be 3", () => {
    const total = sub(5,2);
    expect(total).toEqual(3);
});

test("2 * 5 should be 10", () => {
    const total = times(5,2);
    expect(total).toEqual(10);
});

test("10 / 2 should be 5", () => {
    const total = divison(10,2);
    expect(total).toEqual(5);
});

test("2^4 should be 16", () => {
    const total = exponent(2,4);
    expect(total).toEqual(16);
});

