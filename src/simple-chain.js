const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position === 0 ||
        position <= 0 || position > this.array.length) {
      this.array = [];
      throw new Error();
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    for (let i = 0; i < this.array.length; i++) {
      result = result + '( ' + this.array[i] + ' )';
    }
    this.array = [];
    return result.split(')(').join(')~~(');
  }
};

// console.log(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain());

module.exports = chainMaker;
