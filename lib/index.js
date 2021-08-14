"use strict";
module.exports = function doubleDimensionalArrayGenerator(config) {
    var columns = config.columns, rows = config.rows, step = config.step, start = config.start;
    var arr = [];
    var makeZero = -start; // 归零，启始计算始终从0开始
    var i = start;
    while (i < columns * rows * step + start) {
        // 列索引,换行索引 
        var columnsIndex = (i + makeZero) / step;
        // 行索引
        var currentRowIndex = Math.floor(columnsIndex / columns);
        if (columnsIndex % columns === 0) {
            arr.push([]);
        }
        arr[currentRowIndex].push(i);
        i += step;
    }
    return arr;
};
