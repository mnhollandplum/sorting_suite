var assert = require('chai').assert;
var bubbleSort = require('../bubblesort');


describe('Sort', function() {
  it('exists', function() {
    var sort = new bubbleSort();
    assert.isObject(sort);
  });
  it('can sort', function() {
    var sort = new bubbleSort();
    assert.deepEqual(sort.sort([4, 2, 1, 5, 3]), [1, 2, 3, 4, 5] );
  });
  it('can sort larger array', function() {
    var sort = new bubbleSort();
    assert.deepEqual(sort.sort([5, 1, 4, 10, 6, 8, 7, 2, 3, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
