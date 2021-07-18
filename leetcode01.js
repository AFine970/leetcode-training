// 两数之和
var twoSum = function (nums, target) {
    let map = new Map() // 存值 val: index

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index]
        // 余数
        let val = target - element
        if (map.has(val)) {
            return [map.get(val), index]
        } else {
            map.set(element, index)
        }
    }
}


let nums = [3, 2, 4], target = 6
res = twoSum(nums, target)
console.log(res);