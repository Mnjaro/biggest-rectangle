import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import { Request } from 'express'
import { BiggestRectangle, Game } from '../../@types/game.types'
import { AppService } from '../../services/app/app.service'
import { UpdateGameDTO } from '../../dtos/game.dto'
import { UpdatedGameRes } from 'src/@types/app-controller.types'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  updateGame(@Body() updateGameDTO: UpdateGameDTO): UpdatedGameRes { // update return type
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
