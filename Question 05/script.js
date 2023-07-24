function majorityElement(nums) {
    var map = {};
    var max = 0;
    var majorNum = 0;
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        if (!map[nums[i]]) map[nums[i]] = 0;
        map[nums[i]]++;
        if (map[nums[i]] > max) {
            majorNum = nums[i];
            max = map[nums[i]];
        }
    }
    return majorNum;
};

const nums = [3, 2, 3];
console.log(majorityElement(nums))