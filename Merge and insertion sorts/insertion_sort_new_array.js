var createArrayToSort = require('./create_array_to_sort.js');
var checkIfArrayIsSorted = require('./check_if_array_is_sorted.js');

exports.sortArray = function(arrayToSort) {
    return sortArrayNewArray(arrayToSort);
}

function sortArrayNewArray(arrayToSort) {
    var sortedArray = [ arrayToSort[0] ];
    for(var i = 1; i < arrayToSort.length; i++) {
        valueToSort = arrayToSort[i];
        for (var j = 0; j < arrayToSort.length; j++) {
            if (valueToSort <= sortedArray[j]) { 
                sortedArray.splice(j, 0, valueToSort);
                break;
            } else if (j === arrayToSort.length - 1) {
                sortedArray.splice(j + 1, 0, valueToSort);
            }
        }
    }
    return sortedArray;
}

// Unit tests
/*
arraySize = 100;
var arrayToSort = createArrayToSort.createArrayToSort(arraySize);
// console.log("Unsorted array arrayToSort: " + arrayToSort);
console.log("Testing insertion sort with new array with " + arraySize + " array elements.");
// Measuring execution time per http://stackoverflow.com/a/18427652/3784441
console.time("executionTimer");
var sortedArray = sortArrayNewArray(arrayToSort);
console.log("Sorted array sortedArray:   " + sortedArray);
console.timeEnd("executionTimer");
console.log("Is the array sorted? " + checkIfArrayIsSorted.checkIfArrayIsSorted(sortedArray));
*/