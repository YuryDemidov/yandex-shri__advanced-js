import selfInProxy from '../src/selfInProxy';
import { describe, expect, it } from '@jest/globals';

describe(`Function selfInProxy`, () => {
  it(`Should return the proxy with the same structure as the original object`, () => {
    const obj = {
      prop1: 1,
      prop2: `2`,
      prop3: null,
      prop4: undefined,
      [Symbol(`symbolProp`)]: false,
    };
    const proxy = selfInProxy(obj);
    expect(proxy).toEqual(obj);
  });

  it(`Operator "in" should return true for the enumerable properties of the proxied object properties`, () => {
    const obj = {
      prop1: 1,
    };
    const proxy = selfInProxy(obj);
    expect(`prop1` in proxy).toBeTruthy();
  });

  it(`Operator "in" should return true for the non-enumerable properties of the proxied object properties`, () => {
    const obj = Object.create(null, { prop1: { value: 1 } });
    const proxy = selfInProxy(obj);
    expect(`prop1` in proxy).toBeTruthy();
  });

  it(`Operator "in" should return true for the symbol properties of the proxied object properties`, () => {
    const symbol = Symbol(`symbolProp`);
    const obj = { [symbol]: 123 };
    const proxy = selfInProxy(obj);
    expect(symbol in proxy).toBeTruthy();
  });

  it(`Operator "in" should ignore any properties of the proxied object prototype properties`, () => {
    const symbol = Symbol(`symbolProp`);
    const objProto = Object.create(null, {
      prop1: { value: 1, enumerable: true },
      prop2: { value: 2 },
      [symbol]: { value: 'symbol' },
    });
    const obj = Object.create(objProto);
    const proxy = selfInProxy(obj);
    expect(`prop1` in proxy).toBeFalsy();
    expect(`prop2` in proxy).toBeFalsy();
    expect(symbol in proxy).toBeFalsy();
  });
});
