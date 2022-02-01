// Javascript program to find largest rectangle
// with all 1s in a binary matrix

// Finds the maximum area under the
// histogram represented by histogram.
// See below article for details.
// https://
// www.geeksforgeeks.org/largest-rectangle-under-histogram/
function maxHist(R, C, row) {
    // Create an empty stack. The stack
    // holds indexes of hist[] array.
    // The bars stored in stack are always
    // in increasing order of their heights.
    let result = [];

    let top_val; // Top of stack

    let max_area = 0; // Initialize max area in
    // current row (or histogram)

    let area = 0; // Initialize area with
    // current top

    // Run through all bars of
    // given histogram (or row)
    let i = 0;
    while (i < C) {
        // If this bar is higher than the
        // bar on top stack, push it to stack
        if (result.length == 0
            || row[result[result.length - 1]] <= row[i]) {
            result.push(i++);
        }

        else {
            // If this bar is lower than top
            // of stack, then calculate area of
            // rectangle with stack top as
            // the smallest (or minimum height)
            // bar. 'i' is 'right index' for
            // the top and element before
            // top in stack is 'left index'
            top_val = row[result[result.length - 1]];
            result.pop();
            area = top_val * i;

            if (result.length > 0) {
                area = top_val * (i - result[result.length - 1] - 1);
            }
            max_area = Math.max(area, max_area);
        }
    }

    // Now pop the remaining bars from
    // stack and calculate area with
    // every popped bar as the smallest bar
    while (result.length > 0) {
        top_val = row[result[result.length - 1]];
        result.pop();
        area = top_val * i;
        if (result.length > 0) {
            area = top_val * (i - result[result.length - 1] - 1);
        }

        max_area = Math.max(area, max_area);
    }
    return max_area;
}

// Returns area of the largest
// rectangle with all 1s in A[][]
function maxRectangle(R, C, A) {
    // Calculate area for first row
    // and initialize it as result
    let result = maxHist(R, C, A[0]);

    // iterate over row to find
    // maximum rectangular area
    // considering each row as histogram
    for (let i = 1; i < R; i++) {
        for (let j = 0; j < C; j++) {

            // if A[i][j] is 1 then
            // add A[i -1][j]
            if (A[i][j] == 1) {
                A[i][j] += A[i - 1][j];
            }
        }

        // Update result if area with current
        // row (as last row of rectangle) is more
        result = Math.max(result, maxHist(R, C, A[i]));
    }

    return result;
}

let R = 4;
let C = 4;

let A = [[0, 1, 1, 0],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 0, 0]];
console.log("Area of maximum rectangle is "
    + maxRectangle(R, C, A));