function twoSum(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while (start <= end) {
        if (numbers[start] + numbers[end] == target) {
            return [start, end]
        }
        else if (numbers[start] + numbers[end] < target) {
            start++
        }
        else {
            end--
        }
    }
}

const numbers = [2, 7, 11, 15]
const target = 9;
console.log(twoSum(numbers, target))