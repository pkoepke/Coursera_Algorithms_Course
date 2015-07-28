exports.createArrayToSort = function (arraySize) {
    // Creates an array of arbitrary size to sort.
    // arraySize = 100 /* initially used 10 as a test array size. Insertion sort grinds to a halt and uses 100 CPU for a few seconds before finishing at  100,000 and above. Merge sort doesn't have performance problems until 10,000,000 */
    var arrayToSortInCreateArrayToSort = []
    for(var i = 0; i < arraySize; i++) {
        // arrayToSortInCreateArrayToSort[i] = Math.floor(Math.random() * 10); // Sort integers 0-9
        arrayToSortInCreateArrayToSort[i] = randomCharOrInt(); // Sort characters A-Z, a-z, and 0-9.
    }
    return arrayToSortInCreateArrayToSort;
}

// Playing with sorting characters and integers instead of just integers.
function randomCharOrInt()
{
    var text = "";
    var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    return text;
}