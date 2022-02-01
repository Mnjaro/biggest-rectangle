function maxHist(C, row) {
    const result = [];
    let top_val;
    let left;
    let max_area = 0;
    let max_left = -1;
    let max_right = -1;
    let area = 0;
    let i = 0;
    while (i < C) {
        if (result.length == 0 || row[result[result.length - 1]] <= row[i]) {
            result.push(i++);
        }
        else {
            left = result[result.length - 1];
            top_val = row[left];
            result.pop();
            area = top_val * i;
            if (result.length > 0) {
                left = result[result.length - 1] + 1;
                area = top_val * (i - left);
            }
            if (area > max_area) {
                max_area = area;
                max_left = left;
                max_right = i - 1;
            }
        }
    }
    while (result.length > 0) {
        left = result[result.length - 1];
        top_val = row[left];
        result.pop();
        area = top_val * i;
        if (result.length > 0) {
            left = result[result.length - 1] + 1;
            area = top_val * (i - left);
        }
        if (area > max_area) {
            max_area = area;
            max_left = left;
            max_right = C - 1;
        }
    }
    return [max_area, max_left, max_right];
}
function maxRectangle(R, C, A) {
    let top = 0;
    let bottom = 0;
    let [result, left, right] = maxHist(C, A[0]);
    for (let i = 1; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (A[i][j] == 1) {
                A[i][j] += A[i - 1][j];
            }
        }
        let [tmp_result, tmp_left, tmp_right] = maxHist(C, A[i]);
        if (tmp_result > result) {
            left = tmp_left;
            right = tmp_right;
            bottom = i;
            result = tmp_result;
            top = bottom - (result / (right - left + 1)) + 1;
        }
    }
    return [result, top, bottom, left, right];
}
function main() {
    let R = 8;
    let C = 4;
    let A = [
        [0, 1, 1, 0],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 0, 0],
        [1, 1, 1, 0],
        [1, 1, 1, 0],
        [1, 1, 1, 0],
        [1, 1, 1, 1]
    ];
    var [result, top, bottom, left, right] = maxRectangle(R, C, A);
    console.log(result, top, bottom, left, right);
}
main();
//# sourceMappingURL=index.js.map