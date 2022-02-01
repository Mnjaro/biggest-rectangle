const game = [
    [2, 1, 5, 6, 2, 3],
    // [1, 0, 1, 1, 1],
    // [1, 1, 1, 1, 1],
    // [1, 0, 0, 1, 0],
]

// For each row, we need to find the biggest area of rectangle considering the height of the previous row
// For each rectangle, we need to find the left limit and right limit
// Area = ( ( Right limit - Left limit ) + 1 ) * height
// Area = (         Width                    ) * height

// Notations
// Area: Area
// Right Limit: rl
// Left Limit: ll
// height: height
// width: width
// row: row

// We will be converting each row into a Histogram

// 1st Row : 1 0 1 0 0
// 2nd Row : 2 0 2 1 1    => Current row values + the ones from on top (If the current row value is 0, we do not do the sum, the height will be 0)
// 3rd Row : 3 1 3 2 2
// 4th Row : 4 0 4 3 0

// Simplified Step by Step thought process ( those steps are found in the code comment )
// Get the game
// Seperate each row
// Convert each row in a histogram
// For each histogram, loop through the rectangles
// for each rectangle, get it's ll and rl
// for each rectangle, calculate its area
// always store the max area and update it when needed

function main(game: number[][]) {
    // Get each row of the game from left to right
    for (let rowIndex = 0; rowIndex < game.length; rowIndex++) {
        const row = game[rowIndex]
        // Get each row's histogram so we can work on the different rectangles
        const rowHistogram = rowToHistogram(rowIndex, game)
        // Loop in the histogram to work on the ll and rl of each rectangle and calculate the area
        const ll = []
        const rl = []

        const stack: number[] = []
        // get left limits
        for (let leftIndex = 0; leftIndex < rowHistogram.length; leftIndex++) {
            if (!stack.length) {
                ll.push(0)
                stack.push(0)
            } else {
                if (rowHistogram[leftIndex] < rowHistogram[stack[stack.length - 1]]) {
                    stack.pop()
                    if (!stack.length) {
                        ll.push(0)
                    } else {
                        while (stack.length) {
                            if (rowHistogram[leftIndex] < rowHistogram[stack[stack.length - 1]]) {
                                stack.pop()
                            } else {
                                ll.push(stack[stack.length - 1] + 1)
                                break
                            }
                        }
                    }
                } else {
                    ll.push(stack[stack.length - 1] + 1)
                }
                stack.push(leftIndex)
            }
        }
        console.log("Left Limit")
        console.log(ll)
    }
}












function rowToHistogram(rowIndex: number, game: number[][]): number[] {
    const row = game[rowIndex]
    const previousRows = game.slice(0, rowIndex)
    if (!previousRows) return row
    return row.map((element: number, index: number) => {
        if (element === 0) return element
        let sumOfElements = element
        for (const previousRow of previousRows) {
            sumOfElements += previousRow[index]
        }
        return sumOfElements
    })
}

main(game)