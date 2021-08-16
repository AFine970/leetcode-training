/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 * 733. 图形渲染
 */
var floodFill = function (image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) {
        return image
    }

    const oldColor = image[sr][sc]

    function dfs(sr, sc) {
        if (sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[0].length - 1 || image[sr][sc] !== oldColor) return
        image[sr][sc] = newColor
        // 扫描自己周边的颜色
        dfs(sr - 1, sc) // 左
        dfs(sr + 1, sc) // 右
        dfs(sr, sc - 1) // 下
        dfs(sr, sc + 1) // 上
    }

    dfs(sr, sc)

    return image
};

const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, newColor = 2

const res = floodFill(image, 1, 1, 2)

console.log(res);
// [[2,2,2],[2,2,0],[2,0,1]]