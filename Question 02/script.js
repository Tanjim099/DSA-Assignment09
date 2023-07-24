function searchRange(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = [];
    if (nums.length === 0) {
        return [-1, -1]
    }
    while (left <= right) {
        if (nums[left] !== target) {
            left++
        }
        else {
            result.push(left);
            break
        }
    }

    while (right >= 0) {
        if (nums[right] !== target) {
            right--
        }
        else {
            result.push(right);
            break
        }
    }
    if (result.length === 0) {
        return [-1, -1]
    }
    else {
        return result;
    }
}
const nums = [5, 7, 7, 8, 8, 10]
const target = 8;
console.log(searchRange(nums, target));
