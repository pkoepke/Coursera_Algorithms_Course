var arraySize = 100000 /* initially used 10 as a test array size. It works fine up through 10,000, but at 100,000 and above it grinds to a halt and uses 100 CPU for a few seconds before finishing. */

var arrayToSort = []
for(var i = 0; i < arraySize; i++) {
    arrayToSort[i] = Math.floor(Math.random() * 10);
}

console.log("Unsorted array arrayToSort: " + arrayToSort);

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

console.log("Sorted array sortedArray:   " + sortedArray);