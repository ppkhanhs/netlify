// Hàm tìm kiếm tuyến tính
function linearSearch(array, target) {
    const steps = [];
    for (let i = 0; i < array.length; i++) {
        steps.push(`Kiểm tra chỉ số ${i}: giá trị ${array[i]}`);
        if (array[i] === target) {
            return { index: i, steps };
        }
    }
    return { index: -1, steps };
}

// Hàm tìm kiếm nhị phân
function binarySearch(array, target) {
    const steps = [];
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        steps.push(`Kiểm tra khoảng từ ${left} đến ${right}, chỉ số giữa ${mid}: giá trị ${array[mid]}`);
        
        if (array[mid] === target) {
            return { index: mid, steps };
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return { index: -1, steps };
}

// Hàm xử lý tìm kiếm
function search() {
    const arrayString = document.getElementById('numberArray').value;
    const searchValue = parseInt(document.getElementById('searchValue').value);
    const searchMethod = document.getElementById('searchMethod').value;

    // Chuyển đổi dãy số từ chuỗi thành mảng số
    const array = arrayString.split(',').map(num => parseInt(num.trim())).sort((a, b) => a - b);
    
    let result;
    
    if (isNaN(searchValue)) {
        document.getElementById('searchResult').textContent = 'Vui lòng nhập giá trị tìm kiếm hợp lệ.';
        document.getElementById('searchSteps').textContent = '';
        return;
    }

    if (searchMethod === 'linear') {
        result = linearSearch(array, searchValue);
    } else if (searchMethod === 'binary') {
        result = binarySearch(array, searchValue);
    }

    if (result.index !== -1) {
        document.getElementById('searchResult').textContent = `Giá trị ${searchValue} được tìm thấy tại chỉ số ${result.index}.`;
    } else {
        document.getElementById('searchResult').textContent = `Giá trị ${searchValue} không được tìm thấy.`;
    }

    // Hiển thị các bước tìm kiếm
    document.getElementById('searchSteps').textContent = result.steps.join('\n');
}

// Lắng nghe sự kiện nhấn nút tìm kiếm
document.getElementById('searchButton').addEventListener('click', search);
