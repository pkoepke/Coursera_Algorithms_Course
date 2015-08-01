var insertionSortInPlace = require('./insertion_sort_in_place.js');
var insertionSortNewArray = require('./insertion_sort_new_array.js');
var mergeSort = require('./merge_sort.js');
var createArrayToSort = require('./create_array_to_sort.js');
var checkIfArrayIsSorted = require('./check_if_array_is_sorted.js');

var arraySize = 10000;
var arrayToSort = createArrayToSort.createArrayToSort(arraySize);
// arrayToSort = mergeSort.sortArray(arrayToSort); // for testing only.
// arrayToSort.reverse(); // for testing only.

console.log("Sorting array size: " + arraySize);

// console.log("Sorting array  " + arrayToSort);
var startTimeMergeSort = new Date().getTime();
var sortedArrayMergeSort = mergeSort.sortArray(arrayToSort);
console.log("Merge sort run time: " + (new Date().getTime() - startTimeMergeSort) + ("ms"));
console.log("Did merge sort sort the array correctly? " + checkIfArrayIsSorted.checkIfArrayIsSorted(arrayToSort, sortedArrayMergeSort));

// console.log("Sorting array  " + arrayToSort);
var startTimeInsertionSortNewArray = new Date().getTime();
var sortedArrayInsertionSortNewArray = insertionSortNewArray.sortArray(arrayToSort);
console.log("Insertion sort new array run time: " + (new Date().getTime() - startTimeInsertionSortNewArray) + ("ms"));
console.log("Did insertion sort new array sort the array correctly? " + checkIfArrayIsSorted.checkIfArrayIsSorted(arrayToSort, sortedArrayInsertionSortNewArray));

// console.log("Sorting array  " + arrayToSort);
var startTimeInsertionSortInPlace = new Date().getTime();
var sortedArrayInsertionSortInPlace = insertionSortInPlace.sortArray(arrayToSort);
console.log("Insertion sort in place run time: " + (new Date().getTime() - startTimeInsertionSortInPlace) + ("ms"));
console.log("Did insertion sort in place sort the array correctly? " + checkIfArrayIsSorted.checkIfArrayIsSorted(arrayToSort, sortedArrayInsertionSortInPlace));
