// https://stackabuse.com/merge-sort-in-javascript/

const mergeSort = (arr) => {
  const merge = (left, right) => {
    const array = [];

    // loop breaks out when the array ends
    while (left.length && right.length) {
      // picks up the smallest element
      if (left[0] < right[0]) {
        // shift pops out the first element in an array
        array.push(left.shift());
      } else {
        array.push(right.shift());
      }
    }
    // concatenates leftover elements to prevent odd arrays
    // leaving elements behind
    return [...array, ...left, ...right];
  };

  const half = arr.length / 2;

  // returns the sorting when only one element is present
  if (arr.length < 2) {
    return arr;
  }

  // splits the array in roughly half
  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
};

export default mergeSort;
