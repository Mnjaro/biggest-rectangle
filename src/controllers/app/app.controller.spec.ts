import { Test, TestingModule } from '@nestjs/testing'
import { UpdateGameDTO } from '../../dtos/game.dto'
import { AppController } from './app.controller'
import { AppService } from '../../services/app/app.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', () => {
    it('should return the coordinates of the biggest rectangle and the area as a JSON type object', () => {
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

      expect(appController.updateGame(game)).toMatchObject({ area: 14, top: 1, bottom: 7, left: 0, right: 1 })
    })
  })
})
