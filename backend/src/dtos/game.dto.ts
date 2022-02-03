import { ArrayMinSize, IsArray } from 'class-validator'
import { Game } from '../@types/game.types'

export class UpdateGameDTO {
    @IsArray()
    @ArrayMinSize(2)
    game: Game
}