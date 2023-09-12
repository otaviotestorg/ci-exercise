const { sum } = require('./math');


test("1 + 2 should be 3", () => {

    const total = sum(1,2);
    expect(total).toEqual(3);
});