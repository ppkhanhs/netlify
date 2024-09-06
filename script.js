function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function sortArray() {
    let algorithm = document.getElementById("algorithm").value;
    let inputArray = document.getElementById("array-input").value.split(',').map(Number); // Get and convert the input

    let sortedArray;
    if (algorithm === "bubble") {
        sortedArray = bubbleSort([...inputArray]);
    } else if (algorithm === "insertion") {
        sortedArray = insertionSort([...inputArray]);
    }

    document.getElementById("sorted-array").textContent = sortedArray.join(", ");
}
