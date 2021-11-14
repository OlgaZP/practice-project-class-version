const assert = require('assert');
const { expect } = require('chai');

const sum = (a, b) => Number(a) + Number(b);

describe('testing sum function', () => {
  it('2:number + 3:number should return 5:number', () => {
    const expected = 5;
    const result = sum(2, 3);
    assert.equal(result, expected);
  });

  it('2:string + 3:string should return 5:number', () => {
    const expected = 5;
    const result = sum('2', '3');
    assert.equal(result, expected);
  });

  it('NaN + any:number should return NaN', () => {
    expect(sum(NaN, 3)).to.be.NaN;
    expect(sum(NaN, null)).to.be.NaN;
    expect(sum(NaN, undefined)).to.be.NaN;
  });
});
