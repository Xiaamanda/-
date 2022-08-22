/* 方法一：Set法或Map
利用Set的成员值唯一性、has方法*/
var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    const res = []
    for (let key of set1) {
        if (set2.has(key)) {
            res.push(key)
        }
    }
    return res
} 


/* 方法二：双指针法 */
var intersection = function(nums1,nums2){
    nums1.sort((a,b)=>a-b)
    nums2.sort((a,b)=>a-b)
    const res =[]
    let i=0
    let j=0
    while(i<nums1.length&&j<nums2.length){
        const n1 = nums1[i],n2 = nums2[j]
        if(n1===n2){
            if(!res.length||n1!==res[res.length-1]){
                res.push(n1)
            }
            i++;
            j++;
        }else if(n1>n2){
            j++
        }else{
            i++
        }
    }
    return res
}
console.log(intersection([1, 2, 3, 1], [2, 3]))