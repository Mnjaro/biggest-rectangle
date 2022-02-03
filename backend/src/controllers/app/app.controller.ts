import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import { AppService } from '../../services/app/app.service'
import { UpdateGameDTO } from '../../dtos/game.dto'
import { UpdatedGameRes } from 'src/@types/app-controller.types'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  updateGame(@Body() updateGameDTO: UpdateGameDTO): UpdatedGameRes {
    const [area, top, bottom, left, right] = this.appService.updateGame(updateGameDTO)

    return {
      area,
      top,
      bottom,
      left,
      right
    }
  }
}
