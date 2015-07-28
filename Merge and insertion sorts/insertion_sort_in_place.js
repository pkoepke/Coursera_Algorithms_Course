var createArrayToSort = require('./create_array_to_sort.js');
var checkIfArrayIsSorted = require('./check_if_array_is_sorted.js');

exports.sortArray = function(arrayToSort) {
    return sortArrayInPlace(arrayToSort);
}

function sortArrayInPlace(arrayToSort) {
    for(var i = 1; i < arrayToSort.length; i++) {
        for (var j = 0; j < arrayToSort.length; j++) {
            if (arrayToSort[i] <= arrayToSort[j]) { 
                arrayToSort.splice(j, 0, arrayToSort.splice(i, 1));
                break;
            } else if (j === arrayToSort.length - 1) {
                arrayToSort.splice(j + 1, 0, arrayToSort.splice(i, 1));
            }
        }
    }
    return arrayToSort;
}

// Unit tests
/*
arraySize = 100;
var arrayToSort = createArrayToSort.createArrayToSort(arraySize);
console.log("Testing insertion sort in place with " + arraySize + " array elements.");
console.log("Unsorted array arrayToSort: " + arrayToSort);
// Measuring execution time per http://stackoverflow.com/a/18427652/3784441
console.time("executionTimer");
var sortedArray = sortArrayInPlace(arrayToSort);
console.timeEnd("executionTimer");
console.log("Sorted array sortedArray:  " + sortedArray);
console.log("Is the array sorted? " + checkIfArrayIsSorted.checkIfArrayIsSorted(sortedArray));
*/