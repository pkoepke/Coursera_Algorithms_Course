var createArrayToSort = require('./create_array_to_sort.js');
var checkIfArrayIsSorted = require('./check_if_array_is_sorted.js');

exports.sortArray = function (arrayToSort) {
    return splitArrayAndRecur(arrayToSort);
}

function splitArrayAndRecur(arrayToSort) {
    /*  If the array is greater than size 1, split it until it has 1 element.
        Then merge the split arrays. Since they will be split down to size 1 and 1 or 1 and 0,
        then the first call to mergeSortedArrays will be sorting implicitly sorted arrays.
    */
    var firstHalfArray = [];
    if(arrayToSort.length > 1) {
        firstHalfArray = arrayToSort.splice(0, Math.ceil(arrayToSort.length / 2));
        // arrayToSort is now the second half thanks to splice().
        firstHalfArray = splitArrayAndRecur(firstHalfArray);
        arrayToSort = splitArrayAndRecur(arrayToSort);
    }
    return mergeSortedArrays(firstHalfArray, arrayToSort);
}

function mergeSortedArrays(arrayOne, arrayTwo) {
    // Given to arrays that are sorted, this combines them into a single sorted array and returns that array.
    var arrayOneCount = 0, arrayTwoCount = 0, arrayToReturn = [];
    //return arrayOneCount + " " + arrayTwoCount; // For testing only.
    while (arrayOneCount < arrayOne.length || arrayTwoCount < arrayTwo.length) {
        if (arrayOneCount >= arrayOne.length) {
            arrayToReturn.push(arrayTwo[arrayTwoCount]);
            arrayTwoCount++;
        } else if (arrayTwoCount >= arrayTwo.length) {
            arrayToReturn.push(arrayOne[arrayOneCount]);
            arrayOneCount++;
        } else if (arrayOne[arrayOneCount] <= arrayTwo[arrayTwoCount]) {
            arrayToReturn.push(arrayOne[arrayOneCount]);
            arrayOneCount++;
        } else if (arrayTwo[arrayTwoCount] < arrayOne[arrayOneCount]) {
            arrayToReturn.push(arrayTwo[arrayTwoCount]);
            arrayTwoCount++;
        } else console.log("Error");        
    }
    return arrayToReturn;
}

// Unit tests. Comment out everything below before using this in another program.
/*
var arrayToSort, sortedArray, arraySize = 1000; // Merge sort performs very quickly up to 1,000,000 elements - it takes under 2 seconds. 10 million elements slows it down to about 28 seconds. Cant' test 100 million elements because Node.js has a memory error on arrays of that size.

arrayToSort = [1,2,3,4,5,6];
sortedArray = splitArrayAndRecur(arrayToSort);
console.log("Sorting " + arrayToSort + ": " + sortedArray);
console.log("Is the array sorted? " + checkIfArrayIsSorted.checkIfArrayIsSorted(sortedArray));

arrayToSort = [6,5,4,3,2,1,];
sortedArray = splitArrayAndRecur(arrayToSort);
console.log("Sorting " + arrayToSort + ": " + sortedArray);
console.log("Is the array sorted? " + checkIfArrayIsSorted.checkIfArrayIsSorted(sortedArray));

var startTimeMergeSort = new Date().getTime();
arrayToSort = createArrayToSort.createArrayToSort(arraySize);
sortedArray = splitArrayAndRecur(arrayToSort);
// console.log("Sorting " + arrayToSort + ": " + sortedArray);
console.log("Merge sort run time: " + (new Date().getTime() - startTimeMergeSort) + ("ms"));
console.log("Did merge sort sort the array correctly? " + checkIfArrayIsSorted.checkIfArrayIsSorted(sortedArray));
*/