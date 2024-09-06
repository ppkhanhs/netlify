// Hàm để sắp xếp mảng tăng dần (cho tìm kiếm nhị phân)
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// Tìm kiếm tuyến tính
function linearSearch(arr, target) {
    let steps = "Các bước thực hiện: <br>";
    for (let i = 0; i < arr.length; i++) {
        steps += `Bước ${i + 1}: so sánh ${arr[i]} với ${target}<br>`;
        if (arr[i] == target) {
            return { found: true, index: i, steps: steps };
        }
    }
    return { found: false, steps: steps };
}

// Tìm kiếm nhị phân (cần mảng đã sắp xếp)
function binarySearch(arr, target) {
    let steps = "Các bước thực hiện: <br>";
    let left = 0;
    let right = arr.length - 1;
    let stepCount = 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        steps += `Bước ${stepCount}: so sánh ${arr[mid]} với ${target}<br>`;
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
        document.getElementById('result').innerHTML = `Tìm kiếm tuyến tính: Tìm thấy tại chỉ số ${result.index}`;
    } else {
        document.getElementById('result').innerHTML = 'Tìm kiếm tuyến tính: Không tìm thấy';
    }
    document.getElementById('steps').innerHTML = result.steps;
});

document.getElementById('binary-search').addEventListener('click', function() {
    let numbers = document.getElementById('numbers').value.split(',').map(Number);
    const target = Number(document.getElementById('target').value);

    // Sắp xếp mảng
    numbers = sortArray(numbers);
    document.getElementById('result').innerHTML = `Mảng sau khi sắp xếp tăng dần với giải thuật tìm kiếm nhị phân:<br> [${numbers.join(', ')}]<br>`;

    const result = binarySearch(numbers, target);

    if (result.found) {
        document.getElementById('result').innerHTML += `Tìm kiếm nhị phân: Tìm thấy tại chỉ số ${result.index}`;
    } else {
        document.getElementById('result').innerHTML += 'Tìm kiếm nhị phân: Không tìm thấy';
    }
    document.getElementById('steps').innerHTML = result.steps;
});
