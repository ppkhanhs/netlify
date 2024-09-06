// Hàm để sắp xếp mảng tăng dần (cho tìm kiếm nhị phân)
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// Tìm kiếm tuyến tính
function linearSearch(arr, target) {
    let steps = "Steps: ";
    for (let i = 0; i < arr.length; i++) {
        steps += `Step ${i + 1}: Compare ${arr[i]} with ${target}<br>`;
        if (arr[i] == target) {
            return { found: true, index: i, steps: steps };
        }
    }
    return { found: false, steps: steps };
}

// Tìm kiếm nhị phân (cần mảng đã sắp xếp)
function binarySearch(arr, target) {
    let steps = "Steps: ";
    let left = 0;
    let right = arr.length - 1;
    let stepCount = 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        steps += `Step ${stepCount}: Compare ${arr[mid]} with ${target}<br>`;
        stepCount++;

        if (arr[mid] == target) {
            return { found: true, index: mid, steps: steps };
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return { found: false, steps: steps };
}

// Lấy thông tin từ người dùng và xử lý tìm kiếm
document.getElementById('linear-search').addEventListener('click', function() {
    const numbers = document.getElementById('numbers').value.split(',').map(Number);
    const target = Number(document.getElementById('target').value);

    const result = linearSearch(numbers, target);

    if (result.found) {
        document.getElementById('result').innerHTML = `Linear Search: Found at index ${result.index}`;
    } else {
        document.getElementById('result').innerHTML = 'Linear Search: Not found';
    }
    document.getElementById('steps').innerHTML = result.steps;
});

document.getElementById('binary-search').addEventListener('click', function() {
    let numbers = document.getElementById('numbers').value.split(',').map(Number);
    const target = Number(document.getElementById('target').value);

    // Sắp xếp mảng
    numbers = sortArray(numbers);
    document.getElementById('result').innerHTML = `Sorted array for Binary Search: [${numbers.join(', ')}]<br>`;

    const result = binarySearch(numbers, target);

    if (result.found) {
        document.getElementById('result').innerHTML += `Binary Search: Found at index ${result.index}`;
    } else {
        document.getElementById('result').innerHTML += 'Binary Search: Not found';
    }
    document.getElementById('steps').innerHTML = result.steps;
});
