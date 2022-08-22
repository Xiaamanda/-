/* 二分法求解算术平方根:
让mid的平方无限逼近x,则mid即为其算术平方根 */
var search = function(x){
    let left = 0
    let right = x
    let ans = -1
    while(left < right){
        let mid = left+Math.floor((right-left)/2)
        if(mid*mid<=x){
            ans = mid
            left = mid+1
        }else{
            right = mid - 1
        }
    }
    return ans
}

console.log(search(8))