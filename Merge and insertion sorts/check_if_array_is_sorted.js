exports.checkIfArrayIsSorted = function (originalArray, sortedArrayToCheck) {
    if(sortedArrayToCheck.length != originalArray.length) { return false; }
    for(var i = 0; i < sortedArrayToCheck.length - 2; i++) {
        //console.log(sortedArrayToCheck[i] + " <= " + sortedArrayInCheckIfArrayInOrder[i + 1]); // For testing only.
        if(sortedArrayToCheck[i] > sortedArrayToCheck[i + 1]) {
            return false;
        }
    }
    return true;
}