import { Injectable } from '@nestjs/common'
import { BiggestRectangle } from 'src/@types/game.types'
import { UpdateGameDTO } from '../../dtos/game.dto'
import { BiggestRectangleUtils } from '../../utils/2d-matrix'

@Injectable()
export class AppService {

    private biggestRectangleUtils: BiggestRectangleUtils

    constructor() {
        this.biggestRectangleUtils = new BiggestRectangleUtils()
    }

    updateGame(updateGameDTO: UpdateGameDTO): BiggestRectangle {
        const rows = updateGameDTO.game.length
        const cols = updateGameDTO.game[0].length

        return this.biggestRectangleUtils.maxRectangle(rows, cols, updateGameDTO.game)
    }
}