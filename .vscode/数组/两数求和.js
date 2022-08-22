// 对象方式实现
const twoSum = function(nums,target){
    const diffs = {}
    // 缓存数组长度
    const len = nums.length
    // 遍历数组
    for(let i = 0; i < len; i++){
        // 判断当前值对应的target差值是否存在(是否已经被遍历)
        if(diffs[target-nums[i]]!==undefined){
            // 若存在，则返回所需答案
            return [diffs[target - nums[i]],i]
        }              
        // 若map中，无对应差值，则记录当前值  
        diffs[nums[i]] = i
    }
}


//ES6 Map方式实现
const twoSum1 = function(nums, target){
    // 创建Map
    let m = new Map();
    // 缓存数组长度
    const len = nums.length
    // 遍历数组
    for(let i = 0; i < len; i++){
        // 判断当前Map中是否存在当前遍历元素的差值
        if(m.has(target-nums[i])){
            return [m.get(target - nums[i]),i]
        }
        m.set(nums[i],i)
    }
    
} 