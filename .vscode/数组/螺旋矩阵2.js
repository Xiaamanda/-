/* 主要思想就是模拟，确定好每次循环的逻辑与操作
 */
var generateMatrix = function (n) {
    let startX = startY = 0
    let loop = Math.floor(n / 2)
    let mid = Math.floor(n / 2)//n为奇数时需要单独填充,确定单独填充的位置
    let offset = 1//每一层填充元素个数
    let count = 1//填充数字
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0))

    // 开始循环
    while (loop--) {
        let row = startX
        let col = startY
        for (; col < startY + n - offset; col++) {
            res[row][col] = count++
        }

        for (; row < startX + n - offset; row++) {
            res[row][col] = count++
        }

        for (; col > startY; col--) {
            res[row][col] = count++
        }

        for (; row > startX; row--) {
            res[row][col] = count++

        }

        //每一个loop后更新下一轮loop起始位置、填充的元素个数
        startX++
        startY++
        offset += 2
    }
    if (n % 2 === 1) {
        res[mid][mid] = count
    }
    return res
};