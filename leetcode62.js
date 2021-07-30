/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 62. 不同路径
 */
var uniquePaths = function (m, n) {
    let matrix = []
    for (let i = 0; i < m; i++) {
        matrix.push(Array(n).fill(0))
    }

    for (let i = 0; i < m; i++) {
        matrix[i][0] = 1
    }

    for (let i = 1; i < n; i++) {
        matrix[0][i] = 1
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
        }
    }

    // console.log('matrix', matrix[m - 1][n - 1])
    return matrix[m - 1][n - 1]
};

uniquePaths(3, 7)
uniquePaths(3, 2)