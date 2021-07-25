import allKeysAndSymbols from '../src/allKeysAndSymbols';
import { describe, expect, it } from '@jest/globals';

describe(`Function allKeysAndSymbols`, () => {
  it(`Should return an array`, () => {
    const result = allKeysAndSymbols({});
    expect(result).toBeInstanceOf(Array);
  });

  it(`The resulting array should contain enumerable properties`, () => {
    const result = allKeysAndSymbols({ prop1: 1 });
    expect(result).toContain(`prop1`);
  });

  it(`The resulting array should contain non-enumerable properties`, () => {
    const obj = Object.create(Object.prototype, { prop1: { value: 1 } });
    const result = allKeysAndSymbols(obj);
    expect(result).toContain(`prop1`);
  });

  it(`The resulting array should contain symbol properties`, () => {
    const symbol = Symbol(`symbolProp`);
    const obj = { [symbol]: 123 };
    const result = allKeysAndSymbols(obj);
    expect(result).toContain(symbol);
  });

  it(`Should lookup through the all prototypes chain`, () => {
    const expected = [`prop1`, `prop2`, `prop3`];
    const obj1 = { [expected[0]]: 1 };
    const obj2 = Object.create(obj1, { [expected[1]]: { value: 2 } });
    const obj3 = Object.create(obj2, { [expected[2]]: { value: 3 } });
    const result = allKeysAndSymbols(obj3);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it(`Should contain Object.prototype properties`, () => {
    const expected = Object.getOwnPropertyNames(Object.prototype);
    const result = allKeysAndSymbols({});
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it(`Should not contain any properties for an empty object without prototype`, () => {
    const obj = Object.create(null);
    const result = allKeysAndSymbols(obj);
    expect(result).toEqual([]);
  });
});
