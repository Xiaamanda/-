// 双指针之对撞指针，关键词：有序、数组
const threeSum = function(nums){
    // 用于存放结果数组
    let res = []
    // 给原数组排序
    nums = nums.sort((a,b)=>{
        return a - b
    })
    // 缓存数组长度
    const len = nums.length
    // 遍历到倒数第三个数就可以，双指针会遍历后两个数
    for(let i=0;i<len-2;i++){
        // 左指针l
        let l = i+1
        // 右指针r
        let r = len-1
        // 遇重复数字跳过
        if(i>0&&nums[i]===nums[i-1]){
            continue
        }
        while(l<r){
            // 三数之和小于0，左指针往右前进
            if(nums[i]+nums[l]+nums[r]<0){
                l++;
                // 左指针元素重复
                while(l<r&&nums[l]===nums[l-1]){
                    l++;
                }
            }
            // 三数之和大于0，右指针往左前进
            else if(nums[i]+nums[l]+nums[r]>0){
                r--;
                // 左指针元素重复
                while(l<r&&nums[r]===nums[r+1]){
                    r--;
                }
            }
            // 得到目标数字组合，存入结果数组
            else{
                res.push([nums[i],nums[l],nums[r]])
                l++;
                r--;
                // 若左指针元素重复，跳过
                while(l<r&&nums[l]===nums[l-1]){
                    l++
                }
                // 若右指针元素重复，跳过
                while(l<r&&nums[r]===nums[r+1]){
                    r--;
                }
        }
    }
}
// 返回结果数组
return res
}