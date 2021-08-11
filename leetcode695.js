/**
 * @param {number[][]} grid
 * @return {number}
 * 695. 岛屿的最大面积
 */
var maxAreaOfIsland = function (grid) {
    let result = 0
    function dfs(row, col) {
        if (row < 0 || col < 0 || row > grid.length - 1 || col > grid[0].length - 1 || grid[row][col] === 0) {
            return 0
        }

        grid[row][col] = 0
        // 求的是岛屿的最大面积，需要记录每一片岛屿的面积
        let count = 1

        count += dfs(row - 1, col)
        count += dfs(row + 1, col)
        count += dfs(row, col + 1)
        count += dfs(row, col - 1)

        return count
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                const count = dfs(row, col)
                result = Math.max(count, result)
            }
        }
    }

    return result
};

const grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
// 6

console.log(maxAreaOfIsland(grid));