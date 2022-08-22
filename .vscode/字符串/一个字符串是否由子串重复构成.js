//判断一个字符串是否由另一个子串构成
/* 移动匹配法：
若一个字符串由一个字串重复构成，则两个字符串拼接起来掐头去尾后，从中仍能找到该字符串 */
var repeatedSubstringPattern = function (s) {
    let ss = s + s
    let Array1 = Array.from(ss)
    Array1.pop()
    Array1.shift()
    let Array3 = []
    let map = new Map()
    // 对数组掐头去尾 遍历n次
    for (let i = 0; i < Array1.length; i++) {
        map.set(i, Array1[i])
    }
    // 将数组转为Map


    // 判断去头掐尾后是否有s(这步好像行不通，因为只能判断单个字符是否存在)
    if (map.has(s)) {
        return true
    }
    return false
}

console.log(repeatedSubstringPattern(''))

/* KPM算法：next数组统一减一的情况下 */
var repeatedSubstringPattern = function (s) {
    // 字符串长度为零时
    if (s.length === 0) {
        return false
    }

    const getNext = (s) => {
        let next = []
        let j = -1
        next[0] = j

        for (i = 1; i < s.length; i++) {
            while (j >= 0 && s[i] !== s[j + 1]) {
                j = next[j]
            }
            if (s[i] === s[j + 1]) {
                j++
            }
            next.push(j)
        }
        return next
    }

    let next = getNext(s)

    if (next[next.length - 1] !== -1 && s.length % (s.length - (next[next.length - 1] + 1)) === 0) {
        return true
    }
    return false
} 