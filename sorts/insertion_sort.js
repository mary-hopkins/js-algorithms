function insertion_sort(array) {
    let length = array.length;
    for (let i = 1; i < length; i++) {
        let key = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j -1;
        }
        array[j + 1] = key;
    }
    return array;
}

let is_one = insertion_sort([19, 4, 11, 6, 9]);
console.log(is_one);