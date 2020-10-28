function bubblesort_one(array) {
    let arrayLength = array.length;
    let swapped = true;
    do {
        swapped = false;
        for(i = 0; i < arrayLength; i++) {
            if(array[i] > array[i + 1]) {
                let holder = array[i];
                array[i] = array[i + 1];
                array[i + 1] = holder;
                swapped = true;
            }
        }
    } while(swapped)
    return array;
}


let bsone = bubblesort_one([3, 9, 28, 5, 4, 11, 15]);
console.log(bsone);