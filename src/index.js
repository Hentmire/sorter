var arr = new Array(); 
class Sorter {
  
  constructor() {
   this.arr = arr;
   this.arr.length = 0;
  }

  add(element) {
    this.arr.push(element);// your implementation
  }

  at(index) {
    return this.arr[index];// your implementation
  }

  get length() {
    return this.arr.length;// your implementation
  }

  toArray() {
    return this.arr;// your implementation
  }

  sort(indices) {
    if (indices.length == 1) {
      return this.arr;}
    function compareNumbers(a, b) {
      return a - b;
    }
    indices.sort(compareNumbers);
    var massive = [];
    for (var i = 0; i < indices.length; i++) {
      massive[i] = this.arr[indices[i]];
    }
    massive.sort(compareNumbers);
    for (var j = 0; j < indices.length; j++) {
      this.arr[indices[j]] = massive[j];
    }
  }

  setComparator(compareFunction) {
   //return setComparator(compareFunction);
  }

module.exports = Sorter;
