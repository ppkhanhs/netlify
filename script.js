function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

// Hàm tìm kiếm nhị phân
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Hàm xử lý tìm kiếm
function search() {
    const arrayString = document.getElementById('numberArray').value;
    const searchValue = parseInt(document.getElementById('searchValue').value);
    const searchMethod = document.getElementById('searchMethod').value;

    // Chuyển đổi dãy số từ chuỗi thành mảng số
    const array = arrayString.split(',').map(num => parseInt(num.trim())).sort((a, b) => a - b);
    
    let index = -1;

    if (isNaN(searchValue)) {
        document.getElementById('searchResult').textContent = 'Vui lòng nhập giá trị tìm kiếm hợp lệ.';
        return;
    }

    if (searchMethod === 'linear') {
        index = linearSearch(array, searchValue);
    } else if (searchMethod === 'binary') {
        index = binarySearch(array, searchValue);
    }

    if (index !== -1) {
        document.getElementById('searchResult').textContent = `Giá trị ${searchValue} được tìm thấy tại chỉ số ${index}.`;
    } else {
        document.getElementById('searchResult').textContent = `Giá trị ${searchValue} không được tìm thấy.`;
    }
}

// Lắng nghe sự kiện nhấn nút tìm kiếm
document.getElementById('searchButton').addEventListener('click', search);
