class BubbleSort {
  sort(a) {
    var swapped;
    do {
      swapped = false;
      for(var i = 0; i < a.length; i++) {
        if(a[i] > a[i + 1]) {
          [a[i], a[i + 1]] = [a[i + 1], a[i]];
          swapped = true;
        }
      }
    } while(swapped);
    return a;
  }

}

module.exports = BubbleSort;
