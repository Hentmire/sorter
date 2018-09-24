
var arr = new Array(); 
var func = 0;
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
    var compare;
    if (func != 0) {
      compare = func;
    } else {
      compare = function compareNumbers(a, b) {
      return a - b;
      }
    }
    function compareNumbers(a, b) {
      return a - b;
      }
    indices.sort(compareNumbers);
    var massive = [];
    for (var i = 0; i < indices.length; i++) {
      massive[i] = this.arr[indices[i]];
    }
    massive.sort(compare);
    for (var j = 0; j < indices.length; j++) {
      this.arr[indices[j]] = massive[j];
    }
  }

  setComparator(compareFunction) {
   return func = compareFunction;
  }
}

module.exports = Sorter;
