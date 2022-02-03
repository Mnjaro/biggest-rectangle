import { Injectable } from '@nestjs/common'
import { BiggestRectangle } from 'src/@types/game.types'
import { UpdateGameDTO } from '../../dtos/game.dto'
import { _biggestRectangleUtils } from '../../utils/2d-matrix'

@Injectable()
export class AppService {

    updateGame(updateGameDTO: UpdateGameDTO): BiggestRectangle {
        const rows = updateGameDTO.game.length
        const cols = updateGameDTO.game[0].length

        return _biggestRectangleUtils.maxRectangle(rows, cols, updateGameDTO.game)
    }
}