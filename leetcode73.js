/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 73. 矩阵置零
 */
var setZeroes = function (matrix) {
    // 检查第一列是否有0
    let firstColHasZero = false
    // 检查第一行是否有0
    let firstRowHasZero = false
    for (let row = 0; row < matrix.length; row++) {
        if (matrix[row][0] === 0) {
            firstColHasZero = true
        }
        if (matrix[0].includes(0)) {
            firstRowHasZero = true
        }
    }

    console.log(firstRowHasZero);
    console.log(firstColHasZero);

    // 利用第一行第一列来标记：矩阵中的其他行列是否有0
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                matrix[row][0] = 0
                matrix[0][col] = 0
            }
        }
    }

    // 利用第一行和第一列的标0情况，将matrix置0
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0
            }
        }
    }

    // 最后处理第一行第一列有0的情况
    if (firstRowHasZero) {
        for (let col = 0; col < matrix[0].length; col++) {
            matrix[0][col] = 0    
        }
    }

    if (firstColHasZero) {
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][0] = 0    
        }
    }
    console.log(matrix);
    return matrix
};

const matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// [ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]

setZeroes(matrix2)