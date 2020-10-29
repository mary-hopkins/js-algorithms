// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.

function selection_sort(array) {
    let newArray = [];
    let smallest = array[0];
    let index = 0;
    let arrayLength = array.length
    while(newArray.length < arrayLength) {
        for(i = 0; i < array.length; i++) {
            if(array[i] <= smallest) {
                smallest = array[i];
                index = i;
            }  
        }
        newArray.push(smallest);
        array.splice(index, 1);
        smallest = array[0];
    }
    return newArray;
}

let ss_one = selection_sort([64, 25, 12, 22, 11]);
console.log(ss_one);