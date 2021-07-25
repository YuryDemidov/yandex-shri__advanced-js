export default class MySet {
  items: any[];

  constructor(arr?: any[]) {
    this.items = arr && arr.length ? this.#filterDuplicates(arr) : [];
  }

  get size(): number {
    return this.items.length;
  }

  get [Symbol.toStringTag]() {
    return `MySet`;
  }

  has(item: any): boolean {
    return this.items.includes(item);
  }

  add(item: any): MySet {
    if (!this.items.includes(item)) {
      this.items.push(item);
    }
    return this;
  }

  delete(item: any): boolean {
    const itemIndex = this.items.indexOf(item);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
      return true;
    }
    return false;
  }

  clear() {
    this.items = [];
  }

  forEach(callback: (item: any, i: number, self: MySet) => void, context: Object) {
    for (let i = 0; i < this.size; i++) {
      callback.call(context, this.items[i], i, this);
    }
  }

  keys(): IterableIterator<any> {
    return this[Symbol.iterator]();
  }

  values(): IterableIterator<any> {
    return this[Symbol.iterator]();
  }

  *entries(): IterableIterator<[any, any]> {
    for (let i = 0; i < this.size; i++) {
      yield [this.items[i], this.items[i]];
    }
  }

  #filterDuplicates(arr: any[]): any[] {
    const result: any[] = [];

    arr.forEach((item) => {
      if (!result.includes(item)) {
        result.push(item);
      }
    });

    return result;
  }

  *[Symbol.iterator](): IterableIterator<any> {
    for (let i = 0; i < this.size; i++) {
      yield this.items[i];
    }
  }
}
