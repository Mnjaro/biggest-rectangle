import { ArrayMinSize, IsArray } from 'class-validator'
import { Game } from '../@types/game.types'


// Not validating that each element should be 1 or 0 as it would make us loop again through the entire element
// We will validate this in the loop of game instead

export class UpdateGameDTO {
    @IsArray()
    @ArrayMinSize(2)
    game: Game
}