class Sorter {

  constructor() {
  this.array = [];
  }

  add(element)
  {
this.array.push(element);
  }

    toArray()
    {
    return(this.array);

  }



  at(index) {
    return(this.array[index]);
    // your implementation
  }

  get length() {
    return(this.array.length);
    // your implementation
  }



   sort(indices)
  {
  var count = indices[indices.length-1];
  var m = this.array;
for (var i = 0; i < count; i++)
     for (var j = indices[0]; j < count-i; j++)
        if (m[j]> m[j+1]) {
           var max = m[j];
           m[j] = m[j+1];
           m[j+1] = max;
        }
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
