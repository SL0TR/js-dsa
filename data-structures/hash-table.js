class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const RANDO_PRIME_NUM = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * RANDO_PRIME_NUM + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);

    const item = [key, value];

    if (this.keyMap[index]) {
      this.keyMap[index].push([key, value]);
    } else {
      this.keyMap[index] = [item];
    }

    return item;
  }

  get(key) {
    const index = this._hash(key);
    const item = this.keyMap[index];

    if (!item) {
      return null;
    }

    let correctItem = item[0][1];

    if (item && item.length > 1) {
      correctItem = item.find((el) => el[0] === key)[1];
    }

    return correctItem;
  }

  get keys() {
    return [
      ...new Set(
        this.keyMap
          .filter((el) => el)
          ?.flat()
          ?.map((el) => el[0])
      ),
    ];
  }

  get values() {
    return [
      ...new Set(
        this.keyMap
          .filter((el) => el)
          ?.flat()
          ?.map((el) => el[1])
      ),
    ];
  }
}

const hashTable = new HashTable();

hashTable.set("blue", "#0008b");
hashTable.set("blue", "#0008b");
hashTable.set("black", "#000");
hashTable.set("black", "#000");
hashTable.set("lightblack", "#000ff");

console.log(hashTable.get("blue")); // #0008b
console.log(hashTable.get("lightblack")); // #000ff

console.log(hashTable.keys);
console.log(hashTable.values);
