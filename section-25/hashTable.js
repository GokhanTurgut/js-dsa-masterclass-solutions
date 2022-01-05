class HashTable {
  constructor(size = 97) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 41;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const value = key.charCodeAt(i) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hashIndex = this._hash(key);
    if (this.keyMap[hashIndex]) {
      this.keyMap[hashIndex].push([key, value]);
    } else {
      this.keyMap[hashIndex] = [[key, value]];
    }
  }

  get(key) {
    const hashIndex = this._hash(key);
    if (this.keyMap[hashIndex]) {
      for (let keyValue of this.keyMap[hashIndex]) {
        if (keyValue[0] === key) return keyValue[1];
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    this.keyMap.forEach((keyValueArr) => {
      keyValueArr.forEach((keyValue) => {
        keys.push(keyValue[0]);
      });
    });
    return keys;
  }

  values() {
    const values = new Set();
    this.keyMap.forEach((keyValueArr) => {
      keyValueArr.forEach((keyValue) => {
        values.add(keyValue[1]);
      });
    });
    return [...values];
  }
}

const ages = new HashTable(11);

ages.set("john", 32);
ages.set("jack", 21);
ages.set("oscar", 48);
ages.set("oliver", 13);
ages.set("diane", 18);
ages.set("alice", 32);
console.log(ages.get("alice"));
console.log(ages.keys());
console.log(ages.values());
