function linearSearch() {
    const numbers = document.getElementById('numbers').value.split(',').map(Number);
    const searchNumber = parseInt(document.getElementById('searchNumber').value);
    let result = 'Không tìm thấy số.';

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === searchNumber) {
            result = `Số ${searchNumber} được tìm thấy tại chỉ số ${i}.`;
            break;
        }
    }

    document.getElementById('result').textContent = result;
}

function binarySearch() {
    const numbers = document.getElementById('numbers').value.split(',').map(Number).sort((a, b) => a - b);
    const searchNumber = parseInt(document.getElementById('searchNumber').value);
    let low = 0;
    let high = numbers.length - 1;
    let result = 'Không tìm thấy số.';

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (numbers[mid] === searchNumber) {
            result = `Số ${searchNumber} được tìm thấy tại chỉ số ${mid} (sau khi sắp xếp).`;
            break;
        } else if (numbers[mid] < searchNumber) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    document.getElementById('result').textContent = result;
}
