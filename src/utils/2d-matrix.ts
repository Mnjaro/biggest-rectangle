
export class BiggestRectangleUtils {

    // Finds the maximum area under the 
    // histogram represented by histogram. 
    maxHist(columns: number, row: number[]): [area: number, left: number, right: number] {
        // Create an empty stack. The stack 
        // holds indexes of hist[] array. 
        // The bars stored in stack are always 
        // in increasing order of their heights. 
        const stack: number[] = []

        let top_val: number // Top of stack 
        let left: number // Top of stack 

        let max_area = 0 // Initialize max area in current row (or histogram) 
        let max_left = -1
        let max_right = -1

        let area = 0 // Initialize area with current top of stack

        // Run through all bars of 
        // given histogram (or row) 
        let i = 0
        // We loop on each column of the histogram
        while (i < columns) {
            // If this bar is higher than the 
            // bar on top stack, push it to stack 
            if (stack.length == 0 || row[stack[stack.length - 1]] <= row[i]) {
                stack.push(i++)
            }
            else {
                // If this bar is lower than top 
                // of stack, then calculate area of 
                // rectangle with stack top as 
                // the smallest (or minimum height) 
                // bar. 'i' is 'right index' for 
                // the top and element before 
                // top in stack is 'left index' 
                left = stack[stack.length - 1]
                top_val = row[left]
                stack.pop()
                area = top_val * i

                if (stack.length > 0) {
                    left = stack[stack.length - 1] + 1
                    area = top_val * (i - left)
                }

                if (area > max_area) {
                    max_area = area
                    max_left = left
                    max_right = i - 1
                }
            }
        }

        // Now pop the remaining bars from 
        // stack and calculate area with 
        // every popped bar as the smallest bar 
        while (stack.length > 0) {
            left = stack[stack.length - 1]
            top_val = row[left]
            stack.pop()
            area = top_val * i
            if (stack.length > 0) {
                left = stack[stack.length - 1] + 1
                area = top_val * (i - left)
            }

            if (area > max_area) {
                max_area = area
                max_left = left
                max_right = columns - 1
            }
        }
        return [max_area, max_left, max_right]
    }

    // Returns area of the largest 
    // rectangle with all 1s in A[][] 
    maxRectangle(R: number, C: number, A: number[][]): [area: number, top: number, bottom: number, left: number, right: number] {
        let top = 0
        let bottom = 0

        // Calculate area for first row 
        // and initialize it as result 
        let [result, left, right] = this.maxHist(C, A[0])

        // iterate over row to find 
        // maximum rectangular area 
        // considering each row as histogram 
        for (let i = 1; i < R; i++) {
            for (let j = 0; j < C; j++) {
                // if A[i][j] is 1 then 
                // add A[i -1][j] 
                if (A[i][j] == 1) {
                    A[i][j] += A[i - 1][j]
                }
            }

            let [tmp_result, tmp_left, tmp_right] = this.maxHist(C, A[i])
            // Update result if area with current 
            // row (as last row of rectangle) is more
            if (tmp_result > result) {
                left = tmp_left
                right = tmp_right
                bottom = i
                result = tmp_result
                top = bottom - (result / (right - left + 1)) + 1
            }
        }

        return [result, top, bottom, left, right]
    }
}
