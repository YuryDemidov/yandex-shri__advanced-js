import MySet from '../src/mySet/MySet';

describe(`MySet`, () => {
  it(`Should be empty if was initialized without parameters`, () => {
    const set = new MySet();
    // @ts-ignore
    const arr = [...set];
    const expected = [];
    expect(arr).toStrictEqual(expected);
  });

  it(`Should has only unique items if was initialized with parameter`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);
    // @ts-ignore
    const arr = [...set];
    const expected = [4, 8, 15, 16, 23, 42];
    expect(arr).toStrictEqual(expected);
  });

  it(`Should has correct size property`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

    expect(set.size).toStrictEqual(6);
  });

  it(`Should be iterable in for...of loop`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

    const arr = [];
    // @ts-ignore
    for (const item of set) {
      arr.push(item);
    }

    const expected = [4, 8, 15, 16, 23, 42];
    expect(arr).toStrictEqual(expected);
  });

  it(`Should has the keys method returning an items in an array`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

    const arr = [];
    // @ts-ignore
    for (const item of set.keys()) {
      arr.push(item);
    }

    const expected = [4, 8, 15, 16, 23, 42];
    expect(arr).toStrictEqual(expected);
  });

  it(`Should has the values method returning an items in an array`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

    const arr = [];
    // @ts-ignore
    for (const item of set.values()) {
      arr.push(item);
    }

    const expected = [4, 8, 15, 16, 23, 42];
    expect(arr).toStrictEqual(expected);
  });

  it(`Should has the entries method returning an items in a tuples with two repeating items`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

    const arr = [];
    // @ts-ignore
    for (const item of set.entries()) {
      arr.push(item);
    }

    const expected = [
      [4, 4],
      [8, 8],
      [15, 15],
      [16, 16],
      [23, 23],
      [42, 42],
    ];
    expect(arr).toStrictEqual(expected);
  });

  it(`Should remove all items with the clear method`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

    set.clear();

    expect(set.size).toEqual(0);
  });

  it(`Should return the item presence flag with the has method`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

    expect(set.has(4)).toBeTruthy();
    expect(set.has(1)).toBeFalsy();
  });

  it(`Should append an item with the add method`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);
    let size = set.size;

    set.add(1);

    expect(set.has(1)).toBeTruthy();
    expect(set.size).toEqual(size + 1);
  });

  it(`Should return self instance after calling the add method`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

    const returned = set.add(1);

    expect(returned).toBeInstanceOf(MySet);
  });

  it(`Should remove the item with the delete method`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);
    let prevSize = set.size;

    set.delete(4);

    expect(set.has(4)).toBeFalsy();
    expect(set.size).toEqual(prevSize - 1);

    prevSize = set.size;

    expect(set.size).toEqual(prevSize);
  });

  it(`Should return deleting success flag after calling the delete method`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

    const returnedDeletion = set.delete(4);

    expect(returnedDeletion).toBeTruthy();

    const returnedNonDeletion = set.delete(4);

    expect(returnedNonDeletion).toBeFalsy();
  });

  it(`Should be properly converted to string`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

    expect(String(set)).toEqual(`[object MySet]`);
    expect(Object.prototype.toString.call(set)).toEqual(`[object MySet]`);
  });

  it(`Should the forEach method work properly`, () => {
    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

    const arr = [];
    let i = 0;
    set.forEach((item, index, set) => {
      expect(index).toEqual(i++);
      expect(set).toStrictEqual(set);
      arr.push(item);
    }, null);

    const expected = [4, 8, 15, 16, 23, 42];
    expect(arr).toStrictEqual(expected);
  });
});
