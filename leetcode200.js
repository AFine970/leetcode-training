/**
 * @param {character[][]} grid
 * @return {number}
 * 200. 岛屿的数量
 */
var numIslands = function (grid) {
    let count = 0

    function dfs(row, col) {
        if (row < 0 || col < 0 || row > grid.length - 1 || col > grid[0].length - 1 || grid[row][col] === '0') {
            return
        }

        // 沉没陆地，避免重复计算导致死循环！！
        grid[row][col] = '0'

        dfs(row - 1, col)
        dfs(row + 1, col)
        dfs(row, col - 1)
        dfs(row, col + 1)
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                count++
                dfs(row, col)
            }
        }
    }

    return count
};


const grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]
// 1
const res1 = numIslands(grid1)
console.log('res1', res1)

const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]
// 3
const res2 = numIslands(grid2)
console.log('res2', res2)
