import { Injectable } from '@nestjs/common'
import { Game } from './@types/game.types'
import { UpdateGameDTO } from './dtos/game.dto'

@Injectable()
export class AppService {
    updateGame(game: UpdateGameDTO): Game {
        return [[1, 0], [1, 0]]
    }
}