import { Injectable } from '@nestjs/common'
import { Game } from './@types/game.types'
import { UpdateGameDTO } from './dtos/game.dto'

@Injectable()
export class AppService {
    updateGame(updateGameDTO: UpdateGameDTO): Game {
        return updateGameDTO.game
    }
}