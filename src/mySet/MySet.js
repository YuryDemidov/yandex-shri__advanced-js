var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MySet_instances, _MySet_filterDuplicates;
export default class MySet {
    constructor(arr) {
        _MySet_instances.add(this);
        this.items = arr && arr.length ? __classPrivateFieldGet(this, _MySet_instances, "m", _MySet_filterDuplicates).call(this, arr) : [];
    }
    get size() {
        return this.items.length;
    }
    get [(_MySet_instances = new WeakSet(), Symbol.toStringTag)]() {
        return `MySet`;
    }
    has(item) {
        return this.items.includes(item);
    }
    add(item) {
        if (!this.items.includes(item)) {
            this.items.push(item);
        }
        return this;
    }
    delete(item) {
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
    forEach(callback, context) {
        for (let i = 0; i < this.size; i++) {
            callback.call(context, this.items[i], i, this);
        }
    }
    keys() {
        return this[Symbol.iterator]();
    }
    values() {
        return this[Symbol.iterator]();
    }
    *entries() {
        for (let i = 0; i < this.size; i++) {
            yield [this.items[i], this.items[i]];
        }
    }
    *[(_MySet_filterDuplicates = function _MySet_filterDuplicates(arr) {
        const result = [];
        arr.forEach((item) => {
            if (!result.includes(item)) {
                result.push(item);
            }
        });
        return result;
    }, Symbol.iterator)]() {
        for (let i = 0; i < this.size; i++) {
            yield this.items[i];
        }
    }
}
