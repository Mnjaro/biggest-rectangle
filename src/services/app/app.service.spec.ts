import { UpdateGameDTO } from "../../dtos/game.dto"
import { AppService } from "./app.service"
import { _biggestRectangleUtils } from "../../utils/2d-matrix"

const appService = new AppService()

describe('AppService', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('updateGame', () => {

        it('should call the biggestrectangle utils with correct arguments once', () => {
            let game = new UpdateGameDTO()
            game.game = [
                [0, 1, 1, 0],
                [1, 1, 1, 1],
                [1, 1, 1, 1],
                [1, 1, 0, 0],
                [1, 1, 1, 0],
                [1, 1, 1, 0],
                [1, 1, 1, 0],
                [1, 1, 1, 1]
            ]
            const rows = game.game.length
            const cols = game.game[0].length

            jest.spyOn(_biggestRectangleUtils, 'maxRectangle').mockImplementation(() => [1, 1, 1, 1, 1])

            appService.updateGame(game)

            expect(_biggestRectangleUtils.maxRectangle).toHaveBeenCalledWith(rows, cols, game.game)
            expect(_biggestRectangleUtils.maxRectangle).toHaveBeenCalledTimes(1)
        })

    })
}) 