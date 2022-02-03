import { BiggestRectangleUtils } from './2d-matrix'

const biggestRectangleUtils = new BiggestRectangleUtils()

describe('2d Matrix', () => {
    describe('maxHist', () => {
        it('should return the max area, left and right limits for a histogram', () => {
            const row = [1, 0, 2, 3, 0]
            const cols = row.length
            const [area, left, right] = biggestRectangleUtils.maxHist(cols, row)
            expect(area).toEqual(4)
            expect(left).toEqual(2)
            expect(right).toEqual(3)
        })
    })
    describe('maxRectangle', () => {
        afterAll(() => {
            jest.clearAllMocks()
        })
        it('should call the maxHist function with correct values and as much as rows exist', () => {
            let rows = 5
            let cols = 4

            let game = [
                [0, 1, 1, 0],
                [1, 1, 1, 1],
                [1, 0, 0, 1],
                [1, 1, 1, 1],
                [1, 1, 1, 1],
            ]

            jest.spyOn(biggestRectangleUtils, 'maxHist')

            biggestRectangleUtils.maxRectangle(rows, cols, game)

            expect(biggestRectangleUtils.maxHist).toHaveBeenCalledTimes(5)
        })

    })
})