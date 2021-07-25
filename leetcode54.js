/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 54. 螺旋矩阵
 */
var spiralOrder = function (matrix) {
    if (!matrix.length) return

    // 矩阵的参数
    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    let direction = 'right'
    let result = []

    // matrix[行][列]

    // 进行顺时针循环
    while (left <= right && top <= bottom) {
        if (direction === 'right') {
            for (let index = left; index <= right; index++) {
                const element = matrix[top][index]
                result.push(element)
            }
            // 第一行遍历完成
            top++
            // 改变方向
            direction = 'down'
        } else if (direction === 'down') {
            for (let index = top; index <= bottom; index++) {
                const element = matrix[index][right]
                result.push(element)
            }
            right--
            direction = 'left'
        } else if (direction === 'left') {
            for (let index = right; index >= left; index--) {
                const element = matrix[bottom][index]
                result.push(element)
            }
            bottom--
            direction = 'up'
        } else if (direction === 'up') {
            for (let index = bottom; index >= top; index--) {
                const element = matrix[index][left]
                result.push(element)
            }
            left++
            direction = 'right'
        }
    }

    return result
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(spiralOrder(matrix))